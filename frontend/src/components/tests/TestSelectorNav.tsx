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
      <span className="text-xs text-slate-400 shrink-0 font-medium mr-1">
        Switch Biomarker:
      </span>
      {allTests.map((t) => {
        const isActive = t.slug === currentSlug;
        return (
          <Link
            key={t.slug}
            href={`/tests/${t.slug}`}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border",
              isActive
                ? "bg-teal-950/80 text-teal-300 border-teal-700/80 shadow-sm"
                : "bg-slate-900/60 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700"
            )}
          >
            <span>{t.test_name}</span>
            {t.anomaly && (
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block ml-1.5" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
