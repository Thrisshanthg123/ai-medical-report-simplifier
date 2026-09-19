import React from "react";
import { ShieldCheck } from "lucide-react";
import { MLAnalysis } from "@/types/medical";
import { TrendBadge } from "@/components/ui/TrendBadge";
import { AnomalyBadge } from "@/components/ui/AnomalyBadge";

interface MLInsightCardProps {
  analysis: MLAnalysis;
  testName: string;
}

export function MLInsightCard({ analysis, testName }: MLInsightCardProps) {
  return (
    <div className="rounded-panel border border-border bg-surface p-5 space-y-5">
      {/* Header distinguishing AI Extraction vs Custom ML */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-ink">
              Historical trend analysis
            </h3>
            <span className="text-[10px] uppercase font-mono tracking-wider bg-surface-subtle text-ink-muted px-2 py-0.5 rounded-panel border border-border">
              ML model
            </span>
          </div>
          <p className="text-xs text-ink-muted mt-1">
            Trajectory and statistical pattern modeled across previous laboratory reports.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {analysis.anomaly_detected && (
            <AnomalyBadge label="Unusual change detected" />
          )}
        </div>
      </div>

      {/* Metric Breakdown Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-panel bg-surface-subtle border border-border">
          <span className="text-[11px] text-ink-muted block mb-1">
            Trajectory direction
          </span>
          <TrendBadge trend={analysis.trend_direction} />
        </div>

        <div className="p-3 rounded-panel bg-surface-subtle border border-border">
          <span className="text-[11px] text-ink-muted block mb-1">
            Net change observed
          </span>
          <span className="text-sm font-semibold text-ink font-mono tabular-nums">
            {analysis.change_label}
          </span>
        </div>

        <div className="p-3 rounded-panel bg-surface-subtle border border-border">
          <span className="text-[11px] text-ink-muted block mb-1">
            Statistical check
          </span>
          <span
            className={`text-xs font-semibold ${
              analysis.anomaly_detected
                ? "text-status-warning-text"
                : "text-status-success-text"
            }`}
          >
            {analysis.anomaly_detected ? "Shift detected" : "Within expected range"}
          </span>
        </div>

        <div className="p-3 rounded-panel bg-surface-subtle border border-border">
          <span className="text-[11px] text-ink-muted block mb-1">
            Reports analyzed
          </span>
          <span className="text-sm font-semibold text-ink font-mono tabular-nums">
            {analysis.historical_points_analyzed} {analysis.historical_points_analyzed === 1 ? "report" : "reports"}
          </span>
        </div>
      </div>

      {/* Plain Language Natural Explanation */}
      <div className="p-4 rounded-panel bg-surface-subtle border border-border space-y-1.5">
        <span className="text-[11px] uppercase font-semibold text-ink-muted tracking-wider block">
          Summary:
        </span>
        <p className="text-sm text-ink leading-relaxed">
          &ldquo;{analysis.explanation}&rdquo;
        </p>
      </div>

      {/* Non-Diagnostic Reminder */}
      <div className="flex items-start gap-2 text-[11px] text-ink-muted pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-ink-muted shrink-0 mt-0.5" />
        <span>
          Non-diagnostic analytical insight: Tracks quantitative trajectory across your personal history without assessing underlying medical conditions.
        </span>
      </div>
    </div>
  );
}
