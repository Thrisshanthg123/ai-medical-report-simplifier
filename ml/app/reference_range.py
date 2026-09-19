from typing import Optional, Union, Dict, Any
from app.features import clean_num

def analyze_reference_range(current_val: Optional[Union[int, float]], min_val: Optional[Union[int, float]], max_val: Optional[Union[int, float]]) -> Dict[str, Any]:
    """
    Evaluates current test value against provided reference ranges.
    Returns neutral statistical description without medical diagnosis.
    """
    clean_min = clean_num(min_val)
    clean_max = clean_num(max_val)

    if current_val is None or (clean_min is None and clean_max is None):
        return {
            "min": clean_min,
            "max": clean_max,
            "within_range": None,
            "message": "Reference range not provided in the report."
        }

    if clean_min is not None and clean_max is not None:
        if current_val < clean_min:
            within_range = False
            msg = "The reported value is below the reference range provided in the report."
        elif current_val > clean_max:
            within_range = False
            msg = "The reported value is above the reference range provided in the report."
        else:
            within_range = True
            msg = "The reported value is within the reference range provided in the report."
    elif clean_min is not None:
        if current_val < clean_min:
            within_range = False
            msg = "The reported value is below the minimum reference threshold provided in the report."
        else:
            within_range = True
            msg = "The reported value is within the reference range provided in the report."
    else: # clean_max is not None
        if current_val > clean_max:
            within_range = False
            msg = "The reported value is above the maximum reference threshold provided in the report."
        else:
            within_range = True
            msg = "The reported value is within the reference range provided in the report."

    return {
        "min": clean_min,
        "max": clean_max,
        "within_range": within_range,
        "message": msg
    }
