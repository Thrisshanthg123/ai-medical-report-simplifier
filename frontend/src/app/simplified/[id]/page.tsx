import React from "react";
import { notFound } from "next/navigation";
import { getReport, getReports } from "@/lib/api";
import { SimplifiedReportView } from "@/components/simplified/SimplifiedReportView";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

interface SimplifiedPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const reports = await getReports();
  return reports.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: SimplifiedPageProps) {
  const { id } = await params;
  const report = await getReport(id);
  if (!report) return { title: "Report Not Found — H2" };
  return {
    title: `Simplified Summary: ${report.report_name} — H2`,
    description: `Clear, plain-language patient summary and longitudinal explanations for ${report.report_name}.`,
  };
}

export default async function SimplifiedReportPage({
  params,
}: SimplifiedPageProps) {
  const { id } = await params;
  const report = await getReport(id);

  if (!report) {
    notFound();
  }

  return (
    <ProtectedRoute>
      <div className="bg-canvas text-ink py-6 sm:py-10 print:py-0 print:bg-transparent">
        <div className="max-w-container mx-auto px-4 sm:px-6 print:px-0 print:max-w-none">
          <SimplifiedReportView report={report} />
        </div>
      </div>
    </ProtectedRoute>
  );
}
