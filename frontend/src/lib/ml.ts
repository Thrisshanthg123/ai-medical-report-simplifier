/**
 * ML HTTP client for the Python FastAPI service (ml/).
 *
 * Sends historical test values to POST /analyze/batch and maps
 * MLFindingsOutput -> frontend MLAnalysis type.
 *
 * Handles service unavailability gracefully — reports are still usable
 * without ML analysis.
 */
import { MLAnalysis, HistoricalValue, TrendDirection } from "@/types/medical";

const ML_API_URL = process.env.ML_API_URL ?? "http://localhost:8000";

// ---------------------------------------------------------------------------
// ML service input types (matches ml/app/schemas.py)
// ---------------------------------------------------------------------------
interface MLReferenceRangeInput {
  min?: number | null;
  max?: number | null;
}

interface MLTestInput {
  test_name: string;
  values: number[];
  reference_range?: MLReferenceRangeInput;
  unit?: string;
}

interface MLFindingsOutput {
  test_name: string;
  unit?: string | null;
  current_value?: number | null;
  previous_value?: number | null;
  statistics: {
    mean?: number | null;
    minimum?: number | null;
    maximum?: number | null;
    standard_deviation?: number | null;
  };
  change: {
    absolute?: number | null;
    percentage?: number | null;
  };
  trend: {
    direction: string;
    slope?: number | null;
  };
  reference_range: {
    min?: number | null;
    max?: number | null;
    within_range?: boolean | null;
    message?: string | null;
  };
  anomaly: {
    detected: boolean;
    score: number;
    status?: string | null;
  };
  data_points: number;
}

// ---------------------------------------------------------------------------
// Check ML service health
// ---------------------------------------------------------------------------
export async function checkMLHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${ML_API_URL}/health`, {
      signal: AbortSignal.timeout(3000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Map ML direction string to frontend TrendDirection
// ---------------------------------------------------------------------------
function mapDirection(direction: string): TrendDirection {
  if (direction === "increasing") return "increasing";
  if (direction === "decreasing") return "decreasing";
  return "stable";
}

// ---------------------------------------------------------------------------
// Map MLFindingsOutput -> frontend MLAnalysis
// ---------------------------------------------------------------------------
function mapMLFindings(findings: MLFindingsOutput): MLAnalysis {
  const direction = mapDirection(findings.trend.direction);
  const anomalyDetected = findings.anomaly.detected;
  const changeAbs = findings.change.absolute;
  const changePct = findings.change.percentage;

  // Build a plain-language, non-diagnostic change label
  let changeLabel = "No prior data available for comparison.";
  if (changeAbs !== null && changeAbs !== undefined) {
    const sign = changeAbs > 0 ? "+" : "";
    const unitPart = findings.unit ? ` ${findings.unit}` : "";
    const pctPart =
      changePct !== null && changePct !== undefined
        ? ` (${changeAbs > 0 ? "+" : ""}${changePct.toFixed(1)}%)`
        : "";
    changeLabel = `${sign}${changeAbs}${unitPart} from prior value${pctPart}`;
  }

  // Neutral, non-diagnostic explanation
  let explanation: string;
  if (findings.data_points < 2) {
    explanation =
      "Insufficient historical data for trend analysis. This is the first recorded value for this test.";
  } else if (direction === "stable") {
    explanation = `The reported values have remained relatively stable across ${findings.data_points} recorded data point(s).`;
  } else {
    const dirWord = direction === "increasing" ? "an increasing" : "a decreasing";
    explanation = `The reported values show ${dirWord} trend across ${findings.data_points} recorded data point(s). This is a statistical observation and does not constitute medical advice.`;
  }

  if (anomalyDetected) {
    explanation +=
      " A statistical deviation was detected in the most recent value relative to prior observations.";
  }

  if (findings.reference_range.message) {
    explanation += ` ${findings.reference_range.message}`;
  }

  return {
    trend_direction: direction,
    anomaly_detected: anomalyDetected,
    confidence_score: findings.anomaly.score,
    change_label: changeLabel,
    explanation,
    historical_points_analyzed: findings.data_points,
  };
}

// ---------------------------------------------------------------------------
// Batch-analyze multiple tests
// Returns a map of test_name -> MLAnalysis (or empty map if ML unavailable)
// ---------------------------------------------------------------------------
export interface MLInput {
  test_name: string;
  unit: string;
  reference_min?: number | null;
  reference_max?: number | null;
  history: HistoricalValue[];
}

export async function batchAnalyzeTests(
  inputs: MLInput[]
): Promise<Map<string, MLAnalysis>> {
  const result = new Map<string, MLAnalysis>();

  if (inputs.length === 0) return result;

  // Filter to tests with at least 2 historical data points
  const eligible = inputs.filter((inp) => inp.history.length >= 2);
  if (eligible.length === 0) return result;

  const payload: MLTestInput[] = eligible.map((inp) => ({
    test_name: inp.test_name,
    values: inp.history.map((h) => h.value),
    unit: inp.unit || undefined,
    reference_range:
      inp.reference_min !== null && inp.reference_min !== undefined
        ? { min: inp.reference_min, max: inp.reference_max ?? undefined }
        : undefined,
  }));

  try {
    const res = await fetch(`${ML_API_URL}/analyze/batch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
      console.warn(`ML service returned ${res.status} — skipping ML analysis`);
      return result;
    }

    const findings: MLFindingsOutput[] = await res.json();
    for (const f of findings) {
      result.set(f.test_name, mapMLFindings(f));
    }
  } catch (err) {
    // ML service unavailable — return empty map, report still saves without analysis
    console.warn("ML service unavailable:", err instanceof Error ? err.message : err);
  }

  return result;
}
