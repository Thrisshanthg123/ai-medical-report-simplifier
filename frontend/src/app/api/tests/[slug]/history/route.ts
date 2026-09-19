import { NextRequest, NextResponse } from "next/server";
import { getHistoricalTestValues, supabase } from "@/lib/supabase";
import type { MedicalTest } from "@/types/medical";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Test slug is required" },
        { status: 400 }
      );
    }

    // Fetch historical values ordered chronologically
    const history = await getHistoricalTestValues(slug);

    if (history.length === 0) {
      return NextResponse.json(
        { success: false, error: "No historical data found for this test" },
        { status: 404 }
      );
    }

    // Fetch the most recent test record to get test metadata
    const { data: testRows, error: testErr } = await supabase
      .from("tests")
      .select("*")
      .eq("slug", slug)
      .order("created_at", { ascending: false })
      .limit(1);

    if (testErr) {
      console.error("Error fetching test metadata:", testErr);
      return NextResponse.json(
        { success: false, error: testErr.message },
        { status: 500 }
      );
    }

    if (!testRows || testRows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Test not found" },
        { status: 404 }
      );
    }

    const row = testRows[0];
    const test: MedicalTest = {
      id: row.id,
      test_name: row.test_name ?? "",
      slug: row.slug ?? slug,
      value: row.value !== null ? Number(row.value) : 0,
      unit: row.unit ?? "",
      reference_range: row.reference_range ?? "",
      reference_min: row.reference_min !== null ? Number(row.reference_min) : 0,
      reference_max: row.reference_max !== null ? Number(row.reference_max) : 0,
      status: row.status ?? "within_range",
      trend: row.trend ?? "stable",
      previous_value: row.previous_value !== null ? Number(row.previous_value) : undefined,
      change_absolute: row.change_absolute !== null ? Number(row.change_absolute) : undefined,
      change_percentage: row.change_percentage !== null ? Number(row.change_percentage) : undefined,
      anomaly: Boolean(row.anomaly),
      category: row.category ?? "General",
      simple_explanation: row.simple_explanation ?? "",
      ml_analysis: row.ml_analysis ?? undefined,
      historical_values: history,
    };

    return NextResponse.json({ success: true, test, history });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Error fetching test history:", err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}