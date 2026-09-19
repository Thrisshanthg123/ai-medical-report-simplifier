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
  initialBaseId = "",
  initialCompareId = "",
}: ComparisonViewProps) {
  const [baseId, setBaseId] = useState(
    initialBaseId || reports[1]?.id || reports[0]?.id || ""
  );
  const [compareId, setCompareId] = useState(
    initialCompareId || reports[0]?.id || ""
  );

  if (!reports || reports.length === 0) {
    return (
      <div className="rounded-panel border border-border bg-surface p-12 text-center space-y-3">
        <GitCompare className="w-8 h-8 text-ink-muted mx-auto mb-2" aria-hidden="true" />
        <h3 className="text-base font-serif font-semibold text-ink">No Reports Available</h3>
        <p className="text-xs text-ink-muted max-w-sm mx-auto">
          No medical reports uploaded yet. Upload a report to see your results here.
        </p>
        <Link
          href="/upload"
          className="inline-block text-xs font-medium text-brand hover:text-brand-hover underline pt-1"
        >
          Upload a report
        </Link>
      </div>
    );
  }

  if (reports.length < 2) {
    return (
      <div className="rounded-panel border border-border bg-surface p-12 text-center space-y-3">
        <GitCompare className="w-8 h-8 text-ink-muted mx-auto mb-2" aria-hidden="true" />
        <h3 className="text-base font-serif font-semibold text-ink">Two Reports Needed</h3>
        <p className="text-xs text-ink-muted max-w-sm mx-auto">
          At least two medical reports are required to perform a comparative analysis over time.
        </p>
        <Link
          href="/upload"
          className="inline-block text-xs font-medium text-brand hover:text-brand-hover underline pt-1"
        >
          Upload another report
        </Link>
      </div>
    );
  }

  const baseReport =
    reports.find((r) => r.id === baseId) || reports[1] || reports[0];

  const compareReport =
    reports.find((r) => r.id === compareId) || reports[0];

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
      <div className="rounded-panel border border-border bg-surface p-5 sm:p-6 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <GitCompare className="w-4 h-4 text-brand" aria-hidden="true" />
          <h3 className="text-base font-serif font-semibold text-ink">
            Select Reports to Compare
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Base Report Selection */}
          <div className="space-y-1.5">
            <label className="text-xs text-ink-muted font-medium">
              Baseline report (earlier):
            </label>
            <select
              value={baseId}
              onChange={(e) => setBaseId(e.target.value)}
              className="w-full bg-surface border border-border rounded-control px-3.5 py-2.5 text-xs text-ink focus:outline-none focus:border-brand transition-colors"
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
            <label className="text-xs text-ink-muted font-medium">
              Comparison report (later):
            </label>
            <select
              value={compareId}
              onChange={(e) => setCompareId(e.target.value)}
              className="w-full bg-surface border border-border rounded-control px-3.5 py-2.5 text-xs text-ink focus:outline-none focus:border-brand transition-colors"
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
        <div className="p-4 rounded-panel bg-surface border border-border text-center">
          <span className="text-xs text-ink-muted block mb-1">Higher Values</span>
          <span className="text-2xl font-semibold text-ink font-mono tabular-nums">
            {increasedCount}
          </span>
          <span className="text-[11px] text-ink-muted block mt-0.5">
            Higher than baseline
          </span>
        </div>

        <div className="p-4 rounded-panel bg-surface border border-border text-center">
          <span className="text-xs text-ink-muted block mb-1">Lower Values</span>
          <span className="text-2xl font-semibold text-ink font-mono tabular-nums">
            {decreasedCount}
          </span>
          <span className="text-[11px] text-ink-muted block mt-0.5">
            Lower than baseline
          </span>
        </div>

        <div className="p-4 rounded-panel bg-surface border border-border text-center">
          <span className="text-xs text-ink-muted block mb-1">Stable Tests</span>
          <span className="text-2xl font-semibold text-ink font-mono tabular-nums">
            {stableCount}
          </span>
          <span className="text-[11px] text-ink-muted block mt-0.5">
            Consistent with baseline
          </span>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="rounded-panel border border-border bg-surface overflow-hidden">
        <div className="p-4 border-b border-border flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="text-sm font-serif font-semibold text-ink">
              Test Comparison Matrix
            </h4>
            <p className="text-xs text-ink-muted">
              Comparing {formatDate(earlierReport.date)} with {formatDate(laterReport.date)}
            </p>
          </div>
          <span className="text-xs text-ink-muted tabular-nums">
            {comparisons.length} tests compared
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-subtle border-b border-border text-ink-muted font-medium uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Test</th>
                <th className="py-3 px-4">
                  Previous ({new Date(earlierReport.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })})
                </th>
                <th className="py-3 px-4">
                  Current ({new Date(laterReport.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })})
                </th>
                <th className="py-3 px-4">Change</th>
                <th className="py-3 px-4">Reference range</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Trend history</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-ink">
              {comparisons.map((item) => {
                return (
                  <tr key={item.slug} className="hover:bg-surface-subtle transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-medium text-ink">{item.test_name}</div>
                      <span className="text-[10px] text-ink-muted font-mono">{item.unit}</span>
                    </td>

                    <td className="py-3.5 px-4 font-mono tabular-nums">
                      <span className="text-ink font-medium text-sm">
                        {item.previous_value}
                      </span>{" "}
                      <span className="text-ink-muted text-xs">{item.unit}</span>
                    </td>

                    <td className="py-3.5 px-4 font-mono tabular-nums">
                      <span className="text-ink font-semibold text-sm">
                        {item.current_value}
                      </span>{" "}
                      <span className="text-ink-muted text-xs">{item.unit}</span>
                    </td>

                    <td className="py-3.5 px-4 font-mono tabular-nums">
                      {item.change_absolute > 0 ? (
                        <div className="inline-flex items-center gap-1 text-ink font-medium text-xs">
                          <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                          <span>+{item.change_absolute} {item.unit}</span>
                          <span className="text-[11px] text-ink-muted">
                            (+{item.change_percentage}%)
                          </span>
                        </div>
                      ) : item.change_absolute < 0 ? (
                        <div className="inline-flex items-center gap-1 text-ink font-medium text-xs">
                          <ArrowDownRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                          <span>{item.change_absolute} {item.unit}</span>
                          <span className="text-[11px] text-ink-muted">
                            ({item.change_percentage}%)
                          </span>
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-ink-muted text-xs">
                          <Minus className="w-3.5 h-3.5" aria-hidden="true" /> 0.0 (0%)
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 font-mono text-ink-muted tabular-nums">
                      {item.reference_range}
                    </td>

                    <td className="py-3.5 px-4">
                      <StatusBadge status={item.status} />
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/tests/${item.slug}`}
                        className="inline-flex items-center gap-1 text-brand hover:text-brand-hover font-medium text-xs"
                      >
                        <span>History</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
