"""
Main entry point for OCR extraction.
Detects file type and routes to the correct extractor.
"""

import os
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

from .image_extractor import extract_text_from_image
from .pdf_extractor import extract_text_from_pdf

SUPPORTED_IMAGE_EXTENSIONS = (".jpg", ".jpeg", ".png")
SUPPORTED_PDF_EXTENSIONS = (".pdf",)


def extract_text(file_path: str) -> str:
    """
    Extract text from a medical report file.
    Supports images (JPG/PNG) and PDFs (text-based or scanned).
    """
    ext = os.path.splitext(file_path)[1].lower()

    if ext in SUPPORTED_IMAGE_EXTENSIONS:
        return extract_text_from_image(file_path)
    elif ext in SUPPORTED_PDF_EXTENSIONS:
        return extract_text_from_pdf(file_path)
    else:
        raise ValueError(f"Unsupported file type: {ext}")