from typing import List, Dict, Any, Optional
import numpy as np
from app.features import clean_num

def calculate_trend(clean_values: List[float], abs_slope_threshold: float = 0.1, rel_slope_threshold: float = 0.015) -> Dict[str, Any]:
    """
    Performs linear regression trend analysis on historical test values.
    
    Classifies into:
    - 'increasing'
    - 'decreasing'
    - 'stable'
    - 'insufficient_data'
    
    Does NOT make medical diagnoses.
    """
    n = len(clean_values)
    if n < 2:
        return {
            "direction": "insufficient_data",
            "slope": None
        }

    x = np.arange(n)
    y = np.array(clean_values, dtype=float)

    # Compute OLS linear regression slope
    slope, _ = np.polyfit(x, y, 1)
    slope_clean = clean_num(float(slope))
    mean_val = float(np.mean(y))

    # Avoid zero division
    rel_slope = (slope / mean_val) if mean_val != 0 else slope

    # Determine trend direction using dual threshold (absolute and relative)
    if abs(slope) < abs_slope_threshold or abs(rel_slope) < rel_slope_threshold:
        direction = "stable"
    elif slope > 0:
        direction = "increasing"
    else:
        direction = "decreasing"

    return {
        "direction": direction,
        "slope": slope_clean
    }
