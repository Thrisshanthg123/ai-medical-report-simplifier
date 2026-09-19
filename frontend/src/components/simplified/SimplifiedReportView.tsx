"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Download,
  Printer,
  FileCheck2,
  Calendar,
  Building2,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Check,
  TrendingUp,
} from "lucide-react";
import { MedicalReport } from "@/types/medical";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TrendBadge } from "@/components/ui/TrendBadge";
import { AnomalyBadge } from "@/components/ui/AnomalyBadge";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";

interface SimplifiedReportViewProps {
  report: MedicalReport;
}

export function SimplifiedReportView({ report }: SimplifiedReportViewProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1200);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="space-y-8 print:p-0">
      {/* Action Bar (Hidden when printing) */}
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href={`/reports/${report.id}`}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Technical Clinical View</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            onClick={handlePrint}
            variant="secondary"
            size="sm"
            className="flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print View</span>
          </Button>

          <Button
            onClick={handleDownload}
            disabled={downloading}
            variant="primary"
            size="sm"
            className="flex items-center gap-1.5"
          >
            {downloadSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Summary Downloaded</span>
              </>
            ) : downloading ? (
              <span>Generating PDF...</span>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download Simplified Report</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Printable Simplified Document Container */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 space-y-8 shadow-xl print:border-none print:bg-white print:text-black">
        {/* Document Header */}
        <div className="border-b border-slate-800 pb-6 print:border-slate-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 print:text-teal-700">
                  H2 Patient-Friendly Summary
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 print:bg-slate-100 text-slate-300 print:text-slate-700">
                  Plain-Language Edition
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white print:text-black tracking-tight">
                {report.report_name}
              </h1>
            </div>

            <div className="text-left sm:text-right text-xs text-slate-400 print:text-slate-600 space-y-1">
              <p>
                Date: <strong className="text-slate-200 print:text-black">{formatDate(report.date)}</strong>
              </p>
              <p>
                Laboratory: <strong className="text-slate-200 print:text-black">{report.provider_or_lab}</strong>
              </p>
              <p>Patient: <strong className="text-slate-200 print:text-black">Alex Morgan (Demo)</strong></p>
            </div>
          </div>
        </div>

        {/* Section 1: Executive Overview in Plain English */}
        <div className="rounded-xl bg-slate-950/70 print:bg-slate-50 border border-slate-800 print:border-slate-200 p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-400 print:text-teal-600" />
            <h2 className="text-sm font-bold text-white print:text-black uppercase tracking-wider">
              1. What This Report Tells You
            </h2>
          </div>
          <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
            {report.summary.overview_text}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-slate-900 print:bg-white border border-slate-800 print:border-slate-200 text-center">
              <span className="text-2xl font-bold text-emerald-400 print:text-emerald-700">
                {report.summary.within_range_count}
              </span>
              <span className="text-xs text-slate-400 print:text-slate-600 block">
                Tests within reference boundaries
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 print:bg-white border border-slate-800 print:border-slate-200 text-center">
              <span className="text-2xl font-bold text-amber-400 print:text-amber-700">
                {report.summary.outside_range_count}
              </span>
              <span className="text-xs text-slate-400 print:text-slate-600 block">
                Tests outside reference boundaries
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 print:bg-white border border-slate-800 print:border-slate-200 text-center">
              <span className="text-2xl font-bold text-indigo-400 print:text-indigo-700">
                {report.summary.trends_detected_count}
              </span>
              <span className="text-xs text-slate-400 print:text-slate-600 block">
                Longitudinal trends detected
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Detailed Test Breakdown */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white print:text-black uppercase tracking-wider">
              2. Biomarker Breakdown & Explanations
            </h2>
            <span className="text-xs text-slate-400 print:text-slate-600">
              {report.tests.length} tests examined
            </span>
          </div>

          <div className="space-y-4">
            {report.tests.map((test) => (
              <div
                key={test.slug}
                className="p-4 rounded-xl bg-slate-950/40 print:bg-slate-50 border border-slate-800 print:border-slate-200 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-white print:text-black">
                      {test.test_name}
                    </h3>
                    <span className="text-[11px] text-slate-400 print:text-slate-600 font-mono">
                      Category: {test.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge status={test.status} />
                    <TrendBadge trend={test.trend} compact />
                    {test.anomaly && <AnomalyBadge label="Shift detected" />}
                  </div>
                </div>

                {/* Values & Range */}
                <div className="flex flex-wrap items-baseline gap-4 text-xs text-slate-300 print:text-slate-800 pt-1">
                  <span>
                    Reported Value:{" "}
                    <strong className="text-white print:text-black font-bold text-sm">
                      {test.value} {test.unit}
                    </strong>
                  </span>
                  <span>•</span>
                  <span>
                    Typical Reference Interval:{" "}
                    <strong className="text-slate-200 print:text-slate-900 font-mono">
                      {test.reference_range}
                    </strong>
                  </span>
                  {test.previous_value !== undefined && (
                    <>
                      <span>•</span>
                      <span>
                        Previous Report:{" "}
                        <strong className="text-slate-200 print:text-slate-900 font-mono">
                          {test.previous_value} {test.unit}
                        </strong>
                      </span>
                    </>
                  )}
                </div>

                {/* Plain-Language Explanation */}
                <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                  <strong className="text-slate-200 print:text-black">What this test means: </strong>
                  {test.simple_explanation}
                </p>

                {/* Machine Learning Trend Analysis */}
                {test.ml_analysis && (
                  <div className="p-3 rounded-lg bg-slate-900 print:bg-white border border-slate-800 print:border-slate-200 text-xs">
                    <span className="text-[11px] uppercase font-semibold text-teal-400 print:text-teal-700 block mb-1">
                      Historical Trend Insight ({test.ml_analysis.change_label}):
                    </span>
                    <p className="text-slate-300 print:text-slate-700 italic">
                      &ldquo;{test.ml_analysis.explanation}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Questions to Ask Your Physician */}
        <div className="p-5 rounded-xl bg-slate-950/70 print:bg-slate-50 border border-slate-800 print:border-slate-200 space-y-3">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-teal-400 print:text-teal-700" />
            <h2 className="text-sm font-bold text-white print:text-black uppercase tracking-wider">
              3. Suggested Questions for Your Next Doctor Consultation
            </h2>
          </div>
          <p className="text-xs text-slate-400 print:text-slate-600">
            H2 helps you have a more informed conversation with your healthcare team:
          </p>
          <ul className="space-y-2 text-xs text-slate-300 print:text-slate-800">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
              <span>
                &ldquo;I noticed my Fasting Glucose has moved from 91 to 109 mg/dL over the past 4 checkups. Should we discuss any dietary or lifestyle adjustments?&rdquo;
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
              <span>
                &ldquo;My Vitamin D levels have dropped to 22 ng/mL across recent quarters. Would supplemental Vitamin D or follow-up testing be appropriate for me?&rdquo;
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
              <span>
                &ldquo;When would you recommend scheduling my next routine follow-up panel?&rdquo;
              </span>
            </li>
          </ul>
        </div>

        {/* Section 4: Mandatory Responsible AI Notice */}
        <DisclaimerNotice />
      </div>
    </div>
  );
}
