import { createClient, SupabaseClient } from "@supabase/supabase-js";
import {
  MedicalReport,
  MedicalTest,
  HistoricalValue,
  ReportSummary,
  TestStatus,
  TrendDirection,
  ReportStatus,
  MLAnalysis,
} from "@/types/medical";

export function isSupabaseConfigured(): boolean {
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_KEY;
  return Boolean(key && key.trim());
}

let _supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (_supabaseClient) return _supabaseClient;

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://hxpskhiqfplhckwqeamm.supabase.co";

  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_KEY ||
    "dummy-anon-key";

  _supabaseClient = createClient(supabaseUrl, supabaseKey);
  return _supabaseClient;
}

export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = getSupabaseClient();
    const val = (client as any)[prop];
    return typeof val === "function" ? val.bind(client) : val;
  },
});

// Local in-memory fallback store when Supabase keys are not configured
const inMemoryReports: DbReportRow[] = [];
const inMemoryTests: DbTestRow[] = [];

// ==========================================
// DB-SPECIFIC ROW SCHEMAS (ACTUAL SUPABASE)
// ==========================================

export interface DbReportRow {
  id: string;
  report_name: string;
  report_date: string | null;
  provider_or_lab: string | null;
  status: string | null;
  summary_overview: string | null;
  key_takeaways: string[] | null;
  created_at?: string;
  tests?: DbTestRow[];
}

export interface DbTestRow {
  id: string;
  report_id: string;
  test_name: string | null;
  slug: string | null;
  value: number | null;
  unit: string | null;
  reference_range: string | null;
  reference_min: number | null;
  reference_max: number | null;
  status: string | null;
  trend: string | null;
  previous_value: number | null;
  change_absolute: number | null;
  change_percentage: number | null;
  anomaly: boolean | null;
  category: string | null;
  simple_explanation: string | null;
  ml_analysis: MLAnalysis | null;
  created_at?: string;
  reports?: {
    id: string;
    report_date: string | null;
  } | null;
}

export interface SaveReportInput {
  id?: string;
  report_name: string;
  report_date?: string | null;
  date?: string | null;
  provider_or_lab?: string | null;
  status?: ReportStatus | string | null;
  summary_overview?: string | null;
  summary?: {
    overview_text?: string;
    key_takeaways?: string[];
  } | null;
  key_takeaways?: string[] | null;
}

export interface SaveTestInput {
  test_name: string;
  slug: string;
  value: number;
  unit?: string;
  reference_range?: string;
  reference_min?: number;
  reference_max?: number;
  status?: TestStatus;
  trend?: TrendDirection;
  previous_value?: number;
  change_absolute?: number;
  change_percentage?: number;
  anomaly?: boolean;
  category?: string;
  simple_explanation?: string;
  ml_analysis?: MLAnalysis;
}

// ==========================================
// ADAPTER MAPPERS
// ==========================================

function getMonthLabel(dateString: string): string {
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleString("en-US", { month: "long" });
  } catch {
    return "";
  }
}

export function mapDbTestToMedicalTest(row: DbTestRow): MedicalTest {
  return {
    id: row.id,
    test_name: row.test_name ?? "",
    slug: row.slug ?? "",
    value: row.value !== null ? Number(row.value) : 0,
    unit: row.unit ?? "",
    reference_range: row.reference_range ?? "",
    reference_min: row.reference_min !== null ? Number(row.reference_min) : 0,
    reference_max: row.reference_max !== null ? Number(row.reference_max) : 0,
    status: (row.status as TestStatus) ?? "within_range",
    trend: (row.trend as TrendDirection) ?? "stable",
    previous_value:
      row.previous_value !== null && row.previous_value !== undefined
        ? Number(row.previous_value)
        : undefined,
    change_absolute:
      row.change_absolute !== null && row.change_absolute !== undefined
        ? Number(row.change_absolute)
        : undefined,
    change_percentage:
      row.change_percentage !== null && row.change_percentage !== undefined
        ? Number(row.change_percentage)
        : undefined,
    anomaly: Boolean(row.anomaly),
    category: row.category ?? "General",
    simple_explanation: row.simple_explanation ?? "",
    ml_analysis: row.ml_analysis ?? undefined,
  };
}

export function mapDbReportToMedicalReport(
  reportRow: DbReportRow,
  testsRows: DbTestRow[] = []
): MedicalReport {
  const tests = testsRows.map(mapDbTestToMedicalTest);

  const within_range_count = tests.filter((t) => t.status === "within_range").length;
  const outside_range_count = tests.filter(
    (t) => t.status === "above_range" || t.status === "below_range"
  ).length;
  const trends_detected_count = tests.filter((t) => t.trend && t.trend !== "stable").length;
  const anomalies_detected_count = tests.filter((t) => t.anomaly === true).length;

  const summary: ReportSummary = {
    total_tests: tests.length,
    within_range_count,
    outside_range_count,
    trends_detected_count,
    anomalies_detected_count,
    overview_text: reportRow.summary_overview ?? "",
    key_takeaways: Array.isArray(reportRow.key_takeaways) ? reportRow.key_takeaways : [],
  };

  return {
    id: reportRow.id,
    report_name: reportRow.report_name,
    date: reportRow.report_date ?? reportRow.created_at ?? new Date().toISOString(),
    provider_or_lab: reportRow.provider_or_lab ?? "",
    tests_count: tests.length,
    status: (reportRow.status as ReportStatus) ?? "analyzed",
    tests,
    summary,
  };
}

// ==========================================
// REUSABLE DATABASE ACCESS FUNCTIONS
// ==========================================

function genId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * 1. getReports()
 * Fetch all reports with their related tests, ordered by report_date descending.
 * Falls back to in-memory store when Supabase keys are not configured.
 */
export async function getReports(): Promise<MedicalReport[]> {
  if (!isSupabaseConfigured()) {
    console.warn("[supabase] Using in-memory store (demo mode) — NEXT_PUBLIC_SUPABASE_ANON_KEY not set");
    const sorted = [...inMemoryReports].sort((a, b) => {
      const aDate = a.report_date ?? a.created_at ?? "";
      const bDate = b.report_date ?? b.created_at ?? "";
      return bDate.localeCompare(aDate);
    });
    return sorted.map((row) =>
      mapDbReportToMedicalReport(row, inMemoryTests.filter((t) => t.report_id === row.id))
    );
  }

  const { data, error } = await supabase
    .from("reports")
    .select("*, tests(*)")
    .order("report_date", { ascending: false });

  if (error) {
    console.error("Error fetching reports from Supabase:", error);
    return [];
  }

  if (!data) return [];

  return (data as DbReportRow[]).map((row) =>
    mapDbReportToMedicalReport(row, row.tests ?? [])
  );
}

/**
 * 2. getReportById(reportId)
 * Fetch a single report and its related tests by ID.
 * Falls back to in-memory store when Supabase keys are not configured.
 */
export async function getReportById(reportId: string): Promise<MedicalReport | null> {
  if (!isSupabaseConfigured()) {
    const row = inMemoryReports.find((r) => r.id === reportId) ?? null;
    if (!row) return null;
    return mapDbReportToMedicalReport(row, inMemoryTests.filter((t) => t.report_id === reportId));
  }

  const { data, error } = await supabase
    .from("reports")
    .select("*, tests(*)")
    .eq("id", reportId)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching report ${reportId} from Supabase:`, error);
    return null;
  }

  if (!data) return null;

  const row = data as DbReportRow;
  return mapDbReportToMedicalReport(row, row.tests ?? []);
}

/**
 * 3. getHistoricalTestValues(slug)
 * Find tests matching the given test slug across historical reports.
 * Falls back to in-memory store when Supabase keys are not configured.
 */
export async function getHistoricalTestValues(slug: string): Promise<HistoricalValue[]> {
  if (!isSupabaseConfigured()) {
    const rows = inMemoryTests.filter((t) => t.slug === slug);
    const mapped: HistoricalValue[] = rows.map((row) => {
      const report = inMemoryReports.find((r) => r.id === row.report_id);
      const date = report?.report_date ?? row.created_at ?? new Date().toISOString();
      return {
        date,
        month_label: getMonthLabel(date),
        value: row.value !== null ? Number(row.value) : 0,
        reference_min: row.reference_min !== null ? Number(row.reference_min) : 0,
        reference_max: row.reference_max !== null ? Number(row.reference_max) : 0,
        unit: row.unit ?? "",
        report_id: row.report_id,
      };
    });
    mapped.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return mapped;
  }

  const { data, error } = await supabase
    .from("tests")
    .select("*, reports!inner(id, report_date)")
    .eq("slug", slug)
    .order("reports(report_date)", { ascending: true });

  if (error) {
    console.error(`Error fetching historical test values for slug '${slug}':`, error);
    return [];
  }

  if (!data) return [];

  const rows = data as unknown as DbTestRow[];

  const mapped: HistoricalValue[] = rows.map((row) => {
    const date = row.reports?.report_date ?? row.created_at ?? new Date().toISOString();
    return {
      date,
      month_label: getMonthLabel(date),
      value: row.value !== null ? Number(row.value) : 0,
      reference_min: row.reference_min !== null ? Number(row.reference_min) : 0,
      reference_max: row.reference_max !== null ? Number(row.reference_max) : 0,
      unit: row.unit ?? "",
      report_id: row.report_id,
    };
  });

  mapped.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return mapped;
}

/**
 * 4. saveReport(report)
 * Inserts one report record into the `reports` table.
 * Falls back to in-memory store when Supabase keys are not configured.
 */
export async function saveReport(report: SaveReportInput): Promise<string> {
  const payload = {
    report_name: report.report_name,
    report_date: report.report_date ?? report.date ?? new Date().toISOString(),
    provider_or_lab: report.provider_or_lab ?? "",
    status: report.status ?? "analyzed",
    summary_overview: report.summary_overview ?? report.summary?.overview_text ?? "",
    key_takeaways: report.key_takeaways ?? report.summary?.key_takeaways ?? [],
  };

  if (!isSupabaseConfigured()) {
    console.warn("[supabase] Using in-memory store (demo mode) — persisting report locally");
    const id = genId();
    const row: DbReportRow = {
      id,
      ...payload,
      created_at: new Date().toISOString(),
    };
    inMemoryReports.push(row);
    return id;
  }

  const { data, error } = await supabase
    .from("reports")
    .insert(payload)
    .select("id")
    .single();

  if (error) {
    console.error("Error inserting report into Supabase:", error);
    throw new Error(`Failed to save report: ${error.message}`);
  }

  return data.id;
}

/**
 * 5. saveTests(reportId, tests)
 * Inserts test records into the `tests` table associated with `report_id`.
 * Falls back to in-memory store when Supabase keys are not configured.
 */
export async function saveTests(
  reportId: string,
  tests: SaveTestInput[]
): Promise<MedicalTest[]> {
  if (!tests || tests.length === 0) {
    return [];
  }

  const rows = tests.map((t) => ({
    report_id: reportId,
    test_name: t.test_name,
    slug: t.slug,
    value: t.value,
    unit: t.unit ?? "",
    reference_range: t.reference_range ?? "",
    reference_min: t.reference_min ?? 0,
    reference_max: t.reference_max ?? 0,
    status: t.status ?? "within_range",
    trend: t.trend ?? "stable",
    previous_value: t.previous_value ?? null,
    change_absolute: t.change_absolute ?? null,
    change_percentage: t.change_percentage ?? null,
    anomaly: t.anomaly ?? false,
    category: t.category ?? "General",
    simple_explanation: t.simple_explanation ?? "",
    ml_analysis: t.ml_analysis ?? null,
  }));

  if (!isSupabaseConfigured()) {
    console.warn("[supabase] Using in-memory store (demo mode) — persisting tests locally");
    const savedRows: DbTestRow[] = rows.map((r) => ({
      ...r,
      id: genId(),
      created_at: new Date().toISOString(),
    }));
    inMemoryTests.push(...savedRows);
    return savedRows.map(mapDbTestToMedicalTest);
  }

  const { data, error } = await supabase
    .from("tests")
    .insert(rows)
    .select();

  if (error) {
    console.error(`Error inserting tests for report ${reportId} into Supabase:`, error);
    throw new Error(`Failed to save tests: ${error.message}`);
  }

  return (data as DbTestRow[]).map(mapDbTestToMedicalTest);
}