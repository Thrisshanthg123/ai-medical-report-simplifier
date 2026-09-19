"""
Train one Isolation Forest anomaly detector per medical test.

This script is for the hackathon's SYNTHETIC data only.
It does not diagnose disease and does not produce a clinical risk score.

Run from the project root:
    python ml/training/train_anomaly_model.py

Or from inside ml/:
    python training/train_anomaly_model.py
"""

from pathlib import Path
import pickle

import numpy as np
import pandas as pd
from sklearn.ensemble import IsolationForest
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.preprocessing import StandardScaler


# Resolve paths relative to the ml/ directory.
ML_DIR = Path(__file__).resolve().parents[1]
DATA_PATH = ML_DIR / "data" / "medical_training_data.csv"
MODEL_DIR = ML_DIR / "models"
MODEL_PATH = MODEL_DIR / "anomaly_models.pkl"

MODEL_DIR.mkdir(parents=True, exist_ok=True)


def make_features(group: pd.DataFrame) -> pd.DataFrame:
    """
    Create numerical features for anomaly detection.

    The model uses normalized value and change-related features so that
    different tests are handled independently and have comparable scales.
    """
    group = group.sort_values("date").copy()

    ref_min = group["reference_min"].astype(float)
    ref_max = group["reference_max"].astype(float)
    ref_width = (ref_max - ref_min).replace(0, np.nan)

    group["normalized_value"] = (
        (group["value"].astype(float) - ref_min) / ref_width
    )

    group["previous_value"] = group["value"].shift(1)
    group["value_change"] = (
        group["value"] - group["previous_value"]
    ).fillna(0.0)

    group["percentage_change"] = (
        group["value_change"]
        / group["previous_value"].replace(0, np.nan)
        * 100
    ).replace([np.inf, -np.inf], np.nan).fillna(0.0)

    group["distance_from_reference_center"] = (
        group["value"] - ((ref_min + ref_max) / 2)
    ) / ref_width

    return group


def train_models(df: pd.DataFrame):
    """
    Train one Isolation Forest per test.

    We train only on rows marked is_anomaly == 0 because this synthetic
    dataset intentionally contains known outliers for demonstration/evaluation.
    Isolation Forest itself remains an unsupervised algorithm.
    """
    required_columns = {
        "test_name",
        "date",
        "value",
        "reference_min",
        "reference_max",
        "is_anomaly",
    }

    missing = required_columns - set(df.columns)
    if missing:
        raise ValueError(f"Missing required columns: {sorted(missing)}")

    models = {}
    evaluation_rows = []

    for test_name, test_df in df.groupby("test_name"):
        test_df = make_features(test_df)

        train_df = test_df[test_df["is_anomaly"] == 0].copy()
        eval_df = test_df.copy()

        feature_columns = [
            "normalized_value",
            "value_change",
            "percentage_change",
            "distance_from_reference_center",
        ]

        X_train = train_df[feature_columns].replace(
            [np.inf, -np.inf], np.nan
        ).fillna(0.0)

        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train)

        model = IsolationForest(
            n_estimators=200,
            contamination="auto",
            random_state=42,
        )

        model.fit(X_train_scaled)

        # Evaluate only for the synthetic demo.
        X_eval = eval_df[feature_columns].replace(
            [np.inf, -np.inf], np.nan
        ).fillna(0.0)
        X_eval_scaled = scaler.transform(X_eval)

        predictions = model.predict(X_eval_scaled)
        predicted_anomaly = (predictions == -1).astype(int)

        eval_copy = eval_df[["test_name", "value", "is_anomaly"]].copy()
        eval_copy["predicted_anomaly"] = predicted_anomaly
        evaluation_rows.append(eval_copy)

        models[test_name] = {
            "model": model,
            "scaler": scaler,
            "feature_columns": feature_columns,
            "reference_min": float(test_df["reference_min"].iloc[0]),
            "reference_max": float(test_df["reference_max"].iloc[0]),
            "unit": str(test_df["unit"].iloc[0]),
        }

    return models, pd.concat(evaluation_rows, ignore_index=True)


def main():
    if not DATA_PATH.exists():
        raise FileNotFoundError(
            f"Dataset not found: {DATA_PATH}\n"
            "Make sure medical_training_data.csv exists in ml/data/."
        )

    df = pd.read_csv(DATA_PATH)

    models, evaluation = train_models(df)

    with open(MODEL_PATH, "wb") as file:
        pickle.dump(models, file)

    print("=" * 60)
    print("Synthetic Medical Anomaly Models Trained")
    print("=" * 60)
    print(f"Dataset: {DATA_PATH}")
    print(f"Models : {MODEL_PATH}")
    print(f"Tests  : {len(models)}")
    print(f"Rows   : {len(df)}")
    print()

    print("Evaluation on synthetic labelled rows:")
    print(
        classification_report(
            evaluation["is_anomaly"],
            evaluation["predicted_anomaly"],
            target_names=["normal", "synthetic_anomaly"],
            zero_division=0,
        )
    )

    print("Confusion matrix:")
    print(
        confusion_matrix(
            evaluation["is_anomaly"],
            evaluation["predicted_anomaly"],
        )
    )

    print()
    print("IMPORTANT:")
    print("- This dataset is synthetic and for hackathon development only.")
    print("- Isolation Forest is an unsupervised anomaly-detection algorithm.")
    print("- The model detects unusual numerical patterns; it does NOT diagnose disease.")
    print("- Do not present the anomaly score as a clinical risk score.")


if __name__ == "__main__":
    main()
