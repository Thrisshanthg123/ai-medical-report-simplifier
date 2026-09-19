import { NextRequest, NextResponse } from "next/server";
import { getReportById } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/auth-server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await getAuthenticatedUser(request);
    if (!auth) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Please log in." },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Report ID is required" },
        { status: 400 }
      );
    }

    // Validate UUID format before hitting Supabase (avoids a 500 on invalid input)
    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!UUID_RE.test(id)) {
      return NextResponse.json(
        { success: false, error: "Report not found" },
        { status: 404 }
      );
    }

    const report = await getReportById(id, auth.user.id, auth.supabaseClient);

    if (!report) {
      return NextResponse.json(
        { success: false, error: "Report not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, report });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Error fetching report:", err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}