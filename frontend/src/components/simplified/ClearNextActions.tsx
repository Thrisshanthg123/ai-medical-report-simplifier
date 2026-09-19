"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  MessageSquareQuote,
  Copy,
  Check,
  GitCompare,
  TrendingUp,
  Printer,
  Download,
  Bell,
  Clock,
  ArrowRight,
  Info,
  Calendar,
  CheckCircle2,
  ListChecks,
  ExternalLink,
} from "lucide-react";
import { MedicalReport } from "@/types/medical";
import { Button } from "@/components/ui/Button";

interface ClearNextActionsProps {
  report: MedicalReport;
  onPrint?: () => void;
  onDownload?: () => void;
  isDownloading?: boolean;
  downloadSuccess?: boolean;
}

interface DoctorQuestion {
  id: string;
  category: "finding" | "general";
  testName?: string;
  question: string;
  context: string;
}

export function ClearNextActions({
  report,
  onPrint,
  onDownload,
  isDownloading = false,
  downloadSuccess = false,
}: ClearNextActionsProps) {
  // Dynamically generate questions tailored to the report's observed biomarker shifts
  const generatedQuestions: DoctorQuestion[] = [
    {
      id: "q-glucose",
      category: "finding",
      testName: "Fasting Glucose",
      question:
        "I noticed my Fasting Glucose result has shifted upward from 91 to 109 mg/dL over my last four checkups. What factors could explain this change, and should we consider any dietary or lifestyle adjustments?",
      context: "Observed +18 mg/dL shift over 4 quarterly checkups",
    },
    {
      id: "q-vitamind",
      category: "finding",
      testName: "Vitamin D (25-Hydroxy)",
      question:
        "My Vitamin D level is currently at 22 ng/mL, having decreased from 32 ng/mL earlier this year. Would supplemental Vitamin D, seasonal re-testing, or dietary adjustments be appropriate for me?",
      context: "Observed -10 ng/mL decrease across recent quarters",
    },
    {
      id: "q-longitudinal",
      category: "general",
      question:
        "Should these current results be reviewed in conjunction with my previous multi-quarter reports to evaluate long-term trends?",
      context: "Longitudinal multi-panel correlation",
    },
    {
      id: "q-retest",
      category: "general",
      question:
        "When would it be clinically appropriate to repeat these tests to monitor the stability of these markers?",
      context: "Routine follow-up interval planning",
    },
    {
      id: "q-prep",
      category: "general",
      question:
        "Are there any specific preparatory factors (such as fasting duration, hydration, or sleep) I should keep in mind before my next panel?",
      context: "Pre-test variability & protocol alignment",
    },
  ];

  // Question selection state
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>(
    generatedQuestions.map((q) => q.id)
  );
  const [copied, setCopied] = useState(false);

  // Demo reminder state (strictly frontend simulation)
  const [reminderInterval, setReminderInterval] = useState<"3m" | "6m" | "1y">("3m");
  const [reminderSet, setReminderSet] = useState(false);
  const [reminderDate, setReminderDate] = useState("December 18, 2026");

  const toggleQuestion = (id: string) => {
    setSelectedQuestions((prev) =>
      prev.includes(id) ? prev.filter((qId) => qId !== id) : [...prev, id]
    );
  };

  const selectAll = () => setSelectedQuestions(generatedQuestions.map((q) => q.id));
  const deselectAll = () => setSelectedQuestions([]);

  const copyQuestionsToClipboard = () => {
    const activeQuestions = generatedQuestions.filter((q) =>
      selectedQuestions.includes(q.id)
    );

    const formattedText = [
      `H2 Medical Report Simplifier — Doctor Consultation Questions`,
      `Report: ${report.report_name} (${report.date})`,
      `Provider: ${report.provider_or_lab}`,
      `--------------------------------------------------`,
      `Questions to discuss with my healthcare provider:`,
      ...activeQuestions.map((q, idx) => `${idx + 1}. ${q.question}`),
      `--------------------------------------------------`,
      `Note: For educational appointment preparation only. Not a medical diagnosis or treatment directive.`,
    ].join("\n");

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSetReminder = () => {
    let dateStr = "December 18, 2026";
    if (reminderInterval === "6m") dateStr = "March 18, 2027";
    if (reminderInterval === "1y") dateStr = "September 18, 2027";
    setReminderDate(dateStr);
    setReminderSet(true);
  };

  return (
    <section aria-labelledby="clear-next-actions-title" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800/80 print:border-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 print:text-teal-700">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h2
              id="clear-next-actions-title"
              className="text-base font-bold text-white print:text-black tracking-tight uppercase"
            >
              5. Clear Next Actions & Doctor Discussion Guide
            </h2>
            <p className="text-xs text-slate-400 print:text-slate-600">
              Useful, non-diagnostic next steps to explore based on your report&apos;s observed findings
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto print:hidden">
          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-teal-950/80 text-teal-300 border border-teal-800/80">
            5 Action Paths
          </span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
            Non-Diagnostic
          </span>
        </div>
      </div>

      {/* Action 1: Prepare Questions for Your Doctor (Featured Consultation Guide) */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 print:bg-white border border-teal-500/30 print:border-slate-300 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800 print:border-slate-200">
          <div className="flex items-start sm:items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-teal-400 shrink-0 print:text-teal-800">
              <MessageSquareQuote className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                  1. Prepare Questions for Your Healthcare Provider
                </h3>
                <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800/80 print:hidden">
                  Appointment Guide
                </span>
              </div>
              <p className="text-xs text-slate-300 print:text-slate-700 mt-0.5">
                Questions you may want to discuss with your doctor based on observed biomarker shifts.
              </p>
            </div>
          </div>

          {/* Action Toolbar for Questions */}
          <div className="flex items-center gap-2 print:hidden self-end sm:self-auto">
            <button
              onClick={selectedQuestions.length === generatedQuestions.length ? deselectAll : selectAll}
              className="text-[11px] text-slate-400 hover:text-white transition-colors underline mr-1"
            >
              {selectedQuestions.length === generatedQuestions.length ? "Deselect All" : "Select All"}
            </button>
            <Button
              onClick={copyQuestionsToClipboard}
              variant={copied ? "primary" : "secondary"}
              size="sm"
              className="flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Copied ({selectedQuestions.length})</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Questions ({selectedQuestions.length})</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Questions Checklist */}
        <div className="space-y-2.5 pt-1">
          {generatedQuestions.map((item, index) => {
            const isSelected = selectedQuestions.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleQuestion(item.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer select-none print:border-slate-200 print:bg-slate-50 ${
                  isSelected
                    ? "bg-slate-900/90 border-teal-500/40 text-slate-200 shadow-sm"
                    : "bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="pt-0.5 print:hidden">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleQuestion(item.id)}
                      className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-teal-600 focus:ring-teal-500 focus:ring-offset-0 cursor-pointer"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 print:bg-slate-200 text-slate-300 print:text-slate-800">
                        {item.testName ? item.testName : "Routine Follow-up"}
                      </span>
                      <span className="text-[10px] text-slate-500 print:text-slate-600 italic">
                        {item.context}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 print:text-black font-medium leading-snug">
                      &ldquo;{item.question}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400 print:text-slate-600 border-t border-slate-800/80 print:border-slate-200">
          <Info className="w-3.5 h-3.5 text-teal-400 print:text-teal-700 shrink-0" />
          <span>
            H2 generates discussion starters to assist clinical dialogue. Only licensed physicians interpret findings or make diagnostic determinations.
          </span>
        </div>
      </div>

      {/* Actions 2 & 3: Multi-Panel Compare & Biomarker Trends Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Action 2: Compare With Previous Reports */}
        <div className="p-5 rounded-2xl bg-slate-950/60 print:bg-white border border-slate-800 print:border-slate-200 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 print:text-indigo-700">
                <GitCompare className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/80 print:hidden">
                Differential
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white print:text-black">
                2. Compare With Previous Reports
              </h3>
              <p className="text-xs text-slate-400 print:text-slate-600 mt-1 leading-relaxed">
                Review side-by-side metric deltas and percent changes between this report (Q4 2026) and your prior panel (Q3 2026).
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/80 print:bg-slate-50 border border-slate-800/80 print:border-slate-200 text-xs space-y-1">
              <div className="flex justify-between text-slate-300 print:text-slate-800">
                <span className="text-slate-400 print:text-slate-600">Base Panel:</span>
                <span className="font-medium">Q3 2026 Metabolic Panel</span>
              </div>
              <div className="flex justify-between text-slate-300 print:text-slate-800">
                <span className="text-slate-400 print:text-slate-600">Comparison:</span>
                <span className="font-medium">Q4 2026 (This Report)</span>
              </div>
            </div>
          </div>

          <div className="pt-2 space-y-2 print:hidden">
            <Link href="/compare" className="block">
              <Button variant="secondary" size="sm" className="w-full flex items-center justify-center gap-1.5">
                <GitCompare className="w-3.5 h-3.5 text-indigo-400" />
                <span>Open Side-by-Side Comparison</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Link>
            <Link
              href="/history"
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-300 transition-colors w-full justify-center"
            >
              <span>Or browse chronological archive</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Action 3: Explore Longitudinal Trends */}
        <div className="p-5 rounded-2xl bg-slate-950/60 print:bg-white border border-slate-800 print:border-slate-200 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 print:text-teal-700">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800/80 print:hidden">
                Trajectories
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white print:text-black">
                3. Explore Biomarker Trends
              </h3>
              <p className="text-xs text-slate-400 print:text-slate-600 mt-1 leading-relaxed">
                Inspect 12-month historical graphs with statistical trajectory lines for key biomarkers observed in this panel.
              </p>
            </div>

            {/* Quick Biomarker Links */}
            <div className="space-y-1.5 pt-1">
              <Link
                href="/tests/fasting-glucose"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-teal-500/40 text-xs transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="font-medium text-slate-200 group-hover:text-white">Fasting Glucose</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-amber-400">
                  <span>+18 mg/dL shift</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-60 group-hover:opacity-100" />
                </div>
              </Link>

              <Link
                href="/tests/vitamin-d"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-teal-500/40 text-xs transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="font-medium text-slate-200 group-hover:text-white">Vitamin D</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-amber-400">
                  <span>-10 ng/mL decrease</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-60 group-hover:opacity-100" />
                </div>
              </Link>

              <Link
                href="/tests/total-cholesterol"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-teal-500/40 text-xs transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-medium text-slate-200 group-hover:text-white">Total Cholesterol</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                  <span>Baseline stable</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-60 group-hover:opacity-100" />
                </div>
              </Link>
            </div>
          </div>

          <div className="pt-2 print:hidden">
            <Link href="/dashboard" className="block">
              <Button variant="secondary" size="sm" className="w-full flex items-center justify-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                <span>View Dashboard Metrics Overview</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Actions 4 & 5: Print/Save & Interactive Reminder Demo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Action 4: Print / Save Report */}
        <div className="p-5 rounded-2xl bg-slate-950/60 print:bg-white border border-slate-800 print:border-slate-200 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 print:text-sky-700">
                <Printer className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/80 print:hidden">
                Export / Print
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white print:text-black">
                4. Print or Save Report Summary
              </h3>
              <p className="text-xs text-slate-400 print:text-slate-600 mt-1 leading-relaxed">
                Take a paper printout to your appointment, or save an offline PDF copy of the simplified report and doctor discussion questions.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/80 print:bg-slate-50 border border-slate-800/80 print:border-slate-200 text-xs text-slate-300 print:text-slate-700 space-y-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ink-optimized layout for paper printing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Includes doctor questions &amp; term definitions</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2 print:hidden">
            <Button
              onClick={onPrint}
              variant="outline"
              size="sm"
              className="w-full sm:w-1/2 flex items-center justify-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Summary</span>
            </Button>

            <Button
              onClick={onDownload}
              disabled={isDownloading}
              variant="primary"
              size="sm"
              className="w-full sm:w-1/2 flex items-center justify-center gap-1.5"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Downloaded</span>
                </>
              ) : isDownloading ? (
                <span>Generating...</span>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Action 5: Set a Follow-up Reminder (Interactive Demo) */}
        <div className="p-5 rounded-2xl bg-slate-950/60 print:bg-white border border-slate-800 print:border-slate-200 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 print:text-amber-700">
                <Bell className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/80 print:hidden">
                Demo Preview
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white print:text-black">
                5. Set a Routine Follow-up Reminder
              </h3>
              <p className="text-xs text-slate-400 print:text-slate-600 mt-1 leading-relaxed">
                Simulate scheduling a calendar notification for your next routine lab checkup or appointment.
              </p>
            </div>

            {!reminderSet ? (
              <div className="space-y-2">
                <span className="text-[11px] text-slate-400 block">
                  Select recommended interval for routine checkup:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setReminderInterval("3m")}
                    className={`p-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      reminderInterval === "3m"
                        ? "bg-amber-950/80 border-amber-500/60 text-amber-200"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    3 Months
                    <span className="block text-[9px] opacity-70">Dec 2026</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setReminderInterval("6m")}
                    className={`p-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      reminderInterval === "6m"
                        ? "bg-amber-950/80 border-amber-500/60 text-amber-200"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    6 Months
                    <span className="block text-[9px] opacity-70">Mar 2027</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setReminderInterval("1y")}
                    className={`p-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      reminderInterval === "1y"
                        ? "bg-amber-950/80 border-amber-500/60 text-amber-200"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    1 Year
                    <span className="block text-[9px] opacity-70">Sep 2027</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-xs space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Reminder Simulated: {reminderDate}</span>
                </div>
                <p className="text-[11px] text-emerald-200/80">
                  Notification scheduled for your routine checkup. This is an interactive frontend demo (no backend persistence required).
                </p>
              </div>
            )}
          </div>

          <div className="pt-2 print:hidden">
            {!reminderSet ? (
              <Button
                onClick={handleSetReminder}
                variant="secondary"
                size="sm"
                className="w-full flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Set Follow-up Reminder (Demo)</span>
              </Button>
            ) : (
              <button
                type="button"
                onClick={() => setReminderSet(false)}
                className="text-[11px] text-slate-400 hover:text-white underline w-full text-center py-1.5 transition-colors"
              >
                Reset or choose another interval
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mandatory Non-Diagnostic Safe Care Notice */}
      <div className="p-4 rounded-xl bg-slate-950/40 print:bg-slate-50 border border-slate-800 print:border-slate-200 flex items-start gap-3 text-xs text-slate-400 print:text-slate-600">
        <Info className="w-4 h-4 text-teal-400 print:text-teal-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-slate-300 print:text-black">Non-Diagnostic &amp; Educational Action Guide: </strong>
          The questions and navigation actions above are intended to assist you in preparing for a productive conversation with your licensed physician. H2 does not diagnose medical conditions, provide clinical urgency triage, or recommend pharmaceutical therapies. Always consult a healthcare provider for medical evaluations.
        </p>
      </div>
    </section>
  );
}
