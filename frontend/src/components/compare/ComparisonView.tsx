"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  GitCompare,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Calendar,
  Sparkles,
  Info,
} from "lucide-react";
import { MedicalReport, ReportComparisonItem } from "@/types/medical";
import { formatDate } from "@/lib/utils";
import { TrendBadge } from "@/components/ui/TrendBadge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AnomalyBadge } from "@/components/ui/AnomalyBadge";

interface ComparisonViewProps {
  reports: MedicalReport[];
  initialBaseId?: string;
  initialCompareId?: string;
}

export function ComparisonView({
  reports,
  initialBaseId = "rep-002",
  initialCompareId = "rep-001",
}: ComparisonViewProps) {
  const [baseId, setBaseId] = useState(initialBaseId);
  const [compareId, setCompareId] = useState(initialCompareId);

  const baseReport = useMemo(
    () => reports.find((r) => r.id === baseId) || reports[1] || reports[0],
    [reports, baseId]
  );

  const compareReport = useMemo(
    () => reports.find((r) => r.id === compareId) || reports[0],
    [reports, compareId]
  );

  // Determine which is chronologically earlier
  const [earlierReport, laterReport] = useMemo(() => {
    if (new Date(baseReport.date).getTime() <= new Date(compareReport.date).getTime()) {
      return [baseReport, compareReport];
    }
    return [compareReport, baseReport];
  }, [baseReport, compareReport]);

  // Compute comparisons
  const comparisons: ReportComparisonItem[] = useMemo(() => {
    return laterReport.tests.map((currTest) => {
      const prevTest = earlierReport.tests.find((t) => t.slug === currTest.slug);
      const prevVal = prevTest ? prevTest.value : currTest.value;
      const diff = Math.round((currTest.value - prevVal) * 10) / 10;
      const pct = prevVal !== 0 ? Math.round(((currTest.value - prevVal) / prevVal) * 1000) / 10 : 0;

      return {
        test_name: currTest.test_name,
        slug: currTest.slug,
        unit: currTest.unit,
        reference_range: currTest.reference_range,
        previous_value: prevVal,
        previous_date: earlierReport.date,
        current_value: currTest.value,
        current_date: laterReport.date,
        change_absolute: diff,
        change_percentage: pct,
        trend: currTest.trend,
        status: currTest.status,
        anomaly: currTest.anomaly,
      };
    });
  }, [earlierReport, laterReport]);

  const increasedCount = comparisons.filter((c) => c.change_absolute > 0).length;
  const decreasedCount = comparisons.filter((c) => c.change_absolute < 0).length;
  const stableCount = comparisons.filter((c) => c.change_absolute === 0).length;

  return (
    <div className="space-y-8">
      {/* Selector Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <GitCompare className="w-4 h-4 text-teal-400" />
          <h3 className="text-sm font-semibold text-white">
            Select Reports to Compare
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Base Report Selection */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-400 font-medium">
              Baseline Report (Earlier):
            </label>
            <select
              value={baseId}
              onChange={(e) => setBaseId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500 transition-colors"
            >
              {reports.map((r) => (
                <option key={r.id} value={r.id} disabled={r.id === compareId}>
                  {r.report_name} — {formatDate(r.date)} ({r.provider_or_lab})
                </option>
              ))}
            </select>
          </div>

          {/* Comparison Report Selection */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-400 font-medium">
              Target Report (Later):
            </label>
            <select
              value={compareId}
              onChange={(e) => setCompareId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500 transition-colors"
            >
              {reports.map((r) => (
                <option key={r.id} value={r.id} disabled={r.id === baseId}>
                  {r.report_name} — {formatDate(r.date)} ({r.provider_or_lab})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Overview Stat Badges */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 block mb-1">Higher Values</span>
          <span className="text-2xl font-bold text-amber-400 font-mono">
            {increasedCount}
          </span>
          <span className="text-[10px] text-slate-500 block mt-0.5">
            e.g. Fasting Glucose (+11 mg/dL)
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 block mb-1">Lower Values</span>
          <span className="text-2xl font-bold text-teal-400 font-mono">
            {decreasedCount}
          </span>
          <span className="text-[10px] text-slate-500 block mt-0.5">
            e.g. Vitamin D (-5 ng/mL)
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 block mb-1">Stable Markers</span>
          <span className="text-2xl font-bold text-slate-300 font-mono">
            {stableCount}
          </span>
          <span className="text-[10px] text-slate-500 block mt-0.5">
            Within natural variance
          </span>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="text-sm font-semibold text-white">
              Biomarker Comparison Matrix
            </h4>
            <p className="text-xs text-slate-400">
              Comparing {formatDate(earlierReport.date)} with {formatDate(laterReport.date)}
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {comparisons.length} biomarkers evaluated
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Test</th>
                <th className="py-3 px-4">
                  Previous ({new Date(earlierReport.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })})
                </th>
                <th className="py-3 px-4">
                  Current ({new Date(laterReport.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })})
                </th>
                <th className="py-3 px-4">Absolute & Pct Change</th>
                <th className="py-3 px-4">Reference Range</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {comparisons.map((item) => {
                return (
                  <tr key={item.slug} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="text-white font-semibold">{item.test_name}</div>
                      <span className="text-[10px] text-slate-500 font-mono">{item.unit}</span>
                    </td>

                    <td className="py-3.5 px-4 font-mono">
                      <span className="text-slate-300 font-semibold text-sm">
                        {item.previous_value}
                      </span>{" "}
                      <span className="text-slate-500 text-xs">{item.unit}</span>
                    </td>

                    <td className="py-3.5 px-4 font-mono">
                      <span className="text-white font-bold text-sm">
                        {item.current_value}
                      </span>{" "}
                      <span className="text-slate-400 text-xs">{item.unit}</span>
                    </td>

                    <td className="py-3.5 px-4 font-mono">
                      {item.change_absolute > 0 ? (
                        <div className="inline-flex items-center gap-1 text-amber-400 font-semibold text-xs">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                          <span>+{item.change_absolute} {item.unit}</span>
                          <span className="text-[10px] text-amber-500/90">
                            (+{item.change_percentage}%)
                          </span>
                        </div>
                      ) : item.change_absolute < 0 ? (
                        <div className="inline-flex items-center gap-1 text-teal-400 font-semibold text-xs">
                          <ArrowDownRight className="w-3.5 h-3.5" />
                          <span>{item.change_absolute} {item.unit}</span>
                          <span className="text-[10px] text-teal-500/90">
                            ({item.change_percentage}%)
                          </span>
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                          <Minus className="w-3.5 h-3.5" /> 0.0 (0%)
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 font-mono text-slate-400">
                      {item.reference_range}
                    </td>

                    <td className="py-3.5 px-4">
                      <StatusBadge status={item.status} />
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/tests/${item.slug}`}
                        className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-medium text-xs"
                      >
                        <span>History</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
