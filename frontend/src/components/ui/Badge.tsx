import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger" | "neutral" | "brand";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-surface-subtle text-ink border-border",
    neutral: "bg-status-neutral-bg text-status-neutral-text border-status-neutral-border",
    success: "bg-status-in-range-bg text-status-in-range-text border-status-in-range-border",
    warning: "bg-status-attention-bg text-status-attention-text border-status-attention-border",
    danger: "bg-status-outside-bg text-status-outside-text border-status-outside-border",
    brand: "bg-brand-tint text-brand border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-chip text-xs font-medium border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
