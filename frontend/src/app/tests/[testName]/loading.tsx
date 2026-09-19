import React from "react";
import { Skeleton, SkeletonBadge, SkeletonText } from "@/components/ui/Skeleton";

export default function TestDetailLoading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn"
    >
      <span className="sr-only">Loading longitudinal biomarker trend analysis and chart...</span>

      {/* Top Navigation Row Skeleton */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-40" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-28 rounded-lg" />
          <Skeleton className="h-8 w-32 rounded-lg" />
        </div>
      </div>

      {/* Test Header Card Skeleton */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-28 rounded-full" />
              <Skeleton className="h-4 w-20 rounded" />
            </div>
            <Skeleton className="h-8 w-56 sm:w-72 rounded-lg" />
          </div>
          <div className="flex items-center gap-2">
            <SkeletonBadge className="w-24" />
            <SkeletonBadge className="w-20" />
          </div>
        </div>

        <div className="flex flex-wrap items-baseline gap-6 pt-2 border-t border-slate-800/80 text-xs">
          <div className="space-y-1">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-7 w-28" />
          </div>
          <div className="space-y-1">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="space-y-1">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
      </div>

      {/* Chart Skeleton (Resembles Recharts Line/Area Graph) */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="space-y-1">
            <Skeleton className="h-5 w-44" />
            <Skeleton className="h-3 w-64" />
          </div>
          <SkeletonBadge className="w-32" />
        </div>

        {/* Chart Canvas Area Placeholder */}
        <div className="h-72 w-full rounded-xl bg-slate-950/70 border border-slate-800/80 p-6 flex flex-col justify-between relative overflow-hidden">
          {/* Simulated Horizontal Grid Lines */}
          <div className="w-full border-b border-slate-800/60" />
          <div className="w-full border-b border-slate-800/40 border-dashed" />
          <div className="w-full border-b border-slate-800/60" />
          <div className="w-full border-b border-slate-800/40 border-dashed" />
          <div className="w-full border-b border-slate-800/80" />

          {/* Simulated Shimmer Wave */}
          <div className="absolute inset-x-0 bottom-12 h-32 bg-gradient-to-t from-teal-500/10 to-transparent pointer-events-none" />

          {/* Simulated X-Axis Labels */}
          <div className="flex justify-between pt-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </div>

      {/* ML Insight Card Skeleton */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="w-5 h-5 rounded" />
          <Skeleton className="h-5 w-48" />
        </div>
        <SkeletonText lines={2} />
      </div>

      {/* Historical Table Skeleton */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-3 w-28" />
        </div>
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/60 flex items-center justify-between"
            >
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
              <SkeletonBadge />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
