"""
Quick manual test for the OCR extractor.

Usage:
    python -m ocr.test_extractor path/to/report.pdf
    python -m ocr.test_extractor path/to/report.jpg
"""

import sys
from .extractor import extract_text

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python -m ocr.test_extractor <path_to_image_or_pdf>")
        sys.exit(1)

    file_path = sys.argv[1]
    result = extract_text(file_path)

    print("----- Extracted Text -----")
    print(result)