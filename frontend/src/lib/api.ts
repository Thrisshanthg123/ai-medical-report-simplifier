import {
  MedicalReport,
  MedicalTest,
  HistoricalValue,
  ReportSummary,
  ReportComparisonItem,
} from "@/types/medical";
import { supabase } from "@/lib/supabase";

function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  return `http://localhost:${process.env.PORT || 3000}`;
}

async function getAuthHeaders(): Promise<Record<string, string>> {
  if (typeof window !== "undefined") {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.access_token) {
        return { Authorization: `Bearer ${session.access_token}` };
      }
    } catch {
      // Fallback if session unavailable
    }
  } else {
    try {
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      const token = cookieStore.get("sb-access-token")?.value;
      const headersMap: Record<string, string> = {
        cookie: cookieStore.toString(),
      };
      if (token) {
        headersMap["Authorization"] = `Bearer ${token}`;
      }
      return headersMap;
    } catch {
      // Fallback
    }
  }
  return {};
}

export async function uploadMedicalReport(
  file: File
): Promise<{ report_id: string; message: string; report: MedicalReport }> {
  const formData = new FormData();
  formData.append("file", file);

  const authHeaders = await getAuthHeaders();

  const res = await fetch(`${getBaseUrl()}/api/reports/upload`, {
    method: "POST",
    headers: {
      ...authHeaders,
    },
    body: formData,
  });

  const text = await res.text();
  let errData: any = {};
  try {
    errData = text ? JSON.parse(text) : {};
  } catch {
    errData = {
      error: `Server returned non-JSON response (status ${res.status}): ${text.slice(0, 100)}`,
    };
  }

  if (!res.ok) {
    throw new Error(errData.error ?? `Upload failed: server returned status ${res.status}`);
  }
  return errData;
}

export async function getReports(): Promise<MedicalReport[]> {
  try {
    const authHeaders = await getAuthHeaders();

    const res = await fetch(`${getBaseUrl()}/api/reports`, {
      headers: {
        ...authHeaders,
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return [];
    }
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    return data.reports ?? [];
  } catch (error) {
    console.error("Failed to fetch reports:", error);
    return [];
  }
}

export async function getReport(id: string): Promise<MedicalReport | null> {
  try {
    const authHeaders = await getAuthHeaders();

    const res = await fetch(`${getBaseUrl()}/api/reports/${id}`, {
      headers: {
        ...authHeaders,
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    return data.report ?? data ?? null;
  } catch (error) {
    console.error(`Failed to fetch report ${id}:`, error);
    return null;
  }
}

export async function getTestHistory(
  slug: string
): Promise<{ test: MedicalTest; history: HistoricalValue[] } | null> {
  try {
    const authHeaders = await getAuthHeaders();

    const res = await fetch(`${getBaseUrl()}/api/tests/${slug}/history`, {
      headers: {
        ...authHeaders,
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    return data ?? null;
  } catch (error) {
    console.error(`Failed to fetch test history for ${slug}:`, error);
    return null;
  }
}

export async function getAnalysis(reportId: string): Promise<ReportSummary | null> {
  const report = await getReport(reportId);
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
  const [rA, rB] = await Promise.all([getReport(reportIdA), getReport(reportIdB)]);
  if (!rA || !rB) return null;

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