"""
Gemini-powered report parser.

Takes raw, messy OCR text extracted from a medical report and asks
Gemini to turn it into clean, structured test data matching our
TestInput schema (test_name, values, unit, reference_range).

Requires:
    pip install google-generativeai

Requires the environment variable AI_API_KEY to be set
(e.g. in a .env file, loaded via python-dotenv).
"""

import os
import json
import re
from typing import List, Dict, Any

import google.generativeai as genai

GEMINI_API_KEY = os.environ.get("AI_API_KEY")

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

MODEL_NAME = "gemini-3.6-flash"

PROMPT_TEMPLATE = """You are a medical report parser. Extract every lab test
result from the report text below and return ONLY a JSON array (no markdown,
no explanation, no code fences) where each item has this exact shape:

{{
  "test_name": "string, the name of the test (e.g. 'Glucose', 'Hemoglobin')",
  "values": [list of numbers, the historical/current values found for this test, in the order they appear. If only one value exists, put it as a single-item list.],
  "unit": "string or null, e.g. 'mg/dL'",
  "reference_range": {{"min": number or null, "max": number or null}}
}}

Rules:
- Only include actual lab test results with numeric values. Skip patient info,
  dates, doctor names, and non-numeric fields.
- If a reference range is given like "70-99" or "70 - 99 mg/dL", split it into min and max.
- If no reference range is present for a test, use {{"min": null, "max": null}}.
- If the unit isn't stated, use null.
- Return valid JSON only. No trailing commas. No comments.

Report text:
---
{report_text}
---
"""


def _extract_json_array(raw_response: str) -> str:
    """
    Gemini sometimes wraps JSON in ```json ... ``` code fences even when
    asked not to. Strip those if present.
    """
    text = raw_response.strip()
    match = re.search(r"```(?:json)?\s*(\[.*\])\s*```", text, re.DOTALL)
    if match:
        return match.group(1)
    return text


def parse_report_to_tests(report_text: str) -> List[Dict[str, Any]]:
    """
    Send raw OCR text to Gemini and return a list of dicts matching
    the TestInput schema shape:
        {"test_name": ..., "values": [...], "unit": ..., "reference_range": {...}}
    """
    if not GEMINI_API_KEY:
        raise RuntimeError(
            "AI_API_KEY is not set. Add it to your .env file."
        )

    if not report_text or not report_text.strip():
        return []

    model = genai.GenerativeModel(MODEL_NAME)
    prompt = PROMPT_TEMPLATE.format(report_text=report_text)

    response = model.generate_content(prompt)
    json_text = _extract_json_array(response.text)

    try:
        parsed = json.loads(json_text)
    except json.JSONDecodeError as e:
        raise ValueError(
            f"Gemini did not return valid JSON. Raw response was:\n{response.text}"
        ) from e

    if not isinstance(parsed, list):
        raise ValueError("Expected Gemini to return a JSON array of tests.")

    return parsed