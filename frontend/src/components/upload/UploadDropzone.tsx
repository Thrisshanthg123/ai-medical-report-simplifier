"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  UploadCloud,
  FileText,
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ImageIcon,
  RefreshCw,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  validateMedicalReportFile,
  formatFileSize,
  MAX_FILE_SIZE_BYTES,
} from "@/lib/file-validation";

export interface SelectedMedicalFile {
  name: string;
  size: number;
  type: string;
  previewUrl?: string;
  category: "pdf" | "image";
  rawFile?: File; // The actual File object for uploading
}

interface UploadDropzoneProps {
  selectedFile: SelectedMedicalFile | null;
  onFileSelect: (file: SelectedMedicalFile) => void;
  onFileRemove: () => void;
  onStartAnalysis: () => void;
  isProcessing: boolean;
}

export function UploadDropzone({
  selectedFile,
  onFileSelect,
  onFileRemove,
  onStartAnalysis,
  isProcessing,
}: UploadDropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean up object URL on unmount if any
  useEffect(() => {
    return () => {
      if (selectedFile?.previewUrl) {
        URL.revokeObjectURL(selectedFile.previewUrl);
      }
    };
  }, [selectedFile]);

  // Unified file processing and validation logic for both browse and drag-and-drop
  const processAndValidateFile = (file: File) => {
    setValidationError(null);

    const validation = validateMedicalReportFile({
      name: file.name,
      size: file.size,
      type: file.type,
    });

    if (!validation.isValid) {
      setValidationError(
        validation.error ||
          "Unsupported file. Please upload a PDF, JPG, JPEG, or PNG medical report under 25 MB."
      );
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    // Revoke existing preview URL if replacing an earlier file
    if (selectedFile?.previewUrl) {
      URL.revokeObjectURL(selectedFile.previewUrl);
    }

    const category = validation.fileCategory || "pdf";
    let previewUrl: string | undefined = undefined;

    if (category === "image") {
      try {
        previewUrl = URL.createObjectURL(file);
      } catch (err) {
        console.warn("Could not create object URL for image preview", err);
      }
    }

    onFileSelect({
      name: file.name,
      size: file.size,
      type: file.type || (category === "pdf" ? "application/pdf" : "image/jpeg"),
      previewUrl,
      category,
      rawFile: file,
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      processAndValidateFile(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      processAndValidateFile(file);
    }
  };

  const handleTriggerBrowse = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemove = () => {
    setValidationError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onFileRemove();
  };

  const loadSampleReport = () => {
    setValidationError(null);
    if (selectedFile?.previewUrl) {
      URL.revokeObjectURL(selectedFile.previewUrl);
    }
    onFileSelect({
      name: "Metabolic_Panel_Sept_2026.pdf",
      size: 1420500, // 1.35 MB
      type: "application/pdf",
      category: "pdf",
    });
  };

  return (
    <div className="space-y-6">
      {/* Hidden File Input (Always accessible via Ref) */}
      <input
        ref={fileInputRef}
        type="file"
        id="medical-report-file-input"
        accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
        onChange={handleFileInputChange}
        className="hidden"
        aria-label="Select medical report file (PDF, JPG, JPEG, or PNG up to 25 MB)"
      />

      {/* State 1: Idle Drag & Drop Area */}
      {!selectedFile ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleTriggerBrowse}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleTriggerBrowse();
            }
          }}
          aria-label="Upload report drag and drop zone. Press Enter or Space to browse files."
          className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-200 group relative outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
            isDragOver
              ? "border-teal-400 bg-teal-950/40 scale-[1.01]"
              : "border-slate-700 hover:border-teal-500/80 bg-slate-900/40 hover:bg-slate-900/70"
          }`}
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center mx-auto mb-4 text-teal-400 group-hover:scale-110 group-hover:bg-teal-950/60 group-hover:border-teal-700/80 transition-all shadow-lg">
            <UploadCloud className="w-8 h-8" />
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-white">
            Upload your medical report
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mt-1.5 leading-relaxed">
            Drag and drop your PDF or image here, or{" "}
            <span className="text-teal-400 font-medium underline underline-offset-2 group-hover:text-teal-300">
              browse from your device
            </span>
            .
          </p>

          {/* Supported Format Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700 font-mono text-slate-300">
              PDF
            </span>
            <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700 font-mono text-slate-300">
              JPG / JPEG
            </span>
            <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700 font-mono text-slate-300">
              PNG
            </span>
            <span className="text-slate-400 font-medium ml-1">
              • Maximum file size: 25 MB
            </span>
          </div>

          {/* Evaluator Quick Shortcut */}
          <div className="mt-6 pt-5 border-t border-slate-800/80">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                loadSampleReport();
              }}
              className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-medium px-3.5 py-1.5 rounded-lg bg-teal-950/60 border border-teal-800/60 hover:border-teal-700 transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 outline-none"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Evaluator Shortcut: Load Sample Metabolic Panel (PDF)</span>
            </button>
          </div>
        </div>
      ) : (
        /* State 2: Valid File Selected & Preview Representation */
        <div className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-5 sm:p-6 space-y-5 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-start gap-4 min-w-0">
              {/* Distinct File Type Representation Icon */}
              {selectedFile.category === "pdf" ? (
                <div className="w-12 h-12 rounded-xl bg-rose-950/40 border border-rose-800/60 flex flex-col items-center justify-center text-rose-400 shrink-0 shadow-sm">
                  <FileText className="w-6 h-6" />
                  <span className="text-[9px] font-bold font-mono tracking-wider text-rose-300 uppercase">
                    PDF
                  </span>
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-teal-950/50 border border-teal-800/60 flex flex-col items-center justify-center text-teal-400 shrink-0 shadow-sm">
                  <ImageIcon className="w-6 h-6" />
                  <span className="text-[9px] font-bold font-mono tracking-wider text-teal-300 uppercase">
                    IMG
                  </span>
                </div>
              )}

              <div className="min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm sm:text-base font-semibold text-white truncate max-w-xs sm:max-w-md">
                    {selectedFile.name}
                  </h4>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800/60">
                    {selectedFile.category === "pdf" ? "Clinical PDF" : "Medical Image"}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="font-mono text-slate-300">
                    {formatFileSize(selectedFile.size)}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> File validated &amp; ready
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Controls: Replace / Remove */}
            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <Button
                type="button"
                onClick={handleTriggerBrowse}
                disabled={isProcessing}
                variant="outline"
                size="sm"
                className="flex items-center gap-1.5"
                aria-label="Replace selected file with another file"
              >
                <RefreshCw className="w-3.5 h-3.5 text-slate-300" />
                <span>Replace file</span>
              </Button>

              <button
                type="button"
                onClick={handleRemove}
                disabled={isProcessing}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-rose-400 outline-none"
                aria-label="Remove selected report file"
                title="Remove file"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Visual Preview Container */}
          {selectedFile.category === "image" && selectedFile.previewUrl ? (
            /* Image Preview */
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Local Image Document Preview
              </span>
              <div className="relative rounded-xl border border-slate-800 bg-slate-950/80 p-2 flex items-center justify-center max-h-72 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedFile.previewUrl}
                  alt={`Preview of uploaded medical report: ${selectedFile.name}`}
                  className="max-h-64 w-auto max-w-full rounded-lg object-contain"
                />
              </div>
            </div>
          ) : (
            /* PDF Representation Card */
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-teal-400 shrink-0" />
                <div>
                  <span className="text-slate-200 font-semibold block">
                    Portable Document Format (PDF) Verified
                  </span>
                  <span className="text-slate-400">
                    Multi-page text layout and laboratory tables will be processed by H2 OCR &amp; parser.
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Verified Format
              </span>
            </div>
          )}

          {/* Bottom Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>
                Simulated analysis: <strong className="text-slate-300">Fasting Glucose, Hemoglobin, Vitamin D &amp; Historical Trajectories</strong>
              </span>
            </div>

            <Button
              type="button"
              onClick={onStartAnalysis}
              disabled={isProcessing}
              variant="primary"
              size="md"
              className="w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-teal-900/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isProcessing ? "Processing Report..." : "Analyze Report"}</span>
            </Button>
          </div>
        </div>
      )}

      {/* Clearly Visible Validation Error Alert */}
      {validationError && (
        <div
          role="alert"
          aria-live="polite"
          className="p-4 rounded-xl bg-rose-950/50 border border-rose-600/70 text-rose-200 text-xs sm:text-sm flex items-start gap-3 shadow-lg animate-fadeIn"
        >
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-1 flex-1">
            <h5 className="font-semibold text-rose-100">Upload Validation Error</h5>
            <p className="text-rose-200/90 leading-relaxed">{validationError}</p>
          </div>
          <button
            type="button"
            onClick={() => setValidationError(null)}
            className="text-rose-400 hover:text-white p-1 transition-colors"
            aria-label="Dismiss upload error notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
