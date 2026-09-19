import React from "react";
import Link from "next/link";
import { Upload, GitCompare } from "lucide-react";
import { getReports } from "@/lib/api";
import { TimelineView } from "@/components/history/TimelineView";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Report History — H2 Medical Report Simplifier",
  description: "Chronological archive of your medical reports and test results.",
};

export default async function HistoryPage() {
  const reports = await getReports();

  return (
    <div className="bg-canvas text-ink py-6 sm:py-10">
      <div className="max-w-container mx-auto px-4 sm:px-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Report Archive
              </span>
              <span className="text-xs uppercase font-mono px-2 py-0.5 rounded-chip bg-surface-subtle border border-border text-ink-muted">
                {reports.length} Recorded {reports.length === 1 ? "Report" : "Reports"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-ink tracking-tight">
              Medical Report History
            </h1>
            <p className="text-sm text-ink-muted mt-1">
              Browse through your chronological health timeline or compare results across visits.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link href="/compare">
              <Button variant="outline" size="md">
                <GitCompare className="w-4 h-4" aria-hidden="true" />
                <span>Compare reports</span>
              </Button>
            </Link>

            <Link href="/upload">
              <Button variant="primary" size="md">
                <Upload className="w-4 h-4" aria-hidden="true" />
                <span>Upload report</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Timeline Component */}
        <TimelineView reports={reports} />

        {/* Responsible AI Disclaimer */}
        <DisclaimerNotice />
      </div>
    </div>
  );
}
