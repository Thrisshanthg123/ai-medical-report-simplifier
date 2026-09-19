import React from "react";
import { Cpu, TrendingUp, TrendingDown, Minus, Sparkles, ShieldCheck } from "lucide-react";
import { MLAnalysis } from "@/types/medical";
import { TrendBadge } from "@/components/ui/TrendBadge";
import { AnomalyBadge } from "@/components/ui/AnomalyBadge";

interface MLInsightCardProps {
  analysis: MLAnalysis;
  testName: string;
}

export function MLInsightCard({ analysis, testName }: MLInsightCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 p-6 space-y-6 shadow-xl relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header distinguishing AI Extraction vs Custom ML */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-300">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white">
                Historical Trend Analysis
              </h3>
              <span className="text-[10px] uppercase font-mono tracking-wider bg-indigo-950/90 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800/60">
                Custom ML Model
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Evaluator Note: AI extracts the PDF document; our ML algorithm models the multi-report trajectory.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {analysis.anomaly_detected && (
            <AnomalyBadge label="Unusual change detected" />
          )}
        </div>
      </div>

      {/* Metric Breakdown Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
          <span className="text-[11px] text-slate-400 block mb-1">
            Trajectory Direction
          </span>
          <TrendBadge trend={analysis.trend_direction} />
        </div>

        <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
          <span className="text-[11px] text-slate-400 block mb-1">
            Net Change Observed
          </span>
          <span className="text-sm font-bold text-white font-mono">
            {analysis.change_label}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
          <span className="text-[11px] text-slate-400 block mb-1">
            Statistical Anomaly
          </span>
          <span
            className={`text-xs font-semibold ${
              analysis.anomaly_detected
                ? "text-amber-300"
                : "text-emerald-300"
            }`}
          >
            {analysis.anomaly_detected ? "Shift Detected" : "Within Variance"}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
          <span className="text-[11px] text-slate-400 block mb-1">
            Reports Analyzed
          </span>
          <span className="text-sm font-bold text-white font-mono">
            {analysis.historical_points_analyzed} Quarters
          </span>
        </div>
      </div>

      {/* Plain Language Natural Explanation */}
      <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
        <span className="text-[11px] uppercase font-semibold text-indigo-300 tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Patient-Friendly Explanation:</span>
        </span>
        <p className="text-sm text-slate-200 leading-relaxed">
          &ldquo;{analysis.explanation}&rdquo;
        </p>
      </div>

      {/* Non-Diagnostic Reminder */}
      <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>
          Non-diagnostic analytical insight: Tracks quantitative trajectory across your personal history without assessing underlying medical conditions.
        </span>
      </div>
    </div>
  );
}
