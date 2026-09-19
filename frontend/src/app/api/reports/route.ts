import { NextResponse } from "next/server";
import { getReports } from "@/lib/supabase";

export async function GET() {
  try {
    const reports = await getReports();

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


