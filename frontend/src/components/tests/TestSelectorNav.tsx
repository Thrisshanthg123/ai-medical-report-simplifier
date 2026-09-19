import React from "react";
import Link from "next/link";
import { MedicalTest } from "@/types/medical";
import { cn } from "@/lib/utils";

interface TestSelectorNavProps {
  currentSlug: string;
  allTests: MedicalTest[];
}

export function TestSelectorNav({
  currentSlug,
  allTests,
}: TestSelectorNavProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
      <span className="text-xs text-ink-muted shrink-0 font-medium mr-1">
        Select test:
      </span>
      {allTests.map((t) => {
        const isActive = t.slug === currentSlug;
        return (
          <Link
            key={t.slug}
            href={`/tests/${t.slug}`}
            className={cn(
              "px-3 py-1.5 rounded-button text-xs font-medium whitespace-nowrap transition-colors border",
              isActive
                ? "bg-brand text-brand-contrast border-brand"
                : "bg-surface text-ink-muted hover:text-ink border-border hover:border-border-strong"
            )}
          >
            <span>{t.test_name}</span>
            {t.anomaly && (
              <span className="w-1.5 h-1.5 rounded-full bg-status-warning-text inline-block ml-1.5" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
