import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  GitCompare,
} from "lucide-react";
import { getTestHistory } from "@/lib/api";
import { HistoricalTrendChart } from "@/components/tests/HistoricalTrendChart";
import { MLInsightCard } from "@/components/tests/MLInsightCard";
import { HistoricalTable } from "@/components/tests/HistoricalTable";
import { TestSelectorNav } from "@/components/tests/TestSelectorNav";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TrendBadge } from "@/components/ui/TrendBadge";
import { AnomalyBadge } from "@/components/ui/AnomalyBadge";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";

interface TestPageProps {
  params: Promise<{
    testName: string;
  }>;
}

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: TestPageProps) {
  const { testName } = await params;
  const data = await getTestHistory(testName);
  if (!data) return { title: "Test Not Found — H2" };
  return {
    title: `${data.test.test_name} Historical Trend — H2 Medical Simplifier`,
    description: `Longitudinal multi-quarter trend analysis and ML insights for ${data.test.test_name}.`,
  };
}

export default async function TestDetailPage({ params }: TestPageProps) {
  const { testName } = await params;
  const result = await getTestHistory(testName);

  if (!result) {
    notFound();
  }

  const { test, history } = result;

  return (
    <div className="bg-canvas text-ink py-6 sm:py-10">
      <div className="max-w-container mx-auto px-4 sm:px-6 space-y-8">
        {/* Top Navigation Row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Dashboard</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/compare"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-control bg-surface-subtle hover:bg-surface text-ink border border-border transition-colors min-h-target items-center"
            >
              <GitCompare className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Compare reports</span>
            </Link>
          </div>
        </div>

        {/* Test Selector Bar */}
        <TestSelectorNav
          currentSlug={test.slug}
          allTests={[test]}
        />

        {/* Header and Live Stats Card */}
        <div className="rounded-panel border border-border bg-surface p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {test.category}
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-chip bg-surface-subtle border border-border text-ink-muted">
                  Longitudinal test
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-ink tracking-tight">
                {test.test_name}
              </h1>
              <p className="text-xs sm:text-sm text-ink-muted mt-1 max-w-xl leading-relaxed">
                {test.simple_explanation}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <StatusBadge status={test.status} />
              <TrendBadge trend={test.trend} />
              {test.anomaly && <AnomalyBadge label="Shift detected" />}
            </div>
          </div>

          {/* Current vs Previous Comparison Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-border">
            <div className="p-3.5 rounded-control bg-surface-subtle border border-border">
              <span className="text-xs text-ink-muted block mb-0.5">
                Current result
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-ink tabular-nums">{test.value}</span>
                <span className="text-xs text-ink-muted font-mono">{test.unit}</span>
              </div>
              <span className="text-[11px] text-ink-muted block mt-1">
                Most recent test
              </span>
            </div>

            <div className="p-3.5 rounded-control bg-surface-subtle border border-border">
              <span className="text-xs text-ink-muted block mb-0.5">
                Previous result
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-ink tabular-nums">
                  {test.previous_value ?? "—"}
                </span>
                <span className="text-xs text-ink-muted font-mono">{test.unit}</span>
              </div>
              <span className="text-[11px] text-ink-muted block mt-1">
                Prior recorded test
              </span>
            </div>

            <div className="p-3.5 rounded-control bg-surface-subtle border border-border">
              <span className="text-xs text-ink-muted block mb-0.5">
                Change from prior
              </span>
              <div className="flex items-baseline gap-1">
                {test.change_absolute !== undefined ? (
                  <span className="text-2xl font-semibold text-ink tabular-nums">
                    {test.change_absolute > 0 ? "+" : ""}
                    {test.change_absolute}
                  </span>
                ) : (
                  <span className="text-2xl font-semibold text-ink tabular-nums">—</span>
                )}
                <span className="text-xs text-ink-muted font-mono">{test.unit}</span>
              </div>
              <span className="text-[11px] text-ink-muted block mt-1">
                {test.change_percentage !== undefined
                  ? `${test.change_percentage > 0 ? "+" : ""}${test.change_percentage}% relative shift`
                  : "No prior baseline"}
              </span>
            </div>

            <div className="p-3.5 rounded-control bg-surface-subtle border border-border">
              <span className="text-xs text-ink-muted block mb-0.5">
                Reference interval
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-semibold text-ink tabular-nums">
                  {test.reference_min} – {test.reference_max}
                </span>
                <span className="text-xs text-ink-muted font-mono">{test.unit}</span>
              </div>
              <span className="text-[11px] text-ink-muted block mt-1">
                Standard clinical range
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Visualization */}
        <div className="rounded-panel border border-border bg-surface p-6 space-y-4">
          <div>
            <h2 className="text-lg font-serif font-semibold text-ink">
              Historical Trendline
            </h2>
            <p className="text-xs text-ink-muted">
              Historical test trajectory across recorded visits
            </p>
          </div>

          <HistoricalTrendChart
            data={history}
            unit={test.unit}
            referenceMin={test.reference_min}
            referenceMax={test.reference_max}
            testName={test.test_name}
          />
        </div>

        {/* ML Insight Presentation */}
        {test.ml_analysis && (
          <MLInsightCard
            analysis={test.ml_analysis}
            testName={test.test_name}
          />
        )}

        {/* Historical Data Table */}
        <HistoricalTable history={history} unit={test.unit} />

        {/* Responsible AI Disclaimer */}
        <DisclaimerNotice />
      </div>
    </div>
  );
}
