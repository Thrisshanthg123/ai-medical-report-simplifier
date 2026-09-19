export type TrendDirection = "increasing" | "decreasing" | "stable";
export type TestStatus = "within_range" | "above_range" | "below_range";
export type ReportStatus = "analyzed" | "processing" | "pending";

export interface MLAnalysis {
  trend_direction: TrendDirection;
  anomaly_detected: boolean;
  confidence_score?: number;
  change_label: string;
  explanation: string;
  historical_points_analyzed: number;
}

export interface HistoricalValue {
  date: string;
  month_label: string;
  value: number;
  reference_min: number;
  reference_max: number;
  unit: string;
  report_id?: string;
}

export interface MedicalTest {
  id: string;
  test_name: string;
  slug: string;
  value: number;
  unit: string;
  reference_range: string;
  reference_min: number;
  reference_max: number;
  status: TestStatus;
  trend: TrendDirection;
  previous_value?: number;
  change_absolute?: number;
  change_percentage?: number;
  anomaly: boolean;
  category: string;
  simple_explanation: string;
  ml_analysis?: MLAnalysis;
  historical_values?: HistoricalValue[];
}

export interface ReportSummary {
  total_tests: number;
  within_range_count: number;
  outside_range_count: number;
  trends_detected_count: number;
  anomalies_detected_count: number;
  overview_text: string;
  key_takeaways: string[];
}

export interface MedicalReport {
  id: string;
  report_name: string;
  date: string;
  provider_or_lab: string;
  tests_count: number;
  status: ReportStatus;
  tests: MedicalTest[];
  summary: ReportSummary;
}

export interface UploadProgressStep {
  id: number;
  label: string;
  detail: string;
  status: "pending" | "current" | "completed";
}

export interface ReportComparisonItem {
  test_name: string;
  slug: string;
  unit: string;
  reference_range: string;
  previous_value: number;
  previous_date: string;
  current_value: number;
  current_date: string;
  change_absolute: number;
  change_percentage: number;
  trend: TrendDirection;
  status: TestStatus;
  anomaly: boolean;
}
