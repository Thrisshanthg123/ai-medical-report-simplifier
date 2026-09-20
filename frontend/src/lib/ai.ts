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

function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.AI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

function getMockExtractedReport(fileName: string): ExtractedReport {
  return {
    report_name: "Comprehensive Laboratory Panel",
    date: new Date().toISOString().split("T")[0],
    provider_or_lab: "Clinical Diagnostics (Demo Mode)",
    tests: [
      {
        test_name: "Fasting Blood Glucose",
        slug: "fasting-blood-glucose",
        value: 108,
        unit: "mg/dL",
        reference_range: "70 - 99 mg/dL",
        reference_min: 70,
        reference_max: 99,
        category: "Metabolic",
        simple_explanation: "Measures the level of glucose (sugar) in your blood after fasting.",
      },
      {
        test_name: "Total Cholesterol",
        slug: "total-cholesterol",
        value: 215,
        unit: "mg/dL",
        reference_range: "125 - 200 mg/dL",
        reference_min: 125,
        reference_max: 200,
        category: "Lipids",
        simple_explanation: "Measures the overall amount of cholesterol in your blood.",
      },
      {
        test_name: "Hemoglobin A1c",
        slug: "hemoglobin-a1c",
        value: 5.6,
        unit: "%",
        reference_range: "4.0 - 5.6 %",
        reference_min: 4.0,
        reference_max: 5.6,
        category: "Metabolic",
        simple_explanation: "Reflects average blood sugar levels over the past 2-3 months.",
      },
      {
        test_name: "Serum Creatinine",
        slug: "serum-creatinine",
        value: 0.95,
        unit: "mg/dL",
        reference_range: "0.74 - 1.35 mg/dL",
        reference_min: 0.74,
        reference_max: 1.35,
        category: "Kidney",
        simple_explanation: "Measures kidney function by checking creatinine levels in blood.",
      },
      {
        test_name: "White Blood Cell Count",
        slug: "white-blood-cell-count",
        value: 6.8,
        unit: "x10^3/uL",
        reference_range: "4.5 - 11.0 x10^3/uL",
        reference_min: 4.5,
        reference_max: 11.0,
        category: "Hematology",
        simple_explanation: "Measures the cells that help your immune system fight infection.",
      },
    ],
  };
}

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
  const ai = getAIClient();
  if (!ai) {
    console.warn(
      `[ai] AI_API_KEY environment variable is not set — returning demonstration report extraction for "${fileName}"`
    );
    return getMockExtractedReport(fileName);
  }
  const base64Data = fileBuffer.toString("base64");
  const candidateModels = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash"];
  let response: any = null;
  let lastError: unknown = null;

  for (const model of candidateModels) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.log(`[ai] Requesting extraction via "${model}" (attempt ${attempt})...`);
        response = await ai.models.generateContent({
          model,
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
        break; // Successfully got response
      } catch (err: any) {
        lastError = err;
        const errMsg = err?.message || String(err);
        const isTransient =
          errMsg.includes("503") ||
          errMsg.includes("UNAVAILABLE") ||
          errMsg.includes("high demand") ||
          errMsg.includes("429") ||
          errMsg.includes("RESOURCE_EXHAUSTED");

        console.warn(
          `[ai] Model "${model}" attempt ${attempt} encountered error: ${errMsg}`
        );

        if (isTransient && attempt < 2) {
          // Wait 1.5s before retrying same model
          await new Promise((resolve) => setTimeout(resolve, 1500));
          continue;
        }

        // If transient and we have fallback models, move to next model
        if (isTransient) {
          break;
        }

        // For non-transient errors (e.g., authentication, invalid request), fail immediately
        throw err;
      }
    }

    if (response) {
      break;
    }
  }

  if (!response) {
    let cleanMessage = "The AI service is currently experiencing high demand. Please wait a moment and try again.";
    if (lastError && typeof lastError === "object" && "message" in lastError) {
      const raw = String((lastError as any).message);
      try {
        const parsedErr = JSON.parse(raw);
        if (parsedErr?.error?.message) {
          cleanMessage = parsedErr.error.message;
        }
      } catch {
        cleanMessage = raw;
      }
    }
    throw new Error(cleanMessage);
  }

  const rawText = response.text ?? "";
  if (!rawText || !rawText.trim()) {
    throw new Error(
      `Gemini returned an empty response for "${fileName}". Please verify the file contains readable medical text or image data.`
    );
  }

  // Parse JSON from response
  let parsed: unknown;
  try {
    // Strip markdown fences if present
    const cleaned = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();
    if (!cleaned) {
      throw new Error("Extracted content was empty after stripping markdown syntax.");
    }
    parsed = JSON.parse(cleaned);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(
      `Gemini returned non-JSON response for "${fileName}" (${msg}): ${rawText.slice(0, 200)}`
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
