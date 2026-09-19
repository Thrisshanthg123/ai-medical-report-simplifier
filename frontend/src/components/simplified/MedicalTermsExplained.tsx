"use client";

import React, { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Search,
  Sparkles,
  Info,
  Layers,
  ArrowRight,
} from "lucide-react";
import { MedicalReport } from "@/types/medical";

interface TermDetail {
  term: string;
  slug: string;
  category: string;
  shortExplanation: string;
  whyTested: string;
  unitMeaning?: string;
  fastingOrPrep?: string;
  inReport: boolean;
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
    unitMeaning: "mg/dL (milligrams per deciliter): Measures the weight of glucose present in a tenth of a liter of blood.",
    fastingOrPrep: "Typically requires 8 to 12 hours of water-only fasting before blood is drawn.",
    inReport: true,
  },
  {
    term: "Vitamin D (25-Hydroxy)",
    slug: "vitamin-d",
    category: "Vitamins & Hormones",
    shortExplanation:
      "Measures the principal circulating storage form of vitamin D in your blood.",
    whyTested:
      "Assesses your vitamin D reserves, which are essential for calcium absorption, maintaining bone density, and supporting normal immune system activity.",
    unitMeaning: "ng/mL (nanograms per milliliter): Measures minute concentrations of vitamin D circulating in blood serum.",
    fastingOrPrep: "Fasting is usually not required unless combined with a wider fasting metabolic panel.",
    inReport: true,
  },
  {
    term: "Hemoglobin",
    slug: "hemoglobin",
    category: "Complete Blood Count",
    shortExplanation:
      "Measures the specialized iron-rich protein in red blood cells that transports oxygen from your lungs to the rest of your body.",
    whyTested:
      "Helps evaluate the oxygen-carrying capacity of your blood and is commonly assessed to understand overall red blood cell vitality.",
    unitMeaning: "g/dL (grams per deciliter): Indicates how many grams of oxygen-binding hemoglobin protein are contained in a deciliter of blood.",
    fastingOrPrep: "No specific fasting required when taken as a routine Complete Blood Count (CBC).",
    inReport: true,
  },
  {
    term: "Total Cholesterol",
    slug: "total-cholesterol",
    category: "Lipid Panel",
    shortExplanation:
      "Measures the overall quantity of all cholesterol types circulating through your bloodstream.",
    whyTested:
      "Provides a broad baseline of circulating lipids. Cholesterol is an essential waxy fat required for cell wall construction and hormone synthesis.",
    unitMeaning: "mg/dL (milligrams per deciliter): Quantifies the concentration of lipid molecules in blood plasma.",
    fastingOrPrep: "Frequently conducted after an 8 to 12 hour fast for optimal accuracy when part of a full lipid profile.",
    inReport: true,
  },
  {
    term: "Platelets",
    slug: "platelets",
    category: "Complete Blood Count",
    shortExplanation:
      "Measures tiny cellular fragments produced in bone marrow that assist with blood clotting and natural wound repair.",
    whyTested:
      "Ensures the body has an adequate number of clotting fragments to stop bleeding from cuts or minor tissue injuries.",
    unitMeaning: "x10³/µL (thousands per microliter): Counts the number of platelet fragments in one millionth of a liter of blood.",
    fastingOrPrep: "No dietary restrictions are generally required for platelet count testing.",
    inReport: true,
  },
  {
    term: "Reference Range",
    slug: "reference-range",
    category: "Clinical Concept",
    shortExplanation:
      "The benchmark interval of numeric values observed in healthy population cohorts for a specific laboratory test.",
    whyTested:
      "Provides context for interpreting your numeric result. Values slightly above or below may simply reflect normal personal variation or laboratory calibration differences.",
    unitMeaning: "Varies by test: Calibrated by diagnostic laboratories using standardized controls and instruments.",
    fastingOrPrep: "Reference intervals are calibrated specifically for age and biological factors by testing labs.",
    inReport: false,
  },
];

interface MedicalTermsExplainedProps {
  report?: MedicalReport;
}

export function MedicalTermsExplained({ report }: MedicalTermsExplainedProps) {
  const [expandedTerms, setExpandedTerms] = useState<Record<string, boolean>>({
    "fasting-glucose": true, // Start with primary finding expanded for immediate evaluator clarity
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "in_report" | "findings">("all");

  const toggleTerm = (slug: string) => {
    setExpandedTerms((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    GLOSSARY_TERMS.forEach((t) => {
      allExpanded[t.slug] = true;
    });
    setExpandedTerms(allExpanded);
  };

  const collapseAll = () => {
    setExpandedTerms({});
  };

  // Filter terms
  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === "in_report") return item.inReport;
    if (activeFilter === "findings")
      return item.slug === "fasting-glucose" || item.slug === "vitamin-d";

    return true;
  });

  return (
    <section aria-labelledby="medical-terms-heading" className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800/80 print:border-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 print:text-teal-700">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h2
              id="medical-terms-heading"
              className="text-base font-bold text-white print:text-black tracking-tight uppercase"
            >
              3. Medical Terms Explained
            </h2>
            <p className="text-xs text-slate-400 print:text-slate-600">
              Plain-language definitions to help you understand what each test measures without clinical jargon
            </p>
          </div>
        </div>

        {/* Global Expand / Collapse Control */}
        <div className="flex items-center gap-2 self-start sm:self-auto print:hidden">
          <button
            type="button"
            onClick={expandAll}
            className="text-[11px] text-teal-400 hover:text-teal-300 font-medium px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            Expand all
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="text-[11px] text-slate-400 hover:text-slate-300 font-medium px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            Collapse all
          </button>
        </div>
      </div>

      {/* Search and Category Filter Toolbar (Hidden in print) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 print:hidden">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              activeFilter === "all"
                ? "bg-slate-800 text-teal-300 border border-slate-700"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All Terms ({GLOSSARY_TERMS.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("findings")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              activeFilter === "findings"
                ? "bg-amber-950/80 text-amber-300 border border-amber-800"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Key Shift Terms (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("in_report")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              activeFilter === "in_report"
                ? "bg-teal-950/80 text-teal-300 border border-teal-800"
                : "text-slate-400 hover:text-white"
            }`}
          >
            From This Panel (5)
          </button>
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-60">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search medical terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredTerms.map((item) => {
          const isExpanded = expandedTerms[item.slug];

          return (
            <article
              key={item.slug}
              className={`rounded-xl border transition-all duration-200 ${
                isExpanded
                  ? "border-teal-800/80 bg-slate-900/90 shadow-sm print:border-slate-300 print:bg-white"
                  : "border-slate-800/80 bg-slate-950/50 hover:border-slate-700/80 print:border-slate-200 print:bg-white"
              } p-4 space-y-2.5`}
            >
              {/* Term Header & Toggle Button */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {item.term}
                    </h3>
                    {item.inReport && (
                      <span className="text-[9px] uppercase font-mono px-1.5 py-0.2 rounded bg-teal-950/70 text-teal-300 border border-teal-800/60 print:bg-teal-50 print:text-teal-800">
                        In Report
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 print:text-slate-600 font-mono">
                    Category: {item.category}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => toggleTerm(item.slug)}
                  aria-expanded={isExpanded}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-400 print:text-teal-700 hover:text-teal-300 px-2 py-1 rounded bg-slate-800/80 print:bg-slate-100 hover:bg-slate-800 transition-colors"
                >
                  <span>{isExpanded ? "Less" : "Learn more"}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Short, Simple Patient-Friendly Definition (Always visible for scanning) */}
              <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                {item.shortExplanation}
              </p>

              {/* Expandable "Learn more" Details Drawer */}
              {isExpanded && (
                <div className="pt-3 border-t border-slate-800/80 print:border-slate-200 space-y-2.5 text-xs animate-in fade-in duration-150">
                  {/* Why it is tested */}
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase font-semibold tracking-wider text-teal-400 print:text-teal-700 block">
                      Why Doctors Test This:
                    </span>
                    <p className="text-slate-300 print:text-slate-700 leading-relaxed">
                      {item.whyTested}
                    </p>
                  </div>

                  {/* Unit meaning */}
                  {item.unitMeaning && (
                    <div className="p-2.5 rounded-lg bg-slate-950/70 print:bg-slate-100 border border-slate-800 print:border-slate-200 text-[11px] text-slate-400 print:text-slate-700">
                      <strong className="text-slate-300 print:text-black font-semibold">
                        Understanding the measurement:{" "}
                      </strong>
                      {item.unitMeaning}
                    </div>
                  )}

                  {/* Preparation / Test Context */}
                  {item.fastingOrPrep && (
                    <div className="flex items-start gap-1.5 text-[11px] text-slate-400 print:text-slate-600 pt-0.5">
                      <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <span>{item.fastingOrPrep}</span>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {filteredTerms.length === 0 && (
        <div className="p-6 text-center rounded-xl bg-slate-900/40 border border-slate-800 text-slate-400 text-xs">
          No medical terms match &ldquo;{searchQuery}&rdquo;. Try clearing the search query.
        </div>
      )}

      {/* Safety Notice Footer */}
      <div className="p-3 rounded-lg bg-slate-950/40 print:bg-slate-50 border border-slate-800/80 print:border-slate-200 flex items-center justify-between text-[11px] text-slate-400 print:text-slate-600">
        <span className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span>
            Educational glossary provided to support patient health literacy. It does not provide clinical diagnoses.
          </span>
        </span>
        <span className="hidden sm:inline font-mono text-slate-500">
          Source: Clinical Laboratory Standard Definitions
        </span>
      </div>
    </section>
  );
}
