export interface MLAnalysisPayload {
  test_name: string;
  values: (number | null | string)[];
  reference_range?: {
    min?: number;
    max?: number;
  };
  unit?: string;
}

export interface MLFindingsResponse {
  test_name: string;
  unit?: string;
  current_value?: number;
  previous_value?: number;
  statistics: {
    mean?: number;
    minimum?: number;
    maximum?: number;
    standard_deviation?: number;
  };
  change: {
    absolute?: number;
    percentage?: number;
  };
  trend: {
    direction: "increasing" | "decreasing" | "stable" | "insufficient_data";
    slope?: number;
  };
  reference_range: {
    min?: number;
    max?: number;
    within_range?: boolean;
    message: string;
  };
  anomaly: {
    detected: boolean;
    score: number;
    status?: string;
  };
  data_points: number;
}

const ML_SERVICE_URL = process.env.NEXT_PUBLIC_ML_SERVICE_URL || "http://localhost:8000";

/**
 * Connects frontend/Next.js backend to the Python FastAPI ML microservice.
 */
export async function fetchMLAnalysis(payload: MLAnalysisPayload): Promise<MLFindingsResponse | null> {
  try {
    const res = await fetch(`${ML_SERVICE_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn(`ML Service responded with status ${res.status}`);
      return null;
    }

    return (await res.json()) as MLFindingsResponse;
  } catch (error) {
    console.error("Failed to connect to ML service at " + ML_SERVICE_URL, error);
    return null;
  }
}
