import React from "react";
import { MedicalReport } from "@/types/medical";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AnomalyBadge } from "@/components/ui/AnomalyBadge";

interface ImportantFindingsProps {
  report: MedicalReport;
}

export function ImportantFindings({ report }: ImportantFindingsProps) {
  const outsideCount = report.summary?.outside_range_count ?? 0;
  const totalTests = report.summary?.total_tests ?? report.tests.length;

  // Sort tests with above_range and below_range first, then within_range
  const sortedTests = [...report.tests].sort((a, b) => {
    const aOutside = a.status !== "within_range";
    const bOutside = b.status !== "within_range";
    if (aOutside && !bOutside) return -1;
    if (!aOutside && bOutside) return 1;
    return 0;
  });

  return (
    <section aria-labelledby="key-findings-heading" className="space-y-4">
      {/* Section Header with Outside Range Count */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-border">
        <div>
          <h2
            id="key-findings-heading"
            className="text-lg font-serif font-semibold text-ink"
          >
            Key findings
          </h2>
        </div>
        <p className="text-xs text-ink-muted">
          {outsideCount > 0
            ? `${outsideCount} of ${totalTests} tests outside reference range`
            : `All ${totalTests} tests within reference range`}
        </p>
      </div>

      {/* Findings Table (Desktop table / Mobile stacked blocks) */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="hidden sm:table-header-group border-b border-border text-xs uppercase tracking-wider text-ink-muted font-medium">
            <tr>
              <th scope="col" className="py-3 px-3">
                Test
              </th>
              <th scope="col" className="py-3 px-3">
                Your result
              </th>
              <th scope="col" className="py-3 px-3">
                Normal range
              </th>
              <th scope="col" className="py-3 px-3">
                Status
              </th>
              <th scope="col" className="py-3 px-3">
                What it means
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sortedTests.map((test) => (
              <tr
                key={test.slug || test.id}
                className="block sm:table-row py-4 sm:py-0 border-b sm:border-b-0 border-border print-avoid-break"
              >
                {/* 1. Test Name & Category */}
                <td className="block sm:table-cell py-1.5 sm:py-3.5 px-0 sm:px-3 align-top">
                  <span className="text-sm font-semibold text-ink block">
                    {test.test_name}
                  </span>
                  <span className="text-xs text-ink-muted block mt-0.5">
                    {test.category}
                  </span>
                </td>

                {/* 2. Your Result & Neutral Factual Trend */}
                <td className="block sm:table-cell py-1.5 sm:py-3.5 px-0 sm:px-3 align-top">
                  <span className="sm:hidden text-xs text-ink-muted font-medium mr-2">
                    Your result:
                  </span>
                  <span className="text-sm font-semibold text-ink tabular-nums">
                    {test.value} {test.unit}
                  </span>
                  {test.previous_value !== undefined && (
                    <span className="block text-xs text-ink-muted tabular-nums mt-0.5">
                      Previously {test.previous_value} {test.unit}
                    </span>
                  )}
                  {test.change_absolute !== undefined && (
                    <span className="block text-xs text-ink-muted tabular-nums mt-0.5">
                      {test.change_absolute > 0
                        ? `+${test.change_absolute}`
                        : test.change_absolute}{" "}
                      {test.unit} change
                    </span>
                  )}
                </td>

                {/* 3. Normal Range */}
                <td className="block sm:table-cell py-1.5 sm:py-3.5 px-0 sm:px-3 align-top">
                  <span className="sm:hidden text-xs text-ink-muted font-medium mr-2">
                    Normal range:
                  </span>
                  <span className="text-sm text-ink-muted tabular-nums">
                    {test.reference_range}
                  </span>
                </td>

                {/* 4. Status */}
                <td className="block sm:table-cell py-1.5 sm:py-3.5 px-0 sm:px-3 align-top">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <StatusBadge status={test.status} />
                    {test.anomaly && <AnomalyBadge label="Worth attention" />}
                  </div>
                </td>

                {/* 5. What It Means */}
                <td className="block sm:table-cell py-1.5 sm:py-3.5 px-0 sm:px-3 align-top">
                  <span className="sm:hidden text-xs text-ink-muted font-medium block mb-0.5">
                    What it means:
                  </span>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {test.simple_explanation}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
