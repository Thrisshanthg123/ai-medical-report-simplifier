import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("reports")
      .select("id, report_name")
      .limit(5);

    if (error) {
      console.error("Database error fetching reports:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      reports: data,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    console.error("Server error fetching reports:", err);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

