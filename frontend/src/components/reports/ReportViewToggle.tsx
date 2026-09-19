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
          <span className="text-xs text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            Filter:
          </span>
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              filter === "all"
                ? "bg-slate-800 text-teal-300 border border-slate-700"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All Tests ({tests.length})
          </button>
          <button
            onClick={() => setFilter("outside_range")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              filter === "outside_range"
                ? "bg-amber-950/80 text-amber-300 border border-amber-800"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Outside Reference ({tests.filter((t) => t.status !== "within_range").length})
          </button>
          <button
            onClick={() => setFilter("anomalies")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              filter === "anomalies"
                ? "bg-indigo-950/80 text-indigo-300 border border-indigo-800"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ML Trend Shifts ({tests.filter((t) => t.anomaly).length})
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setViewMode("cards")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              viewMode === "cards"
                ? "bg-slate-800 text-teal-300 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
            aria-label="Cards view"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Cards</span>
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              viewMode === "table"
                ? "bg-slate-800 text-teal-300 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
            aria-label="Table view"
          >
            <TableProperties className="w-3.5 h-3.5" />
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
        <div className="p-8 text-center rounded-xl bg-slate-900/40 border border-slate-800 text-slate-400 text-sm">
          No tests match the selected filter.
        </div>
      )}
    </div>
  );
}
