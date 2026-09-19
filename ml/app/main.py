from typing import List, Union, Dict, Any
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

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

app = FastAPI(
    title="AI Medical Report Simplifier - ML Analysis Service",
    description="Feature engineering, trend analysis, statistical anomaly detection, and reference range analysis for historical medical test data.",
    version="1.0.0",
)

# Enable CORS for backend/frontend consumption
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def run_ml_pipeline(test_input: TestInput) -> MLFindingsOutput:
    """
    Executes the complete ML Analysis Pipeline:
    Input -> Feature Engineering -> Trend Analysis -> Anomaly Detection -> Reference Range Analysis -> Findings JSON
    """
    clean_values, stats, change, current_val, prev_val, n = calculate_feature_statistics(test_input.values)
    
    # 1. Trend Analysis
    trend_res = calculate_trend(clean_values)
    
    # 2. Anomaly Detection
    anomaly_res = detect_anomaly(clean_values)
    
    # 3. Reference Range Analysis
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

@app.post("/analyze", response_model=MLFindingsOutput)
def analyze_test(payload: TestInput):
    """
    Analyzes a single medical test series.
    """
    try:
        return run_ml_pipeline(payload)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/analyze/batch", response_model=List[MLFindingsOutput])
def analyze_batch(payload: Union[BatchAnalysisInput, List[TestInput]]):
    """
    Analyzes multiple medical test series in batch.
    """
    try:
        tests = payload.tests if isinstance(payload, BatchAnalysisInput) else payload
        return [run_ml_pipeline(test_item) for test_item in tests]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
