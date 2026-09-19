import React from "react";
import Link from "next/link";
import { Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
            Health Overview
          </span>
          <span className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full border border-slate-200 font-medium">
            Demo Profile: Alex Morgan
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Good morning
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Here&apos;s an overview of your recent reports and historical trends.
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <Link href="/upload">
          <Button variant="primary" size="md">
            <Upload className="w-4 h-4" />
            <span>Upload New Report</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
