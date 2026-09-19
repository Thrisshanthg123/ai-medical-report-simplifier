import React from "react";
import { FileCheck, Activity, TrendingUp, Calendar } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface StatsOverviewProps {
  reportsAnalyzed?: number;
  testsTracked?: number;
  trendsDetected?: number;
  reportsThisMonth?: number;
}

export function StatsOverview({
  reportsAnalyzed = 4,
  testsTracked = 5,
  trendsDetected = 2,
  reportsThisMonth = 1,
}: StatsOverviewProps) {
  const stats = [
    {
      label: "Reports Analyzed",
      value: reportsAnalyzed.toString(),
      subtext: "Across recorded visits",
      icon: FileCheck,
    },
    {
      label: "Tests Tracked",
      value: testsTracked.toString(),
      subtext: "Tracked over time",
      icon: Activity,
    },
    {
      label: "Trends Detected",
      value: trendsDetected.toString(),
      subtext: "Identified by ML model",
      icon: TrendingUp,
    },
    {
      label: "Reports This Month",
      value: reportsThisMonth.toString(),
      subtext: "Recent checkup activity",
      icon: Calendar,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <Card key={idx} className="p-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-ink-muted">{stat.label}</span>
              <div className="w-8 h-8 rounded-control flex items-center justify-center border border-border bg-surface-subtle text-ink">
                <Icon className="w-4 h-4" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-semibold text-ink tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs text-ink-muted block mt-0.5">{stat.subtext}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
