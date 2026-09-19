import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-control transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-brand hover:bg-brand-hover text-surface border border-transparent",
      secondary:
        "bg-surface hover:bg-surface-subtle text-ink border border-border-strong",
      outline:
        "bg-transparent hover:bg-surface-subtle text-ink border border-border-strong",
      ghost:
        "bg-transparent hover:bg-surface-subtle text-ink border-transparent",
      danger:
        "bg-status-outside-text hover:opacity-90 text-surface border-transparent",
    };

    const sizes = {
      sm: "text-xs px-3 min-h-9 gap-1.5",
      md: "text-sm px-4 min-h-target gap-2",
      lg: "text-base px-6 min-h-target-lg gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
