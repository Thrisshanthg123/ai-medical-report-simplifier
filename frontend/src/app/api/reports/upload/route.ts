/**
 * POST /api/reports/upload
 *
 * Pipeline:
 * 1. Accept multipart/form-data with "file" field
 * 2. Validate file type (PDF, JPG, PNG) and size (max 25 MB)
 * 3. Read file bytes
 * 4. Call Gemini to extract structured medical report JSON
 * 5. Validate extracted JSON with Zod
 * 6. Fetch historical values from Supabase for each test slug
 * 7. Call ML service for tests with sufficient history
 * 8. Compute per-test status, trend, change fields
 * 9. Save report + tests to Supabase
 * 10. Return { report_id, report }
 *
 * Safety: never fabricates values, never provides diagnosis
 */
import { NextRequest, NextResponse } from "next/server";
import { extractMedicalReport } from "@/lib/ai";
import { batchAnalyzeTests, MLInput } from "@/lib/ml";
import { validateMedicalReportFile } from "@/lib/file-validation";
import { saveReport, saveTests, getHistoricalTestValues } from "@/lib/supabase";
import type { SaveTestInput } from "@/lib/supabase";
import type { TestStatus, TrendDirection, HistoricalValue } from "@/types/medical";
import { getAuthenticatedUser } from "@/lib/auth-server";

// ---------------------------------------------------------------------------
// Determine TestStatus from value vs reference range
// ---------------------------------------------------------------------------
function computeStatus(
  value: number,
  refMin: number | null | undefined,
  refMax: number | null | undefined
): TestStatus {
  if (refMin === null || refMin === undefined || refMax === null || refMax === undefined) {
    return "within_range"; // Cannot assess without reference range
  }
  if (value < refMin) return "below_range";
  if (value > refMax) return "above_range";
  return "within_range";
}

// ---------------------------------------------------------------------------
// Compute change fields from historical values
// ---------------------------------------------------------------------------
function computeChange(currentValue: number, history: HistoricalValue[]) {
  if (history.length < 1) {
    return { previous_value: undefined, change_absolute: undefined, change_percentage: undefined };
  }
  // history is ordered ascending, so the last entry before current is the previous
  const prev = history[history.length - 1];
  const prevVal = prev.value;
  const absChange = Math.round((currentValue - prevVal) * 100) / 100;
  const pctChange = prevVal !== 0
    ? Math.round(((currentValue - prevVal) / Math.abs(prevVal)) * 10000) / 100
    : null;
  return {
    previous_value: prevVal,
    change_absolute: absChange,
    change_percentage: pctChange ?? undefined,
  };
}

// ---------------------------------------------------------------------------
// Main upload handler
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    // 0. Verify authenticated user
    const auth = await getAuthenticatedUser(request);
    if (!auth) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Please log in to upload reports." },
        { status: 401 }
      );
    }
    const { user, supabaseClient } = auth;

    // 1. Parse multipart form data
    const formData = await request.formData().catch(() => null);
    if (!formData) {
      return NextResponse.json(
        { success: false, error: "Invalid request: expected multipart/form-data" },
        { status: 400 }
      );
    }

    const fileEntry = formData.get("file");
    if (!fileEntry || typeof fileEntry === "string") {
      return NextResponse.json(
        { success: false, error: "No file provided. Include a 'file' field in the form data." },
        { status: 400 }
      );
    }

    const file = fileEntry as File;

    // 2. Validate file type and size
    const validation = validateMedicalReportFile({
      name: file.name,
      size: file.size,
      type: file.type,
    });

    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      );
    }

    // 3. Read file bytes
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    // Determine MIME type
    const mimeType = (
      file.type === "application/pdf"
        ? "application/pdf"
        : file.type === "image/png"
        ? "image/png"
        : "image/jpeg"
    ) as "application/pdf" | "image/jpeg" | "image/png";

    console.log(`[upload] Processing "${file.name}" (${file.size} bytes, ${mimeType}) for user ${user.id}`);

    // 4. Extract structured data with Gemini
    const extractedReport = await extractMedicalReport(fileBuffer, mimeType, file.name);
    console.log(`[upload] Extracted ${extractedReport.tests.length} tests from "${file.name}"`);

    // 5. Fetch historical values from Supabase for each unique test slug for this user
    const historicalMap = new Map<string, HistoricalValue[]>();
    await Promise.all(
      extractedReport.tests.map(async (test) => {
        try {
          const history = await getHistoricalTestValues(test.slug, user.id, supabaseClient);
          historicalMap.set(test.slug, history);
        } catch {
          historicalMap.set(test.slug, []);
        }
      })
    );

    // 6. Call ML service for tests with sufficient history (at least 2 points including current)
    const mlInputs: MLInput[] = extractedReport.tests.map((test) => {
      const history = historicalMap.get(test.slug) ?? [];
      const historicalValues = history.map((h) => h.value);
      const values = [...historicalValues, test.value];

      return {
        test_name: test.test_name,
        unit: test.unit ?? "",
        reference_min: test.reference_min ?? null,
        reference_max: test.reference_max ?? null,
        values,
      };
    });

    const mlResults = await batchAnalyzeTests(mlInputs);
    console.log(`[upload] ML analysis completed for ${mlResults.size} test(s)`);

    // 7. Build per-test save inputs with computed fields
    const testInputs: SaveTestInput[] = extractedReport.tests.map((test) => {
      const history = historicalMap.get(test.slug) ?? [];
      const status = computeStatus(test.value, test.reference_min, test.reference_max);
      const changeFields = computeChange(test.value, history);
      const mlAnalysis = mlResults.get(test.test_name);

      // Determine trend direction from ML if available, else from change
      let trend: TrendDirection = "stable";
      if (mlAnalysis) {
        trend = mlAnalysis.trend_direction;
      } else if (changeFields.change_absolute !== undefined) {
        const abs = changeFields.change_absolute;
        if (abs > 0) trend = "increasing";
        else if (abs < 0) trend = "decreasing";
      }

      return {
        test_name: test.test_name,
        slug: test.slug,
        value: test.value,
        unit: test.unit ?? "",
        reference_range: test.reference_range ?? "",
        reference_min: test.reference_min ?? undefined,
        reference_max: test.reference_max ?? undefined,
        status,
        trend,
        previous_value: changeFields.previous_value,
        change_absolute: changeFields.change_absolute,
        change_percentage: changeFields.change_percentage,
        anomaly: mlAnalysis?.anomaly_detected ?? false,
        category: test.category ?? "General",
        simple_explanation: test.simple_explanation ?? "",
        ml_analysis: mlAnalysis ?? undefined,
      };
    });

    // 8. Save report to Supabase with authenticated user.id
    const reportId = await saveReport(
      {
        user_id: user.id,
        report_name: extractedReport.report_name,
        report_date: extractedReport.date,
        provider_or_lab: extractedReport.provider_or_lab,
        status: "analyzed",
        summary_overview: buildSummaryOverview(testInputs),
        key_takeaways: buildKeyTakeaways(testInputs),
      },
      supabaseClient
    );

    // 9. Save tests to Supabase
    const savedTests = await saveTests(reportId, testInputs, supabaseClient);
    console.log(`[upload] Saved report ${reportId} for user ${user.id} with ${savedTests.length} tests`);

    // 10. Build full report response
    const withinRange = savedTests.filter((t) => t.status === "within_range").length;
    const outsideRange = savedTests.filter(
      (t) => t.status === "above_range" || t.status === "below_range"
    ).length;
    const trendsDetected = savedTests.filter((t) => t.trend !== "stable").length;
    const anomalies = savedTests.filter((t) => t.anomaly).length;

    const report = {
      id: reportId,
      report_name: extractedReport.report_name,
      date: extractedReport.date,
      provider_or_lab: extractedReport.provider_or_lab,
      tests_count: savedTests.length,
      status: "analyzed" as const,
      tests: savedTests,
      summary: {
        total_tests: savedTests.length,
        within_range_count: withinRange,
        outside_range_count: outsideRange,
        trends_detected_count: trendsDetected,
        anomalies_detected_count: anomalies,
        overview_text: buildSummaryOverview(testInputs),
        key_takeaways: buildKeyTakeaways(testInputs),
      },
    };

    return NextResponse.json({
      success: true,
      report_id: reportId,
      report,
      message: `Report processed successfully. ${savedTests.length} test(s) extracted.`,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("[upload] Error processing upload:", err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// Build plain-language summary overview
// ---------------------------------------------------------------------------
function buildSummaryOverview(tests: SaveTestInput[]): string {
  const total = tests.length;
  const outside = tests.filter(
    (t) => t.status === "above_range" || t.status === "below_range"
  ).length;
  const within = total - outside;

  if (total === 0) return "No tests were extracted from this report.";

  const parts: string[] = [
    `This report contains ${total} extracted biomarker(s).`,
    `${within} value(s) fall within the reported reference range.`,
  ];

  if (outside > 0) {
    parts.push(
      `${outside} value(s) are outside the reported reference range as stated in the document.`
    );
  }

  parts.push(
    "This summary is informational only and does not constitute medical advice."
  );

  return parts.join(" ");
}

// ---------------------------------------------------------------------------
// Build key takeaways list
// ---------------------------------------------------------------------------
function buildKeyTakeaways(tests: SaveTestInput[]): string[] {
  const takeaways: string[] = [];

  const above = tests.filter((t) => t.status === "above_range");
  const below = tests.filter((t) => t.status === "below_range");
  const increasing = tests.filter((t) => t.trend === "increasing");
  const decreasing = tests.filter((t) => t.trend === "decreasing");
  const anomalous = tests.filter((t) => t.anomaly);

  if (above.length > 0) {
    const names = above.map((t) => t.test_name).join(", ");
    takeaways.push(
      `${above.length} test(s) above the reported reference range: ${names}.`
    );
  }

  if (below.length > 0) {
    const names = below.map((t) => t.test_name).join(", ");
    takeaways.push(
      `${below.length} test(s) below the reported reference range: ${names}.`
    );
  }

  if (increasing.length > 0) {
    const names = increasing.map((t) => t.test_name).join(", ");
    takeaways.push(`Increasing trend observed in: ${names}.`);
  }

  if (decreasing.length > 0) {
    const names = decreasing.map((t) => t.test_name).join(", ");
    takeaways.push(`Decreasing trend observed in: ${names}.`);
  }

  if (anomalous.length > 0) {
    const names = anomalous.map((t) => t.test_name).join(", ");
    takeaways.push(
      `Statistical deviation detected in: ${names}. Discuss with your healthcare provider.`
    );
  }

  if (takeaways.length === 0) {
    takeaways.push("All extracted values are within the reference ranges stated in this report.");
  }

  takeaways.push(
    "These observations are based solely on values present in the uploaded document and do not constitute a medical diagnosis."
  );

  return takeaways;
}