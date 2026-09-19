from typing import List, Union, Dict, Any
from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import sys
import os
import tempfile

# .env lives at the project root, two levels up from ml/app/
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", ".env"))

from app.schemas import (
    TestInput,
    BatchAnalysisInput,
    MLFindingsOutput,
    StatisticsOutput,
    ChangeOutput,
    TrendOutput,
    ReferenceRangeOutput,
    AnomalyOutput,
)
from app.features import calculate_feature_statistics
from app.trend import calculate_trend
from app.anomaly import detect_anomaly
from app.reference_range import analyze_reference_range
from app.gemini_parser import parse_report_to_tests

# Let Python find the "ocr" folder, which lives at the project root
sys.path.append(os.path.join(os.path.dirname(__file__), "..", ".."))
from ocr.extractor import extract_text

app = FastAPI(
    title="AI Medical Report Simplifier - ML Analysis Service",
    description="Feature engineering, trend analysis, statistical anomaly detection, and reference range analysis for historical medical test data.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def run_ml_pipeline(test_input: TestInput) -> MLFindingsOutput:
    clean_values, stats, change, current_val, prev_val, n = calculate_feature_statistics(test_input.values)
    
    trend_res = calculate_trend(clean_values)
    anomaly_res = detect_anomaly(clean_values)
    
    ref_min = test_input.reference_range.min if test_input.reference_range else None
    ref_max = test_input.reference_range.max if test_input.reference_range else None
    ref_res = analyze_reference_range(current_val, ref_min, ref_max)

    return MLFindingsOutput(
        test_name=test_input.test_name,
        unit=test_input.unit,
        current_value=current_val,
        previous_value=prev_val,
        statistics=StatisticsOutput(**stats),
        change=ChangeOutput(**change),
        trend=TrendOutput(
            direction=trend_res["direction"],
            slope=trend_res["slope"]
        ),
        reference_range=ReferenceRangeOutput(
            min=ref_res["min"],
            max=ref_res["max"],
            within_range=ref_res["within_range"],
            message=ref_res["message"]
        ),
        anomaly=AnomalyOutput(
            detected=anomaly_res["detected"],
            score=anomaly_res["score"],
            status=anomaly_res.get("status")
        ),
        data_points=n
    )

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "ML Analysis Service"}

@app.post("/extract-text")
async def extract_text_from_upload(file: UploadFile = File(...)):
    """
    Accepts an uploaded medical report (image or PDF) and returns
    the raw text extracted via OCR.
    """
    suffix = os.path.splitext(file.filename)[1]
    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        contents = await file.read()
        tmp.write(contents)
        tmp_path = tmp.name

    try:
        extracted_text = extract_text(tmp_path)
        return {"filename": file.filename, "extracted_text": extracted_text}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        os.remove(tmp_path)

@app.post("/structure-report")
def structure_report(payload: dict):
    """
    Takes raw OCR text and returns structured test data
    (ready to feed into /analyze/batch).
    Expects: {"text": "raw extracted text here"}
    """
    text = payload.get("text", "")
    try:
        structured_tests = parse_report_to_tests(text)
        return {"tests": structured_tests}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/process-report", response_model=List[MLFindingsOutput])
async def process_report(file: UploadFile = File(...)):
    """
    Full pipeline in one call:
    1. Accepts an uploaded medical report (image or PDF)
    2. Runs OCR to extract raw text
    3. Sends the text to Gemini to get structured test data
    4. Runs each test through the ML analysis pipeline
    5. Returns the final findings, ready for the frontend to display
    """
    suffix = os.path.splitext(file.filename)[1]
    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        contents = await file.read()
        tmp.write(contents)
        tmp_path = tmp.name

    try:
        extracted_text = extract_text(tmp_path)

        if not extracted_text or not extracted_text.strip():
            raise HTTPException(
                status_code=400,
                detail="No text could be extracted from the uploaded file.",
            )

        structured_tests = parse_report_to_tests(extracted_text)

        if not structured_tests:
            raise HTTPException(
                status_code=400,
                detail="No lab test results could be identified in the report.",
            )

        results: List[MLFindingsOutput] = []
        for test_dict in structured_tests:
            try:
                test_input = TestInput(
                    test_name=test_dict.get("test_name", "Unknown Test"),
                    values=test_dict.get("values", []),
                    unit=test_dict.get("unit"),
                    reference_range=test_dict.get("reference_range"),
                )
                results.append(run_ml_pipeline(test_input))
            except Exception as inner_error:
                print(f"Skipping test due to error: {inner_error}")
                continue

        if not results:
            raise HTTPException(
                status_code=400,
                detail="Test data was found but could not be analyzed.",
            )

        return results

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        os.remove(tmp_path)

@app.post("/analyze", response_model=MLFindingsOutput)
def analyze_test(payload: TestInput):
    try:
        return run_ml_pipeline(payload)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/analyze/batch", response_model=List[MLFindingsOutput])
def analyze_batch(payload: Union[BatchAnalysisInput, List[TestInput]]):
    try:
        tests = payload.tests if isinstance(payload, BatchAnalysisInput) else payload
        return [run_ml_pipeline(test_item) for test_item in tests]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))