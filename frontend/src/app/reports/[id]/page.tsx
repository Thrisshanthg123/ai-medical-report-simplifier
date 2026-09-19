import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getReport, getReports } from "@/lib/api";
import { ReportHeader } from "@/components/reports/ReportHeader";
import { ReportSummaryBanner } from "@/components/reports/ReportSummaryBanner";
import { ReportViewToggle } from "@/components/reports/ReportViewToggle";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";

interface ReportPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const reports = await getReports();
  return reports.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: ReportPageProps) {
  const { id } = await params;
  const report = await getReport(id);
  if (!report) return { title: "Report Not Found — H2" };
  return {
    title: `${report.report_name} — H2 Medical Report Simplifier`,
    description: `Detailed clinical test breakdown and historical ML analysis for ${report.report_name}.`,
  };
}

export default async function ReportDetailPage({ params }: ReportPageProps) {
  const { id } = await params;
  const report = await getReport(id);

  if (!report) {
    notFound();
  }

  return (
    <div className="bg-canvas text-ink py-6 sm:py-10">
      <div className="max-w-container mx-auto px-4 sm:px-6 space-y-8">
        {/* Report Header Metadata */}
        <ReportHeader report={report} />

        {/* AI & ML Executive Summary Banner */}
        <ReportSummaryBanner summary={report.summary} />

        {/* Section Title */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <h2 className="text-xl font-serif font-semibold text-ink tracking-tight">
              Extracted Test Results
            </h2>
            <p className="text-xs text-ink-muted mt-0.5">
              Individual tests parsed from document and compared with reference intervals
            </p>
          </div>
        </div>

        {/* Interactive View: Cards or Table */}
        <ReportViewToggle tests={report.tests} />

        {/* Responsible AI Disclaimer */}
        <DisclaimerNotice />
      </div>
    </div>
  );
}
