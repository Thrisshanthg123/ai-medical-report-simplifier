import React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnomalyBadgeProps {
  label?: string;
  className?: string;
}

export function AnomalyBadge({
  label = "Worth attention",
  className,
}: AnomalyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-chip text-xs font-medium border bg-status-attention-bg text-status-attention-text border-status-attention-border",
        className
      )}
    >
      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
