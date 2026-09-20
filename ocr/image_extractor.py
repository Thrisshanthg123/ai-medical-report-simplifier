"""
Handles OCR extraction for image files (JPG, PNG, etc.)

Includes lightweight preprocessing (grayscale, contrast boost, sharpening)
to improve accuracy on real-world phone photos with uneven lighting or
slight blur — without adding heavy dependencies like OpenCV.
"""

from PIL import Image, ImageOps, ImageEnhance, ImageFilter
import pytesseract


def preprocess_image(image: Image.Image) -> Image.Image:
    """
    Clean up an image before OCR to improve accuracy on real-world photos:
    - Convert to grayscale (removes color noise)
    - Auto-adjust contrast (helps with uneven lighting/shadows)
    - Sharpen slightly (helps with mild blur)
    """
    gray = ImageOps.grayscale(image)
    contrasted = ImageOps.autocontrast(gray, cutoff=1)
    sharpener = ImageEnhance.Sharpness(contrasted)
    sharpened = sharpener.enhance(2.0)
    denoised = sharpened.filter(ImageFilter.MedianFilter(size=3))
    return denoised


def extract_text_from_image(image_path: str) -> str:
    """
    Run OCR on a single image file and return the extracted text.
    Applies preprocessing first to improve accuracy on photographed reports.
    """
    image = Image.open(image_path)
    cleaned = preprocess_image(image)
    text = pytesseract.image_to_string(cleaned)
    return text.strip()