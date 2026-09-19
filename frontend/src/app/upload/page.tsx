"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";
import { UploadDropzone, SelectedMedicalFile } from "@/components/upload/UploadDropzone";
import { ProcessingPipeline } from "@/components/upload/ProcessingPipeline";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Breadcrumb / Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
          <span>Local Simulation • No medical files uploaded to external servers</span>
        </div>
      </div>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
            Document Ingestion & Analysis
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Upload Medical Report
        </h1>
        <p className="text-sm text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
          Upload any blood test, metabolic panel, or clinical lab report in PDF or image format. H2 extracts values, validates reference bounds, and runs ML historical trend detection.
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
          fileName={file ? file.name : "Metabolic_Panel_Sept_2026.pdf"}
        />
      )}

      {/* Feature explanation cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs space-y-1.5">
          <h4 className="font-semibold text-slate-200">1. Instant Parsing</h4>
          <p className="text-slate-400 leading-relaxed">
            Extracts test names, numeric values, units, and clinical reference intervals automatically.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs space-y-1.5">
          <h4 className="font-semibold text-slate-200">2. Trend Detection</h4>
          <p className="text-slate-400 leading-relaxed">
            Correlates newly uploaded values against previously stored patient records to flag trajectory shifts.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs space-y-1.5">
          <h4 className="font-semibold text-slate-200">3. Plain English</h4>
          <p className="text-slate-400 leading-relaxed">
            Translates complex lab parameters into clear, neutral summaries without diagnostic speculation.
          </p>
        </div>
      </div>

      {/* Responsible AI Disclaimer */}
      <DisclaimerNotice />
    </div>
  );
}
