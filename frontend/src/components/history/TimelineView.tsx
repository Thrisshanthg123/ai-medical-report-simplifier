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
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search reports or lab facilities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>

        <div className="text-xs text-slate-400">
          Showing <span className="text-white font-semibold">{filteredReports.length}</span> of {reports.length} longitudinal records
        </div>
      </div>

      {/* Visual Timeline Tree */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:top-3 before:bottom-3 before:left-[11px] sm:before:left-[15px] before:w-0.5 before:bg-slate-800">
        {filteredReports.map((report, index) => {
          const isLatest = index === 0;

          return (
            <div key={report.id} className="relative group">
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[23px] sm:-left-[27px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isLatest
                    ? "bg-teal-950 border-teal-400 text-teal-300 ring-4 ring-teal-500/10"
                    : "bg-slate-900 border-slate-700 text-slate-400 group-hover:border-slate-500"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isLatest ? "bg-teal-400" : "bg-slate-600"
                  }`}
                />
              </div>

              {/* Report Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 group-hover:border-slate-700/80 p-5 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                        {new Date(report.date).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      {isLatest && (
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-teal-950/80 border border-teal-800 text-teal-300">
                          Latest
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                      <Link href={`/reports/${report.id}`}>{report.report_name}</Link>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="success">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{report.status}</span>
                    </Badge>
                  </div>
                </div>

                {/* Metadata details */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {formatDate(report.date)}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    {report.provider_or_lab}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span>{report.tests_count} biomarkers extracted</span>
                </div>

                {/* Biomarker chip pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {report.tests.map((test) => (
                    <span
                      key={test.slug}
                      className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300"
                    >
                      {test.test_name}: <strong className="text-white">{test.value}</strong>{" "}
                      <span className="text-slate-400 font-mono">{test.unit}</span>
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {report.summary.outside_range_count > 0 ? (
                      <span className="text-amber-300">
                        {report.summary.outside_range_count} test outside reference range
                      </span>
                    ) : (
                      <span className="text-emerald-300">
                        All tests within reference limits
                      </span>
                    )}
                  </span>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/simplified/${report.id}`}
                      className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      Summary
                    </Link>
                    <Link
                      href={`/reports/${report.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-colors"
                    >
                      <span>View Full Analysis</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredReports.length === 0 && (
          <div className="p-8 text-center rounded-xl bg-slate-900/40 border border-slate-800 text-slate-400 text-xs">
            No medical reports match your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}
