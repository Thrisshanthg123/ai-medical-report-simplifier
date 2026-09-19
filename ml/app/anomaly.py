import warnings
from typing import List, Dict, Any
import numpy as np
from app.features import clean_num

# Suppress standard sklearn warnings
warnings.filterwarnings("ignore", category=UserWarning)

def detect_anomaly(clean_values: List[float], contamination: float = 0.1) -> Dict[str, Any]:
    """
    Performs statistical anomaly detection using scikit-learn IsolationForest 
    or Z-score fallback for historical test data series.
    
    The anomaly score is a statistical output, NOT a medical risk score.
    Safely handles insufficient historical data.
    """
    n = len(clean_values)
    
    # Safe handling for insufficient data
    if n < 4:
        return {
            "detected": False,
            "score": 0.0,
            "status": "insufficient_data"
        }

    # If all values are identical, no anomaly
    if len(set(clean_values)) == 1:
        return {
            "detected": False,
            "score": 0.0,
            "status": "normal"
        }

    try:
        from sklearn.ensemble import IsolationForest

        X = np.array(clean_values).reshape(-1, 1)
        clf = IsolationForest(contamination=contamination, random_state=42)
        clf.fit(X)

        # Evaluate the latest value (current_value)
        latest_val = X[-1:]
        prediction = clf.predict(latest_val)[0]  # -1 for anomaly, 1 for normal
        raw_score = clf.score_samples(latest_val)[0] # lower means more anomalous (e.g. -0.8 to 0.0)

        # Map raw IsolationForest score to a 0.0 - 1.0 score where higher is more anomalous
        scaled_score = clean_num(min(max(round(float(-1.5 * raw_score + 0.25), 2), 0.0), 1.0))
        detected = bool(prediction == -1)

        return {
            "detected": detected,
            "score": scaled_score,
            "status": "evaluated"
        }
    except Exception:
        # Fallback to Z-score method if model fitting fails
        arr = np.array(clean_values)
        std = np.std(arr)
        if std == 0:
            return {"detected": False, "score": 0, "status": "normal"}
        
        z_score = abs((clean_values[-1] - np.mean(arr)) / std)
        detected = bool(z_score > 2.0)
        score = clean_num(min(round(float(z_score / 4.0), 2), 1.0))
        
        return {
            "detected": detected,
            "score": score,
            "status": "fallback_zscore"
        }
