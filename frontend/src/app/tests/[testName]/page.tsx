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
  Sparkles,
  GitCompare,
} from "lucide-react";
import { getTestHistory, getReport } from "@/lib/api";
import { MOCK_TESTS_LATEST } from "@/lib/mock-data";
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
  return MOCK_TESTS_LATEST.map((t) => ({ testName: t.slug }));
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Navigation Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/reports/rep-001"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to September Report</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href={`/compare?base=rep-002&compare=rep-001`}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>Compare Reports</span>
          </Link>
        </div>
      </div>

      {/* Biomarker Selector Bar */}
      <TestSelectorNav
        currentSlug={test.slug}
        allTests={MOCK_TESTS_LATEST}
      />

      {/* Header and Live Stats Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                {test.category}
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                Longitudinal Tracking
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {test.test_name}
            </h1>
            <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
              {test.simple_explanation}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <StatusBadge status={test.status} />
            <TrendBadge trend={test.trend} />
            {test.anomaly && <AnomalyBadge label="Shift Detected" />}
          </div>
        </div>

        {/* Current vs Previous Comparison Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-slate-800/80">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">
              Current (September)
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">{test.value}</span>
              <span className="text-xs text-slate-400 font-mono">{test.unit}</span>
            </div>
            <span className="text-[10px] text-slate-500 block mt-1">
              Latest recorded panel
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">
              Previous (July)
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-300">
                {test.previous_value ?? "—"}
              </span>
              <span className="text-xs text-slate-400 font-mono">{test.unit}</span>
            </div>
            <span className="text-[10px] text-slate-500 block mt-1">
              Prior quarter checkup
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">
              Change from Prior
            </span>
            <div className="flex items-baseline gap-1">
              {test.change_absolute !== undefined ? (
                <span
                  className={`text-2xl font-bold ${
                    test.change_absolute > 0
                      ? "text-amber-400"
                      : test.change_absolute < 0
                      ? "text-teal-400"
                      : "text-slate-300"
                  }`}
                >
                  {test.change_absolute > 0 ? "+" : ""}
                  {test.change_absolute}
                </span>
              ) : (
                <span className="text-2xl font-bold text-slate-300">—</span>
              )}
              <span className="text-xs text-slate-400 font-mono">{test.unit}</span>
            </div>
            <span className="text-[10px] text-slate-500 block mt-1">
              {test.change_percentage !== undefined
                ? `${test.change_percentage > 0 ? "+" : ""}${test.change_percentage}% relative shift`
                : "No baseline delta"}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">
              Reference Interval
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-slate-200">
                {test.reference_min} – {test.reference_max}
              </span>
              <span className="text-xs text-slate-400 font-mono">{test.unit}</span>
            </div>
            <span className="text-[10px] text-slate-500 block mt-1">
              Standard clinical boundaries
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Recharts Visualization */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">
              Longitudinal Trendline
            </h2>
            <p className="text-xs text-slate-400">
              Interactive historical trajectory across available quarters in 2026
            </p>
          </div>
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
  );
}
