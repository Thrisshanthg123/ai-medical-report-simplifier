import { NextRequest, NextResponse } from "next/server";
import { getHistoricalTestValues } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/auth-server";
import type { MedicalTest } from "@/types/medical";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const auth = await getAuthenticatedUser(request);
    if (!auth) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Please log in." },
        { status: 401 }
      );
    }
    const { user, supabaseClient } = auth;

    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Test slug is required" },
        { status: 400 }
      );
    }

    // Fetch historical values ordered chronologically for this authenticated user
    const history = await getHistoricalTestValues(slug, user.id, supabaseClient);

    if (history.length === 0) {
      return NextResponse.json(
        { success: false, error: "No historical data found for this test" },
        { status: 404 }
      );
    }

    // Fetch the most recent test record belonging to this user to get test metadata
    const { data: testRows, error: testErr } = await supabaseClient
      .from("tests")
      .select("*, reports!inner(user_id)")
      .eq("slug", slug)
      .eq("reports.user_id", user.id)
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