import math
from typing import List, Tuple, Optional, Union, Any
import numpy as np

def clean_num(val: Optional[float]) -> Optional[Union[int, float]]:
    """
    Rounds float to 2 decimal places and formats whole numbers as clean integers.
    """
    if val is None:
        return None
    r = round(val, 2)
    if r.is_integer():
        return int(r)
    return r

def extract_clean_numeric_values(raw_values: List[Any]) -> List[float]:
    """
    Sanitizes raw values input by filtering out None, NaNs, infinities, 
    and converting valid numerical strings.
    """
    clean_values = []
    if not isinstance(raw_values, list):
        return clean_values

    for item in raw_values:
        if item is None:
            continue
        try:
            val = float(item)
            if not (math.isnan(val) or math.isinf(val)):
                clean_values.append(val)
        except (ValueError, TypeError):
            continue
            
    return clean_values

def calculate_feature_statistics(raw_values: List[Any]) -> Tuple[List[float], dict, dict, Optional[Union[int, float]], Optional[Union[int, float]], int]:
    """
    Computes statistical feature metrics from historical test observations.
    
    Returns:
        (clean_values, stats_dict, change_dict, current_value, previous_value, data_points)
    """
    clean_values = extract_clean_numeric_values(raw_values)
    n = len(clean_values)
    
    if n == 0:
        return clean_values, {
            "mean": None,
            "minimum": None,
            "maximum": None,
            "standard_deviation": None
        }, {
            "absolute": None,
            "percentage": None
        }, None, None, 0

    current_val = clean_num(clean_values[-1])
    previous_val = clean_num(clean_values[-2]) if n >= 2 else None

    mean_val = clean_num(float(np.mean(clean_values)))
    min_val = clean_num(float(np.min(clean_values)))
    max_val = clean_num(float(np.max(clean_values)))
    
    # Calculate sample standard deviation if sample size > 1, else 0
    std_val = clean_num(float(np.std(clean_values, ddof=1))) if n > 1 else 0

    stats = {
        "mean": mean_val,
        "minimum": min_val,
        "maximum": max_val,
        "standard_deviation": std_val
    }

    if previous_val is not None and current_val is not None:
        abs_change = clean_num(clean_values[-1] - clean_values[-2])
        if clean_values[-2] != 0:
            pct_change = clean_num(((clean_values[-1] - clean_values[-2]) / abs(clean_values[-2])) * 100)
        else:
            pct_change = None
        change = {
            "absolute": abs_change,
            "percentage": pct_change
        }
    else:
        change = {
            "absolute": None,
            "percentage": None
        }

    return clean_values, stats, change, current_val, previous_val, n
