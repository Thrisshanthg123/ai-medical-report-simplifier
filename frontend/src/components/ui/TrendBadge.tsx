import React from "react";
import { ArrowUp, ArrowDown, ArrowRight } from "lucide-react";
import { TrendDirection } from "@/types/medical";
import { cn } from "@/lib/utils";

interface TrendBadgeProps {
  trend: TrendDirection;
  compact?: boolean;
  className?: string;
}

export function TrendBadge({ trend, compact = false, className }: TrendBadgeProps) {
  if (trend === "increasing") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-chip text-xs font-medium border bg-surface-subtle text-ink border-border",
          className
        )}
      >
        <ArrowUp className="w-3.5 h-3.5 text-ink-muted shrink-0" aria-hidden="true" />
        <span>{compact ? "Increasing" : "Increasing trend"}</span>
      </span>
    );
  }

  if (trend === "decreasing") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-chip text-xs font-medium border bg-surface-subtle text-ink border-border",
          className
        )}
      >
        <ArrowDown className="w-3.5 h-3.5 text-ink-muted shrink-0" aria-hidden="true" />
        <span>{compact ? "Decreasing" : "Decreasing trend"}</span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-chip text-xs font-medium border bg-surface-subtle text-ink-muted border-border",
        className
      )}
    >
      <ArrowRight className="w-3.5 h-3.5 text-ink-muted shrink-0" aria-hidden="true" />
      <span>Stable</span>
    </span>
  );
}
