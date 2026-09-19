import React from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisclaimerNoticeProps {
  className?: string;
  variant?: "inline" | "footer" | "banner";
}

export function DisclaimerNotice({
  className,
  variant = "inline",
}: DisclaimerNoticeProps) {
  if (variant === "footer") {
    return (
      <div
        className={cn(
          "text-xs text-slate-500 flex items-center justify-center gap-2 py-4 border-t border-slate-800/80 px-4 text-center",
          className
        )}
      >
        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>
          H2 is designed to help users understand and track reported medical information.
          It does not provide medical diagnoses or replace professional medical advice.
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-xs text-slate-400",
        className
      )}
    >
      <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
      <p className="leading-relaxed">
        <strong className="text-slate-300 font-medium">Important note:</strong> H2 is
        designed to help users understand and track reported medical information. It does
        not provide medical diagnoses or replace professional medical advice. Always consult
        a qualified physician with any questions.
      </p>
    </div>
  );
}
