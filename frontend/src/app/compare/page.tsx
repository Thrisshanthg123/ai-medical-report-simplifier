import React from "react";
import Link from "next/link";
import { ArrowLeft, GitCompare, History } from "lucide-react";
import { getReports } from "@/lib/api";
import { ComparisonView } from "@/components/compare/ComparisonView";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";

export const metadata = {
  title: "Report Comparison — H2 Medical Report Simplifier",
  description: "Direct comparative analysis between two medical diagnostic lab reports.",
};

interface ComparePageProps {
  searchParams?: Promise<{
    base?: string;
    compare?: string;
  }>;
}

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const reports = await getReports();
  const resolvedParams = searchParams ? await searchParams : {};

  const initialBase = resolvedParams.base || reports[1]?.id || reports[0]?.id || "";
  const initialCompare = resolvedParams.compare || reports[0]?.id || "";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dashboard</span>
        </Link>

        <Link
          href="/history"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <History className="w-3.5 h-3.5" />
          <span>Timeline View</span>
        </Link>
      </div>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
            Multi-Panel Differential
          </span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
            Non-Diagnostic Comparison
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Compare Medical Reports
        </h1>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          Directly evaluate two lab reports side-by-side to understand biomarker shifts, rate of change, and reference status progression over time.
        </p>
      </div>

      {/* Main Comparison Component */}
      <ComparisonView
        reports={reports}
        initialBaseId={initialBase}
        initialCompareId={initialCompare}
      />

      {/* Responsible AI Notice */}
      <DisclaimerNotice />
    </div>
  );
}
