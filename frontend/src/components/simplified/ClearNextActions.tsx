"use client";

import React, { useState } from "react";
import { Copy, Check, MessageSquare } from "lucide-react";
import { MedicalReport } from "@/types/medical";
import { Button } from "@/components/ui/Button";

interface ClearNextActionsProps {
  report: MedicalReport;
}

interface QuestionItem {
  id: string;
  category: "finding" | "general";
  testName?: string;
  question: string;
  context?: string;
}

export function ClearNextActions({ report }: ClearNextActionsProps) {
  const [copied, setCopied] = useState(false);

  // Generate test-specific questions strictly from API values
  const attentionTests = report.tests.filter(
    (t) => t.status !== "within_range" || t.anomaly === true
  );

  const testSpecificQuestions: QuestionItem[] = attentionTests.map((test) => {
    let questionText = "";
    if (test.status === "above_range") {
      questionText = `My ${test.test_name} result is ${test.value} ${test.unit}, which is above the laboratory reference range of ${test.reference_range}. What factors might explain this elevation, and do we need to investigate or retest?`;
    } else if (test.status === "below_range") {
      questionText = `My ${test.test_name} result is ${test.value} ${test.unit}, which is below the laboratory reference range of ${test.reference_range}. What factors could contribute to this lower level, and what follow-up is recommended?`;
    } else {
      questionText = `My ${test.test_name} is ${test.value} ${test.unit}, which shows a notable shift from prior readings. Is this change clinically significant?`;
    }

    const contextParts = [`Reported: ${test.value} ${test.unit}`];
    if (test.previous_value !== undefined) {
      contextParts.push(`Previous: ${test.previous_value} ${test.unit}`);
    }
    contextParts.push(`Range: ${test.reference_range}`);

    return {
      id: `q-${test.slug || test.id}`,
      category: "finding",
      testName: test.test_name,
      question: questionText,
      context: contextParts.join(" • "),
    };
  });

  // General questions with NO hardcoded lab numbers or values
  const generalQuestions: QuestionItem[] = [
    {
      id: "gen-history",
      category: "general",
      question:
        "How do these results compare with my previous health records and overall medical history?",
    },
    {
      id: "gen-factors",
      category: "general",
      question:
        "Are there any medications, supplements, diet, or lifestyle factors that might have influenced these findings?",
    },
    {
      id: "gen-retest",
      category: "general",
      question:
        "When would you recommend scheduling my next routine blood panel to monitor these markers?",
    },
    {
      id: "gen-prep",
      category: "general",
      question:
        "Are there specific preparation guidelines (such as fasting duration or hydration) I should follow before my next test?",
    },
  ];

  const allQuestions = [...testSpecificQuestions, ...generalQuestions];

  const handleCopy = () => {
    const formattedText = [
      `Questions for My Doctor — ${report.report_name}`,
      `Date: ${report.date} | Laboratory: ${report.provider_or_lab}`,
      `--------------------------------------------------`,
      ...(testSpecificQuestions.length > 0
        ? [
            `Specific findings to discuss:`,
            ...testSpecificQuestions.map(
              (q, i) => `${i + 1}. [${q.testName}] ${q.question}`
            ),
            ``,
          ]
        : []),
      `General questions:`,
      ...generalQuestions.map((q, i) => `${i + 1}. ${q.question}`),
      `--------------------------------------------------`,
      `Note: Generated for appointment preparation. Not medical advice.`,
    ].join("\n");

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section aria-labelledby="doctor-questions-heading" className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border">
        <div>
          <h2
            id="doctor-questions-heading"
            className="text-lg font-serif font-semibold text-ink"
          >
            Questions to ask your doctor
          </h2>
          <p className="text-xs text-ink-muted mt-0.5">
            Use these suggested questions as discussion starters during your
            next medical consultation.
          </p>
        </div>

        <div className="print:hidden">
          <Button
            onClick={handleCopy}
            variant="secondary"
            size="sm"
            className="flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Copied to clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Copy questions</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Questions Content */}
      <div className="space-y-4">
        {/* 1. Report-Specific Questions */}
        {testSpecificQuestions.length > 0 ? (
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-medium tracking-wider text-ink-muted">
              Questions regarding specific test results
            </h3>
            <div className="space-y-2.5">
              {testSpecificQuestions.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-panel border border-border bg-surface text-ink text-sm leading-relaxed space-y-1.5 print-avoid-break"
                >
                  <div className="flex flex-wrap items-baseline gap-2 text-xs text-ink-muted">
                    <span className="font-semibold text-ink">{item.testName}</span>
                    {item.context && <span>• {item.context}</span>}
                  </div>
                  <p className="text-ink">&ldquo;{item.question}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-ink-muted p-3.5 rounded-panel border border-border bg-surface">
            All reported tests fall within reference ranges. You can focus on
            routine preventive care with your doctor.
          </p>
        )}

        {/* 2. General Questions */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs uppercase font-medium tracking-wider text-ink-muted">
            General health and follow-up questions
          </h3>
          <div className="space-y-2.5">
            {generalQuestions.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-panel border border-border bg-surface text-ink text-sm leading-relaxed print-avoid-break"
              >
                <p className="text-ink">&ldquo;{item.question}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
