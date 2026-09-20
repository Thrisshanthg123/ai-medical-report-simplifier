"""Turn OCR output from medical reports into simple structured data.

This module deliberately relies only on the OCR package's existing
``extract_text`` function, so it works with the dependencies already listed
in ``requirements.txt``.
"""

from __future__ import annotations

import re
from dataclasses import asdict, dataclass
from typing import Any


@dataclass
class LabResult:
    """One recognised laboratory result from an OCR report."""

    test_name: str
    value: str
    unit: str | None = None
    reference_range: str | None = None
    interpretation: str | None = None


@dataclass
class StructuredReport:
    """Structured representation of the text extracted from one report."""

    source: str
    raw_text: str
    fields: dict[str, str]
    results: list[LabResult]

    def to_dict(self) -> dict[str, Any]:
        """Return plain dictionaries suitable for JSON responses."""
        return asdict(self)


_FIELD_PATTERN = re.compile(
    r"^\s*([A-Za-z][A-Za-z0-9 /()_%.-]{1,60}?)\s*(?::|[-–—])\s*(.+?)\s*$"
)
_RESULT_PATTERN = re.compile(
    r"^\s*(?P<name>[A-Za-z][A-Za-z0-9 ()/%+.-]{2,}?)\s+"
    r"(?P<value>[<>]?\s*\d+(?:[,.]\d+)?)"
    r"(?:\s+(?P<unit>[A-Za-zµμ/]+))?"
    r"(?:\s+(?P<range>(?:[<>]\s*)?\d+(?:[,.]\d+)?\s*(?:-|–|—|to)\s*\d+(?:[,.]\d+)?|[<>]\s*\d+(?:[,.]\d+)?))?"
    r"(?:\s+(?P<interpretation>Normal|High|Low|Borderline))?\s*$",
    re.IGNORECASE,
)


def extract_fields(text: str) -> dict[str, str]:
    """Extract lines in ``Label: value`` or ``Label - value`` form."""
    fields: dict[str, str] = {}
    for raw_line in text.splitlines():
        match = _FIELD_PATTERN.match(raw_line)
        if match:
            key, value = match.groups()
            fields[key.strip()] = value.strip()
    return fields


def extract_lab_results(text: str) -> list[LabResult]:
    """Best-effort parsing of tabular lab values from OCR text."""
    results: list[LabResult] = []
    for raw_line in text.splitlines():
        line = " ".join(raw_line.split())
        match = _RESULT_PATTERN.match(line)
        if not match:
            continue
        data = match.groupdict()
        name = data["name"].strip()
        # Avoid treating common patient-details lines as laboratory tests.
        if name.lower() in {"patient name", "patient id", "age / gender", "report date"}:
            continue
        results.append(
            LabResult(
                test_name=name,
                value=data["value"].replace(" ", ""),
                unit=data["unit"],
                reference_range=data["range"],
                interpretation=(data["interpretation"] or None),
            )
        )
    return results


def extract_structured(file_path: str) -> StructuredReport:
    """OCR a report and return both its original text and parsed data."""
    # Import here to avoid a circular import when this module is reused.
    from .extractor import extract_text

    raw_text = extract_text(file_path)
    return StructuredReport(
        source=file_path,
        raw_text=raw_text,
        fields=extract_fields(raw_text),
        results=extract_lab_results(raw_text),
    )
