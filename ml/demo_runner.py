import json
from app.schemas import TestInput, ReferenceRangeInput
from app.main import run_ml_pipeline

def run_demo():
    print("--- ML Analysis Pipeline Demo ---")
    
    sample_input = TestInput(
        test_name="Fasting Glucose",
        unit="mg/dL",
        values=[91, 94, 98, 109],
        reference_range=ReferenceRangeInput(min=70, max=99)
    )
    
    result = run_ml_pipeline(sample_input)
    # Convert Pydantic output model to dict / json
    result_json = json.dumps(result.model_dump(exclude_none=True), indent=2)
    print("\nSample Input:")
    print(json.dumps(sample_input.model_dump(exclude_none=True), indent=2))
    print("\nStructured ML Findings Output:")
    print(result_json)

if __name__ == "__main__":
    run_demo()
