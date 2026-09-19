import React from "react";
import { Sparkles, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import { ReportSummary } from "@/types/medical";

interface ReportSummaryBannerProps {
  summary: ReportSummary;
}

export function ReportSummaryBanner({ summary }: ReportSummaryBannerProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-teal-950/20 p-5 sm:p-6 space-y-4 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-950/80 border border-teal-800/60 flex items-center justify-center text-teal-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">
              Executive AI & ML Summary
            </h3>
            <p className="text-xs text-slate-400">
              Cross-referenced against 4 historical quarterly reports
            </p>
          </div>
        </div>

        {/* Quick pill stats */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {summary.within_range_count} Within range
          </span>
          <span className="px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-800/80 text-amber-300 inline-flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            {summary.outside_range_count} Outside range
          </span>
          <span className="px-2.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/80 text-indigo-300 inline-flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            {summary.trends_detected_count} Trajectories tracked
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        {summary.overview_text}
      </p>

      {summary.key_takeaways.length > 0 && (
        <div className="bg-slate-950/50 rounded-xl p-3.5 border border-slate-800/80 space-y-1.5">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-teal-400 block mb-1">
            Observed Trajectories:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {summary.key_takeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
