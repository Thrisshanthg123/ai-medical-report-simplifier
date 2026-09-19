import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDownRight, Minus, FileText } from "lucide-react";
import { HistoricalValue } from "@/types/medical";
import { formatDate } from "@/lib/utils";

interface HistoricalTableProps {
  history: HistoricalValue[];
  unit: string;
}

export function HistoricalTable({ history, unit }: HistoricalTableProps) {
  return (
    <div className="rounded-panel border border-border bg-surface overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-ink">
            Historical records
          </h4>
          <p className="text-xs text-ink-muted">
            Recorded values from previous laboratory submissions
          </p>
        </div>
        <span className="text-xs text-ink-muted font-mono tabular-nums">
          {history.length} {history.length === 1 ? "record" : "records"}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-subtle border-b border-border text-ink-muted font-semibold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Period</th>
              <th className="py-3 px-4">Report date</th>
              <th className="py-3 px-4">Reported value</th>
              <th className="py-3 px-4">Change from previous</th>
              <th className="py-3 px-4">Reference range</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Associated report</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-ink">
            {history.map((item, index) => {
              const prev = index > 0 ? history[index - 1] : null;
              const diff = prev ? Math.round((item.value - prev.value) * 10) / 10 : null;
              const isWithin =
                item.value >= item.reference_min && item.value <= item.reference_max;

              const year = !isNaN(new Date(item.date).getTime())
                ? new Date(item.date).getFullYear()
                : "";

              return (
                <tr
                  key={`${item.report_id || "hist"}-${item.date}-${index}`}
                  className="hover:bg-surface-subtle transition-colors"
                >
                  <td className="py-3.5 px-4 font-medium text-ink">
                    {item.month_label} {year}
                  </td>

                  <td className="py-3.5 px-4 font-mono text-ink-muted tabular-nums">
                    {formatDate(item.date)}
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-ink text-sm tabular-nums">
                      {item.value}
                    </span>{" "}
                    <span className="text-ink-muted font-mono text-xs">{unit}</span>
                  </td>

                  <td className="py-3.5 px-4">
                    {diff === null ? (
                      <span className="text-ink-subtle font-mono text-[11px]">
                        Baseline
                      </span>
                    ) : diff > 0 ? (
                      <span className="inline-flex items-center gap-1 text-status-warning-text font-mono text-xs font-semibold tabular-nums">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        +{diff} {unit}
                      </span>
                    ) : diff < 0 ? (
                      <span className="inline-flex items-center gap-1 text-brand font-mono text-xs font-semibold tabular-nums">
                        <ArrowDownRight className="w-3.5 h-3.5" />
                        {diff} {unit}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-ink-muted font-mono text-xs tabular-nums">
                        <Minus className="w-3.5 h-3.5" /> 0.0 {unit}
                      </span>
                    )}
                  </td>

                  <td className="py-3.5 px-4 font-mono text-ink-muted tabular-nums">
                    {item.reference_min} – {item.reference_max} {unit}
                  </td>

                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-panel text-[11px] font-medium border ${
                        isWithin
                          ? "bg-status-success-bg text-status-success-text border-status-success-border"
                          : "bg-status-warning-bg text-status-warning-text border-status-warning-border"
                      }`}
                    >
                      {isWithin ? "In range" : "Above range"}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    {item.report_id ? (
                      <Link
                        href={`/reports/${item.report_id}`}
                        className="inline-flex items-center gap-1 text-brand hover:underline font-medium"
                      >
                        <FileText className="w-3 h-3" />
                        <span>View report</span>
                      </Link>
                    ) : (
                      <span className="text-ink-subtle">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
