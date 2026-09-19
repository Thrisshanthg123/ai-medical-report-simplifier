"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { MedicalReport } from "@/types/medical";

interface MedicalTermsExplainedProps {
  report?: MedicalReport;
}

interface TermDetail {
  term: string;
  slug: string;
  category: string;
  shortExplanation: string;
  whyTested: string;
  unitMeaning?: string;
  fastingOrPrep?: string;
}

const GLOSSARY_TERMS: TermDetail[] = [
  {
    term: "Fasting Glucose",
    slug: "fasting-glucose",
    category: "Metabolic Panel",
    shortExplanation:
      "Measures the amount of glucose (sugar) circulating in your bloodstream after an overnight fast.",
    whyTested:
      "This test evaluates how effectively your body regulates and clears blood sugar between meals. It is a standard indicator of general metabolic and endocrine function.",
    unitMeaning:
      "mg/dL (milligrams per deciliter): Measures the weight of glucose present in a tenth of a liter of blood.",
    fastingOrPrep:
      "Typically requires 8 to 12 hours of water-only fasting before blood is drawn.",
  },
  {
    term: "Vitamin D (25-Hydroxy)",
    slug: "vitamin-d",
    category: "Vitamins & Hormones",
    shortExplanation:
      "Measures the principal circulating storage form of vitamin D in your blood.",
    whyTested:
      "Assesses your vitamin D reserves, which are essential for calcium absorption, maintaining bone density, and supporting normal immune system activity.",
    unitMeaning:
      "ng/mL (nanograms per milliliter): Measures minute concentrations of vitamin D circulating in blood serum.",
    fastingOrPrep:
      "Fasting is usually not required unless combined with a wider fasting metabolic panel.",
  },
  {
    term: "Hemoglobin",
    slug: "hemoglobin",
    category: "Complete Blood Count",
    shortExplanation:
      "Measures the specialized iron-rich protein in red blood cells that transports oxygen from your lungs to the rest of your body.",
    whyTested:
      "Helps evaluate the oxygen-carrying capacity of your blood and is commonly assessed to understand overall red blood cell vitality.",
    unitMeaning:
      "g/dL (grams per deciliter): Indicates how many grams of oxygen-binding hemoglobin protein are contained in a deciliter of blood.",
    fastingOrPrep:
      "No specific fasting required when taken as a routine Complete Blood Count (CBC).",
  },
  {
    term: "Total Cholesterol",
    slug: "total-cholesterol",
    category: "Lipid Panel",
    shortExplanation:
      "Measures the overall quantity of all cholesterol types circulating through your bloodstream.",
    whyTested:
      "Provides a broad baseline of circulating lipids. Cholesterol is an essential waxy fat required for cell wall construction and hormone synthesis.",
    unitMeaning:
      "mg/dL (milligrams per deciliter): Quantifies the concentration of lipid molecules in blood plasma.",
    fastingOrPrep:
      "Frequently conducted after an 8 to 12 hour fast for optimal accuracy when part of a full lipid profile.",
  },
  {
    term: "Platelets",
    slug: "platelets",
    category: "Complete Blood Count",
    shortExplanation:
      "Measures tiny cellular fragments produced in bone marrow that assist with blood clotting and natural wound repair.",
    whyTested:
      "Ensures the body has an adequate number of clotting fragments to stop bleeding from cuts or minor tissue injuries.",
    unitMeaning:
      "x10³/µL (thousands per microliter): Counts the number of platelet fragments in one millionth of a liter of blood.",
    fastingOrPrep:
      "No dietary restrictions are generally required for platelet count testing.",
  },
  {
    term: "Reference Range",
    slug: "reference-range",
    category: "Clinical Concept",
    shortExplanation:
      "The benchmark interval of numeric values observed in healthy population cohorts for a specific laboratory test.",
    whyTested:
      "Provides context for interpreting your numeric result. Values slightly above or below may simply reflect normal personal variation or laboratory calibration differences.",
    unitMeaning:
      "Varies by test: Calibrated by diagnostic laboratories using standardized controls and instruments.",
    fastingOrPrep:
      "Reference intervals are calibrated specifically for age and biological factors by testing labs.",
  },
];

export function MedicalTermsExplained({ report }: MedicalTermsExplainedProps) {
  return (
    <section aria-labelledby="terms-explained-heading">
      <h2 id="terms-explained-heading" className="sr-only">
        Terms explained
      </h2>
      <details className="group rounded-panel border border-border bg-surface p-4 sm:p-5 transition-colors">
        <summary className="cursor-pointer font-serif text-base font-semibold text-ink flex items-center justify-between list-none focus-visible:outline-none">
          <span>General definitions</span>
          <ChevronDown
            className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform shrink-0"
            aria-hidden="true"
          />
        </summary>

        <div className="mt-4 pt-4 border-t border-border space-y-6 text-sm text-ink-muted leading-relaxed">
          {/* General Laboratory Concepts from GLOSSARY_TERMS */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-medium tracking-wider text-ink-muted">
              Standard laboratory concepts
            </h3>
            <dl className="space-y-4">
              {GLOSSARY_TERMS.map((item) => (
                <div key={item.slug} className="space-y-1">
                  <dt className="font-semibold text-ink">
                    {item.term}{" "}
                    <span className="font-normal text-xs text-ink-muted">
                      ({item.category})
                    </span>
                  </dt>
                  <dd className="text-ink-muted leading-relaxed">
                    {item.shortExplanation}
                  </dd>
                  <dd className="text-xs text-ink-muted leading-relaxed">
                    <span className="font-medium text-ink">Why it is tested:</span>{" "}
                    {item.whyTested}
                  </dd>
                  {item.unitMeaning && (
                    <dd className="text-xs text-ink-muted leading-relaxed">
                      <span className="font-medium text-ink">Measurement unit:</span>{" "}
                      {item.unitMeaning}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>

          {/* Report-Specific Tests Glossary */}
          {report?.tests && report.tests.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-xs uppercase font-medium tracking-wider text-ink-muted">
                Tests in this report
              </h3>
              <dl className="space-y-3">
                {report.tests.map((test) => (
                  <div key={test.slug || test.id} className="space-y-0.5">
                    <dt className="font-semibold text-ink">
                      {test.test_name}{" "}
                      <span className="font-normal text-xs text-ink-muted">
                        ({test.category})
                      </span>
                    </dt>
                    <dd className="text-ink-muted leading-relaxed">
                      {test.simple_explanation}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </details>
    </section>
  );
}
