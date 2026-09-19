import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { TrendBadge } from "@/components/ui/TrendBadge";
import { AnomalyBadge } from "@/components/ui/AnomalyBadge";
import { MedicalTest } from "@/types/medical";

interface KeyInsightsListProps {
  tests: MedicalTest[];
}

export function KeyInsightsList({ tests }: KeyInsightsListProps) {
  // Focus on representative insights: Fasting Glucose, Hemoglobin, Vitamin D
  const insightTests = tests.filter((t) =>
    ["fasting-glucose", "hemoglobin", "vitamin-d"].includes(t.slug)
  );

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <TrendingUp className="w-4 h-4 text-brand" aria-hidden="true" />
            <CardTitle>Key Longitudinal Insights</CardTitle>
          </div>
          <p className="text-xs text-ink-muted">
            Machine learning trend analysis across historical reports
          </p>
        </div>
        <span className="text-[10px] uppercase font-mono tracking-wider bg-surface-subtle text-ink-muted px-2 py-0.5 rounded-chip border border-border">
          ML Model
        </span>
      </CardHeader>

      <CardContent className="space-y-3.5 flex-1 flex flex-col justify-between">
        {insightTests.length === 0 ? (
          <div className="p-8 text-center text-xs text-ink-muted space-y-2">
            <p>No reports uploaded yet. Upload a report to see your results here.</p>
            <Link
              href="/upload"
              className="text-xs text-brand hover:text-brand-hover font-medium inline-block underline"
            >
              Upload a report
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {insightTests.map((test) => {
              return (
                <div
                  key={test.slug}
                  className="p-3.5 rounded-control bg-surface-subtle border border-border hover:border-border-strong transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/tests/${test.slug}`}
                          className="font-semibold text-sm text-ink hover:text-brand transition-colors inline-flex items-center gap-1"
                        >
                          <span>{test.test_name}</span>
                          <ArrowRight className="w-3 h-3 text-ink-muted" aria-hidden="true" />
                        </Link>
                      </div>
                      <span className="text-xs text-ink-muted mt-0.5 block">
                        Current:{" "}
                        <strong className="text-ink font-semibold tabular-nums">
                          {test.value} {test.unit}
                        </strong>
                        {test.previous_value && (
                          <span className="text-ink-muted ml-1 tabular-nums">
                            (Prev: {test.previous_value} {test.unit})
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <TrendBadge trend={test.trend} compact />
                      {test.anomaly && <AnomalyBadge label="Worth attention" />}
                    </div>
                  </div>

                  {test.ml_analysis && (
                    <p className="text-xs text-ink-muted leading-relaxed mt-2 bg-surface p-2.5 rounded-control border border-border">
                      &ldquo;{test.ml_analysis.explanation}&rdquo;
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-ink-muted">
          <span>Analysis reflects recorded reports</span>
          <Link
            href="/history"
            className="text-brand hover:text-brand-hover font-medium inline-flex items-center gap-1"
          >
            <span>Explore all reports</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
