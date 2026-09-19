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
    <div className="space-y-4 pb-6 border-b border-slate-800/80">
      {/* Top Navigation Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link href={`/compare?base=rep-002&compare=${report.id}`}>
            <Button variant="secondary" size="sm">
              <GitCompare className="w-3.5 h-3.5" />
              <span>Compare with July 2026</span>
            </Button>
          </Link>

          <Link href={`/simplified/${report.id}`}>
            <Button variant="primary" size="sm">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Simplified Summary</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Report Metadata */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Laboratory Diagnostics Panel
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-300">
              Analysis Verified
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {report.report_name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Date: <strong className="text-slate-200">{formatDate(report.date)}</strong>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              Facility: <strong className="text-slate-200">{report.provider_or_lab}</strong>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              Tests Extracted: <strong className="text-slate-200">{report.tests_count} biomarkers</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
