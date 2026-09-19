/**
 * AI extraction using Gemini.
 *
 * Sends the uploaded file bytes to Gemini with a structured prompt asking
 * it to extract all medical test results.
 *
 * SAFETY RULES enforced in the prompt:
 * - Only extract values that are literally present in the document
 * - Never fabricate reference ranges — use only what the report states
 * - Never provide medical diagnoses or recommendations
 * - Use neutral wording: "above the reported reference range"
 */
import { GoogleGenAI } from "@google/genai";
import { ExtractedReport, normalizeSlug, validateExtractedReport } from "./validation";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY environment variable");
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const EXTRACTION_PROMPT = `You are a medical document parser. Extract all laboratory test results from the provided document.

STRICT RULES:
1. Only extract values that are LITERALLY present in the document. Do NOT invent or estimate any values.
2. Only include reference ranges that are EXPLICITLY stated in the document. If not stated, set reference_min and reference_max to null.
3. Do NOT provide any medical interpretation, diagnosis, or recommendation.
4. Use neutral wording only.
5. If a field cannot be reliably extracted, use null or an empty string.

Return ONLY a valid JSON object with this exact structure (no markdown, no explanation, just raw JSON):

{
  "report_name": "<name of the report or lab panel — e.g. 'Complete Blood Count' or 'Metabolic Panel'>",
  "date": "<report/collection date as ISO 8601 string, e.g. '2026-09-01' — use today's date if not found>",
  "provider_or_lab": "<laboratory or provider name — use 'Unknown Lab' if not found>",
  "tests": [
    {
      "test_name": "<full test name as written in report>",
      "slug": "<lowercase-hyphenated version of test_name, e.g. 'fasting-glucose'>",
      "value": <numeric value only, e.g. 109>,
      "unit": "<unit as written, e.g. 'mg/dL' — empty string if not stated>",
      "reference_range": "<full reference range as written, e.g. '70-99 mg/dL' — empty string if not stated>",
      "reference_min": <lower bound as number, e.g. 70 — null if not stated>,
      "reference_max": <upper bound as number, e.g. 99 — null if not stated>,
      "category": "<one of: Metabolic, Hematology, Lipids, Hormones, Vitamins, Liver, Kidney, Thyroid, Cardiac, General>",
      "simple_explanation": "<one sentence plain-language description of what this test measures, e.g. 'Measures blood sugar levels after fasting.' — do NOT include interpretation of the result>"
    }
  ]
}

Extract ALL tests visible in the document. If no tests can be found, return an empty tests array.`;

// ---------------------------------------------------------------------------
// Extract structured medical data from a file buffer
// ---------------------------------------------------------------------------
export async function extractMedicalReport(
  fileBuffer: Buffer,
  mimeType: "application/pdf" | "image/jpeg" | "image/png" | "image/jpg",
  fileName: string
): Promise<ExtractedReport> {
  // Normalize mime type
  const normalizedMime: "application/pdf" | "image/jpeg" | "image/png" =
    mimeType === "image/jpg" ? "image/jpeg" : mimeType;

  // Convert buffer to base64 for inline data
  const base64Data = fileBuffer.toString("base64");

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        parts: [
          {
            inlineData: {
              mimeType: normalizedMime,
              data: base64Data,
            },
          },
          {
            text: EXTRACTION_PROMPT,
          },
        ],
      },
    ],
    config: {
      temperature: 0,
      responseMimeType: "application/json",
    },
  });

  const rawText = response.text ?? "";

  // Parse JSON from response
  let parsed: unknown;
  try {
    // Strip markdown fences if present
    const cleaned = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();
    parsed = JSON.parse(cleaned);
  } catch (err) {
    throw new Error(
      `Gemini returned non-JSON response for "${fileName}": ${rawText.slice(0, 200)}`
    );
  }

  // Validate the parsed output
  const validation = validateExtractedReport(parsed);
  if (!validation.success) {
    throw new Error(
      `Gemini extraction failed validation for "${fileName}": ${validation.error}`
    );
  }

  // Ensure all slugs are normalized
  const report = validation.data;
  report.tests = report.tests.map((t) => ({
    ...t,
    slug: t.slug || normalizeSlug(t.test_name),
  }));

  return report;
}
