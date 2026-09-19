"""
Handles text extraction for PDF files.

Tries the embedded text layer first (fast, no OCR needed for
digitally-generated PDFs). Falls back to OCR on any page that has no
text layer (i.e. a scanned page saved as an image inside the PDF),
applying the same lightweight preprocessing used for standalone images.
"""

import io
import fitz  # PyMuPDF
from PIL import Image
import pytesseract

from .image_extractor import preprocess_image


def extract_text_from_pdf(pdf_path: str) -> str:
    """
    Extract text from a PDF, page by page.
    """
    doc = fitz.open(pdf_path)
    full_text = []

    for page in doc:
        page_text = page.get_text().strip()

        if page_text:
            full_text.append(page_text)
        else:
            full_text.append(_ocr_page(page))

    doc.close()
    return "\n\n".join(full_text).strip()


def _ocr_page(page) -> str:
    """Render a single PDF page as an image, preprocess it, and run OCR."""
    pix = page.get_pixmap(dpi=300)
    img_bytes = pix.tobytes("png")
    image = Image.open(io.BytesIO(img_bytes))
    cleaned = preprocess_image(image)
    return pytesseract.image_to_string(cleaned).strip()