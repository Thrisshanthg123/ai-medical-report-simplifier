import { NextResponse } from "next/server";
import { fetchMLAnalysis } from "@/lib/ml";

export async function GET() {
  return NextResponse.json({ message: "ML Analysis proxy endpoint ready. Use POST to submit test series data." });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const mlResult = await fetchMLAnalysis(body);
    
    if (!mlResult) {
      return NextResponse.json(
        { error: "ML service unavailable at http://localhost:8000" },
        { status: 503 }
      );
    }
    
    return NextResponse.json(mlResult);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to process analysis request" },
      { status: 400 }
    );
  }
}
