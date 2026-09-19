import React from "react";
import { CheckCircle2, ArrowUpRight, ArrowDownRight, HelpCircle } from "lucide-react";
import { TestStatus } from "@/types/medical";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: TestStatus;
  showIcon?: boolean;
  className?: string;
}

export function StatusBadge({ status, showIcon = true, className }: StatusBadgeProps) {
  if (status === "within_range") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-chip text-xs font-medium border bg-status-in-range-bg text-status-in-range-text border-status-in-range-border",
          className
        )}
      >
        {showIcon && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
        <span>In range</span>
      </span>
    );
  }

  if (status === "above_range") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-chip text-xs font-medium border bg-status-outside-bg text-status-outside-text border-status-outside-border",
          className
        )}
      >
        {showIcon && <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
        <span>Above range</span>
      </span>
    );
  }

  if (status === "below_range") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-chip text-xs font-medium border bg-status-outside-bg text-status-outside-text border-status-outside-border",
          className
        )}
      >
        {showIcon && <ArrowDownRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
        <span>Below range</span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-chip text-xs font-medium border bg-status-neutral-bg text-status-neutral-text border-status-neutral-border",
        className
      )}
    >
      {showIcon && <HelpCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      <span>Not evaluated</span>
    </span>
  );
}
