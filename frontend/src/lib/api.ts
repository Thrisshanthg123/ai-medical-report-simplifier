import {
  MedicalReport,
  MedicalTest,
  HistoricalValue,
  ReportSummary,
  ReportComparisonItem,
} from "@/types/medical";
import {
  MOCK_REPORTS,
  MOCK_TESTS_LATEST,
} from "./mock-data";
import { fetchMLAnalysis } from "./ml";

/**
 * Mock API service simulating asynchronous server communication.
 * Ready to be connected to teammates' real backend/OCR/ML microservices.
 */

// Simulated network latency helper
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function uploadMedicalReport(
  file: { name: string; size: number; type: string }
): Promise<{ report_id: string; message: string; report: MedicalReport }> {
  await delay(1200);
  // Returns rep-001 as the processed result of the upload
  const report = MOCK_REPORTS[0];
  return {
    report_id: report.id,
    message: `Report "${file.name}" successfully processed and analyzed.`,
    report,
  };
}

export async function getReports(): Promise<MedicalReport[]> {
  await delay(150);
  return [...MOCK_REPORTS];
}

export async function getReport(id: string): Promise<MedicalReport | null> {
  await delay(100);
  const found = MOCK_REPORTS.find((r) => r.id === id);
  return found ? JSON.parse(JSON.stringify(found)) : null;
}

export async function getTestHistory(
  slug: string
): Promise<{ test: MedicalTest; history: HistoricalValue[] } | null> {
  await delay(100);
  const test = MOCK_TESTS_LATEST.find((t) => t.slug === slug);
  if (!test || !test.historical_values) {
    return null;
  }

  const testCopy: MedicalTest = JSON.parse(JSON.stringify(test));
  const historyCopy: HistoricalValue[] = JSON.parse(JSON.stringify(test.historical_values));

  // Connect live Python ML Service (FastAPI at http://localhost:8000/analyze)
  const historicalValues = historyCopy.map((h) => h.value);
  const mlResult = await fetchMLAnalysis({
    test_name: testCopy.test_name,
    values: historicalValues,
    reference_range: {
      min: testCopy.reference_min,
      max: testCopy.reference_max,
    },
    unit: testCopy.unit,
  });

  if (mlResult) {
    testCopy.trend = mlResult.trend.direction as any;
    testCopy.anomaly = mlResult.anomaly.detected;
    (testCopy as any).ml_analysis = {
      trend_direction: mlResult.trend.direction,
      trend_slope: mlResult.trend.slope,
      anomaly_detected: mlResult.anomaly.detected,
      anomaly_score: mlResult.anomaly.score,
      statistics: mlResult.statistics,
      change: mlResult.change,
      reference_message: mlResult.reference_range.message,
    };
  }

  return {
    test: testCopy,
    history: historyCopy,
  };
}

export async function getAnalysis(reportId: string): Promise<ReportSummary | null> {
  await delay(100);
  const report = MOCK_REPORTS.find((r) => r.id === reportId);
  return report ? report.summary : null;
}

export async function compareReports(
  reportIdA: string,
  reportIdB: string
): Promise<{
  reportA: MedicalReport;
  reportB: MedicalReport;
  comparisons: ReportComparisonItem[];
} | null> {
  await delay(150);
  const rA = MOCK_REPORTS.find((r) => r.id === reportIdA);
  const rB = MOCK_REPORTS.find((r) => r.id === reportIdB);

  if (!rA || !rB) return null;

  // Let earlier report be "previous" and later report be "current"
  const [prev, curr] =
    new Date(rA.date).getTime() < new Date(rB.date).getTime()
      ? [rA, rB]
      : [rB, rA];

  const comparisons: ReportComparisonItem[] = curr.tests.map((currTest) => {
    const prevTest = prev.tests.find((t) => t.slug === currTest.slug);
    const prevVal = prevTest ? prevTest.value : currTest.value;
    const diff = currTest.value - prevVal;
    const pct = prevVal !== 0 ? (diff / prevVal) * 100 : 0;

    return {
      test_name: currTest.test_name,
      slug: currTest.slug,
      unit: currTest.unit,
      reference_range: currTest.reference_range,
      previous_value: prevVal,
      previous_date: prev.date,
      current_value: currTest.value,
      current_date: curr.date,
      change_absolute: Math.round(diff * 10) / 10,
      change_percentage: Math.round(pct * 10) / 10,
      trend: currTest.trend,
      status: currTest.status,
      anomaly: currTest.anomaly,
    };
  });

  return {
    reportA: prev,
    reportB: curr,
    comparisons,
  };
}
