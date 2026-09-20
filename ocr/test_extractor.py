"""
Quick manual test for the OCR extractor.

Usage:
    python -m ocr.test_extractor path/to/report.pdf
    python -m ocr.test_extractor path/to/report.jpg --lang spa
    python -m ocr.test_extractor path/to/note.jpg --handwritten
    python -m ocr.test_extractor path/to/report.jpg --auto-lang
    python -m ocr.test_extractor path/to/report.jpg --structured

    # Batch mode over a folder:
    python -m ocr.test_extractor --batch path/to/folder --out results.jsonl
    python -m ocr.test_extractor --batch path/to/folder --out results.jsonl --structured
"""

import argparse
import json
import sys

from .extractor import extract_text, extract_structured
from .batch import batch_extract, summarize

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="OCR extractor test CLI")
    parser.add_argument("path", nargs="?", help="Path to a single image/PDF file")
    parser.add_argument("--lang", default="eng", help="Tesseract language(s), e.g. eng, spa, eng+spa")
    parser.add_argument("--handwritten", action="store_true", help="Use handwriting-oriented layout mode")
    parser.add_argument("--auto-lang", action="store_true", help="Auto-detect language instead of --lang")
    parser.add_argument("--structured", action="store_true", help="Extract key-values/tables/confidence instead of plain text (requires opencv-python)")
    parser.add_argument("--batch", metavar="FOLDER", help="Batch-process every file in FOLDER")
    parser.add_argument("--out", metavar="FILE.jsonl", help="Batch mode: write results to this JSONL file")
    parser.add_argument("--workers", type=int, default=4, help="Batch mode: parallel worker count")
    args = parser.parse_args()

    if args.batch:
        results = batch_extract(
            args.batch,
            output_jsonl=args.out,
            languages=args.lang,
            handwritten=args.handwritten,
            auto_detect_language=args.auto_lang,
            structured=args.structured,
            max_workers=args.workers,
        )
        print("\n----- Batch Summary -----")
        print(summarize(results))
        sys.exit(0)

    if not args.path:
        parser.print_help()
        sys.exit(1)

    if args.structured:
        result = extract_structured(args.path, languages=args.lang, handwritten=args.handwritten)
        payload = [r.to_dict() for r in result] if isinstance(result, list) else result.to_dict()
        print(json.dumps(payload, indent=2, ensure_ascii=False))
    else:
        result = extract_text(args.path, languages=args.lang, handwritten=args.handwritten)
        print("----- Extracted Text -----")
        print(result)