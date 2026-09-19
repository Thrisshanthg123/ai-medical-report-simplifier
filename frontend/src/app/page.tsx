import React from "react";
import Link from "next/link";
import {
  Upload,
  ArrowRight,
  FileText,
  Cpu,
  LineChart,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Top Banner for Evaluators */}
      <section className="bg-gradient-to-r from-teal-950/40 via-slate-900/60 to-teal-950/40 border-b border-teal-900/30 py-2.5 px-4 text-center">
        <p className="text-xs text-teal-300 font-medium inline-flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span>Longitudinal Lab Tracking: Turn complex test results into clear, visual trends.</span>
          <Link
            href="/dashboard"
            className="text-white underline underline-offset-4 hover:text-teal-200 ml-1 font-semibold"
          >
            Go to Dashboard →
          </Link>
        </p>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-teal-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>H2 • AI Medical Report Simplifier</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Understand your medical reports.{" "}
            <span className="bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Clearly.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Upload a medical report and turn complex test results into simple, visual insights.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/upload"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-lg shadow-teal-950/40 hover:shadow-teal-900/50 transition-all active:scale-[0.98]"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Report</span>
            </Link>

            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-sm transition-all"
            >
              <span>View Dashboard</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Visual Journey: Report → Analysis → Insights */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">
              The H2 Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Step 1 */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm relative group hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-800/60 flex items-center justify-center text-teal-300 mb-3.5">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-semibold text-white">1. Document Understanding</h3>
                <span className="text-[10px] text-teal-400 font-mono font-medium">AI OCR</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Extracts lab metrics, units, values, and reference boundaries from PDFs or lab photos into structured data.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm relative group hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-300 mb-3.5">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-semibold text-white">2. Historical ML Analysis</h3>
                <span className="text-[10px] text-indigo-400 font-mono font-medium">Our ML Model</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cross-references past lab checkups to detect subtle trajectory shifts and unexpected trend anomalies.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm relative group hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-300 mb-3.5">
                <LineChart className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-semibold text-white">3. Clear Visual Insights</h3>
                <span className="text-[10px] text-emerald-400 font-mono font-medium">Patient Clarity</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Explains results plainly with interactive trendlines without alarmist or diagnostic terminology.
              </p>
            </div>
          </div>
        </div>

        {/* First 30-Seconds Hook: Interactive Micro-Preview */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                  Live Preview • Longitudinal Analysis
                </span>
                <h2 className="text-lg font-bold text-white mt-0.5">
                  Fasting Glucose Across 4 Quarters
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-950/80 border border-amber-800/80 text-amber-300 inline-flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Increasing trend detected
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Historical progression */}
              <div className="space-y-3">
                <p className="text-xs font-medium text-slate-400">Quarterly Values Tracked by H2:</p>
                <div className="grid grid-cols-4 gap-2">
                  <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 text-center">
                    <span className="text-[11px] text-slate-400 block">Jan</span>
                    <span className="text-sm font-bold text-slate-200">91</span>
                    <span className="text-[10px] text-slate-400 block">mg/dL</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 text-center">
                    <span className="text-[11px] text-slate-400 block">Apr</span>
                    <span className="text-sm font-bold text-slate-200">94</span>
                    <span className="text-[10px] text-slate-400 block">mg/dL</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 text-center">
                    <span className="text-[11px] text-slate-400 block">Jul</span>
                    <span className="text-sm font-bold text-slate-200">98</span>
                    <span className="text-[10px] text-slate-400 block">mg/dL</span>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/50 text-center">
                    <span className="text-[11px] text-amber-300 block">Sep</span>
                    <span className="text-sm font-bold text-amber-200">109</span>
                    <span className="text-[10px] text-amber-300/80 block">mg/dL</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/30 border border-slate-800/60 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Why this matters:</span> A single static report only shows 109 mg/dL. H2 reveals the gradual shift from 91 to 109 mg/dL across your available reports.
                </div>
              </div>

              {/* What H2 generates */}
              <div className="rounded-xl bg-slate-800/30 border border-slate-800/70 p-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Standard Reference Range</span>
                  <span className="text-slate-200 font-mono">70 – 99 mg/dL</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Reported Current Value</span>
                  <span className="text-amber-300 font-mono font-bold">109 mg/dL</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Net Trajectory</span>
                  <span className="text-amber-300 font-mono font-medium">+18 mg/dL over 4 reports</span>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="text-[11px] text-slate-400 block uppercase font-medium">
                    Plain-Language Explanation:
                  </span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    &ldquo;Your reported values have shown an increasing trend across the available reports, moving from within reference range to slightly above the threshold.&rdquo;
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/tests/fasting-glucose"
                    className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-medium"
                  >
                    <span>Inspect interactive chart view</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible AI Notice */}
        <div className="mt-12 max-w-2xl mx-auto">
          <DisclaimerNotice />
        </div>
      </section>
    </div>
  );
}
