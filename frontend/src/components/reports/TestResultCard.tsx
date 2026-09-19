import React from "react";
import Link from "next/link";
import { ArrowRight, LineChart, Info } from "lucide-react";
import { MedicalTest } from "@/types/medical";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TrendBadge } from "@/components/ui/TrendBadge";
import { AnomalyBadge } from "@/components/ui/AnomalyBadge";

interface TestResultCardProps {
  test: MedicalTest;
}

export function TestResultCard({ test }: TestResultCardProps) {
  // Visual range progress bar calculation
  const totalSpan = test.reference_max - test.reference_min;
  // Compute percentage clamped between 0% and 100%
  const currentRatio =
    totalSpan > 0
      ? Math.max(
          5,
          Math.min(
            95,
            ((test.value - test.reference_min) / totalSpan) * 60 + 20
          )
        )
      : 50;

  return (
    <Card className="hover:border-slate-700 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      <div className="p-5 space-y-4">
        {/* Card Header: Category & Flags */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
              {test.category}
            </span>
            <h3 className="text-base font-bold text-white mt-0.5 group-hover:text-teal-300 transition-colors">
              <Link href={`/tests/${test.slug}`}>{test.test_name}</Link>
            </h3>
          </div>

          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <StatusBadge status={test.status} />
            <div className="flex items-center gap-1.5">
              <TrendBadge trend={test.trend} compact />
              {test.anomaly && <AnomalyBadge label="Anomaly" />}
            </div>
          </div>
        </div>

        {/* Value and Reference Display */}
        <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80 space-y-2">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-extrabold text-white tracking-tight">
                {test.value}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {test.unit}
              </span>
            </div>

            {test.previous_value !== undefined && (
              <div className="text-right text-xs">
                <span className="text-slate-500 block">Previous:</span>
                <span className="font-semibold text-slate-300">
                  {test.previous_value} {test.unit}
                </span>
                {test.change_absolute !== undefined && (
                  <span
                    className={`text-[11px] font-mono ml-1 ${
                      test.change_absolute > 0
                        ? "text-amber-400"
                        : test.change_absolute < 0
                        ? "text-teal-400"
                        : "text-slate-400"
                    }`}
                  >
                    ({test.change_absolute > 0 ? "+" : ""}
                    {test.change_absolute})
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Reference Interval Bar */}
          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Ref: {test.reference_range}</span>
              <span className="text-slate-500">
                Boundaries: {test.reference_min} – {test.reference_max}
              </span>
            </div>

            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
              {/* Reference zone marker */}
              <div className="absolute left-[20%] right-[20%] top-0 bottom-0 bg-teal-500/20 rounded-full" />
              {/* Value indicator dot */}
              <div
                className={`absolute top-0 bottom-0 w-2.5 rounded-full -ml-1 ${
                  test.status === "within_range"
                    ? "bg-emerald-400 shadow-sm shadow-emerald-500"
                    : "bg-amber-400 shadow-sm shadow-amber-500"
                }`}
                style={{ left: `${currentRatio}%` }}
              />
            </div>
          </div>
        </div>

        {/* Plain Language Explanation */}
        <p className="text-xs text-slate-300 leading-relaxed">
          {test.simple_explanation}
        </p>

        {/* Machine Learning Trajectory Callout */}
        {test.ml_analysis && (
          <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs space-y-1">
            <div className="flex items-center justify-between text-[10px] text-teal-400 font-mono">
              <span className="uppercase font-semibold">ML Trajectory Analysis</span>
              <span>{test.ml_analysis.change_label}</span>
            </div>
            <p className="text-slate-300 italic">
              &ldquo;{test.ml_analysis.explanation}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Card Footer Link */}
      <div className="px-5 py-3 bg-slate-950/40 border-t border-slate-800/60 flex items-center justify-between">
        <span className="text-[11px] text-slate-500">
          4 historical data points available
        </span>
        <Link
          href={`/tests/${test.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
        >
          <span>Explore Trend Chart</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Card>
  );
}
