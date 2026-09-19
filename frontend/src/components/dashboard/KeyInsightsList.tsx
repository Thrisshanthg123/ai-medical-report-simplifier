import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, TrendingDown, Minus } from "lucide-react";
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
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <CardTitle>Key Longitudinal Insights</CardTitle>
          </div>
          <p className="text-xs text-slate-400">
            Machine learning trend analysis across historical reports
          </p>
        </div>
        <span className="text-[10px] uppercase font-mono tracking-wider bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
          ML Model
        </span>
      </CardHeader>

      <CardContent className="space-y-3.5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {insightTests.map((test) => {
            return (
              <div
                key={test.slug}
                className="p-3.5 rounded-lg bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/tests/${test.slug}`}
                        className="font-semibold text-sm text-white hover:text-teal-300 transition-colors inline-flex items-center gap-1"
                      >
                        <span>{test.test_name}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                    </div>
                    <span className="text-xs text-slate-400">
                      Current: <strong className="text-slate-200">{test.value} {test.unit}</strong>
                      {test.previous_value && (
                        <span className="text-slate-500 ml-1">
                          (Prev: {test.previous_value} {test.unit})
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <TrendBadge trend={test.trend} compact />
                    {test.anomaly && <AnomalyBadge label="Shift detected" />}
                  </div>
                </div>

                {test.ml_analysis && (
                  <p className="text-xs text-slate-300/90 leading-relaxed mt-2 bg-slate-900/60 p-2.5 rounded border border-slate-800/80">
                    &ldquo;{test.ml_analysis.explanation}&rdquo;
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span>Analysis reflects 4 multi-quarter reports</span>
          <Link
            href="/tests/fasting-glucose"
            className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-1"
          >
            <span>Explore all test trends</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
