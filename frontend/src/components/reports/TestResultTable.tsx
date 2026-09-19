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
    <div className="rounded-panel border border-border bg-surface overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-subtle border-b border-border text-ink-muted font-medium uppercase tracking-wider text-[11px]">
            <tr>
              <th className="py-3 px-4">Test name & panel</th>
              <th className="py-3 px-4">Current value</th>
              <th className="py-3 px-4">Reference range</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Trend</th>
              <th className="py-3 px-4">Attention</th>
              <th className="py-3 px-4 text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-ink">
            {tests.map((test) => (
              <tr
                key={test.id}
                className="hover:bg-surface-subtle transition-colors"
              >
                <td className="py-3.5 px-4">
                  <div className="font-medium text-ink">{test.test_name}</div>
                  <div className="text-[10px] text-ink-muted font-mono">
                    {test.category}
                  </div>
                </td>

                <td className="py-3.5 px-4">
                  <span className="font-semibold text-ink text-sm tabular-nums">
                    {test.value}
                  </span>{" "}
                  <span className="text-ink-muted">{test.unit}</span>
                  {test.previous_value !== undefined && (
                    <span className="block text-[11px] text-ink-muted tabular-nums">
                      Prior: {test.previous_value} {test.unit}
                    </span>
                  )}
                </td>

                <td className="py-3.5 px-4 font-mono text-ink-muted tabular-nums">
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
                    <AnomalyBadge label="Shift detected" />
                  ) : (
                    <span className="text-ink-muted text-xs">Expected variance</span>
                  )}
                </td>

                <td className="py-3.5 px-4 text-right">
                  <Link
                    href={`/tests/${test.slug}`}
                    className="inline-flex items-center gap-1 text-brand hover:text-brand-hover font-medium"
                  >
                    <span>View chart</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
