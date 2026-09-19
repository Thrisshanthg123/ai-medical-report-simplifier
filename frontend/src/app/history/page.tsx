import React from "react";
import Link from "next/link";
import { Upload, GitCompare, History, Sparkles } from "lucide-react";
import { getReports } from "@/lib/api";
import { TimelineView } from "@/components/history/TimelineView";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Report History Timeline — H2 Medical Report Simplifier",
  description: "Chronological archive and longitudinal progression of your medical reports.",
};

export default async function HistoryPage() {
  const reports = await getReports();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Longitudinal Archive
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
              4 Recorded Panels
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Medical Report History
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Browse through your chronological health timeline. Open any panel to review parsed metrics or compare quarters.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link href="/compare">
            <Button variant="secondary" size="md">
              <GitCompare className="w-4 h-4" />
              <span>Compare Reports</span>
            </Button>
          </Link>

          <Link href="/upload">
            <Button variant="primary" size="md">
              <Upload className="w-4 h-4" />
              <span>Upload Report</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Timeline Component */}
      <TimelineView reports={reports} />

      {/* Responsible AI Disclaimer */}
      <DisclaimerNotice />
    </div>
  );
}
