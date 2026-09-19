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
          "text-xs text-ink-muted flex items-center justify-center gap-2 py-4 border-t border-border px-4 text-center",
          className
        )}
      >
        <Info className="w-4 h-4 text-ink-muted shrink-0" aria-hidden="true" />
        <span>
          H2 is an informational tool for reading medical reports. It does not provide medical diagnoses or replace clinical care.
        </span>
      </div>
    );
  }

  return (
    <aside
      aria-label="Medical disclaimer"
      className={cn(
        "flex items-start gap-3 p-4 rounded-panel bg-surface-subtle border border-border text-xs text-ink-muted leading-relaxed",
        className
      )}
    >
      <Info className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
      <p>
        <strong className="text-ink font-semibold">Important notice:</strong>{" "}
        This summary is generated to help you understand terminology and trends present in your laboratory report. It does not provide a diagnosis, prognosis, or medical recommendation. Always consult a qualified physician or healthcare provider regarding any health condition or lab result.
      </p>
    </aside>
  );
}
