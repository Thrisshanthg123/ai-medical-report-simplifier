"""
Handles OCR extraction for image files (JPG, PNG, TIFF, BMP, WEBP).

Includes lightweight preprocessing (grayscale, contrast boost, sharpening)
to improve accuracy on real-world phone photos with uneven lighting or
slight blur — without adding heavy dependencies like OpenCV.

Supports:
- Multi-language OCR via a Tesseract language string (e.g. "eng+spa").
- Optional auto-detection of language from a first-pass OCR result.
- A handwriting-oriented layout mode (see the warning in extractor.py —
  this improves layout handling, not character-level accuracy on cursive
  handwriting, which Tesseract is fundamentally weak at).
"""

from PIL import Image, ImageOps, ImageEnhance, ImageFilter
import pytesseract

try:
    from langdetect import detect as _detect_lang, DetectorFactory
    # See structured.py for why this matters: langdetect is non-deterministic
    # without a fixed seed, giving different results for identical input.
    DetectorFactory.seed = 0
except ImportError:
    _detect_lang = None

# Maps langdetect ISO codes to Tesseract's 3-letter language codes for the
# common cases. Extend this if you install more Tesseract language packs.
_LANGDETECT_TO_TESSERACT = {
    "en": "eng", "es": "spa", "fr": "fra", "de": "deu", "it": "ita",
    "pt": "por", "nl": "nld", "ru": "rus", "zh-cn": "chi_sim", "zh-tw": "chi_tra",
    "ja": "jpn", "ko": "kor", "ar": "ara", "hi": "hin",
}


def preprocess_image(image: Image.Image) -> Image.Image:
    """
    Clean up an image before OCR to improve accuracy on real-world photos:
    - Convert to grayscale (removes color noise)
    - Auto-adjust contrast (helps with uneven lighting/shadows)
    - Sharpen slightly (helps with mild blur)

    Note: cutoff=0 on autocontrast is intentional. A nonzero cutoff (e.g. 1)
    clips a percentage of pixels from each end of the histogram before
    stretching — on a clean, high-contrast document (near-pure black text on
    near-pure white background, which is common for medical report scans,
    not just noisy photos) this can clip into the actual content and badly
    corrupt the image instead of helping it. cutoff=0 is safe for both
    clean scans and noisy photos.
    """
    gray = ImageOps.grayscale(image)
    contrasted = ImageOps.autocontrast(gray, cutoff=0)
    sharpener = ImageEnhance.Sharpness(contrasted)
    sharpened = sharpener.enhance(1.5)
    denoised = sharpened.filter(ImageFilter.MedianFilter(size=3))
    return denoised


def detect_language(image: Image.Image) -> str:
    """
    Best-effort language auto-detection: run a quick English-assumption OCR
    pass, then detect the language of the resulting text. Falls back to
    "eng" if langdetect isn't installed or detection fails.
    """
    if _detect_lang is None:
        return "eng"
    try:
        cleaned = preprocess_image(image)
        sample_text = pytesseract.image_to_string(cleaned, config="--psm 6")
        if not sample_text.strip():
            return "eng"
        code = _detect_lang(sample_text)
        return _LANGDETECT_TO_TESSERACT.get(code, "eng")
    except Exception:
        return "eng"


def extract_text_from_image(
    image_path: str,
    languages: str = "eng",
    handwritten: bool = False,
    auto_detect_language: bool = False,
) -> str:
    """
    Run OCR on a single image file and return the extracted text.
    Applies preprocessing first to improve accuracy on photographed reports.

    Args:
        image_path: Path to the image.
        languages: Tesseract language code(s), e.g. "eng", "spa", "eng+spa".
            Ignored if auto_detect_language=True.
        handwritten: Use a sparse-text layout mode (PSM 11) instead of the
            default block-of-text mode (PSM 6). See the caveat in
            extractor.py — this does not turn Tesseract into a handwriting
            recognizer.
        auto_detect_language: If True, ignore `languages` and instead run a
            quick detection pass to guess the document's language.
    """
    image = Image.open(image_path)
    cleaned = preprocess_image(image)

    if auto_detect_language:
        languages = detect_language(image)

    psm = 11 if handwritten else 6
    config = f"--oem 3 --psm {psm}"
    text = pytesseract.image_to_string(cleaned, lang=languages, config=config)
    return text.strip()