"""Enhanced OCR utilities for medical-report images and PDFs.

Install the optional dependencies:
    pip install pytesseract pillow opencv-python langdetect pdf2image

Tesseract itself must also be installed and available on PATH.  On Windows,
set ``pytesseract.pytesseract.tesseract_cmd`` in your application if needed.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Iterable, Optional, Union

import cv2
import numpy as np
import pytesseract
from PIL import Image

try:
    from langdetect import detect
except ImportError:  # Language detection remains optional.
    detect = None


PathLike = Union[str, Path]
SUPPORTED_IMAGES = {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".bmp", ".webp"}


@dataclass
class OCRResult:
    source: str
    text: str
    language: Optional[str]
    key_values: dict[str, str]
    tables: list[list[list[str]]]
    confidence: Optional[float] = None

    def to_dict(self) -> dict:
        return asdict(self)


def preprocess_image(image: Union[PathLike, Image.Image, np.ndarray], scale: int = 2) -> np.ndarray:
    """Clean a scanned report before OCR (works especially well for phone photos)."""
    if isinstance(image, (str, Path)):
        frame = cv2.imread(str(image))
        if frame is None:
            raise ValueError(f"Could not read image: {image}")
    elif isinstance(image, Image.Image):
        frame = cv2.cvtColor(np.array(image.convert("RGB")), cv2.COLOR_RGB2BGR)
    else:
        frame = image.copy()

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY) if frame.ndim == 3 else frame
    if scale > 1:
        gray = cv2.resize(gray, None, fx=scale, fy=scale, interpolation=cv2.INTER_CUBIC)
    gray = cv2.fastNlMeansDenoising(gray, None, h=10, templateWindowSize=7, searchWindowSize=21)
    # Adaptive threshold handles uneven lighting in photographed reports.
    return cv2.adaptiveThreshold(
        gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 31, 11
    )


def _detect_language(text: str) -> Optional[str]:
    if not text.strip() or detect is None:
        return None
    try:
        return detect(text)
    except Exception:
        return None


def extract_key_values(text: str) -> dict[str, str]:
    """Extract common ``Label: value`` or ``Label .... value`` report fields."""
    values: dict[str, str] = {}
    for raw_line in text.splitlines():
        line = " ".join(raw_line.split())
        if not line:
            continue
        match = re.match(r"^([A-Za-z][A-Za-z0-9 /()_%.-]{1,60}?)\s*(?::|[-–—]|\.{2,})\s*(.+)$", line)
        if match:
            key, value = match.groups()
            values[key.strip()] = value.strip()
    return values


def extract_tables(image: np.ndarray) -> list[list[list[str]]]:
    """Find ruled tables and OCR each cell. Returns rows of cell text.

    This deliberately returns plain lists so callers can turn it into CSV,
    JSON, or a dataframe without adding another required dependency.
    """
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) if image.ndim == 3 else image
    inverted = 255 - gray
    horizontal = cv2.morphologyEx(
        inverted, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_RECT, (max(20, gray.shape[1] // 30), 1))
    )
    vertical = cv2.morphologyEx(
        inverted, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_RECT, (1, max(20, gray.shape[0] // 30)))
    )
    grid = cv2.add(horizontal, vertical)
    contours, _ = cv2.findContours(grid, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    tables: list[list[list[str]]] = []
    for x, y, w, h in (cv2.boundingRect(c) for c in contours):
        if w < 150 or h < 80:
            continue
        cells, _ = cv2.findContours(grid[y:y+h, x:x+w], cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
        boxes = []
        for c in cells:
            cx, cy, cw, ch = cv2.boundingRect(c)
            if cw > 25 and ch > 15 and cw < w - 4 and ch < h - 4:
                boxes.append((cx, cy, cw, ch))
        boxes.sort(key=lambda box: (box[1], box[0]))
        rows: list[list[tuple[int, str]]] = []
        for cx, cy, cw, ch in boxes:
            cell = gray[y + cy + 2:y + cy + ch - 2, x + cx + 2:x + cx + cw - 2]
            value = pytesseract.image_to_string(cell, config="--psm 7").strip()
            if not rows or abs(cy - rows[-1][0][0]) > max(12, ch // 2):
                rows.append([])
            rows[-1].append((cy, value))
        if len(rows) >= 2:
            tables.append([[value for _, value in row] for row in rows])
    return tables


def extract_from_image(path: PathLike, languages: str = "eng", handwritten: bool = False) -> OCRResult:
    """OCR one image, including cleanup, language hinting, tables, and fields.

    ``handwritten=True`` uses a sparse-text layout mode. Tesseract may still
    be inaccurate on cursive handwriting; a handwriting-trained engine is
    preferable for clinical notes.
    """
    clean = preprocess_image(path)
    psm = 11 if handwritten else 6
    data = pytesseract.image_to_data(clean, lang=languages, config=f"--oem 3 --psm {psm}", output_type=pytesseract.Output.DICT)
    confidences = [float(c) for c in data["conf"] if c not in ("-1", "")]
    # Keep Tesseract's line breaks: they make label/value extraction reliable.
    text = pytesseract.image_to_string(clean, lang=languages, config=f"--oem 3 --psm {psm}")
    return OCRResult(
        source=str(path), text=text, language=_detect_language(text),
        key_values=extract_key_values(text), tables=extract_tables(clean),
        confidence=round(sum(confidences) / len(confidences), 2) if confidences else None,
    )


def extract_from_pdf(path: PathLike, languages: str = "eng", handwritten: bool = False) -> list[OCRResult]:
    """Convert every PDF page to an image and OCR it."""
    try:
        from pdf2image import convert_from_path
    except ImportError as error:
        raise ImportError("PDF support requires: pip install pdf2image") from error
    return [
        _extract_pil_page(page, f"{path} (page {number})", languages, handwritten)
        for number, page in enumerate(convert_from_path(str(path), dpi=300), start=1)
    ]


def _extract_pil_page(page: Image.Image, label: str, languages: str, handwritten: bool) -> OCRResult:
    clean = preprocess_image(page)
    psm = 11 if handwritten else 6
    text = pytesseract.image_to_string(clean, lang=languages, config=f"--oem 3 --psm {psm}")
    return OCRResult(label, text, _detect_language(text), extract_key_values(text), extract_tables(clean))


def batch_extract(folder: PathLike, recursive: bool = True, languages: str = "eng") -> list[OCRResult]:
    """Process every supported image/PDF in a folder."""
    root = Path(folder)
    files: Iterable[Path] = root.rglob("*") if recursive else root.glob("*")
    results: list[OCRResult] = []
    for file in files:
        if not file.is_file():
            continue
        if file.suffix.lower() in SUPPORTED_IMAGES:
            results.append(extract_from_image(file, languages))
        elif file.suffix.lower() == ".pdf":
            results.extend(extract_from_pdf(file, languages))
    return results
