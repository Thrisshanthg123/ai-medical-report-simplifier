/**
 * Validation schemas for AI-extracted medical report data.
 * Uses Zod to reject malformed extraction output before saving to Supabase.
 */
import { z } from "zod";

// ---------------------------------------------------------------------------
// Extracted test schema — matches what Gemini must return
// ---------------------------------------------------------------------------
export const ExtractedTestSchema = z.object({
  test_name: z.string().min(1, "test_name is required"),
  slug: z.string().min(1, "slug is required"),
  value: z.number(),
  unit: z.string().default(""),
  reference_range: z.string().default(""),
  reference_min: z.number().nullable().optional(),
  reference_max: z.number().nullable().optional(),
  category: z.string().default("General"),
  simple_explanation: z.string().default(""),
});

export type ExtractedTest = z.infer<typeof ExtractedTestSchema>;

// ---------------------------------------------------------------------------
// Extracted report schema — top-level wrapper Gemini must fill
// ---------------------------------------------------------------------------
export const ExtractedReportSchema = z.object({
  report_name: z.string().min(1, "report_name is required"),
  date: z
    .string()
    .refine(
      (d) => !isNaN(new Date(d).getTime()),
      "date must be a valid ISO date string"
    )
    .default(() => new Date().toISOString()),
  provider_or_lab: z.string().default("Unknown Lab"),
  tests: z
    .array(ExtractedTestSchema)
    .min(1, "At least one test must be extracted"),
});

export type ExtractedReport = z.infer<typeof ExtractedReportSchema>;

// ---------------------------------------------------------------------------
// Validate raw Gemini JSON output
// Returns { success, data } or { success: false, error }
// ---------------------------------------------------------------------------
export function validateExtractedReport(
  raw: unknown
): { success: true; data: ExtractedReport } | { success: false; error: string } {
  const result = ExtractedReportSchema.safeParse(raw);
  if (result.success) {
    return { success: true, data: result.data };
  }
  const messages = result.error.issues
    .map((i) => `${i.path.join(".")}: ${i.message}`)
    .join("; ");
  return { success: false, error: `Validation failed: ${messages}` };
}

// ---------------------------------------------------------------------------
// Slug normalizer — converts "Fasting Glucose" -> "fasting-glucose"
// ---------------------------------------------------------------------------
export function normalizeSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
