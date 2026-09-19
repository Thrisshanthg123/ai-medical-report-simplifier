import React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";
import { MedicalTest, MedicalReport } from "@/types/medical";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TrendBadge } from "@/components/ui/TrendBadge";
import { AnomalyBadge } from "@/components/ui/AnomalyBadge";

interface ImportantFindingsProps {
  report: MedicalReport;
}

export function ImportantFindings({ report }: ImportantFindingsProps) {
  // Identify biomarkers requiring attention: outside reference range, detected anomalies, or non-stable trends
  const attentionTests = report.tests.filter(
    (t) => t.status !== "within_range" || t.anomaly || t.trend !== "stable"
  );

  const stableTests = report.tests.filter(
    (t) => t.status === "within_range" && !t.anomaly && t.trend === "stable"
  );

  return (
    <section aria-labelledby="important-findings-title" className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-slate-800/80 print:border-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 print:text-amber-700">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h2
              id="important-findings-title"
              className="text-base font-bold text-white print:text-black tracking-tight uppercase"
            >
              2. Important Findings
            </h2>
            <p className="text-xs text-slate-400 print:text-slate-600">
              Highlighted changes and values outside typical reference boundaries
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-amber-950/80 print:bg-amber-100 text-amber-300 print:text-amber-800 border border-amber-800/80 print:border-amber-300">
            {attentionTests.length} Findings Identified
          </span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 print:bg-slate-100 text-slate-400 print:text-slate-600">
            Non-Diagnostic
          </span>
        </div>
      </div>

      {/* Primary Highlight Cards for Attention Tests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {attentionTests.map((test) => {
          const isAbove = test.status === "above_range";
          const isBelow = test.status === "below_range";

          return (
            <div
              key={test.slug}
              className="rounded-xl border border-amber-800/60 bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/20 print:from-white print:to-slate-50 print:border-amber-300 p-5 space-y-3.5 shadow-sm hover:border-amber-700/80 transition-all"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 print:text-slate-600">
                    {test.category}
                  </span>
                  <h3 className="text-base font-bold text-white print:text-black">
                    {test.test_name}
                  </h3>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <StatusBadge status={test.status} />
                  {test.anomaly && (
                    <AnomalyBadge label="Unusual change detected" />
                  )}
                </div>
              </div>

              {/* Value Comparison Block */}
              <div className="p-3 rounded-lg bg-slate-950/80 print:bg-slate-100 border border-slate-800 print:border-slate-200 flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 print:text-slate-600 block">
                    Reported Value
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-2xl font-extrabold text-amber-300 print:text-amber-800 tracking-tight">
                      {test.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 print:text-slate-600 font-mono">
                      {test.unit}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-400 print:text-slate-600 block">
                    Reference Range
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-200 print:text-slate-800">
                    {test.reference_range}
                  </span>
                  {test.previous_value !== undefined && (
                    <span className="block text-[11px] text-slate-400 print:text-slate-600 mt-0.5">
                      Previous: {test.previous_value} {test.unit}
                    </span>
                  )}
                </div>
              </div>

              {/* Trend & Change Details */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <TrendBadge trend={test.trend} compact />
                  {test.change_absolute !== undefined && (
                    <span
                      className={`font-mono text-xs font-semibold ${
                        test.change_absolute > 0
                          ? "text-amber-400 print:text-amber-700"
                          : "text-teal-400 print:text-teal-700"
                      }`}
                    >
                      {test.change_absolute > 0 ? "+" : ""}
                      {test.change_absolute} {test.unit} from prior checkup
                    </span>
                  )}
                </div>

                {/* Plain-Language Takeaway */}
                <p className="text-slate-300 print:text-slate-700 leading-relaxed pt-1">
                  {test.ml_analysis?.explanation ? (
                    <span>&ldquo;{test.ml_analysis.explanation}&rdquo;</span>
                  ) : (
                    <span>
                      Reported value is {isAbove ? "above" : isBelow ? "below" : "outside"} the
                      provided reference range ({test.reference_range}).
                    </span>
                  )}
                </p>
              </div>

              {/* Action Link to Interactive Trend */}
              <div className="pt-2 border-t border-slate-800/80 print:border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 print:text-slate-600">
                  {test.historical_values?.length || 4} historical panels tracked
                </span>
                <Link
                  href={`/tests/${test.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal-400 print:text-teal-700 hover:text-teal-300 transition-colors"
                >
                  <span>Explore trendline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stable Biomarkers Summary Banner */}
      {stableTests.length > 0 && (
        <div className="p-3.5 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 print:text-emerald-700 shrink-0" />
            <span className="text-slate-300 print:text-slate-800">
              <strong className="text-white print:text-black font-semibold">
                {stableTests.length} Biomarkers Stable & Within Range:
              </strong>{" "}
              {stableTests.map((t) => `${t.test_name} (${t.value} ${t.unit})`).join(", ")}
            </span>
          </div>

          <span className="text-[11px] font-mono text-emerald-400 print:text-emerald-700 shrink-0">
            No unusual shifts
          </span>
        </div>
      )}
    </section>
  );
}
