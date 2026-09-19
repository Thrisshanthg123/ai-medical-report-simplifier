"use client";

import React, { useState } from "react";
import { LayoutGrid, TableProperties, Filter } from "lucide-react";
import { MedicalTest } from "@/types/medical";
import { TestResultCard } from "./TestResultCard";
import { TestResultTable } from "./TestResultTable";

interface ReportViewToggleProps {
  tests: MedicalTest[];
}

export function ReportViewToggle({ tests }: ReportViewToggleProps) {
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const [filter, setFilter] = useState<"all" | "outside_range" | "anomalies">("all");

  const filteredTests = tests.filter((test) => {
    if (filter === "outside_range") return test.status !== "within_range";
    if (filter === "anomalies") return test.anomaly;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="text-xs text-ink-muted mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" aria-hidden="true" />
            Filter:
          </span>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-chip text-xs font-medium transition-colors border tabular-nums ${
              filter === "all"
                ? "bg-brand text-brand-contrast border-brand"
                : "bg-surface text-ink-muted hover:text-ink border-border hover:border-border-strong"
            }`}
          >
            All tests ({tests.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("outside_range")}
            className={`px-3 py-1 rounded-chip text-xs font-medium transition-colors border tabular-nums ${
              filter === "outside_range"
                ? "bg-brand text-brand-contrast border-brand"
                : "bg-surface text-ink-muted hover:text-ink border-border hover:border-border-strong"
            }`}
          >
            Outside range ({tests.filter((t) => t.status !== "within_range").length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("anomalies")}
            className={`px-3 py-1 rounded-chip text-xs font-medium transition-colors border tabular-nums ${
              filter === "anomalies"
                ? "bg-brand text-brand-contrast border-brand"
                : "bg-surface text-ink-muted hover:text-ink border-border hover:border-border-strong"
            }`}
          >
            Trend shifts ({tests.filter((t) => t.anomaly).length})
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-surface-subtle border border-border rounded-control p-0.5 shrink-0 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setViewMode("cards")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-control text-xs font-medium transition-colors ${
              viewMode === "cards"
                ? "bg-surface text-ink border border-border"
                : "text-ink-muted hover:text-ink"
            }`}
            aria-label="Cards view"
          >
            <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Cards</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-control text-xs font-medium transition-colors ${
              viewMode === "table"
                ? "bg-surface text-ink border border-border"
                : "text-ink-muted hover:text-ink"
            }`}
            aria-label="Table view"
          >
            <TableProperties className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Table</span>
          </button>
        </div>
      </div>

      {/* Render Cards or Table */}
      {viewMode === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <TestResultCard key={test.id} test={test} />
          ))}
        </div>
      ) : (
        <TestResultTable tests={filteredTests} />
      )}

      {filteredTests.length === 0 && (
        <div className="p-8 text-center rounded-panel bg-surface border border-border text-ink-muted text-sm">
          No tests match the selected filter.
        </div>
      )}
    </div>
  );
}
