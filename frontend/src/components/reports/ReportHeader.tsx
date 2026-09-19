import React from "react";
import Link from "next/link";
import {
  FileText,
  Calendar,
  Building2,
  GitCompare,
  FileCheck2,
  ArrowLeft,
  Share2,
} from "lucide-react";
import { MedicalReport } from "@/types/medical";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface ReportHeaderProps {
  report: MedicalReport;
}

export function ReportHeader({ report }: ReportHeaderProps) {
  return (
    <div className="space-y-4 pb-6 border-b border-border">
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
          <Link href={`/compare?compare=${report.id}`}>
            <Button variant="outline" size="sm">
              <GitCompare className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Compare reports</span>
            </Button>
          </Link>

          <Link href={`/simplified/${report.id}`}>
            <Button variant="primary" size="sm">
              <FileCheck2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Simplified report</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Report Metadata */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Laboratory Report Details
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-chip bg-surface-subtle border border-border text-ink-muted">
              Structured Record
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-ink tracking-tight">
            {report.report_name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-ink-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
              Date: <strong className="text-ink font-medium">{formatDate(report.date)}</strong>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
              Facility: <strong className="text-ink font-medium">{report.provider_or_lab}</strong>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
              Tests Extracted: <strong className="text-ink font-medium">{report.tests_count} tests</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
