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
      subtext: "Across 4 quarters",
      icon: FileCheck,
      accent: "text-teal-400 bg-teal-950/60 border-teal-800/60",
    },
    {
      label: "Tests Tracked",
      value: testsTracked.toString(),
      subtext: "Longitudinal markers",
      icon: Activity,
      accent: "text-blue-400 bg-blue-950/60 border-blue-800/60",
    },
    {
      label: "Trends Detected",
      value: trendsDetected.toString(),
      subtext: "Identified by ML model",
      icon: TrendingUp,
      accent: "text-amber-400 bg-amber-950/60 border-amber-800/60",
    },
    {
      label: "Reports This Month",
      value: reportsThisMonth.toString(),
      subtext: "September 2026",
      icon: Calendar,
      accent: "text-emerald-400 bg-emerald-950/60 border-emerald-800/60",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <Card key={idx} className="p-4 relative overflow-hidden group hover:border-slate-700/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">{stat.label}</span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${stat.accent}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
              <span className="text-[11px] text-slate-500 block mt-0.5">{stat.subtext}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
