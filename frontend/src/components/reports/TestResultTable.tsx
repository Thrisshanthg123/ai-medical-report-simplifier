import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MedicalTest } from "@/types/medical";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TrendBadge } from "@/components/ui/TrendBadge";
import { AnomalyBadge } from "@/components/ui/AnomalyBadge";

interface TestResultTableProps {
  tests: MedicalTest[];
}

export function TestResultTable({ tests }: TestResultTableProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Test Name & Panel</th>
              <th className="py-3 px-4">Current Value</th>
              <th className="py-3 px-4">Reference Range</th>
              <th className="py-3 px-4">Clinical Status</th>
              <th className="py-3 px-4">Historical Trend</th>
              <th className="py-3 px-4">ML Anomaly</th>
              <th className="py-3 px-4 text-right">Interactive Detail</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {tests.map((test) => (
              <tr
                key={test.id}
                className="hover:bg-slate-800/30 transition-colors"
              >
                <td className="py-3.5 px-4 font-medium">
                  <div className="text-white font-semibold">{test.test_name}</div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    {test.category}
                  </div>
                </td>

                <td className="py-3.5 px-4">
                  <span className="font-bold text-white text-sm">
                    {test.value}
                  </span>{" "}
                  <span className="text-slate-400">{test.unit}</span>
                  {test.previous_value !== undefined && (
                    <span className="block text-[10px] text-slate-500">
                      Prior: {test.previous_value}
                    </span>
                  )}
                </td>

                <td className="py-3.5 px-4 font-mono text-slate-400">
                  {test.reference_range}
                </td>

                <td className="py-3.5 px-4">
                  <StatusBadge status={test.status} />
                </td>

                <td className="py-3.5 px-4">
                  <TrendBadge trend={test.trend} compact />
                </td>

                <td className="py-3.5 px-4">
                  {test.anomaly ? (
                    <AnomalyBadge label="Unusual shift" />
                  ) : (
                    <span className="text-slate-500 text-[11px]">Normal variance</span>
                  )}
                </td>

                <td className="py-3.5 px-4 text-right">
                  <Link
                    href={`/tests/${test.slug}`}
                    className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-semibold"
                  >
                    <span>View Chart</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
