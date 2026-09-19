import React from "react";
import { Activity, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import { ReportSummary } from "@/types/medical";

interface ReportSummaryBannerProps {
  summary: ReportSummary;
}

export function ReportSummaryBanner({ summary }: ReportSummaryBannerProps) {
  return (
    <div className="rounded-panel border border-border bg-surface p-5 sm:p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-control bg-surface-subtle border border-border flex items-center justify-center text-ink">
            <Activity className="w-4 h-4" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-serif font-semibold text-ink">
              Report Overview
            </h3>
            <p className="text-xs text-ink-muted">
              Summary of test results and historical patterns
            </p>
          </div>
        </div>

        {/* Quick pill stats */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2.5 py-0.5 rounded-chip bg-status-in-range-bg border border-status-in-range-border text-status-in-range-text inline-flex items-center gap-1.5 font-medium tabular-nums">
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            {summary.within_range_count} In range
          </span>
          <span className="px-2.5 py-0.5 rounded-chip bg-status-outside-bg border border-status-outside-border text-status-outside-text inline-flex items-center gap-1.5 font-medium tabular-nums">
            <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
            {summary.outside_range_count} Outside range
          </span>
          <span className="px-2.5 py-0.5 rounded-chip bg-surface-subtle border border-border text-ink inline-flex items-center gap-1.5 font-medium tabular-nums">
            <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
            {summary.trends_detected_count} Trends detected
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-ink leading-relaxed">
        {summary.overview_text}
      </p>

      {summary.key_takeaways && summary.key_takeaways.length > 0 && (
        <div className="bg-surface-subtle rounded-control p-4 border border-border space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-ink block">
            Observed Findings:
          </span>
          <ul className="space-y-1.5 text-xs text-ink-muted">
            {summary.key_takeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-chip bg-brand shrink-0 mt-1.5" aria-hidden="true" />
                <span className="leading-relaxed text-ink">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
