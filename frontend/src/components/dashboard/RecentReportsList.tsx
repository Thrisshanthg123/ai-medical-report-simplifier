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
          <p className="text-xs text-ink-muted mt-0.5">
            Reports parsed and structured by AI document understanding
          </p>
        </div>
        <Link
          href="/history"
          className="text-xs text-brand hover:text-brand-hover font-medium inline-flex items-center gap-1"
        >
          <span>View all</span>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </CardHeader>

      <CardContent className="divide-y divide-border p-0 flex-1">
        {reports.length === 0 ? (
          <div className="p-8 text-center text-xs text-ink-muted space-y-2">
            <p>No reports uploaded yet. Upload a report to see your results here.</p>
            <Link
              href="/upload"
              className="text-xs text-brand hover:text-brand-hover font-medium inline-block underline"
            >
              Upload a report
            </Link>
          </div>
        ) : (
          reports.map((report) => {
            const anomalyCount =
              report.summary?.anomalies_detected_count ??
              report.tests?.filter((t) => t.anomaly).length ??
              0;

            return (
              <div
                key={report.id}
                className="p-4 hover:bg-surface-subtle transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-control bg-surface-subtle border border-border flex items-center justify-center text-ink shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink hover:text-brand transition-colors">
                      <Link href={`/simplified/${report.id}`}>{report.report_name}</Link>
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-ink-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-ink-muted" aria-hidden="true" />
                        {formatDate(report.date)}
                      </span>
                      <span>•</span>
                      <span>{report.provider_or_lab}</span>
                      <span>•</span>
                      <span>{report.tests_count} tests tracked</span>
                      <span>•</span>
                      <span>
                        {anomalyCount} {anomalyCount === 1 ? "anomaly" : "anomalies"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 ml-12 sm:ml-0">
                  <Badge variant="success" className="text-[11px]">
                    <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                    <span>Analyzed</span>
                  </Badge>
                  <Link
                    href={`/simplified/${report.id}`}
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-control bg-surface-subtle hover:bg-surface text-ink border border-border transition-colors min-h-target sm:min-h-0 items-center"
                  >
                    <span>View</span>
                    <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
