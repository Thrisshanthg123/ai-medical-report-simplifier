"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Loader2,
  Sparkles,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { uploadMedicalReport } from "@/lib/api";

interface StepItem {
  id: number;
  label: string;
  detail: string;
  badge: string;
}

const STEPS: StepItem[] = [
  {
    id: 1,
    label: "Reading report",
    detail: "Parsing document structure and preparing for AI extraction",
    badge: "Document Ingestion",
  },
  {
    id: 2,
    label: "Extracting information & test results",
    detail: "Gemini AI converting unstructured clinical text into structured lab metrics",
    badge: "AI Extraction",
  },
  {
    id: 3,
    label: "Analyzing historical trends",
    detail: "Cross-matching with prior reports to calculate rate of change and anomaly markers",
    badge: "Historical ML",
  },
  {
    id: 4,
    label: "Saving to database",
    detail: "Storing report, tests, and ML analysis in your secure health record",
    badge: "Database Save",
  },
];

interface ProcessingPipelineProps {
  fileName: string;
  file?: File;
  onComplete?: (reportId: string) => void;
}

export function ProcessingPipeline({
  fileName,
  file,
  onComplete,
}: ProcessingPipelineProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reportId, setReportId] = useState<string | null>(null);
  const uploadStarted = useRef(false);

  useEffect(() => {
    if (uploadStarted.current) return;
    uploadStarted.current = true;

    async function runUpload() {
      try {
        if (!file) {
          // No real file — show demo mode steps with fake timing
          await new Promise((r) => setTimeout(r, 900));
          setCurrentStep(2);
          await new Promise((r) => setTimeout(r, 1200));
          setCurrentStep(3);
          await new Promise((r) => setTimeout(r, 1200));
          setCurrentStep(4);
          await new Promise((r) => setTimeout(r, 900));
          setCurrentStep(5);
          setCompleted(true);
          return;
        }

        // Step 1: Reading report (immediate)
        setCurrentStep(1);

        const formData = new FormData();
        formData.append("file", file);

        // Step 2: AI Extraction starts
        await new Promise((r) => setTimeout(r, 400));
        setCurrentStep(2);

        const data = await uploadMedicalReport(file);

        // Step 3: Historical ML (show while processing response)
        setCurrentStep(3);

        // Step 4: Saving to database
        setCurrentStep(4);
        await new Promise((r) => setTimeout(r, 400));

        const newReportId: string = data.report_id;
        setReportId(newReportId);
        setCurrentStep(5);
        setCompleted(true);

        if (onComplete) {
          onComplete(newReportId);
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Upload failed. Please try again.";
        setError(message);
        console.error("[ProcessingPipeline] Upload error:", err);
      }
    }

    runUpload();
  }, [file, onComplete]);

  const handleNavigate = () => {
    if (reportId) {
      router.push(`/reports/${reportId}`);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            {!error && (
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
            )}
            {error && <AlertCircle className="w-4 h-4 text-red-400" />}
            <h3 className="text-base font-bold text-white">
              {error ? "Processing Failed" : `Processing: ${fileName}`}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {error
              ? "An error occurred during report processing."
              : "AI document extraction + ML historical trend analysis"}
          </p>
        </div>

        {completed ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Analysis Ready
          </span>
        ) : error ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-red-300 bg-red-950/80 border border-red-800/80 px-2.5 py-1 rounded-full">
            Failed
          </span>
        ) : (
          <span className="text-xs font-mono text-teal-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1.5">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Step {Math.min(currentStep, 4)} of 4
          </span>
        )}
      </div>

      {/* Error display */}
      {error && (
        <div className="mt-6 p-4 rounded-xl bg-red-950/30 border border-red-800/60 text-xs text-red-300 space-y-2">
          <p className="font-semibold">Error Details:</p>
          <p className="leading-relaxed">{error}</p>
          <p className="text-slate-400 text-[11px]">
            Please check that your file is a valid medical report (PDF, JPG, or PNG) and try again.
          </p>
        </div>
      )}

      {/* Steps list */}
      {!error && (
        <div className="py-6 space-y-4">
          {STEPS.map((step) => {
            const isDone = currentStep > step.id;
            const isCurrent = currentStep === step.id;

            return (
              <div
                key={step.id}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isDone
                    ? "bg-slate-800/30 border-slate-800 text-slate-300"
                    : isCurrent
                    ? "bg-teal-950/20 border-teal-800/80 text-white shadow-sm"
                    : "bg-slate-900/30 border-slate-800/40 text-slate-500 opacity-60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    {isDone ? (
                      <div className="w-6 h-6 rounded-full bg-emerald-950/80 border border-emerald-700/80 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    ) : isCurrent ? (
                      <div className="w-6 h-6 rounded-full bg-teal-950/80 border border-teal-600 flex items-center justify-center text-teal-300 animate-pulse">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 text-xs font-mono">
                        {step.id}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`text-sm font-semibold ${
                          isCurrent
                            ? "text-teal-200"
                            : isDone
                            ? "text-slate-200"
                            : "text-slate-400"
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/70 text-slate-400">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Completion / Error CTA */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400">
          {error
            ? "Please try uploading again or contact support."
            : completed
            ? "Report analyzed successfully. Your results are ready to review."
            : "Processing your medical report — this usually takes 10–30 seconds..."}
        </div>

        {error ? (
          <Button
            onClick={() => router.push("/upload")}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <span>Try Again</span>
          </Button>
        ) : (
          <Button
            onClick={handleNavigate}
            disabled={!completed}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>View Report</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}