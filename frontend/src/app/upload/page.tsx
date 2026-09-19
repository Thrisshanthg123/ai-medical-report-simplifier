"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  UploadDropzone,
  SelectedMedicalFile,
} from "@/components/upload/UploadDropzone";
import { ProcessingPipeline } from "@/components/upload/ProcessingPipeline";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export default function UploadPage() {
  const [file, setFile] = useState<SelectedMedicalFile | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = (selected: SelectedMedicalFile) => {
    setFile(selected);
  };

  const handleFileRemove = () => {
    if (file?.previewUrl) {
      URL.revokeObjectURL(file.previewUrl);
    }
    setFile(null);
    setIsProcessing(false);
  };

  const handleStartAnalysis = () => {
    if (!file) return;
    setIsProcessing(true);
  };

  return (
    <ProtectedRoute>
      <div className="bg-canvas text-ink py-8 sm:py-10">
        <div className="max-w-container mx-auto px-4 sm:px-6 space-y-8">
          {/* Top Navigation Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-ink-muted">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 text-ink-muted hover:text-ink transition-colors min-h-target sm:min-h-0 items-center"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Dashboard</span>
            </Link>

            <p className="text-xs text-ink-muted">
              [TEAM: confirm privacy statement]
            </p>
          </div>

          {/* Page Header */}
          <div className="space-y-2">
            <h1 className="font-serif font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
              Upload your medical report
            </h1>
            <p className="text-sm text-ink-muted max-w-2xl leading-relaxed">
              Upload a lab or medical report. H2 simplifies the results, shows
              reference ranges, and identifies trends over time.
            </p>
          </div>

          {/* Upload Zone or Processing Pipeline */}
          {!isProcessing ? (
            <UploadDropzone
              selectedFile={file}
              onFileSelect={handleFileSelect}
              onFileRemove={handleFileRemove}
              onStartAnalysis={handleStartAnalysis}
              isProcessing={isProcessing}
            />
          ) : (
            <ProcessingPipeline
              fileName={file ? file.name : "report.pdf"}
              file={file?.rawFile}
            />
          )}

          {/* Process Explanation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-panel border border-border bg-surface space-y-1.5">
              <span className="text-xs font-semibold text-brand">01</span>
              <h2 className="font-semibold text-sm text-ink">Reads your report</h2>
              <p className="text-xs text-ink-muted leading-relaxed">
                Reads test names, measured values, units, and reference ranges
                directly from your document.
              </p>
            </div>

            <div className="p-5 rounded-panel border border-border bg-surface space-y-1.5">
              <span className="text-xs font-semibold text-brand">02</span>
              <h2 className="font-semibold text-sm text-ink">Compares over time</h2>
              <p className="text-xs text-ink-muted leading-relaxed">
                Compares new values against your past records when previous
                reports are available.
              </p>
            </div>

            <div className="p-5 rounded-panel border border-border bg-surface space-y-1.5">
              <span className="text-xs font-semibold text-brand">03</span>
              <h2 className="font-semibold text-sm text-ink">Explains in plain language</h2>
              <p className="text-xs text-ink-muted leading-relaxed">
                Explains results simply so you know what questions to consider
                asking your doctor.
              </p>
            </div>
          </div>

          {/* Short Clinical Disclaimer */}
          <aside
            aria-label="Clinical Disclaimer"
            className="p-4 rounded-panel bg-surface-subtle border border-border text-xs text-ink-muted leading-relaxed"
          >
            <strong className="text-ink font-semibold">Important notice:</strong>{" "}
            H2 is an informational tool for understanding medical reports and is
            not a substitute for professional medical advice, diagnosis, or
            treatment. Always consult a qualified healthcare provider.
          </aside>
        </div>
      </div>
    </ProtectedRoute>
  );
}