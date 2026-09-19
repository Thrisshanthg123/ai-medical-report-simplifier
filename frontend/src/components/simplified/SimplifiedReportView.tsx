"use client";

import React from "react";
import Link from "next/link";
import { Printer, ArrowLeft, UploadCloud } from "lucide-react";
import { MedicalReport } from "@/types/medical";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ImportantFindings } from "./ImportantFindings";
import { MedicalTermsExplained } from "./MedicalTermsExplained";
import { ClearNextActions } from "./ClearNextActions";

interface SimplifiedReportViewProps {
  report: MedicalReport;
}

export function SimplifiedReportView({ report }: SimplifiedReportViewProps) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="space-y-6 print:space-y-4 print:p-0">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 print:hidden">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors min-h-target sm:min-h-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to dashboard</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <Link href="/upload">
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-1.5"
            >
              <UploadCloud className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Upload another report</span>
            </Button>
          </Link>

          <Button
            onClick={handlePrint}
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Print</span>
          </Button>
        </div>
      </div>

      {/* Main Printable Document Card */}
      <div className="bg-surface border border-border rounded-panel p-6 sm:p-8 space-y-8 print:border-none print:p-0 print:space-y-6">
        {/* Document Header */}
        <div className="border-b border-border pb-6 space-y-3">
          <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-ink tracking-tight">
            {report.report_name}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-ink-muted">
            <span>
              Date:{" "}
              <strong className="text-ink font-medium">
                {formatDate(report.date)}
              </strong>
            </span>
            <span>
              Laboratory / Provider:{" "}
              <strong className="text-ink font-medium">
                {report.provider_or_lab}
              </strong>
            </span>
          </div>

          {/* Clinical Advice & AI Notice */}
          <div className="p-3 rounded-control bg-surface-subtle border border-border text-xs text-ink-muted leading-relaxed">
            <strong className="text-ink font-medium">Notice:</strong> AI-generated
            explanation. Not medical advice. Please review with your doctor.
          </div>
        </div>

        {/* Section 1: "In short" */}
        <section aria-labelledby="in-short-heading" className="space-y-3">
          <h2
            id="in-short-heading"
            className="text-lg font-serif font-semibold text-ink"
          >
            In short
          </h2>
          <p className="text-lg text-ink max-w-prose leading-relaxed">
            {report.summary?.overview_text}
          </p>

          {report.summary?.key_takeaways &&
            report.summary.key_takeaways.length > 0 && (
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-sm text-ink-muted max-w-prose">
                {report.summary.key_takeaways.map((takeaway, idx) => (
                  <li key={idx}>{takeaway}</li>
                ))}
              </ul>
            )}
        </section>

        {/* Section 2: "Key findings" */}
        <ImportantFindings report={report} />

        {/* Section 3: "Questions to ask your doctor" */}
        <ClearNextActions report={report} />

        {/* Section 4: "Terms explained" */}
        <MedicalTermsExplained report={report} />
      </div>
    </div>
  );
}
