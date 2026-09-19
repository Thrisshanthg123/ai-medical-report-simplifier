from typing import List, Optional, Union, Any
from pydantic import BaseModel, Field

class ReferenceRangeInput(BaseModel):
    min: Optional[Union[int, float]] = None
    max: Optional[Union[int, float]] = None

class TestInput(BaseModel):
    test_name: str = Field(..., description="Name of the medical test")
    values: List[Any] = Field(..., description="List of historical to current test values")
    reference_range: Optional[ReferenceRangeInput] = None
    unit: Optional[str] = None

class BatchAnalysisInput(BaseModel):
    tests: List[TestInput]

class StatisticsOutput(BaseModel):
    mean: Optional[Union[int, float]] = None
    minimum: Optional[Union[int, float]] = None
    maximum: Optional[Union[int, float]] = None
    standard_deviation: Optional[Union[int, float]] = None

class ChangeOutput(BaseModel):
    absolute: Optional[Union[int, float]] = None
    percentage: Optional[Union[int, float]] = None

class TrendOutput(BaseModel):
    direction: str = Field(..., description="increasing, decreasing, stable, or insufficient_data")
    slope: Optional[Union[int, float]] = None

class ReferenceRangeOutput(BaseModel):
    min: Optional[Union[int, float]] = None
    max: Optional[Union[int, float]] = None
    within_range: Optional[bool] = None
    message: Optional[str] = Field(None, description="Neutral statement regarding reference range")

class AnomalyOutput(BaseModel):
    detected: bool = Field(False, description="Whether statistical anomaly was detected")
    score: Union[int, float] = Field(0.0, description="Statistical anomaly score between 0.0 and 1.0")
    status: Optional[str] = None

class MLFindingsOutput(BaseModel):
    test_name: str
    unit: Optional[str] = None
    current_value: Optional[Union[int, float]] = None
    previous_value: Optional[Union[int, float]] = None
    statistics: StatisticsOutput
    change: ChangeOutput
    trend: TrendOutput
    reference_range: ReferenceRangeOutput
    anomaly: AnomalyOutput
    data_points: int

