import pytest
from app.schemas import TestInput, ReferenceRangeInput
from app.main import run_ml_pipeline
from app.features import calculate_feature_statistics
from app.trend import calculate_trend
from app.anomaly import detect_anomaly
from app.reference_range import analyze_reference_range

def test_trend_increasing():
    # 91 -> 94 -> 98 -> 109 -> increasing
    input_data = TestInput(
        test_name="Fasting Glucose",
        values=[91, 94, 98, 109],
        reference_range=ReferenceRangeInput(min=70, max=99)
    )
    result = run_ml_pipeline(input_data)
    assert result.trend.direction == "increasing"
    assert result.trend.slope > 0
    assert result.current_value == 109
    assert result.previous_value == 98
    assert result.statistics.mean == 98.0
    assert result.statistics.minimum == 91.0
    assert result.statistics.maximum == 109.0
    assert result.change.absolute == 11.0
    assert result.change.percentage == 11.22
    assert result.data_points == 4
    assert result.reference_range.within_range is False
    assert "above the reference range" in result.reference_range.message

def test_trend_stable():
    # 14.1 -> 14.2 -> 14.0 -> 14.2 -> stable
    input_data = TestInput(
        test_name="Hemoglobin",
        values=[14.1, 14.2, 14.0, 14.2],
        reference_range=ReferenceRangeInput(min=12.0, max=16.0)
    )
    result = run_ml_pipeline(input_data)
    assert result.trend.direction == "stable"
    assert result.reference_range.within_range is True

def test_trend_decreasing():
    # 220 -> 205 -> 190 -> 175 -> decreasing
    input_data = TestInput(
        test_name="Total Cholesterol",
        values=[220, 205, 190, 175],
        reference_range=ReferenceRangeInput(min=125, max=200)
    )
    result = run_ml_pipeline(input_data)
    assert result.trend.direction == "decreasing"
    assert result.trend.slope == -15.0
    assert result.reference_range.within_range is True

def test_trend_insufficient_data():
    # One value -> insufficient_data
    input_data = TestInput(
        test_name="Serum Creatinine",
        values=[1.1],
        reference_range=ReferenceRangeInput(min=0.7, max=1.3)
    )
    result = run_ml_pipeline(input_data)
    assert result.trend.direction == "insufficient_data"
    assert result.trend.slope is None
    assert result.previous_value is None
    assert result.change.absolute is None
    assert result.change.percentage is None
    assert result.data_points == 1
    assert result.anomaly.status == "insufficient_data"

def test_missing_reference_range():
    # Missing reference range handled safely
    input_data = TestInput(
        test_name="Novel Biomarker",
        values=[10, 12, 15]
    )
    result = run_ml_pipeline(input_data)
    assert result.reference_range.min is None
    assert result.reference_range.max is None
    assert result.reference_range.within_range is None
    assert "not provided" in result.reference_range.message

def test_missing_and_invalid_values():
    # Sanitizes NaNs, None, and unparsable strings
    input_data = TestInput(
        test_name="Platelet Count",
        values=[200, None, "INVALID_STR", 220, float('nan'), 250]
    )
    result = run_ml_pipeline(input_data)
    assert result.data_points == 3
    assert result.current_value == 250
    assert result.previous_value == 220
    assert result.trend.direction == "increasing"

def test_anomaly_detection_spike():
    # Normal baseline with a sudden spike
    values = [90, 91, 92, 91, 90, 92, 91, 250]
    input_data = TestInput(
        test_name="Fasting Glucose Spike",
        values=values
    )
    result = run_ml_pipeline(input_data)
    assert result.anomaly.detected is True
    assert result.anomaly.score > 0.5
