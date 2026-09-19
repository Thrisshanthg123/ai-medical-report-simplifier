"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  FileText,
  Building2,
  ChevronRight,
  Search,
  CheckCircle2,
  Filter,
  ArrowRight,
} from "lucide-react";
import { MedicalReport } from "@/types/medical";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface TimelineViewProps {
  reports: MedicalReport[];
}

export function TimelineView({ reports }: TimelineViewProps) {
  const [searchQuery, setSearchQuery] = useState("");

  if (reports.length === 0) {
    return (
      <div className="rounded-panel border border-border bg-surface p-12 text-center space-y-3">
        <p className="text-sm text-ink-muted">
          No reports uploaded yet. Upload a report to see your results here.
        </p>
        <Link
          href="/upload"
          className="inline-block text-xs font-medium text-brand hover:text-brand-hover underline"
        >
          Upload a report
        </Link>
      </div>
    );
  }

  const filteredReports = reports.filter((report) => {
    const q = searchQuery.toLowerCase();
    return (
      report.report_name.toLowerCase().includes(q) ||
      report.provider_or_lab.toLowerCase().includes(q) ||
      report.date.includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-2">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search reports or facilities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-surface border border-border rounded-control text-xs text-ink placeholder:text-ink-muted focus:outline-none focus:border-brand transition-colors"
          />
        </div>

        <div className="text-xs text-ink-muted tabular-nums">
          Showing <span className="text-ink font-medium">{filteredReports.length}</span> of {reports.length} recorded reports
        </div>
      </div>

      {/* Visual Timeline Tree */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:top-3 before:bottom-3 before:left-[11px] sm:before:left-[15px] before:w-0.5 before:bg-border">
        {filteredReports.map((report, index) => {
          const isLatest = index === 0;

          return (
            <div key={report.id} className="relative group">
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[23px] sm:-left-[27px] top-1.5 w-5 h-5 rounded-chip border flex items-center justify-center transition-colors ${
                  isLatest
                    ? "bg-surface border-brand text-brand"
                    : "bg-surface border-border text-ink-muted"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-chip ${
                    isLatest ? "bg-brand" : "bg-border-strong"
                  }`}
                />
              </div>

              {/* Report Card */}
              <div className="rounded-panel border border-border bg-surface hover:border-border-strong p-5 transition-colors space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                        {new Date(report.date).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      {isLatest && (
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-chip bg-surface-subtle border border-border text-ink-muted">
                          Latest
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-serif font-semibold text-ink group-hover:text-brand transition-colors">
                      <Link href={`/simplified/${report.id}`}>{report.report_name}</Link>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="success">
                      <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                      <span>{report.status}</span>
                    </Badge>
                  </div>
                </div>

                {/* Metadata details */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                    {formatDate(report.date)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                    {report.provider_or_lab}
                  </span>
                  <span>•</span>
                  <span className="tabular-nums">{report.tests_count} tests recorded</span>
                </div>

                {/* Test chip pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {report.tests.map((test) => (
                    <span
                      key={test.slug}
                      className="px-2 py-0.5 rounded-chip bg-surface-subtle border border-border text-xs text-ink-muted"
                    >
                      {test.test_name}: <strong className="text-ink font-medium tabular-nums">{test.value}</strong>{" "}
                      <span className="text-ink-muted font-mono">{test.unit}</span>
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                  <div>
                    {report.summary?.outside_range_count > 0 ? (
                      <span className="text-status-outside-text font-medium tabular-nums">
                        {report.summary.outside_range_count} {report.summary.outside_range_count === 1 ? "test" : "tests"} outside range
                      </span>
                    ) : (
                      <span className="text-status-in-range-text font-medium">
                        All tests within range
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/simplified/${report.id}`}
                      className="text-brand hover:text-brand-hover font-medium underline"
                    >
                      Simplified report
                    </Link>
                    <Link
                      href={`/reports/${report.id}`}
                      className="inline-flex items-center gap-1 font-medium px-3 py-1.5 rounded-control bg-surface-subtle hover:bg-surface text-ink border border-border transition-colors min-h-target items-center"
                    >
                      <span>Full data</span>
                      <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredReports.length === 0 && (
          <div className="p-8 text-center rounded-panel bg-surface border border-border text-ink-muted text-xs">
            No medical reports match your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}
