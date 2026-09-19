import React from "react";
import Link from "next/link";
import { ArrowLeft, GitCompare, History } from "lucide-react";
import { getReports } from "@/lib/api";
import { ComparisonView } from "@/components/compare/ComparisonView";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

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
    <ProtectedRoute>
      <div className="bg-canvas text-ink py-6 sm:py-10">
        <div className="max-w-container mx-auto px-4 sm:px-6 space-y-8">
          {/* Top Navigation */}
          <div className="flex items-center justify-between">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to Dashboard</span>
            </Link>

            <Link
              href="/history"
              className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors"
            >
              <History className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Timeline view</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Report Comparison
              </span>
              <span className="text-xs uppercase font-mono px-2 py-0.5 rounded-chip bg-surface-subtle border border-border text-ink-muted">
                Side-by-Side Analysis
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-ink tracking-tight">
              Compare Medical Reports
            </h1>
            <p className="text-sm text-ink-muted max-w-2xl">
              Evaluate two laboratory reports side-by-side to understand test result changes, trends, and reference range status over time.
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
      </div>
    </ProtectedRoute>
  );
}
