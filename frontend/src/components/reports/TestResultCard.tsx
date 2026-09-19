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
    <Card className="flex flex-col justify-between overflow-hidden group">
      <div className="p-5 space-y-4">
        {/* Card Header: Category & Flags */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-ink-muted">
              {test.category}
            </span>
            <h3 className="text-base font-serif font-semibold text-ink mt-0.5 group-hover:text-brand transition-colors">
              <Link href={`/tests/${test.slug}`}>{test.test_name}</Link>
            </h3>
          </div>

          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <StatusBadge status={test.status} />
            <div className="flex items-center gap-1.5">
              <TrendBadge trend={test.trend} compact />
              {test.anomaly && <AnomalyBadge label="Shift detected" />}
            </div>
          </div>
        </div>

        {/* Value and Reference Display */}
        <div className="bg-surface-subtle rounded-control p-3.5 border border-border space-y-2">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-semibold text-ink tracking-tight tabular-nums">
                {test.value}
              </span>
              <span className="text-xs text-ink-muted">
                {test.unit}
              </span>
            </div>

            {test.previous_value !== undefined && (
              <div className="text-right text-xs">
                <span className="text-ink-muted block">Previous:</span>
                <span className="font-medium text-ink tabular-nums">
                  {test.previous_value} {test.unit}
                </span>
                {test.change_absolute !== undefined && (
                  <span className="text-xs text-ink-muted ml-1 tabular-nums">
                    ({test.change_absolute > 0 ? "+" : ""}
                    {test.change_absolute})
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Reference Interval Bar */}
          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between text-xs text-ink-muted">
              <span>Ref: {test.reference_range}</span>
              <span className="tabular-nums">
                Limits: {test.reference_min} – {test.reference_max}
              </span>
            </div>

            <div className="w-full h-1.5 bg-surface border border-border rounded-chip overflow-hidden relative">
              {/* Reference zone marker */}
              <div className="absolute left-[20%] right-[20%] top-0 bottom-0 bg-surface-subtle rounded-chip" />
              {/* Value indicator dot */}
              <div
                className={`absolute top-0 bottom-0 w-2.5 rounded-chip -ml-1 ${
                  test.status === "within_range"
                    ? "bg-status-in-range-text"
                    : "bg-status-outside-text"
                }`}
                style={{ left: `${currentRatio}%` }}
              />
            </div>
          </div>
        </div>

        {/* Plain Language Explanation */}
        <p className="text-xs text-ink-muted leading-relaxed">
          {test.simple_explanation}
        </p>

        {/* Machine Learning Trajectory Callout */}
        {test.ml_analysis && (
          <div className="p-3 rounded-control bg-surface-subtle border border-border text-xs space-y-1">
            <div className="flex items-center justify-between text-xs text-brand font-medium">
              <span className="uppercase tracking-wider">Trend Analysis</span>
              <span>{test.ml_analysis.change_label}</span>
            </div>
            <p className="text-ink leading-relaxed">
              &ldquo;{test.ml_analysis.explanation}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Card Footer Link */}
      <div className="px-5 py-3 bg-surface-subtle border-t border-border flex items-center justify-between text-xs">
        <span className="text-ink-muted">
          {test.historical_values?.length
            ? `${test.historical_values.length} recorded data points`
            : "Tracked across visits"}
        </span>
        <Link
          href={`/tests/${test.slug}`}
          className="inline-flex items-center gap-1.5 font-medium text-brand hover:text-brand-hover transition-colors min-h-target items-center"
        >
          <span>View trend history</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}
