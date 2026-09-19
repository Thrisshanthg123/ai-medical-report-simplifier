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
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-sm">
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-white">
            Quarterly Longitudinal Record
          </h4>
          <p className="text-xs text-slate-400">
            Historical progression extracted from previous laboratory submissions
          </p>
        </div>
        <span className="text-xs text-slate-400 font-mono">
          {history.length} data points
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Period</th>
              <th className="py-3 px-4">Report Date</th>
              <th className="py-3 px-4">Reported Value</th>
              <th className="py-3 px-4">Change from Previous</th>
              <th className="py-3 px-4">Reference Range</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Associated Report</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
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
                  className="hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-3.5 px-4 font-semibold text-white">
                    {item.month_label} {year}
                  </td>

                  <td className="py-3.5 px-4 font-mono text-slate-400">
                    {formatDate(item.date)}
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-bold text-white text-sm">
                      {item.value}
                    </span>{" "}
                    <span className="text-slate-400 font-mono">{unit}</span>
                  </td>

                  <td className="py-3.5 px-4">
                    {diff === null ? (
                      <span className="text-slate-500 font-mono text-[11px]">
                        Baseline
                      </span>
                    ) : diff > 0 ? (
                      <span className="inline-flex items-center gap-1 text-amber-400 font-mono text-xs font-semibold">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        +{diff} {unit}
                      </span>
                    ) : diff < 0 ? (
                      <span className="inline-flex items-center gap-1 text-teal-400 font-mono text-xs font-semibold">
                        <ArrowDownRight className="w-3.5 h-3.5" />
                        {diff} {unit}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-slate-400 font-mono text-xs">
                        <Minus className="w-3.5 h-3.5" /> 0.0
                      </span>
                    )}
                  </td>

                  <td className="py-3.5 px-4 font-mono text-slate-400">
                    {item.reference_min} – {item.reference_max} {unit}
                  </td>

                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${
                        isWithin
                          ? "bg-emerald-950/60 text-emerald-300 border-emerald-800/60"
                          : "bg-amber-950/60 text-amber-300 border-amber-800/60"
                      }`}
                    >
                      {isWithin ? "Within reference" : "Above reference"}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    {item.report_id ? (
                      <Link
                        href={`/reports/${item.report_id}`}
                        className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-medium"
                      >
                        <FileText className="w-3 h-3" />
                        <span>View report</span>
                      </Link>
                    ) : (
                      <span className="text-slate-600">—</span>
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
