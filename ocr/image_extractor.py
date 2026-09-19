"""
Handles OCR extraction for image files (JPG, PNG, etc.)
"""

from PIL import Image
import pytesseract


def extract_text_from_image(image_path: str) -> str:
    """
    Run OCR on a single image file and return the extracted text.
    """
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)
    return text.strip()