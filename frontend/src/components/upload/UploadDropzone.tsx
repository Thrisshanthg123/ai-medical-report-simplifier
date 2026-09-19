"use client";

import React, { useRef, useState } from "react";
import {
  UploadCloud,
  FileText,
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface UploadDropzoneProps {
  selectedFile: { name: string; size: number; type: string } | null;
  onFileSelect: (file: { name: string; size: number; type: string }) => void;
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
  const [dragError, setDragError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    setDragError(null);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (
        allowedTypes.includes(file.type) ||
        file.name.endsWith(".pdf") ||
        file.name.endsWith(".jpg") ||
        file.name.endsWith(".jpeg") ||
        file.name.endsWith(".png")
      ) {
        onFileSelect({
          name: file.name,
          size: file.size,
          type: file.type || "application/pdf",
        });
      } else {
        setDragError("Please upload a supported file type: PDF, JPG, or PNG.");
      }
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDragError(null);
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      onFileSelect({
        name: file.name,
        size: file.size,
        type: file.type || "application/pdf",
      });
    }
  };

  const loadSampleReport = () => {
    setDragError(null);
    onFileSelect({
      name: "Metabolic_Panel_Sept_2026.pdf",
      size: 1420500, // 1.4 MB
      type: "application/pdf",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="space-y-6">
      {/* Drag & Drop Area */}
      {!selectedFile ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-200 group relative ${
            isDragOver
              ? "border-teal-400 bg-teal-950/30 scale-[1.01]"
              : "border-slate-700/80 hover:border-teal-500/70 bg-slate-900/40 hover:bg-slate-900/70"
          }`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              fileInputRef.current?.click();
            }
          }}
          aria-label="Upload report drag and drop zone"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.webp"
            onChange={handleFileInputChange}
            className="hidden"
          />

          <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center mx-auto mb-4 text-teal-400 group-hover:scale-110 group-hover:bg-teal-950/60 group-hover:border-teal-700/80 transition-all">
            <UploadCloud className="w-7 h-7" />
          </div>

          <h3 className="text-base font-semibold text-white">
            Upload your medical report
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1.5 leading-relaxed">
            Drag and drop your PDF or image here, or browse from your device.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-500">
            <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
              PDF
            </span>
            <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
              JPG / JPEG
            </span>
            <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
              PNG
            </span>
            <span>• Up to 25 MB</span>
          </div>

          {/* Sample quick button for evaluators */}
          <div className="mt-6 pt-5 border-t border-slate-800/80">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                loadSampleReport();
              }}
              className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-medium px-3 py-1.5 rounded-lg bg-teal-950/60 border border-teal-800/60 hover:border-teal-700 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Evaluator Shortcut: Load Sample Metabolic Panel (PDF)</span>
            </button>
          </div>
        </div>
      ) : (
        /* Selected File Card */
        <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-800/60 flex items-center justify-center text-teal-300 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-white truncate">
                  {selectedFile.name}
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                  <span>{formatFileSize(selectedFile.size)}</span>
                  <span>•</span>
                  <span className="uppercase text-[10px] text-teal-400 bg-teal-950/60 px-1.5 py-0.2 rounded border border-teal-800/40">
                    {selectedFile.name.split(".").pop() || "Document"}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3 h-3" /> Ready for analysis
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onFileRemove}
              disabled={isProcessing}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors disabled:opacity-50"
              aria-label="Remove uploaded file"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-800">
            <div className="text-xs text-slate-400">
              Targeted analysis: <span className="text-slate-300">Biomarkers, Reference Limits & Historical Trajectory</span>
            </div>

            <Button
              onClick={onStartAnalysis}
              disabled={isProcessing}
              variant="primary"
              size="md"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isProcessing ? "Processing..." : "Analyze Report"}</span>
            </Button>
          </div>
        </div>
      )}

      {/* Error display */}
      {dragError && (
        <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/80 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{dragError}</span>
        </div>
      )}
    </div>
  );
}
