import React from "react";
import { getReports, getReport } from "@/lib/api";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { KeyInsightsList } from "@/components/dashboard/KeyInsightsList";
import { RecentReportsList } from "@/components/dashboard/RecentReportsList";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export const metadata = {
  title: "Dashboard — H2 Medical Report Simplifier",
  description: "Overview of your recent medical reports and longitudinal health metrics.",
};

export default async function DashboardPage() {
  const reports = await getReports();
  const latestReport = reports[0] ?? null;
  const tests = latestReport ? latestReport.tests : [];

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Dashboard Top Header */}
        <DashboardHeader />

        {/* Meaningful Statistics Overview */}
        <StatsOverview
          reportsAnalyzed={reports.length}
          testsTracked={tests.length}
          trendsDetected={tests.filter((t) => t.trend !== "stable").length}
          reportsThisMonth={reports.length > 0 ? 1 : 0}
        />

        {/* Two Column Grid: Recent Reports & Key ML Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <RecentReportsList reports={reports} />
          </div>

          <div className="lg:col-span-5">
            <KeyInsightsList tests={tests} />
          </div>
        </div>

        {/* Unobtrusive Responsible AI Disclaimer */}
        <DisclaimerNotice />
      </div>
    </ProtectedRoute>
  );
}
