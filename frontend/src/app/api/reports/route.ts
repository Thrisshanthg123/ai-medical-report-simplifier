import { NextRequest, NextResponse } from "next/server";
import { getReports } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/auth-server";

export async function GET(request: NextRequest) {
  try {
    const auth = await getAuthenticatedUser(request);
    if (!auth) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Please log in." },
        { status: 401 }
      );
    }

    const reports = await getReports(auth.user.id, auth.supabaseClient);

    return NextResponse.json({
      success: true,
      reports,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    console.error("Server error fetching reports:", err);
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
