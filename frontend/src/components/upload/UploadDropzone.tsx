"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  UploadCloud,
  FileText,
  X,
  AlertCircle,
  ImageIcon,
  RefreshCw,
  FileCheck,
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
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        id="medical-report-file-input"
        accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
        onChange={handleFileInputChange}
        className="sr-only"
        aria-label="Select medical report file (PDF, JPG, JPEG, or PNG up to 25 MB)"
      />

      {/* State 1: Idle & Drag-over Area */}
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
          className={`border-2 border-dashed rounded-panel p-8 sm:p-12 text-center cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
            isDragOver
              ? "border-brand bg-brand-tint"
              : "border-border hover:border-brand bg-surface"
          }`}
        >
          <div className="w-12 h-12 rounded-control bg-surface-subtle border border-border flex items-center justify-center mx-auto mb-4 text-brand">
            <UploadCloud className="w-6 h-6" aria-hidden="true" />
          </div>

          <h2 className="font-serif font-semibold text-lg sm:text-xl text-ink">
            Select or drop your report
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto mt-1.5 leading-relaxed">
            Drag and drop your file here, or{" "}
            <span className="text-brand font-semibold underline underline-offset-2">
              Choose a file
            </span>
          </p>

          {/* Supported Format Text */}
          <div className="mt-4 text-xs text-ink-muted">
            <span>
              PDF, JPG or PNG, up to {Math.round(MAX_FILE_SIZE_BYTES / (1024 * 1024))} MB
            </span>
          </div>

          {/* Evaluator Sample Button */}
          <div className="mt-6 pt-5 border-t border-border">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                loadSampleReport();
              }}
              className="inline-flex items-center gap-1.5 min-h-target px-4 py-2 rounded-control bg-surface-subtle hover:bg-surface border border-border text-xs text-ink-muted hover:text-ink font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <span>Demo shortcut for evaluators: loads a sample file, not your data</span>
            </button>
          </div>
        </div>
      ) : (
        /* State 2: Valid File Selected & Preview */
        <div className="rounded-panel border border-border bg-surface p-5 sm:p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-border">
            <div className="flex items-start gap-3.5 min-w-0">
              {/* Category Icon */}
              {selectedFile.category === "pdf" ? (
                <div className="w-11 h-11 rounded-control bg-surface-subtle border border-border flex items-center justify-center text-ink shrink-0">
                  <FileText className="w-5 h-5" aria-hidden="true" />
                </div>
              ) : (
                <div className="w-11 h-11 rounded-control bg-surface-subtle border border-border flex items-center justify-center text-ink shrink-0">
                  <ImageIcon className="w-5 h-5" aria-hidden="true" />
                </div>
              )}

              <div className="min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm sm:text-base font-semibold text-ink truncate max-w-xs sm:max-w-md">
                    {selectedFile.name}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-chip bg-surface-subtle text-ink-muted border border-border font-medium">
                    {selectedFile.category === "pdf" ? "PDF Document" : "Image"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-ink-muted">
                  <span className="font-mono tabular-nums">
                    {formatFileSize(selectedFile.size)}
                  </span>
                  <span>•</span>
                  <span className="text-status-in-range-text font-medium">
                    Ready to analyze
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions: Replace / Remove */}
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
                <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Replace</span>
              </Button>

              <button
                type="button"
                onClick={handleRemove}
                disabled={isProcessing}
                className="min-h-target min-w-target inline-flex items-center justify-center p-2 rounded-control text-ink-muted hover:text-status-outside-text hover:bg-surface-subtle transition-colors disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label="Remove selected report file"
                title="Remove file"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Visual Preview */}
          {selectedFile.category === "image" && selectedFile.previewUrl ? (
            <div className="space-y-2">
              <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider block">
                Image Preview
              </span>
              <div className="relative rounded-control border border-border bg-surface-subtle p-2 flex items-center justify-center max-h-72 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedFile.previewUrl}
                  alt={`Preview of uploaded medical report: ${selectedFile.name}`}
                  className="max-h-64 w-auto max-w-full rounded-control object-contain"
                />
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-control border border-border bg-surface-subtle flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-ink font-semibold block">
                    PDF Document Verified
                  </span>
                  <span className="text-ink-muted">
                    Report structure, test tables, and biomarkers will be read and simplified.
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-chip bg-surface text-ink-muted border border-border">
                PDF
              </span>
            </div>
          )}

          {/* Bottom Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-border">
            <p className="text-xs text-ink-muted">
              Results will include plain-language explanations and reference ranges.
            </p>

            <Button
              type="button"
              onClick={onStartAnalysis}
              disabled={isProcessing}
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
            >
              <span>{isProcessing ? "Processing report..." : "Analyze report"}</span>
            </Button>
          </div>
        </div>
      )}

      {/* Validation Error Alert */}
      {validationError && (
        <div
          role="alert"
          aria-live="polite"
          className="p-4 rounded-control bg-status-outside-bg border border-status-outside-border text-status-outside-text text-xs sm:text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-status-outside-text shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1 flex-1">
            <h3 className="font-semibold text-status-outside-text">File validation notice</h3>
            <p className="leading-relaxed">{validationError}</p>
          </div>
          <button
            type="button"
            onClick={() => setValidationError(null)}
            className="min-h-target min-w-target inline-flex items-center justify-center p-1 text-status-outside-text hover:opacity-80 transition-opacity"
            aria-label="Dismiss validation error notice"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
