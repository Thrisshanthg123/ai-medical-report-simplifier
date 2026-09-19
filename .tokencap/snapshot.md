<!-- TokenCap v1.6 Savings: baseline 72,100 tok → actual 46,457 tok (35.6% saved) -->
# AI ENTRY POINT

This repository has been indexed by TokenCap.

Before analyzing files, read:

.tokencap/agent/START_HERE.md

Use:

- .tokencap/agent/agent-pack.md
- .tokencap/agent/allowed-context.json
- .tokencap/agent/context-manifest.json

Do not rediscover the repository from scratch.

---

# TokenCap Snapshot

| Field | Value |
| --- | --- |
| Generated | 2026-09-19T06:10:14.374Z |
| Workspace | e:\antigravity\versathon2.0\ai-medical-report-simplifier |
| Profile | balanced |
| Selected files | 88 |
| Source bytes | 199601 |
| Estimated source tokens | 75580 |

## Read First

This file is a compressed coding-session handoff. Read it before editing, then inspect the referenced files directly. Prefer the live repository over this snapshot when there is a conflict.

## TokenCap Intelligence Files

- TOKENCAP_GRAPH.md — Project dependency and architecture graph *(JS/TS projects only)*
- TOKENCAP_MEMORY.md — Developer notes, current task, constraints, and context memory

## Handoff Summary

| Field | Value |
| --- | --- |
| Read order | ml/requirements.txt > AGENTS.md > ml/app/anomaly.py > ml/app/features.py > ml/app/main.py |
| Primary anchors | ml/requirements.txt, AGENTS.md, ml/app/anomaly.py |
| Changed files | 12 |
| TODO notes | 2 |
| File budget used | 98% |
| Source budget used | 91% |
| Token estimate | 75580 |
| Contents mode | enabled |

## Handoff Guidelines

- Preserve user changes; avoid reverting unrelated work.
- Start with changed files and files marked `high-signal` in the manifest.
- Treat the Git diff as intent and verify changes in source files.
- Update this snapshot after meaningful edits or before handing off.

## Git Snapshot

| Field | Value |
| --- | --- |
| Branch | person4 |
| Git root | E:/antigravity/versathon2.0/ai-medical-report-simplifier |

Recent commits:
```text
b39651b added project folders
890703f add gitignore and env template
0085608 initialize project structure
82c2d83 Add project title and description to README
```

Status:
```text
 M ml/app/anomaly.py
 M ml/app/features.py
 M ml/app/main.py
 M ml/app/schemas.py
 M ml/app/trend.py
 M ml/requirements.txt
?? .tokencap/
?? AGENTS.md
?? ml/app/reference_range.py
?? ml/demo_runner.py
?? ml/tests/
?? ml/training/
```

## Project Map

```text
.kilo/
.kilo/worktrees/
.kilo/worktrees/ginger-myrtle/
.kilo/worktrees/ginger-myrtle/frontend/
.kilo/worktrees/ginger-myrtle/frontend/src/
.kilo/worktrees/ginger-myrtle/frontend/src/app/
.kilo/worktrees/ginger-myrtle/ml/
.kilo/worktrees/ginger-myrtle/ml/app/
.tokencap/
.tokencap/agent/
.tokencap/agent/detail/
.tokencap/brain/
.tokencap/constitution/
.tokencap/constitution/constitution-history/
.tokencap/debug/
.tokencap/graph/
.tokencap/memory/
docs/
frontend/
frontend/src/
frontend/src/app/
frontend/src/app/api/
frontend/src/app/api/analysis/
frontend/src/app/api/history/
frontend/src/app/api/reports/
frontend/src/lib/
frontend/src/schemas/
frontend/src/types/
ml/
ml/app/
ml/data/
ml/tests/
ml/training/
.kilo/worktrees/ginger-myrtle/README.md
.kilo/worktrees/ginger-myrtle/frontend/AGENTS.md
.kilo/worktrees/ginger-myrtle/frontend/CLAUDE.md
.kilo/worktrees/ginger-myrtle/frontend/README.md
.kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs
.kilo/worktrees/ginger-myrtle/frontend/next.config.ts
.kilo/worktrees/ginger-myrtle/frontend/package.json
.kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs
.kilo/worktrees/ginger-myrtle/frontend/src/app/globals.css
.kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx
.kilo/worktrees/ginger-myrtle/frontend/tsconfig.json
.kilo/worktrees/ginger-myrtle/ml/app/__init__.py
.kilo/worktrees/ginger-myrtle/ml/app/anomaly.py
.kilo/worktrees/ginger-myrtle/ml/app/features.py
.kilo/worktrees/ginger-myrtle/ml/app/main.py
.kilo/worktrees/ginger-myrtle/ml/app/schemas.py
.kilo/worktrees/ginger-myrtle/ml/app/trend.py
.kilo/worktrees/ginger-myrtle/ml/requirements.txt
.tokencap/agent/START_HERE.md
.tokencap/agent/agent-pack.md
.tokencap/agent/agent.json
.tokencap/agent/allowed-context.json
.tokencap/agent/architecture.md
.tokencap/agent/context-manifest.json
.tokencap/agent/detail/index.md
.tokencap/agent/model-instructions.md
.tokencap/agent/review-rules.md
.tokencap/agent/risk-map.md
.tokencap/agent/rules.md
.tokencap/agent/skills.md
.tokencap/agent/tech-stack.md
.tokencap/brain/brain-index.json
.tokencap/brain/knowledge.json
.tokencap/constitution/api-contracts.yaml
.tokencap/constitution/architecture-laws.md
.tokencap/constitution/compliance-rules.md
.tokencap/constitution/constitution-graph.html
.tokencap/constitution/constitution-history/constitution-2026-09-19.json
.tokencap/constitution/constitution.json
.tokencap/constitution/constitution.md
.tokencap/constitution/constitution.yaml
.tokencap/constitution/critical-flows.md
.tokencap/constitution/public-contracts.md
.tokencap/constitution/schema-invariants.yaml
.tokencap/constitution/security-boundaries.md
.tokencap/debug/notes.md
.tokencap/graph/summary.md
.tokencap/memory/current.md
.tokencap/memory/dev-notes.md
.tokencap/savings.json
.tokencap/stats.json
AGENTS.md
README.md
docs/architecture.md
frontend/AGENTS.md
frontend/CLAUDE.md
frontend/README.md
frontend/eslint.config.mjs
frontend/next.config.ts
frontend/package.json
frontend/postcss.config.mjs
frontend/src/app/api/analysis/route.ts
frontend/src/app/api/history/route.ts
frontend/src/app/api/reports/route.ts
frontend/src/app/globals.css
frontend/src/app/layout.tsx
frontend/src/app/page.tsx
frontend/src/lib/ai.ts
frontend/src/lib/ml.ts
frontend/src/lib/supabase.ts
frontend/src/lib/validation.ts
frontend/src/schemas/medicalReport.ts
frontend/src/types/medical.ts
frontend/tsconfig.json
ml/app/__init__.py
ml/app/anomaly.py
ml/app/features.py
ml/app/main.py
ml/app/reference_range.py
ml/app/schemas.py
ml/app/trend.py
ml/data/medical_training_data.csv
ml/demo_runner.py
ml/requirements.txt
ml/tests/__init__.py
ml/tests/test_analysis.py
ml/training/train_anomaly_model_.py
```

## File Manifest

| File | Bytes | Score | Why |
| --- | ---: | ---: | --- |
| ml/requirements.txt | 58 | 190 | changed, project-metadata |
| AGENTS.md | 381 | 120 | changed |
| ml/app/anomaly.py | 2369 | 120 | changed |
| ml/app/features.py | 2852 | 120 | changed |
| ml/app/main.py | 3386 | 120 | changed |
| ml/app/reference_range.py | 2079 | 120 | changed |
| ml/app/schemas.py | 1997 | 120 | changed |
| ml/app/trend.py | 1285 | 120 | changed |
| ml/demo_runner.py | 755 | 120 | changed |
| .kilo/worktrees/ginger-myrtle/frontend/README.md | 1486 | 105 | project-metadata, high-signal-doc |
| .kilo/worktrees/ginger-myrtle/README.md | 107 | 105 | project-metadata, high-signal-doc |
| .tokencap/agent/START_HERE.md | 961 | 105 | project-metadata, high-signal-doc |
| frontend/README.md | 1486 | 105 | project-metadata, high-signal-doc |
| README.md | 107 | 105 | project-metadata, high-signal-doc |
| .kilo/worktrees/ginger-myrtle/frontend/package.json | 648 | 70 | project-metadata |
| .kilo/worktrees/ginger-myrtle/frontend/tsconfig.json | 704 | 70 | project-metadata |
| .kilo/worktrees/ginger-myrtle/ml/requirements.txt | 0 | 70 | project-metadata |
| frontend/package.json | 648 | 70 | project-metadata |
| frontend/tsconfig.json | 704 | 70 | project-metadata |
| .tokencap/agent/architecture.md | 605 | 35 | high-signal-doc |
| .tokencap/constitution/architecture-laws.md | 1619 | 35 | high-signal-doc |
| docs/architecture.md | 0 | 35 | high-signal-doc |
| .kilo/worktrees/ginger-myrtle/frontend/src/app/globals.css | 514 | 30 | source |
| .kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx | 719 | 30 | source |
| .kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx | 3145 | 30 | source |
| frontend/src/app/api/analysis/route.ts | 0 | 30 | source |
| frontend/src/app/api/history/route.ts | 0 | 30 | source |
| frontend/src/app/api/reports/route.ts | 0 | 30 | source |
| frontend/src/app/globals.css | 514 | 30 | source |
| frontend/src/app/layout.tsx | 719 | 30 | source |
| frontend/src/app/page.tsx | 3145 | 30 | source |
| frontend/src/lib/ai.ts | 0 | 30 | source |
| frontend/src/lib/ml.ts | 0 | 30 | source |
| frontend/src/lib/supabase.ts | 0 | 30 | source |
| frontend/src/lib/validation.ts | 0 | 30 | source |
| frontend/src/schemas/medicalReport.ts | 0 | 30 | source |
| frontend/src/types/medical.ts | 0 | 30 | source |
| ml/tests/__init__.py | 19 | 18 | test |
| ml/tests/test_analysis.py | 3725 | 18 | test |
| .kilo/worktrees/ginger-myrtle/frontend/AGENTS.md | 687 | 0 | context |
| .kilo/worktrees/ginger-myrtle/frontend/CLAUDE.md | 12 | 0 | context |
| .kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs | 483 | 0 | context |
| .kilo/worktrees/ginger-myrtle/frontend/next.config.ts | 140 | 0 | context |
| .kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs | 101 | 0 | context |
| .kilo/worktrees/ginger-myrtle/ml/app/__init__.py | 0 | 0 | context |
| .kilo/worktrees/ginger-myrtle/ml/app/anomaly.py | 0 | 0 | context |
| .kilo/worktrees/ginger-myrtle/ml/app/features.py | 0 | 0 | context |
| .kilo/worktrees/ginger-myrtle/ml/app/main.py | 0 | 0 | context |
| .kilo/worktrees/ginger-myrtle/ml/app/schemas.py | 0 | 0 | context |
| .kilo/worktrees/ginger-myrtle/ml/app/trend.py | 0 | 0 | context |
| .tokencap/agent/agent-pack.md | 2015 | 0 | context |
| .tokencap/agent/agent.json | 1280 | 0 | context |
| .tokencap/agent/allowed-context.json | 192 | 0 | context |
| .tokencap/agent/context-manifest.json | 1550 | 0 | context |
| .tokencap/agent/detail/index.md | 463 | 0 | context |
| .tokencap/agent/model-instructions.md | 1483 | 0 | context |
| .tokencap/agent/review-rules.md | 231 | 0 | context |
| .tokencap/agent/risk-map.md | 153 | 0 | context |
| .tokencap/agent/rules.md | 514 | 0 | context |
| .tokencap/agent/skills.md | 851 | 0 | context |
| .tokencap/agent/tech-stack.md | 107 | 0 | context |
| .tokencap/brain/brain-index.json | 526 | 0 | context |
| .tokencap/brain/knowledge.json | 2218 | 0 | context |
| .tokencap/constitution/api-contracts.yaml | 588 | 0 | context |
| .tokencap/constitution/compliance-rules.md | 1030 | 0 | context |
| .tokencap/constitution/constitution-history/constitution-2026-09-19.json | 7865 | 0 | context |
| .tokencap/constitution/constitution.json | 7865 | 0 | context |
| .tokencap/constitution/constitution.md | 6152 | 0 | context |
| .tokencap/constitution/constitution.yaml | 6152 | 0 | context |
| .tokencap/constitution/critical-flows.md | 66 | 0 | context |
| .tokencap/constitution/public-contracts.md | 1034 | 0 | context |
| .tokencap/constitution/schema-invariants.yaml | 51 | 0 | context |
| .tokencap/constitution/security-boundaries.md | 383 | 0 | context |
| .tokencap/debug/notes.md | 499 | 0 | context |
| .tokencap/graph/summary.md | 1504 | 0 | context |
| .tokencap/memory/current.md | 940 | 0 | context |
| .tokencap/memory/dev-notes.md | 874 | 0 | context |
| .tokencap/savings.json | 1061 | 0 | context |
| .tokencap/stats.json | 716 | 0 | context |
| frontend/AGENTS.md | 687 | 0 | context |
| frontend/CLAUDE.md | 12 | 0 | context |
| frontend/eslint.config.mjs | 483 | 0 | context |
| frontend/next.config.ts | 140 | 0 | context |
| frontend/postcss.config.mjs | 101 | 0 | context |
| ml/app/__init__.py | 0 | 0 | context |
| ml/training/train_anomaly_model_.py | 5851 | 0 | context |
| .tokencap/constitution/constitution-graph.html | 41716 | -3 | context |
| ml/data/medical_training_data.csv | 64088 | -5 | context |

## Changed Files

-  M ml/app/anomaly.py
-  M ml/app/features.py
-  M ml/app/main.py
-  M ml/app/schemas.py
-  M ml/app/trend.py
-  M ml/requirements.txt
- ?? .tokencap/
- ?? AGENTS.md
- ?? ml/app/reference_range.py
- ?? ml/demo_runner.py
- ?? ml/tests/
- ?? ml/training/

## Git Diff Snippets

### Unstaged Changes Diff

```diff
diff --git a/ml/app/anomaly.py b/ml/app/anomaly.py
index e69de29..fafc289 100644
--- a/ml/app/anomaly.py
+++ b/ml/app/anomaly.py
@@ -0,0 +1,71 @@
+import warnings
+from typing import List, Dict, Any
+import numpy as np
+from app.features import clean_num
+
+# Suppress standard sklearn warnings
+warnings.filterwarnings("ignore", category=UserWarning)
+
+def detect_anomaly(clean_values: List[float], contamination: float = 0.1) -> Dict[str, Any]:
+    """
+    Performs statistical anomaly detection using scikit-learn IsolationForest 
+    or Z-score fallback for historical test data series.
+    
+    The anomaly score is a statistical output, NOT a medical risk score.
+    Safely handles insufficient historical data.
+    """
+    n = len(clean_values)
+    
+    # Safe handling for insufficient data
+    if n < 4:
+        return {
+            "detected": False,
+            "score": 0.0,
+            "status": "insufficient_data"
+        }
+
+    # If all values are identical, no anomaly
+    if len(set(clean_values)) == 1:
+        return {
+            "detected": False,
+            "score": 0.0,
+            "status": "normal"
+        }
+
+    try:
+        from sklearn.ensemble import IsolationForest
+
+        X = np.array(clean_values).reshape(-1, 1)
+        clf = IsolationForest(contamination=contamination, random_state=42)
+        clf.fit(X)
+
+        # Evaluate the latest value (current_value)
+        latest_val = X[-1:]
+        prediction = clf.predict(latest_val)[0]  # -1 for anomaly, 1 for normal
+        raw_score = clf.score_samples(latest_val)[0] # lower means more anomalous (e.g. -0.8 to 0.0)
+
+        # Map raw IsolationForest score to a 0.0 - 1.0 score where higher is more anomalous
+        scaled_score = clean_num(min(max(round(float(-1.5 * raw_score + 0.25), 2), 0.0), 1.0))
+        detected = bool(prediction == -1)
+
+        return {
+            "detected": detected,
+            "score": scaled_score,
+            "status": "evaluated"
+        }
+    except Exception:
+        # Fallback to Z-score method if model fitting fails
+        arr = np.array(clean_values)
+        std = np.std(arr)
+        if std == 0:
+            return {"detected": False, "score": 0, "status": "normal"}
+        
+        z_score = abs((clean_values[-1] - np.mean(arr)) / std)
+        detected = bool(z_score > 2.0)
+        score = clean_num(min(round(float(z_score / 4.0), 2), 1.0))
+        
+        return {
+            "detected": detected,
+            "score": score,
+            "status": "fallback_zscore"
+        }
diff --git a/ml/app/features.py b/ml/app/features.py
index e69de29..656cc99 100644
--- a/ml/app/features.py
+++ b/ml/app/features.py
@@ -0,0 +1,91 @@
+import math
+from typing import List, Tuple, Optional, Union, Any
+import numpy as np
+
+def clean_num(val: Optional[float]) -> Optional[Union[int, float]]:
+    """
+    Rounds float to 2 decimal places and formats whole numbers as clean integers.
+    """
+    if val is None:
+        return None
+    r = round(val, 2)
+    if r.is_integer():
+        return int(r)
+    return r
+
+def extract_clean_numeric_values(raw_values: List[Any]) -> List[float]:
+    """
+    Sanitizes raw values input by filtering out None, NaNs, infinities, 
+    and converting valid numerical strings.
+    """
+    clean_values = []
+    if not isinstance(raw_values, list):
+        return clean_values
+
+    for item in raw_values:
+        if item is None:
+            continue
+        try:
+            val = float(item)
+            if not (math.isnan(val) or math.isinf(val)):
+                clean_values.append(val)
+        except (ValueError, TypeError):
+            continue
+            
+    return clean_values
+
+def calculate_feature_statistics(raw_values: List[Any]) -> Tuple[List[float], dict, dict, Optional[Union[int, float]], Optional[Union[int, float]], int]:
+    """
+    Computes statistical feature metrics from historical test observations.
+    
+    Returns:
+        (clean_values, stats_dict, change_dict, current_value, previous_value, data_points)
+    """
+    clean_values = extract_clean_numeric_values(raw_values)
+    n = len(clean_values)
+    
+    if n == 0:
+        return clean_values, {
+            "mean": None,
+            "minimum": None,
+            "maximum": None,
+            "standard_deviation": None
+        }, {
+            "absolute": None,
+            "percentage": None
+        }, None, None, 0
+
+    current_val = clean_num(clean_values[-1])
+    previous_val = clean_num(clean_values[-2]) if n >= 2 else None
+
+    mean_val = clean_num(float(np.mean(clean_values)))
+    min_val = clean_num(float(np.min(clean_values)))
+    max_val = clean_num(float(np.max(clean_values)))
+    
+    # Calculate sample standard deviation if sample size > 1, else 0
+    std_val = clean_num(float(np.std(clean_values, ddof=1))) if n > 1 else 0
+
+    stats = {
+        "mean": mean_val,
+        "minimum": min_val,
+        "maximum": max_val,
+        "standard_deviation": std_val
+    }
+
+    if previous_val is not None and current_val is not None:
+        abs_change = clean_num(clean_values[-1] - clean_values[-2])
+        if clean_values[-2] != 0:
+            pct_change = clean_num(((clean_values[-1] - clean_values[-2]) / abs(clean_values[-2])) * 100)
+        else:
+            pct_change = None
+        change = {
+            "absolute": abs_change,
+            "percentage": pct_change
+        }
+    else:
+        change = {
+            "absolute": None,
+            "percentage": None
+        }
+
+    return clean_values, stats, change, current_val, previous_val, n
diff --git a/ml/app/main.py b/ml/app/main.py
index e69de29..848fb2a 100644
--- a/ml/app/main.py
+++ b/ml/app/main.py
@@ -0,0 +1,101 @@
+from typing import List, Union, Dict, Any
+from fastapi import FastAPI, HTTPException
+from fastapi.middleware.cors import CORSMiddleware
+
+from app.schemas import (
+    TestInput,
+    BatchAnalysisInput,
+    MLFindingsOutput,
+    StatisticsOutput,
+    ChangeOutput,
+    TrendOutput,
+    ReferenceRangeOutput,
+    AnomalyOutput,
+)
+from app.features import calculate_feature_statistics
+from app.trend import calculate_trend
+from app.anomaly import detect_anomaly
+from app.reference_range import analyze_reference_range
+
+app = FastAPI(
+    title="AI Medical Report Simplifier - ML Analysis Service",
+    description="Feature engineering, trend analysis, statistical anomaly detection, and reference range analysis for historical medical test data.",
+    version="1.0.0",
+)
+
+# Enable CORS for backend/frontend consumption
+app.add_middleware(
+    CORSMiddleware,
+    allow_origins=["*"],
+    allow_credentials=True,
+    allow_methods=["*"],
+    allow_headers=["*"],
+)
+
+def run_ml_pipeline(test_input: TestInput) -> MLFindingsOutput:
+    """
+    Executes the complete ML Analysis Pipeline:
+    Input -> Feature Engineering -> Trend Analysis -> Anomaly Detection -> Reference Range Analysis -> Findings JSON
+    """
+    clean_values, stats, change, current_val, prev_val, n = calculate_feature_statistics(test_input.values)
+    
+    # 1. Trend Analysis
+    trend_res = calculate_trend(clean_values)
+    
+    # 2. Anomaly Detection
+    anomaly_res = detect_anomaly(clean_values)
+    
+    # 3. Reference Range Analysis
+    ref_min = test_input.reference_range.min if test_input.reference_range else None
+    ref_max = test_input.reference_range.max if test_input.reference_range else None
+    ref_res = analyze_reference_range(current_val, ref_min, ref_max)
+
+    return MLFindingsOutput(
+        test_name=test_input.test_name,
+        unit=test_input.unit,
+        current_value=current_val,
+        previous_value=prev_val,
+        statistics=StatisticsOutput(**stats),
+        change=ChangeOutput(**change),
+        trend=TrendOutput(
+            direction=trend_res["direction"],
+            slope=trend_res["slope"]
+        ),
+        reference_range=ReferenceRangeOutput(
+            min=ref_res["min"],
+            max=ref_res["max"],
+            within_range=ref_res["within_range"],
+            message=ref_res["message"]
+        ),
+        anomaly=AnomalyOutput(
+            detected=anomaly_res["detected"],
+            score=anomaly_res["score"],
+            status=anomaly_res.get("status")
+        ),
+        data_points=n
+    )
+
+@app.get("/health")
+def health_check():
+    return {"status": "healthy", "service": "ML Analysis Service"}
+
+@app.post("/analyze", response_model=MLFindingsOutput)
+def analyze_test(payload: TestInput):
+    """
+    Analyzes a single medical test series.
+    """
+    try:
+        return run_ml_pipeline(payload)
+    except Exception as e:
+        raise HTTPException(status_code=400, detail=str(e))
+
+@app.post("/analyze/batch", response_model=List[MLFindingsOutput])
+def analyze_batch(payload: Union[BatchAnalysisInput, List[TestInput]]):
+    """
+    Analyzes multiple medical test series in batch.
+    """
+    try:
+        tests = payload.tests if isinstance(payload, BatchAnalysisInput) else payload
+        return [run_ml_pipeline(test_item) for test_item in tests]
+    except Exception as e:
+        raise HTTPException(status_code=400, detail=str(e))
diff --git a/ml/app/schemas.py b/ml/app/schemas.py
index e69de29..bd8b2b1 100644
--- a/ml/app/schemas.py
+++ b/ml/app/schemas.py
@@ -0,0 +1,53 @@
+from typing import List, Optional, Union, Any
+from pydantic import BaseModel, Field
+
+class ReferenceRangeInput(BaseModel):
+    min: Optional[Union[int, float]] = None
+    max: Optional[Union[int, float]] = None
+
+class TestInput(BaseModel):
+    test_name: str = Field(..., description="Name of the medical test")
+    values: List[Any] = Field(..., description="List of historical to current test values")
+    reference_range: Optional[ReferenceRangeInput] = None
+    unit: Optional[str] = None
+
+class BatchAnalysisInput(BaseModel):
+    tests: List[TestInput]
+
+class StatisticsOutput(BaseModel):
+    mean: Optional[Union[int, float]] = None
+    minimum: Optional[Union[int, float]] = None
+    maximum: Optional[Union[int, float]] = None
+    standard_deviation: Optional[Union[int, float]] = None
+
+class ChangeOutput(BaseModel):
+    absolute: Optional[Union[int, float]] = None
+    percentage: Optional[Union[int, float]] = None
+
+class TrendOutput(BaseModel):
+    direction: str = Field(..., description="increasing, decreasing, stable, or insufficient_data")
+    slope: Optional[Union[int, float]] = None
+
+class ReferenceRangeOutput(BaseModel):
+    min: Optional[Union[int, float]] = None
+    max: Optional[Union[int, float]] = None
+    within_range: Optional[bool] = None
+    message: Optional[str] = Field(None, description="Neutral statement regarding reference range")
+
+class AnomalyOutput(BaseModel):
+    detected: bool = Field(False, description="Whether statistical anomaly was detected")
+    score: Union[int, float] = Field(0.0, description="Statistical anomaly score between 0.0 and 1.0")
+    status: Optional[str] = None
+
+class MLFindingsOutput(BaseModel):
+    test_name: str
+    unit: Optional[str] = None
+    current_value: Optional[Union[int, float]] = None
+    previous_value: Optional[Union[int, float]] = None
+    statistics: StatisticsOutput
+    change: ChangeOutput
+    trend: TrendOutput
+    reference_range: ReferenceRangeOutput
+    anomaly: AnomalyOutput
+    data_points: int
+
diff --git a/ml/app/trend.py b/ml/app/trend.py
index e69de29..6bf2682 100644
--- a/ml/app/trend.py
+++ b/ml/app/trend.py
@@ -0,0 +1,46 @@
+from typing import List, Dict, Any, Optional
+import numpy as np
+from app.features import clean_num
+
+def calculate_trend(clean_values: List[float], abs_slope_threshold: float = 0.1, rel_slope_threshold: float = 0.015) -> Dict[str, Any]:
+    """
+    Performs linear regression trend analysis on historical test values.
+    
+    Classifies into:
+    - 'increasing'
+    - 'decreasing'
+    - 'stable'
+    - 'insufficient_data'
+    
+    Does NOT make medical diagnoses.
+    """
+    n = len(clean_values)
+    if n < 2:
+        return {
+            "direction": "insufficient_data",
+            "slope": None
+        }
+
+    x = np.arange(n)
+    y = np.array(clean_values, dtype=float)
+
+    # Compute OLS linear regression slope
+    slope, _ = np.polyfit(x, y, 1)
+    slope_clean = clean_num(float(slope))
+    mean_val = float(np.mean(y))
+
+    # Avoid zero division
+    rel_slope = (slope / mean_val) if mean_val != 0 else slope
+
+    # Determine trend direction using dual threshold (absolute and relative)
+    if abs(slope) < abs_slope_threshold or abs(rel_slope) < rel_slope_threshold:
+        direction = "stable"
+    elif slope > 0:
+        direction = "increasing"
+    else:
+        direction = "decreasing"
+
+    return {
+        "direction": direction,
+        "slope": slope_clean
+    }
diff --git a/ml/requirements.txt b/ml/requirements.txt
index e69de29..7eaf121 100644
--- a/ml/requirements.txt
+++ b/ml/requirements.txt
@@ -0,0 +1,7 @@
+fastapi
+uvicorn
+pydantic
+numpy
+pandas
+scikit-learn
+pytest
```

## TODO / FIXME / HACK Notes

- .tokencap/memory/current.md:28 - No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/dev-notes.md:27 - No failing test output or TODO/FIXME markers detected.

## Selected File Context

### ml/requirements.txt

| Field | Value |
| --- | --- |
| Bytes | 58 |
| Score | 190 |
| Why | changed, project-metadata |
| Status | Full content |


```txt
fastapi
uvicorn
pydantic
numpy
pandas
scikit-learn
pytest
```

### AGENTS.md

| Field | Value |
| --- | --- |
| Bytes | 381 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# TokenCap Start Here

Project intelligence is generated locally in `.tokencap/`.

1. Read `.tokencap/agent/START_HERE.md`.
2. Use `.tokencap/agent/allowed-context.json` to find task-relevant files.
3. Use the connected TokenCap MCP server for overview, search, impact, memory, and debug context.
4. Do not scan the repository broadly unless the generated context is insufficient.
```

### ml/app/anomaly.py

| Field | Value |
| --- | --- |
| Bytes | 2369 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```py
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
```

### ml/app/features.py

| Field | Value |
| --- | --- |
| Bytes | 2852 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```py
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
```

### ml/app/main.py

| Field | Value |
| --- | --- |
| Bytes | 3386 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```py
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
```

### ml/app/reference_range.py

| Field | Value |
| --- | --- |
| Bytes | 2079 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```py
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
```

### ml/app/schemas.py

| Field | Value |
| --- | --- |
| Bytes | 1997 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```py
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
```

### ml/app/trend.py

| Field | Value |
| --- | --- |
| Bytes | 1285 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```py
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
```

### ml/demo_runner.py

| Field | Value |
| --- | --- |
| Bytes | 755 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```py
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
```

### .kilo/worktrees/ginger-myrtle/frontend/README.md

| Field | Value |
| --- | --- |
| Bytes | 1486 |
| Score | 105 |
| Why | project-metadata, high-signal-doc |
| Status | Full content |


```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

### .kilo/worktrees/ginger-myrtle/README.md

| Field | Value |
| --- | --- |
| Bytes | 107 |
| Score | 105 |
| Why | project-metadata, high-signal-doc |
| Status | Full content |


```markdown
   # AI-Powered Medical Report Simplifier
   Hackathon project that simplifies medical reports using AI.
```

### .tokencap/agent/START_HERE.md

| Field | Value |
| --- | --- |
| Bytes | 961 |
| Score | 105 |
| Why | project-metadata, high-signal-doc |
| Status | Full content |


```markdown
# START HERE - ai-medical-report-simplifier

> Generated by TokenCap - 2026-09-19T06:01:15.103Z

Project type: Unknown
Architecture: Modular

## Read in This Order

1. `allowed-context.json` - locate files for the current task.
2. `detail/index.md` - choose only the intelligence needed.
3. Use TokenCap MCP for overview, search, impact, memory, and debug context.

## Critical Areas

No critical areas detected.

## Review Groups

No review groups detected.

## Non-Negotiable Rules

- App Router entry points live in app/ - follow Next.js file conventions

## Detail Map

- `agent-pack.md`: full onboarding and architecture context
- `architecture.md`: dependency chains and boundaries
- `rules.md` and `review-rules.md`: conventions and review scope
- `risk-map.md`: high-risk files before editing
- `tech-stack.md` and `skills.md`: platform-specific context

Do not scan the repository broadly unless the generated context and MCP results are insufficient.
```

### frontend/README.md

| Field | Value |
| --- | --- |
| Bytes | 1486 |
| Score | 105 |
| Why | project-metadata, high-signal-doc |
| Status | Full content |


```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

### README.md

| Field | Value |
| --- | --- |
| Bytes | 107 |
| Score | 105 |
| Why | project-metadata, high-signal-doc |
| Status | Full content |


```markdown
   # AI-Powered Medical Report Simplifier
   Hackathon project that simplifies medical reports using AI.
```

### .kilo/worktrees/ginger-myrtle/frontend/package.json

| Field | Value |
| --- | --- |
| Bytes | 648 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.116.0",
    "next": "16.3.5",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "recharts": "^3.10.1",
    "zod": "^4.6.5"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### .kilo/worktrees/ginger-myrtle/frontend/tsconfig.json

| Field | Value |
| --- | --- |
| Bytes | 704 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### .kilo/worktrees/ginger-myrtle/ml/requirements.txt

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```txt

```

### frontend/package.json

| Field | Value |
| --- | --- |
| Bytes | 648 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.116.0",
    "next": "16.3.5",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "recharts": "^3.10.1",
    "zod": "^4.6.5"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### frontend/tsconfig.json

| Field | Value |
| --- | --- |
| Bytes | 704 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### .tokencap/agent/architecture.md

| Field | Value |
| --- | --- |
| Bytes | 605 |
| Score | 35 |
| Why | high-signal-doc |
| Status | Full content |


```markdown
# Architecture - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T06:01:14.478Z

---

## Overview

No end-to-end layered dependency chain was verified from the import graph; treat this repository as modular until a concrete flow is established. **Config** is the largest detected subsystem by file count. Detected subsystems: Config, Frontend.

---

## Architecture Pattern

```
Modular
```

---

## Subsystems

| Cluster | Files | Risk | Central File |
| --- | --- | --- | --- |
| **Config** | 6 | [LOW] LOW | `eslint.config.mjs` |
| **Frontend** | 4 | [LOW] LOW | `layout.tsx` |
```

### .tokencap/constitution/architecture-laws.md

| Field | Value |
| --- | --- |
| Bytes | 1619 |
| Score | 35 |
| Why | high-signal-doc |
| Status | Full content |


```markdown
# Architecture Laws

> TokenCap Constitution Engine

## 🟠 CONST-ARCH-001 — HIGH

**Services cannot import UI components.**

> **Why:** Importing UI components into services couples server-side logic to browser rendering. This breaks SSR, testability, and separation of concerns.

> **What breaks:** Server-side services gain browser-only dependencies. Unit tests for services fail. SSR breaks.

## 🟠 CONST-ARCH-002 — HIGH

**Controllers cannot access the database directly.**

> **Why:** Direct DB access in controllers bypasses the service layer. This breaks the layered architecture and makes logic untestable.

> **What breaks:** Business logic leaks into controllers. Database coupling makes refactoring expensive.

## 🟠 CONST-ARCH-003 — HIGH

**Route handlers cannot access the database directly.**

> **Why:** Routes should delegate to services/controllers, not query the database themselves.

> **What breaks:** Business logic scattered across route files. Impossible to test in isolation.

## 🟠 CONST-ARCH-004 — HIGH

**UI components cannot import server-only modules.**

> **Why:** Server-only modules may contain secrets or Node.js-only APIs that crash in the browser.

> **What breaks:** Build errors in browser environments. Potential secret exposure.

## 🟠 CONST-ARCH-005 — HIGH

**High-impact clusters (Config) must not gain new circular dependencies.**

> **Why:** High-impact clusters already coordinate many modules. Adding circular imports makes builds fragile.

> **What breaks:** Module resolution fails. Build tools (webpack, esbuild) may hang or produce incorrect output.
```

### docs/architecture.md

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 35 |
| Why | high-signal-doc |
| Status | Full content |


```markdown

```

### .kilo/worktrees/ginger-myrtle/frontend/src/app/globals.css

| Field | Value |
| --- | --- |
| Bytes | 514 |
| Score | 30 |
| Why | source |
| Status | Full content |


```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

### .kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx

| Field | Value |
| --- | --- |
| Bytes | 719 |
| Score | 30 |
| Why | source |
| Status | Full content |


```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

### .kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx

| Field | Value |
| --- | --- |
| Bytes | 3145 |
| Score | 30 |
| Why | source |
| Status | Full content |


```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
```

### frontend/src/app/api/analysis/route.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### frontend/src/app/api/history/route.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### frontend/src/app/api/reports/route.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### frontend/src/app/globals.css

| Field | Value |
| --- | --- |
| Bytes | 514 |
| Score | 30 |
| Why | source |
| Status | Full content |


```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

### frontend/src/app/layout.tsx

| Field | Value |
| --- | --- |
| Bytes | 719 |
| Score | 30 |
| Why | source |
| Status | Full content |


```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

### frontend/src/app/page.tsx

| Field | Value |
| --- | --- |
| Bytes | 3145 |
| Score | 30 |
| Why | source |
| Status | Full content |


```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
```

### frontend/src/lib/ai.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### frontend/src/lib/ml.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### frontend/src/lib/supabase.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### frontend/src/lib/validation.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### frontend/src/schemas/medicalReport.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### frontend/src/types/medical.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### ml/tests/__init__.py

| Field | Value |
| --- | --- |
| Bytes | 19 |
| Score | 18 |
| Why | test |
| Status | Full content |


```py
# ML tests package
```

### ml/tests/test_analysis.py

| Field | Value |
| --- | --- |
| Bytes | 3725 |
| Score | 18 |
| Why | test |
| Status | Full content |


```py
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
```

### .kilo/worktrees/ginger-myrtle/frontend/AGENTS.md

| Field | Value |
| --- | --- |
| Bytes | 687 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
```

### .kilo/worktrees/ginger-myrtle/frontend/CLAUDE.md

| Field | Value |
| --- | --- |
| Bytes | 12 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
@AGENTS.md
```

### .kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs

| Field | Value |
| --- | --- |
| Bytes | 483 |
| Score | 0 |
| Why | context |
| Status | Full content |


```mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

### .kilo/worktrees/ginger-myrtle/frontend/next.config.ts

| Field | Value |
| --- | --- |
| Bytes | 140 |
| Score | 0 |
| Why | context |
| Status | Full content |


```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### .kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs

| Field | Value |
| --- | --- |
| Bytes | 101 |
| Score | 0 |
| Why | context |
| Status | Full content |


```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### .kilo/worktrees/ginger-myrtle/ml/app/__init__.py

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 0 |
| Why | context |
| Status | Full content |


```py

```

### .kilo/worktrees/ginger-myrtle/ml/app/anomaly.py

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 0 |
| Why | context |
| Status | Full content |


```py

```

### .kilo/worktrees/ginger-myrtle/ml/app/features.py

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 0 |
| Why | context |
| Status | Full content |


```py

```

### .kilo/worktrees/ginger-myrtle/ml/app/main.py

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 0 |
| Why | context |
| Status | Full content |


```py

```

### .kilo/worktrees/ginger-myrtle/ml/app/schemas.py

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 0 |
| Why | context |
| Status | Full content |


```py

```

### .kilo/worktrees/ginger-myrtle/ml/app/trend.py

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 0 |
| Why | context |
| Status | Full content |


```py

```

### .tokencap/agent/agent-pack.md

| Field | Value |
| --- | --- |
| Bytes | 2015 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Agent Pack - ai-medical-report-simplifier

> This file was auto-generated by **TokenCap v0.8**.
> Paste this entire file into ChatGPT, Claude, Gemini, Cursor, Windsurf, Cline, Roo Code, or OpenHands
> to give the AI agent full project intelligence before it touches any code.

**Generated:** 2026-09-19T06:01:14.479Z
**Project:** ai-medical-report-simplifier
**Type:** Unknown

---

## 1. Tech Stack


---

## 2. Architecture

```
Modular
```

No end-to-end layered dependency chain was verified from the import graph; treat this repository as modular until a concrete flow is established. **Config** is the largest detected subsystem by file count. Detected subsystems: Config, Frontend.

---

## 3. Project Rules

- App Router entry points live in app/ - follow Next.js file conventions

---

## 4. Important Files

- `.kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs`
- `.kilo/worktrees/ginger-myrtle/frontend/next.config.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs`
- `frontend/eslint.config.mjs`
- `frontend/next.config.ts`
- `frontend/postcss.config.mjs`

---

## 5. High-Risk Areas

_No elevated-risk areas detected._

---

## 7. Core Features

- Frontend

---

## 8. Agent Instructions

You are an AI agent working on **ai-medical-report-simplifier**.

Before making any changes:
1. Understand the **Modular** architecture pattern.
2. Follow all **Project Rules** listed in Section 3.
3. Check the **High-Risk Areas** - any change there requires extra review.
4. When touching files in a **Review Group**, review all files in that group together.
5. Never hard-code secrets or skip validation at API boundaries.

The most important files in this project are:
- `.kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs`
- `.kilo/worktrees/ginger-myrtle/frontend/next.config.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs`
- `frontend/eslint.config.mjs`
- `frontend/next.config.ts`

Start here. Work methodically. Ask before making assumptions about intent.
```

### .tokencap/agent/agent.json

| Field | Value |
| --- | --- |
| Bytes | 1280 |
| Score | 0 |
| Why | context |
| Status | Full content |


```json
{
  "version": "0.8",
  "projectName": "ai-medical-report-simplifier",
  "generatedAt": "2026-09-19T06:01:14.479Z",
  "projectType": "Unknown",
  "techStack": {
    "languages": [],
    "frameworks": [],
    "databases": [],
    "auth": [],
    "testing": [],
    "buildTools": [],
    "cloudSdks": [],
    "payments": [],
    "externalServices": []
  },
  "architecture": {
    "style": "Modular",
    "layers": [
      "Modular"
    ],
    "clusters": [
      {
        "name": "Config",
        "size": 6,
        "risk": "LOW",
        "centralFile": "eslint.config.mjs"
      },
      {
        "name": "Frontend",
        "size": 4,
        "risk": "LOW",
        "centralFile": "layout.tsx"
      }
    ],
    "criticalChains": [],
    "evidence": []
  },
  "criticalFiles": [
    ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
    ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
    "frontend/eslint.config.mjs",
    "frontend/next.config.ts",
    "frontend/postcss.config.mjs"
  ],
  "riskAreas": [],
  "reviewGroups": [],
  "rules": [
    "App Router entry points live in app/ - follow Next.js file conventions"
  ],
  "coreFeatures": [
    "Frontend"
  ],
  "agentInjectHooks": {}
}
```

### .tokencap/agent/allowed-context.json

| Field | Value |
| --- | --- |
| Bytes | 192 |
| Score | 0 |
| Why | context |
| Status | Full content |


```json
{
  "config": [
    ".kilo/worktrees/ginger-myrtle/frontend/**",
    "frontend/**"
  ],
  "frontend": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
    "frontend/src/app/**"
  ]
}
```

### .tokencap/agent/context-manifest.json

| Field | Value |
| --- | --- |
| Bytes | 1550 |
| Score | 0 |
| Why | context |
| Status | Full content |


```json
{
  "version": "1.0.0",
  "generatedAt": "2026-09-19T06:01:15.104Z",
  "entry": "START_HERE.md",
  "project": {
    "name": "ai-medical-report-simplifier",
    "type": "Unknown",
    "architectureStyle": "Modular"
  },
  "clusters": [
    "config",
    "frontend"
  ],
  "criticalFiles": [
    ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
    ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
    "frontend/eslint.config.mjs",
    "frontend/next.config.ts",
    "frontend/postcss.config.mjs"
  ],
  "riskAreas": [],
  "reviewGroups": [],
  "allowedContext": {
    "config": [
      ".kilo/worktrees/ginger-myrtle/frontend/**",
      "frontend/**"
    ],
    "frontend": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
      "frontend/src/app/**"
    ]
  },
  "recommendedReads": {},
  "files": {
    "entry": "START_HERE.md",
    "intelligence": "agent-pack.md",
    "allowedContext": "allowed-context.json",
    "modelInstructions": "model-instructions.md",
    "architecture": "architecture.md",
    "rules": "rules.md",
    "reviewRules": "review-rules.md",
    "riskMap": "risk-map.md",
    "techStack": "tech-stack.md",
    "skills": "skills.md",
    "machineReadable": "agent.json"
  },
  "meta": {
    "tokencapVersion": "1.0.0",
    "description": "Self-Loading Universal Context Layer - machine-readable repository intelligence index.",
    "usage": "Read entry file first, then use allowedContext and recommendedReads for navigation."
  }
}
```

### .tokencap/agent/detail/index.md

| Field | Value |
| --- | --- |
| Bytes | 463 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# TokenCap Detail Index

Read only the document relevant to the current task.

- `../agent-pack.md`: complete project intelligence
- `../architecture.md`: architecture and dependency chains
- `../rules.md`: conventions
- `../review-rules.md`: review groups
- `../risk-map.md`: risky areas
- `../tech-stack.md`: detected technology
- `../skills.md`: agent skills
- `../ui-map.md`: compact screen and UI context
- `../context-manifest.json`: machine-readable index
```

### .tokencap/agent/model-instructions.md

| Field | Value |
| --- | --- |
| Bytes | 1483 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Model Instructions - ai-medical-report-simplifier

> Generated by TokenCap v1.0.0 - 2026-09-19T06:01:15.104Z

---

## Before Touching Code

1. Read `START_HERE.md` - repository overview
2. Read `agent-pack.md` - full project intelligence
3. Use `allowed-context.json` - locate files for your task
4. Read `risk-map.md` before modifying HIGH or CRITICAL areas

---

## Architecture

Modular

---

## Where Things Live

- **Config** -> `.kilo/worktrees/ginger-myrtle/frontend/**, frontend/**`
- **Frontend** -> `.kilo/worktrees/ginger-myrtle/frontend/src/app/**, frontend/src/app/**`

---

## Non-Negotiable Rules

- App Router entry points live in app/ - follow Next.js file conventions

---

## High-Risk Files - Extra Care Required

- No high-risk files identified.

---

## Do Not

- Scan the full repository unless the task specifically requires it
- Make assumptions about architecture - read `architecture.md` first
- Modify HIGH or CRITICAL files without checking `risk-map.md`
- Change files in multiple clusters in one pass without checking review groups
- Create new patterns that contradict `rules.md`

---

## Navigation

| Tool | How to use it |
|---|---|
| Find files for a feature | Look up topic in `allowed-context.json` |
| Understand the full project | Read `agent-pack.md` |
| Check what changed recently | Read `TOKENCAP.md` Recent Changes section |
| Understand dependencies | Read `architecture.md` |
| Know what to review together | Read `review-rules.md` |
```

### .tokencap/agent/review-rules.md

| Field | Value |
| --- | --- |
| Bytes | 231 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Review Rules - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T06:01:14.479Z
> When reviewing changes in any of these groups, review ALL listed files together.

---

_No high-risk review groups detected._
```

### .tokencap/agent/risk-map.md

| Field | Value |
| --- | --- |
| Bytes | 153 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Risk Map - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T06:01:14.479Z

---

## Summary


_No elevated-risk areas detected._
```

### .tokencap/agent/rules.md

| Field | Value |
| --- | --- |
| Bytes | 514 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Project Rules - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T06:01:14.478Z
> These rules are inferred automatically from the project structure and tech stack.

---

## Folder Conventions

### `app/`

**Rule:** App Router entry points live in app/ - follow Next.js file conventions

**Example:** `.kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx`

---

## Quick Reference

All conventions at a glance:

- App Router entry points live in app/ - follow Next.js file conventions
```

### .tokencap/agent/skills.md

| Field | Value |
| --- | --- |
| Bytes | 851 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Agent Skills - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T06:01:14.479Z
> This file teaches an AI agent the essential knowledge needed to work on this project.

---

## Project Type

You are working on a **Unknown** project.

---

## Core Features

- Frontend

---

## Architecture

```
Modular
```

---

## Project Conventions

Follow these rules when writing or reviewing code:

- App Router entry points live in app/ - follow Next.js file conventions

---

## Important Files

These files are critical - understand them before making changes:

- `.kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs`
- `.kilo/worktrees/ginger-myrtle/frontend/next.config.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs`
- `frontend/eslint.config.mjs`
- `frontend/next.config.ts`
- `frontend/postcss.config.mjs`
```

### .tokencap/agent/tech-stack.md

| Field | Value |
| --- | --- |
| Bytes | 107 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Tech Stack - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T06:01:14.478Z

---
```

### .tokencap/brain/brain-index.json

| Field | Value |
| --- | --- |
| Bytes | 526 |
| Score | 0 |
| Why | context |
| Status | Full content |


```json
{
  "config": [
    ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
    ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
    "frontend/eslint.config.mjs",
    "frontend/next.config.ts",
    "frontend/postcss.config.mjs"
  ],
  "frontend": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx",
    "frontend/src/app/layout.tsx",
    "frontend/src/app/page.tsx"
  ]
}
```

### .tokencap/brain/knowledge.json

| Field | Value |
| --- | --- |
| Bytes | 2218 |
| Score | 0 |
| Why | context |
| Status | Full content |


```json
{
  "version": "0.9",
  "generatedAt": "2026-09-19T06:01:15.745Z",
  "techStack": {
    "languages": [],
    "frameworks": [],
    "databases": [],
    "orms": [],
    "auth": [],
    "testing": [],
    "buildTools": [],
    "cloudSdks": [],
    "payments": [],
    "other": [],
    "packageManager": null,
    "summary": "(unknown)"
  },
  "clusters": [
    {
      "name": "Config",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
        ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
        "frontend/eslint.config.mjs",
        "frontend/next.config.ts",
        "frontend/postcss.config.mjs"
      ],
      "risk": "LOW",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Frontend",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx",
        "frontend/src/app/layout.tsx",
        "frontend/src/app/page.tsx"
      ],
      "risk": "LOW",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx",
      "dependsOn": [],
      "usedBy": []
    }
  ],
  "criticalFiles": [
    ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
    ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
    "frontend/eslint.config.mjs",
    "frontend/next.config.ts",
    "frontend/postcss.config.mjs"
  ],
  "architecture": {
    "style": "Modular",
    "layers": [
      "Modular"
    ],
    "criticalChains": []
  },
  "riskAreas": [],
  "reviewGroups": [],
  "recentChanges": {
    "branch": "person4",
    "filesChanged": 12,
    "riskLevel": "HIGH",
    "featuresAdded": [
      "Application Logic: Training",
      "Authentication System: .Tokencap",
      "Documentation: AGENTS",
      "Test Suite: Tests"
    ],
    "featuresModified": [
      "Frontend Layer",
      "Application Logic: Ml"
    ]
  },
  "rules": [
    "App Router entry points live in app/ — follow Next.js file conventions"
  ]
}
```

### .tokencap/constitution/api-contracts.yaml

| Field | Value |
| --- | --- |
| Bytes | 588 |
| Score | 0 |
| Why | context |
| Status | Full content |


```yaml
# API Contracts
# TokenCap Constitution Engine

CONST-API-001: GET /health public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.76
  source:     fastapi
  derivedFrom: ml/app/main.py

CONST-API-002: POST /analyze public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.76
  source:     fastapi
  derivedFrom: ml/app/main.py

CONST-API-003: POST /analyze/batch public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.76
  source:     fastapi
  derivedFrom: ml/app/main.py
```

### .tokencap/constitution/compliance-rules.md

| Field | Value |
| --- | --- |
| Bytes | 1030 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Compliance Rules

> TokenCap Constitution Engine

## 🔴 CONST-COMP-001 — CRITICAL

**HIPAA compliance — protected health information (PHI) handling must remain compliant.**

> **Why:** HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.

> **What breaks:** HIPAA violation. Criminal liability. Patient data exposed.

*Files:* `.tokencap/constitution/compliance-rules.md`, `.tokencap/constitution/constitution.md`, `.tokencap/constitution/constitution.yaml`, `.tokencap/snapshot.md`

## 🔴 CONST-COMP-002 — CRITICAL

**Audit logging must always be written and never removed.**

> **Why:** Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.

> **What breaks:** Compliance audit failures. Inability to investigate security incidents. Regulatory violations.

*Files:* `.tokencap/constitution/compliance-rules.md`, `.tokencap/constitution/constitution.md`, `.tokencap/constitution/constitution.yaml`
```

### .tokencap/constitution/constitution-history/constitution-2026-09-19.json

| Field | Value |
| --- | --- |
| Bytes | 7865 |
| Score | 0 |
| Why | context |
| Status | Full content |


```json
{
  "version": "1.2",
  "generatedAt": "2026-09-19T06:01:15.238Z",
  "rules": [
    {
      "id": "CONST-API-001",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "GET /health public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /health."
      ],
      "derivedFrom": [
        "ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-002",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "POST /analyze public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /analyze."
      ],
      "derivedFrom": [
        "ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-003",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "POST /analyze/batch public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /analyze/batch."
      ],
      "derivedFrom": [
        "ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-001",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Services cannot import UI components.",
      "reason": "Importing UI components into services couples server-side logic to browser rendering. This breaks SSR, testability, and separation of concerns.",
      "whatBreaks": "Server-side services gain browser-only dependencies. Unit tests for services fail. SSR breaks.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-002",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Controllers cannot access the database directly.",
      "reason": "Direct DB access in controllers bypasses the service layer. This breaks the layered architecture and makes logic untestable.",
      "whatBreaks": "Business logic leaks into controllers. Database coupling makes refactoring expensive.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-003",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Route handlers cannot access the database directly.",
      "reason": "Routes should delegate to services/controllers, not query the database themselves.",
      "whatBreaks": "Business logic scattered across route files. Impossible to test in isolation.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-004",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "UI components cannot import server-only modules.",
      "reason": "Server-only modules may contain secrets or Node.js-only APIs that crash in the browser.",
      "whatBreaks": "Build errors in browser environments. Potential secret exposure.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-005",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.8,
      "source": "heuristic",
      "description": "High-impact clusters (Config) must not gain new circular dependencies.",
      "reason": "High-impact clusters already coordinate many modules. Adding circular imports makes builds fragile.",
      "whatBreaks": "Module resolution fails. Build tools (webpack, esbuild) may hang or produce incorrect output.",
      "examples": [
        "Use dependency injection or an event bus to break cycles."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-SEC-001",
      "category": "Security",
      "severity": "CRITICAL",
      "confidence": 0.99,
      "source": "heuristic",
      "description": "Environment variable files (.env) must never be committed to version control.",
      "reason": ".env files contain secrets. Committing them exposes credentials to all repository users.",
      "whatBreaks": "All secrets in .env become public. Immediate security incident.",
      "examples": [
        "Ensure .env is in .gitignore.",
        "Use a secrets manager for production."
      ],
      "derivedFrom": [
        ".env.example"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-COMP-001",
      "category": "Compliance",
      "severity": "CRITICAL",
      "confidence": 0.75,
      "source": "heuristic",
      "description": "HIPAA compliance — protected health information (PHI) handling must remain compliant.",
      "reason": "HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.",
      "whatBreaks": "HIPAA violation. Criminal liability. Patient data exposed.",
      "examples": [
        "Always review HIPAA-related code before merging.",
        "Found in: .tokencap/constitution/compliance-rules.md, .tokencap/constitution/constitution.md"
      ],
      "derivedFrom": [
        ".tokencap/constitution/compliance-rules.md",
        ".tokencap/constitution/constitution.md",
        ".tokencap/constitution/constitution.yaml",
        ".tokencap/snapshot.md"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-COMP-002",
      "category": "Compliance",
      "severity": "CRITICAL",
      "confidence": 0.85,
      "source": "heuristic",
      "description": "Audit logging must always be written and never removed.",
      "reason": "Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.",
      "whatBreaks": "Compliance audit failures. Inability to investigate security incidents. Regulatory violations.",
      "examples": [
        "Always review AUDIT-related code before merging.",
        "Found in: .tokencap/constitution/compliance-rules.md, .tokencap/constitution/constitution.md"
      ],
      "derivedFrom": [
        ".tokencap/constitution/compliance-rules.md",
        ".tokencap/constitution/constitution.md",
        ".tokencap/constitution/constitution.yaml"
      ],
      "relationships": [],
      "manual": false
    }
  ],
  "score": {
    "total": 94,
    "architecture": 100,
    "apiStability": 100,
    "schemaIntegrity": 90,
    "security": 85,
    "compliance": 100
  },
  "filesWritten": []
}
```

### .tokencap/constitution/constitution.json

| Field | Value |
| --- | --- |
| Bytes | 7865 |
| Score | 0 |
| Why | context |
| Status | Full content |


```json
{
  "version": "1.2",
  "generatedAt": "2026-09-19T06:01:15.238Z",
  "rules": [
    {
      "id": "CONST-API-001",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "GET /health public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /health."
      ],
      "derivedFrom": [
        "ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-002",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "POST /analyze public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /analyze."
      ],
      "derivedFrom": [
        "ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-003",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "POST /analyze/batch public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /analyze/batch."
      ],
      "derivedFrom": [
        "ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-001",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Services cannot import UI components.",
      "reason": "Importing UI components into services couples server-side logic to browser rendering. This breaks SSR, testability, and separation of concerns.",
      "whatBreaks": "Server-side services gain browser-only dependencies. Unit tests for services fail. SSR breaks.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-002",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Controllers cannot access the database directly.",
      "reason": "Direct DB access in controllers bypasses the service layer. This breaks the layered architecture and makes logic untestable.",
      "whatBreaks": "Business logic leaks into controllers. Database coupling makes refactoring expensive.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-003",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Route handlers cannot access the database directly.",
      "reason": "Routes should delegate to services/controllers, not query the database themselves.",
      "whatBreaks": "Business logic scattered across route files. Impossible to test in isolation.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-004",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "UI components cannot import server-only modules.",
      "reason": "Server-only modules may contain secrets or Node.js-only APIs that crash in the browser.",
      "whatBreaks": "Build errors in browser environments. Potential secret exposure.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-005",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.8,
      "source": "heuristic",
      "description": "High-impact clusters (Config) must not gain new circular dependencies.",
      "reason": "High-impact clusters already coordinate many modules. Adding circular imports makes builds fragile.",
      "whatBreaks": "Module resolution fails. Build tools (webpack, esbuild) may hang or produce incorrect output.",
      "examples": [
        "Use dependency injection or an event bus to break cycles."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-SEC-001",
      "category": "Security",
      "severity": "CRITICAL",
      "confidence": 0.99,
      "source": "heuristic",
      "description": "Environment variable files (.env) must never be committed to version control.",
      "reason": ".env files contain secrets. Committing them exposes credentials to all repository users.",
      "whatBreaks": "All secrets in .env become public. Immediate security incident.",
      "examples": [
        "Ensure .env is in .gitignore.",
        "Use a secrets manager for production."
      ],
      "derivedFrom": [
        ".env.example"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-COMP-001",
      "category": "Compliance",
      "severity": "CRITICAL",
      "confidence": 0.75,
      "source": "heuristic",
      "description": "HIPAA compliance — protected health information (PHI) handling must remain compliant.",
      "reason": "HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.",
      "whatBreaks": "HIPAA violation. Criminal liability. Patient data exposed.",
      "examples": [
        "Always review HIPAA-related code before merging.",
        "Found in: .tokencap/constitution/compliance-rules.md, .tokencap/constitution/constitution.md"
      ],
      "derivedFrom": [
        ".tokencap/constitution/compliance-rules.md",
        ".tokencap/constitution/constitution.md",
        ".tokencap/constitution/constitution.yaml",
        ".tokencap/snapshot.md"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-COMP-002",
      "category": "Compliance",
      "severity": "CRITICAL",
      "confidence": 0.85,
      "source": "heuristic",
      "description": "Audit logging must always be written and never removed.",
      "reason": "Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.",
      "whatBreaks": "Compliance audit failures. Inability to investigate security incidents. Regulatory violations.",
      "examples": [
        "Always review AUDIT-related code before merging.",
        "Found in: .tokencap/constitution/compliance-rules.md, .tokencap/constitution/constitution.md"
      ],
      "derivedFrom": [
        ".tokencap/constitution/compliance-rules.md",
        ".tokencap/constitution/constitution.md",
        ".tokencap/constitution/constitution.yaml"
      ],
      "relationships": [],
      "manual": false
    }
  ],
  "score": {
    "total": 94,
    "architecture": 100,
    "apiStability": 100,
    "schemaIntegrity": 90,
    "security": 85,
    "compliance": 100
  },
  "filesWritten": []
}
```

### .tokencap/constitution/constitution.md

| Field | Value |
| --- | --- |
| Bytes | 6152 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Repository Constitution — ai-medical-report-simplifier

> Generated by TokenCap Constitution Engine v1.2 — 2026-09-19
> ⬡ Every AI coding agent reads this before editing.

---

## Constitution Score

| Category | Score |
|---|---|
| **Overall** | **94 / 100** |
| Architecture | 100 |
| API Stability | 100 |
| Schema Integrity | 90 |
| Security | 85 |
| Compliance | 100 |

---

## Rules (11 total)

### Security (1)

#### 🔴 CONST-SEC-001

**Environment variable files (.env) must never be committed to version control.**

| Field | Value |
|---|---|
| Severity | `CRITICAL` |
| Category | Security |
| Source | heuristic |
| Confidence | ██████████ 99% |
| Manual | No |

**Why:** .env files contain secrets. Committing them exposes credentials to all repository users.

**What breaks:** All secrets in .env become public. Immediate security incident.

**Derived from:** `.env.example`

### Compliance (2)

#### 🔴 CONST-COMP-001

**HIPAA compliance — protected health information (PHI) handling must remain compliant.**

| Field | Value |
|---|---|
| Severity | `CRITICAL` |
| Category | Compliance |
| Source | heuristic |
| Confidence | ████████░░ 75% |
| Manual | No |

**Why:** HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.

**What breaks:** HIPAA violation. Criminal liability. Patient data exposed.

**Derived from:** `.tokencap/constitution/compliance-rules.md`, `.tokencap/constitution/constitution.md`, `.tokencap/constitution/constitution.yaml`, `.tokencap/snapshot.md`

#### 🔴 CONST-COMP-002

**Audit logging must always be written and never removed.**

| Field | Value |
|---|---|
| Severity | `CRITICAL` |
| Category | Compliance |
| Source | heuristic |
| Confidence | █████████░ 85% |
| Manual | No |

**Why:** Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.

**What breaks:** Compliance audit failures. Inability to investigate security incidents. Regulatory violations.

**Derived from:** `.tokencap/constitution/compliance-rules.md`, `.tokencap/constitution/constitution.md`, `.tokencap/constitution/constitution.yaml`

### API (3)

#### 🟠 CONST-API-001

**GET /health public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | fastapi |
| Confidence | ████████░░ 76% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `ml/app/main.py`

#### 🟠 CONST-API-002

**POST /analyze public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | fastapi |
| Confidence | ████████░░ 76% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `ml/app/main.py`

#### 🟠 CONST-API-003

**POST /analyze/batch public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | fastapi |
| Confidence | ████████░░ 76% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `ml/app/main.py`

### Architecture (5)

#### 🟠 CONST-ARCH-001

**Services cannot import UI components.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | Architecture |
| Source | heuristic |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Importing UI components into services couples server-side logic to browser rendering. This breaks SSR, testability, and separation of concerns.

**What breaks:** Server-side services gain browser-only dependencies. Unit tests for services fail. SSR breaks.

#### 🟠 CONST-ARCH-002

**Controllers cannot access the database directly.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | Architecture |
| Source | heuristic |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Direct DB access in controllers bypasses the service layer. This breaks the layered architecture and makes logic untestable.

**What breaks:** Business logic leaks into controllers. Database coupling makes refactoring expensive.

#### 🟠 CONST-ARCH-003

**Route handlers cannot access the database directly.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | Architecture |
| Source | heuristic |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Routes should delegate to services/controllers, not query the database themselves.

**What breaks:** Business logic scattered across route files. Impossible to test in isolation.

#### 🟠 CONST-ARCH-004

**UI components cannot import server-only modules.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | Architecture |
| Source | heuristic |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Server-only modules may contain secrets or Node.js-only APIs that crash in the browser.

**What breaks:** Build errors in browser environments. Potential secret exposure.

#### 🟠 CONST-ARCH-005

**High-impact clusters (Config) must not gain new circular dependencies.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | Architecture |
| Source | heuristic |
| Confidence | ████████░░ 80% |
| Manual | No |

**Why:** High-impact clusters already coordinate many modules. Adding circular imports makes builds fragile.

**What breaks:** Module resolution fails. Build tools (webpack, esbuild) may hang or produce incorrect output.

---

> Protect your architecture before AI changes it.
```

### .tokencap/constitution/constitution.yaml

| Field | Value |
| --- | --- |
| Bytes | 6152 |
| Score | 0 |
| Why | context |
| Status | Full content |


```yaml
# TokenCap Constitution Engine
# Generated: 2026-09-19T06:01:15.238Z
# Version: 1.2

constitution:
  version: "1.2"
  generated_at: "2026-09-19T06:01:15.238Z"
  rule_count: 11

  score:
    total:            94
    architecture:     100
    api_stability:    100
    schema_integrity: 90
    security:         85
    compliance:       100

  rules:
    - id: "CONST-SEC-001"
      category: "Security"
      severity: "CRITICAL"
      confidence: 0.99
      source: "heuristic"
      manual: false
      description: |-
        Environment variable files (.env) must never be committed to version control.
      reason: |-
        .env files contain secrets. Committing them exposes credentials to all repository users.
      what_breaks: |-
        All secrets in .env become public. Immediate security incident.
      derived_from:
        - ".env.example"

    - id: "CONST-COMP-001"
      category: "Compliance"
      severity: "CRITICAL"
      confidence: 0.75
      source: "heuristic"
      manual: false
      description: |-
        HIPAA compliance — protected health information (PHI) handling must remain compliant.
      reason: |-
        HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.
      what_breaks: |-
        HIPAA violation. Criminal liability. Patient data exposed.
      derived_from:
        - ".tokencap/constitution/compliance-rules.md"
        - ".tokencap/constitution/constitution.md"
        - ".tokencap/constitution/constitution.yaml"
        - ".tokencap/snapshot.md"

    - id: "CONST-COMP-002"
      category: "Compliance"
      severity: "CRITICAL"
      confidence: 0.85
      source: "heuristic"
      manual: false
      description: |-
        Audit logging must always be written and never removed.
      reason: |-
        Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.
      what_breaks: |-
        Compliance audit failures. Inability to investigate security incidents. Regulatory violations.
      derived_from:
        - ".tokencap/constitution/compliance-rules.md"
        - ".tokencap/constitution/constitution.md"
        - ".tokencap/constitution/constitution.yaml"

    - id: "CONST-API-001"
      category: "API"
      severity: "HIGH"
      confidence: 0.76
      source: "fastapi"
      manual: false
      description: |-
        GET /health public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - "ml/app/main.py"

    - id: "CONST-API-002"
      category: "API"
      severity: "HIGH"
      confidence: 0.76
      source: "fastapi"
      manual: false
      description: |-
        POST /analyze public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - "ml/app/main.py"

    - id: "CONST-API-003"
      category: "API"
      severity: "HIGH"
      confidence: 0.76
      source: "fastapi"
      manual: false
      description: |-
        POST /analyze/batch public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - "ml/app/main.py"

    - id: "CONST-ARCH-001"
      category: "Architecture"
      severity: "HIGH"
      confidence: 0.72
      source: "heuristic"
      manual: false
      description: |-
        Services cannot import UI components.
      reason: |-
        Importing UI components into services couples server-side logic to browser rendering. This breaks SSR, testability, and separation of concerns.
      what_breaks: |-
        Server-side services gain browser-only dependencies. Unit tests for services fail. SSR breaks.

    - id: "CONST-ARCH-002"
      category: "Architecture"
      severity: "HIGH"
      confidence: 0.72
      source: "heuristic"
      manual: false
      description: |-
        Controllers cannot access the database directly.
      reason: |-
        Direct DB access in controllers bypasses the service layer. This breaks the layered architecture and makes logic untestable.
      what_breaks: |-
        Business logic leaks into controllers. Database coupling makes refactoring expensive.

    - id: "CONST-ARCH-003"
      category: "Architecture"
      severity: "HIGH"
      confidence: 0.72
      source: "heuristic"
      manual: false
      description: |-
        Route handlers cannot access the database directly.
      reason: |-
        Routes should delegate to services/controllers, not query the database themselves.
      what_breaks: |-
        Business logic scattered across route files. Impossible to test in isolation.

    - id: "CONST-ARCH-004"
      category: "Architecture"
      severity: "HIGH"
      confidence: 0.72
      source: "heuristic"
      manual: false
      description: |-
        UI components cannot import server-only modules.
      reason: |-
        Server-only modules may contain secrets or Node.js-only APIs that crash in the browser.
      what_breaks: |-
        Build errors in browser environments. Potential secret exposure.

    - id: "CONST-ARCH-005"
      category: "Architecture"
      severity: "HIGH"
      confidence: 0.80
      source: "heuristic"
      manual: false
      description: |-
        High-impact clusters (Config) must not gain new circular dependencies.
      reason: |-
        High-impact clusters already coordinate many modules. Adding circular imports makes builds fragile.
      what_breaks: |-
        Module resolution fails. Build tools (webpack, esbuild) may hang or produce incorrect output.
```

### .tokencap/constitution/critical-flows.md

| Field | Value |
| --- | --- |
| Bytes | 66 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Critical Flows

> TokenCap Constitution Engine

*None detected.*
```

### .tokencap/constitution/public-contracts.md

| Field | Value |
| --- | --- |
| Bytes | 1034 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Public API Contracts

> TokenCap Constitution Engine

## 🟠 CONST-API-001 — HIGH

**GET /health public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `ml/app/main.py`

## 🟠 CONST-API-002 — HIGH

**POST /analyze public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `ml/app/main.py`

## 🟠 CONST-API-003 — HIGH

**POST /analyze/batch public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `ml/app/main.py`
```

### .tokencap/constitution/schema-invariants.yaml

| Field | Value |
| --- | --- |
| Bytes | 51 |
| Score | 0 |
| Why | context |
| Status | Full content |


```yaml
# Schema Invariants
# TokenCap Constitution Engine
```

### .tokencap/constitution/security-boundaries.md

| Field | Value |
| --- | --- |
| Bytes | 383 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Security Boundaries

> TokenCap Constitution Engine

## 🔴 CONST-SEC-001 — CRITICAL

**Environment variable files (.env) must never be committed to version control.**

> **Why:** .env files contain secrets. Committing them exposes credentials to all repository users.

> **What breaks:** All secrets in .env become public. Immediate security incident.

*Files:* `.env.example`
```

### .tokencap/debug/notes.md

| Field | Value |
| --- | --- |
| Bytes | 499 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Debug Notes

<!-- Managed by TokenCap. Generated 2026-09-19T06:01:15.660Z. -->

## Problem

No active failure has been captured.

## Error Logs

```
No captured error output is available.
```

## Stack Trace

```
No captured stack trace is available.
```

## Failed Tests

- No captured failed tests.

## Attempted Fixes

- No attempted fixes captured in this debug session.

## Suspected Files

- No suspected files inferred yet.

## Unresolved Questions

- No unresolved questions inferred yet.
```

### .tokencap/graph/summary.md

| Field | Value |
| --- | --- |
| Bytes | 1504 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# TokenCap Project Graph

Generated: 9/19/2026, 11:31:14 AM

> **Language Support Note**: The graph only parses JS/TS imports
> (`.js`, `.jsx`, `.ts`, `.tsx`, `.mjs`, `.cjs`). Files in other languages
> (Python, Go, Rust, etc.) appear as isolated nodes with no edges.

## Changed Files

_No changed files detected, or Git is unavailable._

## File Relationships

_No local import relationships detected._

## Important Nodes

- .kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx — route
- frontend/src/app/layout.tsx — route
- frontend/src/app/page.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs — config
- .kilo/worktrees/ginger-myrtle/frontend/next.config.ts — config
- .kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs — config
- frontend/eslint.config.mjs — config
- frontend/next.config.ts — config
- frontend/postcss.config.mjs — config

## All Scanned Files

Total: 10 JS/TS files scanned.

### 🛣️ Route (4)

- .kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx
- frontend/src/app/layout.tsx
- frontend/src/app/page.tsx

### 🔧 Config (6)

- .kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs
- .kilo/worktrees/ginger-myrtle/frontend/next.config.ts
- .kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs
- frontend/eslint.config.mjs
- frontend/next.config.ts
- frontend/postcss.config.mjs
```

### .tokencap/memory/current.md

| Field | Value |
| --- | --- |
| Bytes | 940 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# TokenCap Memory

Generated: September 19, 2026 at 11:31 AM

**Branch:** `person4`

## Current Task

Working on `person4` with 11 uncommitted files:
- ml/app/anomaly.py
- ml/app/features.py
- ml/app/main.py
- ml/app/schemas.py
- ml/app/trend.py
- ml/requirements.txt
- .tokencap/
- ml/app/reference_range.py
- ml/demo_runner.py
- ml/tests/
- ml/training/

## Developer Intent

Not inferred from local repository evidence.

## Known Issues

- No failing test output or TODO/FIXME markers detected.

## Constraints

- No additional constraints inferred.

## Decisions Made

- No decisions inferred from the current repository state.

## Recent Changed Files

- ml/app/anomaly.py
- ml/app/features.py
- ml/app/main.py
- ml/app/schemas.py
- ml/app/trend.py
- ml/requirements.txt
- .tokencap/
- ml/app/reference_range.py
- ml/demo_runner.py
- ml/tests/
- ml/training/

## Next Steps

- Review the changed files and recent commits listed above.
```

### .tokencap/memory/dev-notes.md

| Field | Value |
| --- | --- |
| Bytes | 874 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# TokenCap Notes

<!-- Managed by TokenCap. Generated 2026-09-19T06:01:15.660Z. -->

## Current Task

Working on `person4` with 12 uncommitted files:
- ml/app/anomaly.py
- ml/app/features.py
- ml/app/main.py
- ml/app/schemas.py
- ml/app/trend.py
- ml/requirements.txt
- .tokencap/
- AGENTS.md
- ml/app/reference_range.py
- ml/demo_runner.py
- ml/tests/
- ml/training/

## Developer Intent

Not inferred from local repository evidence.

## Known Issues

- No failing test output or TODO/FIXME markers detected.

## Recent Commits

- 890703f add gitignore and env template
- 0085608 initialize project structure
- 82c2d83 Add project title and description to README

## Constraints

- No additional constraints inferred.

## Decisions Made

- No decisions inferred from the current repository state.

## Next Steps

- Review the changed files and recent commits listed above.
```

### .tokencap/savings.json

| Field | Value |
| --- | --- |
| Bytes | 1061 |
| Score | 0 |
| Why | context |
| Status | Full content |


```json
{
  "baseline": {
    "tokens": 47766,
    "dollars": 0.119415
  },
  "actual": {
    "tokens": 25525,
    "dollars": 0.063812
  },
  "savings": {
    "tokens": 22241,
    "dollars": 0.055603,
    "percent": 46.6
  },
  "generatedAt": "2026-09-19T06:01:14.062Z",
  "profile": "balanced",
  "stats": {
    "version": 2,
    "runCount": 1,
    "totalTokensSaved": 22241,
    "lastBuildSavings": 22241,
    "lastBuildAt": "2026-09-19T06:01:14.062Z",
    "notifiedMilestones": [],
    "newMilestones": [],
    "notice": null,
    "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression.",
    "tokenizerProfile": "tokencap-estimate-v1",
    "runs": [
      {
        "generatedAt": "2026-09-19T06:01:14.062Z",
        "profile": "balanced",
        "baselineTokens": 47766,
        "snapshotTokens": 25525,
        "savedTokens": 22241,
        "tokenizerProfile": "tokencap-estimate-v1",
        "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
      }
    ]
  }
}
```

### .tokencap/stats.json

| Field | Value |
| --- | --- |
| Bytes | 716 |
| Score | 0 |
| Why | context |
| Status | Full content |


```json
{
  "version": 2,
  "runCount": 1,
  "totalTokensSaved": 22241,
  "lastBuildSavings": 22241,
  "lastBuildAt": "2026-09-19T06:01:14.062Z",
  "notifiedMilestones": [],
  "newMilestones": [],
  "notice": null,
  "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression.",
  "tokenizerProfile": "tokencap-estimate-v1",
  "runs": [
    {
      "generatedAt": "2026-09-19T06:01:14.062Z",
      "profile": "balanced",
      "baselineTokens": 47766,
      "snapshotTokens": 25525,
      "savedTokens": 22241,
      "tokenizerProfile": "tokencap-estimate-v1",
      "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
    }
  ]
}
```

### frontend/AGENTS.md

| Field | Value |
| --- | --- |
| Bytes | 687 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
```

### frontend/CLAUDE.md

| Field | Value |
| --- | --- |
| Bytes | 12 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
@AGENTS.md
```

### frontend/eslint.config.mjs

| Field | Value |
| --- | --- |
| Bytes | 483 |
| Score | 0 |
| Why | context |
| Status | Full content |


```mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

### frontend/next.config.ts

| Field | Value |
| --- | --- |
| Bytes | 140 |
| Score | 0 |
| Why | context |
| Status | Full content |


```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### frontend/postcss.config.mjs

| Field | Value |
| --- | --- |
| Bytes | 101 |
| Score | 0 |
| Why | context |
| Status | Full content |


```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### ml/app/__init__.py

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 0 |
| Why | context |
| Status | Full content |


```py

```

### ml/training/train_anomaly_model_.py

| Field | Value |
| --- | --- |
| Bytes | 5851 |
| Score | 0 |
| Why | context |
| Status | Full content |


```py
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
```

### .tokencap/constitution/constitution-graph.html

| Field | Value |
| --- | --- |
| Bytes | 41716 |
| Score | -3 |
| Why | context |
| Status | Truncated (budget limit) |

**Structural Outline:**
  - `fn sevColor` (line 490)
  - `fn catColor` (line 491)
  - `fn relColor` (line 492)
  - `fn nodeRadius` (line 589)
  - `fn applyFilters` (line 737)
  - `fn each` (line 738)
  - `fn highlightNode` (line 759)
  - `fn each` (line 767)
  - `fn clearHighlight` (line 779)
  - `fn showDetail` (line 796)
  - `fn hideDetail` (line 854)


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TokenCap Constitution Engine — ai-medical-report-simplifier</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:         #080b14;
      --surface:    #0d1220;
      --surface2:   #111827;
      --border:     rgba(255,255,255,0.07);
      --border2:    rgba(255,255,255,0.12);
      --text:       #e2e8f0;
      --text2:      #94a3b8;
      --text3:      #64748b;
      --accent:     #6366f1;
      --accent2:    #818cf8;

      --immutable:  #c084fc;
      --critical:   #f87171;
      --high:       #fb923c;
      --warning:    #facc15;
      --info:       #34d399;

      --arch:       #818cf8;
      --sec:        #f87171;
      --comp:       #facc15;
      --flow:       #34d399;
      --api:        #38bdf8;
      --schema:     #a78bfa;

      --sidebar-w:  280px;
      --detail-w:   340px;
      --header-h:   56px;
    }

    html, body { width:100%; height:100%; background:var(--bg); color:var(--text); font-family:'Inter',sans-serif; overflow:hidden; }

    /* ── HEADER ─────────────────────────────────────────────────────────── */
    header {
      position:fixed; top:0; left:0; right:0; height:var(--header-h);
      background:rgba(8,11,20,0.92); border-bottom:1px solid var(--border2);
      backdrop-filter:blur(20px); display:flex; align-items:center;
      gap:16px; padding:0 20px; z-index:100;
    }
    .logo { display:flex; align-items:center; gap:10px; }
    .logo-mark {
      width:32px; height:32px; border-radius:8px;
      background:linear-gradient(135deg,#6366f1,#a855f7);
      display:flex; align-items:center; justify-content:center;
      font-weight:800; font-size:14px; color:#fff; letter-spacing:-0.5px;
      box-shadow:0 0 20px rgba(99,102,241,0.4);
    }
    .logo-name { font-weight:700; font-size:15px; color:var(--text); }
    .logo-sub { font-size:11px; color:var(--text3); font-weight:400; }
    .badge {
      padding:3px 10px; border-radius:20px; font-size:11px; font-weight:600;
      background:rgba(99,102,241,0.15); color:var(--accent2);
      border:1px solid rgba(99,102,241,0.3); letter-spacing:0.5px; text-transform:uppercase;
    }
    .header-right { margin-left:auto; display:flex; align-items:center; gap:12px; }
    .stat-pill {
      display:flex; align-items:center; gap:6px;
      padding:4px 12px; border-radius:20px;
      background:var(--surface2); border:1px solid var(--border);
      font-size:12px; color:var(--text2);
    }
    .stat-pill strong { color:var(--text); font-weight:600; }
    .score-display {
      display:flex; align-items:center; gap:8px;
      padding:4px 14px; border-radius:20px;
      background:linear-gradient(135deg,rgba(99,102,241,0.2),rgba(168,85,247,0.2));
      border:1px solid rgba(99,102,241,0.4);
    }
    .score-label { font-size:11px; color:var(--accent2); font-weight:500; }
    .score-value { font-size:20px; font-weight:800; color:#fff; line-height:1; }
    .score-max { font-size:11px; color:var(--text3); }

    /* ── SIDEBAR ─────────────────────────────────────────────────────────── */
    #sidebar {
      position:fixed; top:var(--header-h); left:0; bottom:0;
      width:var(--sidebar-w); background:var(--surface);
      border-right:1px solid var(--border); overflow-y:auto;
      padding:16px; display:flex; flex-direction:column; gap:20px; z-index:50;
    }
    #sidebar::-webkit-scrollbar { width:4px; }
    #sidebar::-webkit-scrollbar-track { background:transparent; }
    #sidebar::-webkit-scrollbar-thumb { background:var(--border2); border-radius:2px; }

    .search-wrap { position:relative; }
    .search-wrap input {
      width:100%; padding:9px 12px 9px 34px;
      background:var(--surface2); border:1px solid var(--border2);
      border-radius:8px; color:var(--text); font-size:13px; font-family:'Inter',sans-serif;
      outline:none; transition:border-color 0.2s;
    }
    .search-wrap input:focus { border-color:var(--accent); }
    .search-wrap input::placeholder { color:var(--text3); }
    .search-icon {
      position:absolute; left:10px; top:50%; transform:translateY(-50%);
      color:var(--text3); pointer-events:none; font-size:14px;
    }

    .section-title {
      font-size:10px; font-weight:600; letter-spacing:1px; text-transform:uppercase;
      color:var(--text3); margin-bottom:8px;
    }

    .filter-group { display:flex; flex-direction:column; gap:4px; }
    .filter-row {
      display:flex; align-items:center; gap:8px; padding:6px 8px;
      border-radius:6px; cursor:pointer; transition:background 0.15s;
      user-select:none;
    }
    .filter-row:hover { background:rgba(255,255,255,0.04); }
    .filter-row.active { background:rgba(99,102,241,0.12); }
    .filter-dot { width:10px; height:10px; border-radius:50%; flex-shrink:0; }
    .filter-label { font-size:12px; color:var(--text2); flex:1; }
    .filter-count {
      font-size:11px; font-weight:600; color:var(--text3);
      background:var(--surface2); padding:1px 7px; border-radius:10px;
    }

    /* Score bars */
    .score-bars { display:flex; flex-direction:column; gap:8px; }
    .score-row { }
    .score-row-header { display:flex; justify-content:space-between; margin-bottom:4px; }
    .score-row-label { font-size:11px; color:var(--text2); }
    .score-row-val { font-size:11px; font-weight:600; color:var(--text); }
    .bar-track { height:5px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; }
    .bar-fill {
      height:100%; border-radius:3px;
      transition:width 1.2s cubic-bezier(0.4,0,0.2,1);
      background:linear-gradient(90deg,var(--accent),var(--accent2));
    }
    .bar-fill.perfect { background:linear-gradient(90deg,#34d399,#6ee7b7); }
    .bar-fill.good    { background:linear-gradient(90deg,#6366f1,#818cf8); }
    .bar-fill.warn    { background:linear-gradient(90deg,#f59e0b,#fbbf24); }
    .bar-fill.bad     { background:linear-gradient(90deg,#ef4444,#f87171); }

    /* ── CANVAS ──────────────────────────────────────────────────────────── */
    #canvas {
      position:fixed;
      top:var(--header-h); left:var(--sidebar-w);
      right:var(--detail-w); bottom:0;
      background:var(--bg);
      overflow:hidden;
    }
    #graph-svg { width:100%; height:100%; }

    /* Grid bg */
    #canvas::before {
      content:''; position:absolute; inset:0; pointer-events:none;
      background-image:
        linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px);
      background-size:40px 40px;
    }

    /* Zoom controls */
    .zoom-controls {
      position:absolute; right:16px; bottom:16px;
      display:flex; flex-direction:column; gap:6px; z-index:10;
    }
    .zoom-btn {
      width:32px; height:32px; border-radius:8px;
      background:var(--surface2); border:1px solid var(--border2);
      color:var(--text2); font-size:16px; cursor:pointer;
      display:flex; align-items:center; justify-content:center;
      transition:all 0.15s;
    }
    .zoom-btn:hover { background:var(--surface); color:var(--text); border-color:var(--accent); }

    /* Category label overlays */
    .cat-label {
      font-size:10px; font-weight:600; letter-spacing:1px; text-transform:uppercase;
      fill:rgba(255,255,255,0.15); pointer-events:none; user-select:none;
    }

    /* ── DETAIL PANEL ───────────────────────────────────────────────────── */
    #detail {
      position:fixed; top:var(--header-h); right:0; bottom:0;
      width:var(--detail-w); background:var(--surface);
      border-left:1px solid var(--border);
      display:flex; flex-direction:column; z-index:50; overflow:hidden;
    }
    #detail-empty {
      flex:1; display:flex; flex-direction:column;
      align-items:center; justify-content:center; gap:12px;
      color:var(--text3); text-align:center; padding:32px;
    }
    .empty-icon { font-size:40px; opacity:0.3; }
    .empty-text { font-size:13px; line-height:1.5; }

    #detail-content { flex:1; overflow-y:auto; display:none; flex-direction:column; }
    #detail-content::-webkit-scrollbar { width:4px; }
    #detail-content::-webkit-scrollbar-thumb { background:var(--border2); border-radius:2px; }
    #detail-content.show { display:flex; }

    .detail-header {
      padding:20px 20px 16px;
      border-bottom:1px solid var(--border);
      flex-shrink:0;
    }
    .detail-id {
      font-family:'JetBrains Mono',monospace; font-size:13px;
      font-weight:500; color:var(--accent2); margin-bottom:6px;
    }
    .detail-desc { font-size:14px; font-weight:600; color:var(--text); line-height:1.4; }

    .detail-badges { display:flex; gap:6px; margin-top:10px; flex-wrap:wrap; }
    .sev-badge {
      padding:3px 10px; border-radius:20px; font-size:11px; font-weight:600;
      letter-spacing:0.3px;
    }

    .detail-body { padding:16px 20px; display:flex; flex-direction:column; gap:14px; }

    .detail-field { }
    .field-label {
      font-size:10px; font-weight:600; letter-spacing:0.8px; text-transform:uppercase;
      color:var(--text3); margin-bottom:5px;
    }
    .field-value { font-size:13px; color:var(--text2); line-height:1.5; }
    .field-value.mono { font-family:'JetBrains Mono',monospace; font-size:12px; }

    .conf-bar { height:4px; background:rgba(255,255,255,0.06); border-radius:2px; margin-top:6px; }
    .conf-fill { height:100%; border-radius:2px; background:linear-gradient(90deg,#6366f1,#a855f7); }

    .derived-list { display:flex; flex-direction:column; gap:4px; }
    .derived-item {
      font-size:11px; font-family:'JetBrains Mono',monospace; color:var(--text3);
      padding:3px 8px; background:rgba(255,255,255,0.03); border-radius:4px;
      border-left:2px solid var(--border2); word-break:break-all;
    }

    .rel-list { display:flex; flex-direction:column; gap:4px; }
    .rel-item {
      display:flex; gap:6px; align-items:flex-start;
      font-size:12px; padding:4px 8px; border-radius:4px;
      background:rgba(255,255,255,0.03);
    }
    .rel-verb { color:var(--accent2); font-weight:600; min-width:80px; font-family:'JetBrains Mono',monospace; font-size:11px; }
    .rel-target { color:var(--text2); font-family:'JetBrains Mono',monospace; font-size:11px; }

    .detail-close {
      position:absolute; top:12px; right:12px;
      width:24px; height:24px; border-radius:6px;
      background:rgba(255,255,255,0.05); border:none; color:var(--text3);
      cursor:pointer; display:flex; align-items:center; justify-content:center;
      font-size:14px; transition:all 0.15s;
    }
    .detail-close:hover { background:rgba(255,255,255,0.1); color:var(--text); }

    /* ── LEGEND ──────────────────────────────────────────────────────────── */
    .legend {
      padding:12px 20px; border-top:1px solid var(--border); flex-shrink:0;
    }
    .legend-title { font-size:10px; font-weight:600; letter-spacing:1px; text-transform:uppercase; color:var(--text3); margin-bottom:8px; }
    .legend-rows { display:flex; flex-direction:column; gap:4px; }
    .legend-row { display:flex; align-items:center; gap:8px; font-size:11px; color:var(--text3); }
    .legend-line { width:24px; height:2px; border-radius:1px; flex-shrink:0; }
    .legend-dot  { width:8px;  height:8px; border-radius:50%; flex-shrink:0; }

    /* ── TOOLTIP ─────────────────────────────────────────────────────────── */
    #tooltip {
      position:fixed; pointer-events:none; z-index:200;
      background:rgba(13,18,32,0.95); border:1px solid var(--border2);
      border-radius:8px; padding:8px 12px; font-size:12px;
      color:var(--text); white-space:nowrap; display:none;
      backdrop-filter:blur(10px);
    }

    /* ── ANIMATIONS ──────────────────────────────────────────────────────── */
    @keyframes pulse {
      0%,100% { opacity:1; }
      50%      { opacity:0.6; }
    }
    @keyframes slideIn {
      from { opacity:0; transform:translateX(20px); }
      to   { opacity:1; transform:translateX(0); }
    }
    #detail-content.show { animation:slideIn 0.2s ease-out; }

    /* node glow on hover */
    .node-group { cursor:pointer; }
  </style>
</head>
<body>

<header>
  <div class="logo">
    <div class="logo-mark">TC</div>
    <div>
      <div class="logo-name">ai-medical-report-simplifier</div>
      <div class="logo-sub">Constitution Engine</div>
    </div>
  </div>
  <div class="badge">v1.2.0</div>

  <div class="header-right" id="header-stats">
    <div class="stat-pill"><strong id="h-rules">—</strong>&nbsp;rules</div>
    <div class="stat-pill"><strong id="h-rels">—</strong>&nbsp;relationships</div>
    <div class="stat-pill"><strong id="h-crit">—</strong>&nbsp;critical</div>
    <div class="score-display">
      <div class="score-label">SCORE</div>
      <div class="scor

/* ...truncated for capsule budget... */
```

### ml/data/medical_training_data.csv

| Field | Value |
| --- | --- |
| Bytes | 64088 |
| Score | -5 |
| Why | context |
| Status | Truncated (budget limit) |


```csv
patient_id,test_name,date,value,unit,reference_min,reference_max,is_anomaly
SYN_FAS_001,Fasting Glucose,2025-01-01,91.524,mg/dL,70.0,99.0,0
SYN_FAS_002,Fasting Glucose,2025-01-04,84.8,mg/dL,70.0,99.0,0
SYN_FAS_003,Fasting Glucose,2025-01-07,93.752,mg/dL,70.0,99.0,0
SYN_FAS_004,Fasting Glucose,2025-01-10,94.703,mg/dL,70.0,99.0,0
SYN_FAS_005,Fasting Glucose,2025-01-13,80.245,mg/dL,70.0,99.0,0
SYN_FAS_006,Fasting Glucose,2025-01-16,83.489,mg/dL,70.0,99.0,0
SYN_FAS_007,Fasting Glucose,2025-01-19,90.639,mg/dL,70.0,99.0,0
SYN_FAS_008,Fasting Glucose,2025-01-22,88.419,mg/dL,70.0,99.0,0
SYN_FAS_009,Fasting Glucose,2025-01-25,89.916,mg/dL,70.0,99.0,0
SYN_FAS_010,Fasting Glucose,2025-01-28,85.735,mg/dL,70.0,99.0,0
SYN_FAS_011,Fasting Glucose,2025-01-31,94.397,mg/dL,70.0,99.0,0
SYN_FAS_012,Fasting Glucose,2025-02-03,93.889,mg/dL,70.0,99.0,0
SYN_FAS_013,Fasting Glucose,2025-02-06,90.33,mg/dL,70.0,99.0,0
SYN_FAS_014,Fasting Glucose,2025-02-09,95.636,mg/dL,70.0,99.0,0
SYN_FAS_015,Fasting Glucose,2025-02-12,92.338,mg/dL,70.0,99.0,0
SYN_FAS_016,Fasting Glucose,2025-02-15,85.704,mg/dL,70.0,99.0,0
SYN_FAS_017,Fasting Glucose,2025-02-18,91.844,mg/dL,70.0,99.0,0
SYN_FAS_018,Fasting Glucose,2025-02-21,85.206,mg/dL,70.0,99.0,0
SYN_FAS_019,Fasting Glucose,2025-02-24,94.392,mg/dL,70.0,99.0,0
SYN_FAS_020,Fasting Glucose,2025-02-27,89.75,mg/dL,70.0,99.0,0
SYN_FAS_021,Fasting Glucose,2025-03-02,89.076,mg/dL,70.0,99.0,0
SYN_FAS_022,Fasting Glucose,2025-03-05,86.595,mg/dL,70.0,99.0,0
SYN_FAS_023,Fasting Glucose,2025-03-08,96.113,mg/dL,70.0,99.0,0
SYN_FAS_024,Fasting Glucose,2025-03-11,89.227,mg/dL,70.0,99.0,0
SYN_FAS_025,Fasting Glucose,2025-03-14,87.858,mg/dL,70.0,99.0,0
SYN_FAS_026,Fasting Glucose,2025-03-17,88.239,mg/dL,70.0,99.0,0
SYN_FAS_027,Fasting Glucose,2025-03-20,92.662,mg/dL,70.0,99.0,0
SYN_FAS_028,Fasting Glucose,2025-03-23,91.827,mg/dL,70.0,99.0,0
SYN_FAS_029,Fasting Glucose,2025-03-26,92.064,mg/dL,70.0,99.0,0
SYN_FAS_030,Fasting Glucose,2025-03-29,92.154,mg/dL,70.0,99.0,0
SYN_FAS_031,Fasting Glucose,2025-04-01,100.708,mg/dL,70.0,99.0,0
SYN_FAS_032,Fasting Glucose,2025-04-04,87.968,mg/dL,70.0,99.0,0
SYN_FAS_033,Fasting Glucose,2025-04-07,87.439,mg/dL,70.0,99.0,0
SYN_FAS_034,Fasting Glucose,2025-04-10,85.931,mg/dL,70.0,99.0,0
SYN_FAS_035,Fasting Glucose,2025-04-13,93.08,mg/dL,70.0,99.0,0
SYN_FAS_036,Fasting Glucose,2025-04-16,95.645,mg/dL,70.0,99.0,0
SYN_FAS_037,Fasting Glucose,2025-04-19,89.43,mg/dL,70.0,99.0,0
SYN_FAS_038,Fasting Glucose,2025-04-22,85.799,mg/dL,70.0,99.0,0
SYN_FAS_039,Fasting Glucose,2025-04-25,85.878,mg/dL,70.0,99.0,0
SYN_FAS_040,Fasting Glucose,2025-04-28,93.253,mg/dL,70.0,99.0,0
SYN_FAS_041,Fasting Glucose,2025-05-01,93.716,mg/dL,70.0,99.0,0
SYN_FAS_042,Fasting Glucose,2025-05-04,92.716,mg/dL,70.0,99.0,0
SYN_FAS_043,Fasting Glucose,2025-05-07,86.672,mg/dL,70.0,99.0,0
SYN_FAS_044,Fasting Glucose,2025-05-10,91.161,mg/dL,70.0,99.0,0
SYN_FAS_045,Fasting Glucose,2025-05-13,90.583,mg/dL,70.0,99.0,0
SYN_FAS_046,Fasting Glucose,2025-05-16,91.093,mg/dL,70.0,99.0,0
SYN_FAS_047,Fasting Glucose,2025-05-19,94.357,mg/dL,70.0,99.0,0
SYN_FAS_048,Fasting Glucose,2025-05-22,91.118,mg/dL,70.0,99.0,0
SYN_FAS_049,Fasting Glucose,2025-05-25,93.395,mg/dL,70.0,99.0,0
SYN_FAS_050,Fasting Glucose,2025-05-28,90.338,mg/dL,70.0,99.0,0
SYN_FAS_051,Fasting Glucose,2025-05-31,91.446,mg/dL,70.0,99.0,0
SYN_FAS_052,Fasting Glucose,2025-06-03,93.156,mg/dL,70.0,99.0,0
SYN_FAS_053,Fasting Glucose,2025-06-06,82.714,mg/dL,70.0,99.0,0
SYN_FAS_054,Fasting Glucose,2025-06-09,88.402,mg/dL,70.0,99.0,0
SYN_FAS_055,Fasting Glucose,2025-06-12,87.648,mg/dL,70.0,99.0,0
SYN_FAS_056,Fasting Glucose,2025-06-15,86.806,mg/dL,70.0,99.0,0
SYN_FAS_057,Fasting Glucose,2025-06-18,88.624,mg/dL,70.0,99.0,0
SYN_FAS_058,Fasting Glucose,2025-06-21,97.475,mg/dL,70.0,99.0,0
SYN_FAS_059,Fasting Glucose,2025-06-24,85.671,mg/dL,70.0,99.0,0
SYN_FAS_060,Fasting Glucose,2025-06-27,94.841,mg/dL,70.0,99.0,0
SYN_FAS_061,Fasting Glucose,2025-06-30,81.586,mg/dL,70.0,99.0,0
SYN_FAS_062,Fasting Glucose,2025-07-03,88.326,mg/dL,70.0,99.0,0
SYN_FAS_063,Fasting Glucose,2025-07-06,90.814,mg/dL,70.0,99.0,0
SYN_FAS_064,Fasting Glucose,2025-07-09,92.931,mg/dL,70.0,99.0,0
SYN_FAS_065,Fasting Glucose,2025-07-12,93.556,mg/dL,70.0,99.0,0
SYN_FAS_066,Fasting Glucose,2025-07-15,93.967,mg/dL,70.0,99.0,0
SYN_FAS_067,Fasting Glucose,2025-07-18,88.256,mg/dL,70.0,99.0,0
SYN_FAS_068,Fasting Glucose,2025-07-21,87.688,mg/dL,70.0,99.0,0
SYN_FAS_069,Fasting Glucose,2025-07-24,94.29,mg/dL,70.0,99.0,0
SYN_FAS_070,Fasting Glucose,2025-07-27,89.043,mg/dL,70.0,99.0,0
SYN_FAS_071,Fasting Glucose,2025-07-30,83.622,mg/dL,70.0,99.0,0
SYN_FAS_072,Fasting Glucose,2025-08-02,84.334,mg/dL,70.0,99.0,0
SYN_FAS_073,Fasting Glucose,2025-08-05,85.403,mg/dL,70.0,99.0,0
SYN_FAS_074,Fasting Glucose,2025-08-08,92.486,mg/dL,70.0,99.0,0
SYN_FAS_075,Fasting Glucose,2025-08-11,90.712,mg/dL,70.0,99.0,0
SYN_FAS_076,Fasting Glucose,2025-08-14,93.452,mg/dL,70.0,99.0,0
SYN_FAS_077,Fasting Glucose,2025-08-17,87.864,mg/dL,70.0,99.0,0
SYN_FAS_078,Fasting Glucose,2025-08-20,90.793,mg/dL,70.0,99.0,0
SYN_FAS_079,Fasting Glucose,2025-08-23,93.128,mg/dL,70.0,99.0,0
SYN_FAS_080,Fasting Glucose,2025-08-26,88.453,mg/dL,70.0,99.0,0
SYN_FAS_081,Fasting Glucose,2025-08-29,92.284,mg/dL,70.0,99.0,0
SYN_FAS_082,Fasting Glucose,2025-09-01,86.69,mg/dL,70.0,99.0,0
SYN_FAS_083,Fasting Glucose,2025-09-04,88.185,mg/dL,70.0,99.0,0
SYN_FAS_084,Fasting Glucose,2025-09-07,88.091,mg/dL,70.0,99.0,0
SYN_FAS_085,Fasting Glucose,2025-09-10,84.021,mg/dL,70.0,99.0,0
SYN_FAS_086,Fasting Glucose,2025-09-13,92.435,mg/dL,70.0,99.0,0
SYN_FAS_087,Fasting Glucose,2025-09-16,87.653,mg/dL,70.0,99.0,0
SYN_FAS_088,Fasting Glucose,2025-09-19,90.062,mg/dL,70.0,99.0,0
SYN_FAS_089,Fasting Glucose,2025-09-22,92.404,mg/dL,70.0,99.0,0
SYN_FAS_090,Fasting Glucose,2025-09-25,92.233,mg/dL,70.0,99.0,0
SYN_FAS_091,Fasting Glucose,2025-09-28,93.327,mg/dL,70.0,99.0,0
SYN_FAS_092,Fasting Glucose,2025-10-01,89.508,mg/dL,70.0,99.0,0
SYN_FAS_093,Fasting Glucose,2025-10-04,87.884,mg/dL,70.0,99.0,0
SYN_FAS_094,Fasting Glucose,2025-10-07,89.601,mg/dL,70.0,99.0,0
SYN_FAS_095,Fasting Glucose,2025-10-10,81.563,mg/dL,70.0,99.0,0
SYN_FAS_096,Fasting Glucose,2025-10-13,82.764,mg/dL,70.0,99.0,0
SYN_FAS_097,Fasting Glucose,2025-10-16,83.387,mg/dL,70.0,99.0,0
SYN_FAS_098,Fasting Glucose,2025-10-19,85.014,mg/dL,70.0,99.0,0
SYN_FAS_099,Fasting Glucose,2025-10-22,91.999,mg/dL,70.0,99.0,0
SYN_FAS_100,Fasting Glucose,2025-10-25,85.473,mg/dL,70.0,99.0,0
SYN_FAS_101,Fasting Glucose,2025-10-28,88.109,mg/dL,70.0,99.0,0
SYN_FAS_102,Fasting Glucose,2025-10-31,96.496,mg/dL,70.0,99.0,0
SYN_FAS_103,Fasting Glucose,2025-11-03,88.219,mg/dL,70.0,99.0,0
SYN_FAS_104,Fasting Glucose,2025-11-06,93.688,mg/dL,70.0,99.0,0
SYN_FAS_105,Fasting Glucose,2025-11-09,85.332,mg/dL,70.0,99.0,0
SYN_FAS_106,Fasting Glucose,2025-11-12,88.973,mg/dL,70.0,99.0,0
SYN_FAS_107,Fasting Glucose,2025-11-15,85.25,mg/dL,70.0,99.0,0
SYN_FAS_108,Fasting Glucose,2025-11-18,88.305,mg/dL,70.0,99.0,0
SYN_FAS_109,Fasting Glucose,2025-11-21,94.202,mg/dL,70.0,99.0,0
SYN_FAS_110,Fasting Glucose,2025-11-24,81.363,mg/dL,70.0,99.0,0
SYN_FAS_111,Fasting Glucose,2025-11-27,92.172,mg/dL,70.0,99.0,0
SYN_FAS_112,Fasting Glucose,2025-11-30,91.189,mg/dL,70.0,99.0,0
SYN_FAS_113,Fasting Glucose,2025-12-03,87.029,mg/dL,70.0,99.0,0
SYN_FAS_114,Fasting Glucose,2025-12-06,82.77,mg/dL,70.0,99.0,0
SYN_FAS_115,Fasting Glucose,2025-12-09,90.361,mg/dL,70.0,99.0,0
SYN_FAS_116,Fasting Glucose,2025-12-12,87.353,mg/dL,70.0,99.0,0
SYN_FAS_117,Fasting Glucose,2025-12-15,91.163,mg/dL,70.0,99.0,0
SYN_FAS_118,Fasting Glucose,2025-12-18,90.109,mg/dL,70.0,99.0,0
SYN_FAS_119,Fasting Glucose,2025-12-21,98.009,mg/dL,70.0,99.0,0
SYN_FAS_120,Fasting Glucose,2025-12-24,88.803,mg/dL,70.0,99.0,0
SYN_FAS_A01,Fasting Glucose,2025-12-27,113.556,mg/dL,70.0,99.0,1
SYN_FAS_A02,Fasting Glucose,2025-12-30,62.302,mg/dL,70.0,99.0,1
SYN_FAS_A03,Fasting Glucose,2026-01-02,113.02,mg/dL,70.0,99.0,1
SYN_FAS_A04,Fasting Glucose,2026-01-05,61.325,mg/dL,70.0,99.0,1
SYN_FAS_A05,Fasting Glucose,2026-01-08,116.623,mg/dL,70.0,99.0,1
SYN_FAS_A06,Fasting Glucose,2026-01-11,65.693,mg/dL,70.0,99.0,1
SYN_FAS_A07,Fasting Glucose,2026-01-14,113.793,mg/dL,70.0,99.0,1
SYN_FAS_A08,Fasting Glucose,2026-01-17,60.154,mg/dL,70.0,99.0,1
SYN_FAS_A09,Fasting Glucose,2026-01-20,114.632,mg/dL,70.0,99.0,1
SYN_FAS_A10,Fasting Glucose,2026-01-23,55.936,mg/dL,70.0,99.0,1
SYN_FAS_A11,Fasting Glucose,2026-01-26,119.763,mg/dL,70.0,99.0,1
SYN_FAS_A12,Fasting Glucose,2026-01-29,63.164,mg/dL,70.0,99.0,1
SYN_FAS_A13,Fasting Glucose,2026-02-01,119.886,mg/dL,70.0,99.0,1
SYN_FAS_A14,Fasting Glucose,2026-02-04,67.215,mg/dL,70.0,99.0,1
SYN_FAS_A15,Fasting Glucose,2026-02-07,124.482,mg/dL,70.0,99.0,1
SYN_HEM_001,Hemoglobin,2025-01-01,14.543,g/dL,13.8,17.2,0
SYN_HEM_002,Hemoglobin,2025-01-04,15.141,g/dL,13.8,17.2,0
SYN_HEM_003,Hemoglobin,2025-01-07,15.377,g/dL,13.8,17.2,0
SYN_HEM_004,Hemoglobin,2025-01-10,15.899,g/dL,13.8,17.2,0
SYN_HEM_005,Hemoglobin,2025-01-13,16.311,g/dL,13.8,17.2,0
SYN_HEM_006,Hemoglobin,2025-01-16,15.186,g/dL,13.8,17.2,0
SYN_HEM_007,Hemoglobin,2025-01-19,14.555,g/dL,13.8,17.2,0
SYN_HEM_008,Hemoglobin,2025-01-22,14.041,g/dL,13.8,17.2,0
SYN_HEM_009,Hemoglobin,2025-01-25,15.12,g/dL,13.8,17.2,0
SYN_HEM_010,Hemoglobin,2025-01-28,14.634,g/dL,13.8,17.2,0
SYN_HEM_011,Hemoglobin,2025-01-31,14.813,g/dL,13.8,17.2,0
SYN_HEM_012,Hemoglobin,2025-02-03,14.725,g/dL,13.8,17.2,0
SYN_HEM_013,Hemoglobin,2025-02-06,14.937,g/dL,13.8,17.2,0
SYN_HEM_014,Hemoglobin,2025-02-09,15.48,g/dL,13.8,17.2,0
SYN_HEM_015,Hemoglobin,2025-02-12,15.071,g/dL,13.8,17.2,0
SYN_HEM_016,Hemoglobin,2025-02-15,14.929,g/dL,13.8,17.2,0
SYN_HEM_017,Hemoglobin,2025-02-18,14.534,g/dL,13.8,17.2,0
SYN_HEM_018,Hemoglobin,2025-02-21,14.246,g/dL,13.8,17.2,0
SYN_HEM_019,Hemoglobin,2025-02-24,14.781,g/dL,13.8,17.2,0
SYN_HEM_020,Hemoglobin,2025-02-27,14.976,g/dL,13.8,17.2,0
SYN_HEM_021,Hemoglobin,2025-03-02,15.796,g/dL,13.8,17.2,0
SYN_HEM_022,Hemoglobin,2025-03-05,15.059,g/dL,13.8,17.2,0
SYN_HEM_023,Hemoglobin,2025-03-08,15.442,g/dL,13.8,17.2,0
SYN_HEM_024,Hemoglobin,2025-03-11,14.775,g/dL,13.8,17.2,0
SYN_HEM_025,Hemoglobin,2025-03-14,14.467,g/dL,13.8,17.2,0
SYN_HEM_026,Hemoglobin,2025-03-17,14.566,g/dL,13.8,17.2,0
SYN_HEM_027,Hemoglobin,2025-03-20,14.674,g/dL,13.8,17.2,0
SYN_HEM_028,Hemoglobin,2025-03-23,15.958,g/dL,13.8,17.2,0
SYN_HEM_029,Hemoglobin,2025-03-26,14.63,g/dL,13.8,17.2,0
SYN_HEM_030,Hemoglobin,2025-03-29,15.377,g/dL,13.8,17.2,0
SYN_HEM_031,Hemoglobin,2025-04-01,14.594,g/dL,13.8,17.2,0
SYN_HEM_032,Hemoglobin,2025-04-04,15.419,g/dL,13.8,17.2,0
SYN_HEM_033,Hemoglobin,2025-04-07,15.173,g/dL,13.8,17.2,0
SYN_HEM_034,Hemoglobin,2025-04-10,14.93,g/dL,13.8,17.2,0
SYN_HEM_035,Hemoglobin,2025-04-13,14.982,g/dL,13.8,17.2,0
SYN_HEM_036,Hemoglobin,2025-04-16,14.705,g/dL,13.8,17.2,0
SYN_HEM_037,Hemoglobin,2025-04-19,15.201,g/dL,13.8,17.2,0
SYN_HEM_038,Hemoglobin,2025-04-22,14.795,g/dL,13.8,17.2,0
SYN_HEM_039,Hemoglobin,2025-04-25,14.448,g/dL,13.8,17.2,0
SYN_HEM_040,Hemoglobin,2025-04-28,14.425,g/dL,13.8,17.2,0
SYN_HEM_041,Hemoglobin,2025-05-01,15.078,g/dL,13.8,17.2,0
SYN_HEM_042,Hemoglobin,2025-05-04,15.711,g/dL,13.8,17.2,0
SYN_HEM_043,Hemoglobin,2025-05-07,15.072,g/dL,13.8,17.2,0
SYN_HEM_044,Hemoglobin,2025-05-10,14.947,g/dL,13.8,17.2,0
SYN_HEM_045,Hemoglobin,2025-05-13,15.129,g/dL,13.8,17.2,0
SYN_HEM_046,Hemoglobin,2025-05-16,15.588,g/dL,13.8,17.2,0
SYN_HEM_047,Hemoglobin,2025-05-19,15.099,g/dL,13.8,17.2,0
SYN_HEM_048,Hemoglobin,2025-05-22,14.815,g/dL,13.8,17.2,0
SYN_HEM_049,Hemoglobin,2025-05-25,15.498,g/dL,13.8,17.2,0
SYN_HEM_050,Hemoglobin,2025-05-28,15.193,g/dL,13.8,17.2,0
SYN_HEM_051,Hemoglobin,2025-05-31,15.691,g/dL,13.8,17.2,0
SYN_HEM_052,Hemoglobin,2025-06-03,15.082,g/dL,13.8,17.2,0
SYN_HEM_053,Hemoglobin,2025-06-06,14.449,g/dL,13.8,17.2,0
SYN_HEM_054,Hemoglobin,2025-06-09,14.384,g/dL,13.8,17.2,0
SYN_HEM_055,Hemoglobin,2025-06-12,15.743,g/dL,13.8,17.2,0
SYN_HEM_056,Hemoglobin,2025-06-15,15.776,g/dL,13.8,17.2,0
SYN_HEM_057,Hemoglobin,2025-06-18,14.919,g/dL,13.8,17.2,0
SYN_HEM_058,Hemoglobin,2025-06-21,14.828,g/dL,13.8,17.2,0
SYN_HEM_059,Hemoglobin,2025-06-24,15.658,g/dL,13.8,17.2,0
SYN_HEM_060,Hemoglobin,2025-06-27,14.502,g/dL,13.8,17.2,0
SYN_HEM_061,Hemoglobin,2025-06-30,14.597,g/dL,13.8,17.2,0
SYN_HEM_062,Hemoglobin,2025-07-03,15.289,g/dL,13.8,17.2,0
SYN_HEM_063,Hemoglobin,2025-07-06,14.822,g/dL,13.8,17.2,0
SYN_HEM_064,Hemoglobin,2025-07-09,14.998,g/dL,13.8,17.2,0
SYN_HEM_065,Hemoglobin,2025-07-12,14.926,g/dL,13.8,17.2,0
SYN_HEM_066,Hemoglobin,2025-07-15,15.152,g/dL,13.8,17.2,0
SYN_HEM_067,Hemoglobin,2025-07-18,15.633,g/dL,13.8,17.2,0
SYN_HEM_068,Hemoglobin,2025-07-21,15.041,g/dL,13.8,17.2,0
SYN_HEM_069,Hemoglobin,2025-07-24,15.29,g/dL,13.8,17.2,0
SYN_HEM_070,Hemoglobin,2025-07-27,14.077,g/dL,13.8,17.2,0
SYN_HEM_071,Hemoglobin,2025-07-30,14.978,g/dL,13.8,17.2,0
SYN_HEM_072,Hemoglobin,2025-08-02,14.621,g/dL,13.8,17.2,0
SYN_HEM_073,Hemoglobin,2025-08-05,14.452,g/dL,13.8,17.2,0
SYN_HEM_074,Hemoglobin,2025-08-08,14.605,g/dL,13.8,17.2,0
SYN_HEM_075,Hemoglobin,2025-08-11,14.85,g/dL,13.8,17.2,0
SYN_HEM_076,Hemoglobin,2025-08-14,15.412,g/dL,13.8,17.2,0
SYN_HEM_077,Hemoglobin,2025-08-17,14.403,g/dL,13.8,17.2,0
SYN_HEM_078,Hemoglobin,2025-08-20,15.014,g/dL,13.8,17.2,0
SYN_HEM_079,Hemoglobin,2025-08-23,14.782,g/dL,13.8,17.2,0
SYN_HEM_080,Hemoglobin,2025-08-26,14.853,g/dL,13.8,17.2,0
SYN_HEM_081,Hemoglobin,2025-08-29,15.451,g/dL,13.8,17.2,0
SYN_HEM_082,Hemoglobin,2025-09-01,15.242,g/dL,13.8,17.2,0
SYN_HEM_083,Hemoglobin,2025-09-04,15.602,g/dL,13.8,17.2,0
SYN_HEM_084,Hemoglobin,2025-09-07,14.93,g/dL,13.8,17.2,0
SYN_HEM_085,Hemoglobin,2025-09-10,14.687,g/dL,13.8,17.2,0
SYN_HEM_086,Hemoglobin,2025-09-13,14.899,g/dL,13.8,17.2,0
SYN_HEM_087,Hemoglobin,2025-09-16,15.109,g/dL,13.8,17.2,0
SYN_HEM_088,Hemoglobin,2025-09-19,15.079,g/dL,13.8,17.2,0
SYN_HEM_089,Hemoglobin,2025-09-22,14.512,g/dL,13.8,17.2,0
SYN_HEM_090,Hemoglobin,2025-09-25,15.041,g/dL,13.8,17.2,0
SYN_HEM_091,Hemoglobin,2025-09-28,15.103,g/dL,13.8,17.2,0
SYN_HEM_092,Hem

/* ...truncated for capsule budget... */
```