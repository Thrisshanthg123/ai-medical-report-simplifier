"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Loader2,
  FileSearch,
  Cpu,
  LineChart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

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
    detail: "Parsing document structure, normalizing OCR coordinates, and validating format integrity",
    badge: "Document Ingestion",
  },
  {
    id: 2,
    label: "Extracting information & test results",
    detail: "Converting unstructured clinical text into structured lab metrics (Fasting Glucose, Hemoglobin, Vitamin D, etc.)",
    badge: "AI Extraction",
  },
  {
    id: 3,
    label: "Analyzing historical trends",
    detail: "Cross-matching with prior quarterly panels to calculate multi-period rate of change and anomaly markers",
    badge: "Historical ML",
  },
  {
    id: 4,
    label: "Preparing your simplified report",
    detail: "Formulating plain-language explanations, key findings, and longitudinal trend summaries",
    badge: "Simplified Report",
  },
];

interface ProcessingPipelineProps {
  fileName: string;
  onComplete?: (reportId: string) => void;
}

export function ProcessingPipeline({
  fileName,
  onComplete,
}: ProcessingPipelineProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Progress through steps cleanly with realistic evaluation timing
    const timers: NodeJS.Timeout[] = [];

    timers.push(
      setTimeout(() => {
        setCurrentStep(2);
      }, 1000)
    );

    timers.push(
      setTimeout(() => {
        setCurrentStep(3);
      }, 2100)
    );

    timers.push(
      setTimeout(() => {
        setCurrentStep(4);
      }, 3300)
    );

    timers.push(
      setTimeout(() => {
        setCurrentStep(5);
        setCompleted(true);
        if (onComplete) {
          onComplete("rep-001");
        }
      }, 4400)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [onComplete]);

  const handleNavigate = () => {
    router.push("/simplified/rep-001");
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
            <h3 className="text-base font-bold text-white">
              Processing: {fileName}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulated asynchronous analysis pipeline • AI Document Understanding + Historical ML
          </p>
        </div>

        {completed ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Analysis Ready
          </span>
        ) : (
          <span className="text-xs font-mono text-teal-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1.5">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Step {Math.min(currentStep, 4)} of 4
          </span>
        )}
      </div>

      {/* Steps List */}
      <div className="py-6 space-y-4">
        {STEPS.map((step) => {
          const isDone = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const isPending = currentStep < step.id;

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

      {/* Completion CTA */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400">
          {completed
            ? "Report analyzed successfully. Your simplified report is ready to review."
            : "Simulating document understanding and longitudinal trend analysis..."}
        </div>

        <Button
          onClick={handleNavigate}
          disabled={!completed}
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
        >
          <Sparkles className="w-4 h-4" />
          <span>View Simplified Report</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
