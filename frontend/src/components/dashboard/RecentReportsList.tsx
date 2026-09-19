import React from "react";
import Link from "next/link";
import { FileText, Calendar, ChevronRight, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MedicalReport } from "@/types/medical";
import { formatDate } from "@/lib/utils";

interface RecentReportsListProps {
  reports: MedicalReport[];
}

export function RecentReportsList({ reports }: RecentReportsListProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div>
          <CardTitle>Recent Medical Reports</CardTitle>
          <p className="text-xs text-slate-400">
            Reports parsed and structured by AI document understanding
          </p>
        </div>
        <Link
          href="/history"
          className="text-xs text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-1"
        >
          <span>View all</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </CardHeader>

      <CardContent className="divide-y divide-slate-800/80 p-0 flex-1">
        {reports.map((report) => {
          return (
            <div
              key={report.id}
              className="p-4 hover:bg-slate-800/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white hover:text-teal-300 transition-colors">
                    <Link href={`/reports/${report.id}`}>{report.report_name}</Link>
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {formatDate(report.date)}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span>{report.provider_or_lab}</span>
                    <span className="text-slate-600">•</span>
                    <span>{report.tests_count} biomarkers tracked</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 ml-12 sm:ml-0">
                <Badge variant="success" className="text-[11px]">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Analyzed</span>
                </Badge>
                <Link
                  href={`/reports/${report.id}`}
                  className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/80 transition-colors"
                >
                  <span>View</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
