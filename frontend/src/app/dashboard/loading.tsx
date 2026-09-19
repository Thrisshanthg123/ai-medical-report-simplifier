import React from "react";
import { Skeleton, SkeletonCard, SkeletonBadge, SkeletonText } from "@/components/ui/Skeleton";

export default function DashboardLoading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn"
    >
      <span className="sr-only">Loading dashboard health metrics and recent reports...</span>

      {/* Dashboard Top Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-28 rounded-full" />
            <Skeleton className="h-4 w-24 rounded" />
          </div>
          <Skeleton className="h-8 w-64 sm:w-80 rounded-lg" />
          <Skeleton className="h-4 w-full max-w-lg rounded" />
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Skeleton className="h-10 w-36 rounded-lg" />
          <Skeleton className="h-10 w-36 rounded-lg" />
        </div>
      </div>

      {/* 4 Stats Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/60 space-y-3"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="w-8 h-8 rounded-lg" />
            </div>
            <Skeleton className="h-8 w-20 rounded" />
            <Skeleton className="h-3 w-36" />
          </div>
        ))}
      </div>

      {/* Two Column Grid: Recent Reports (7 cols) & Key ML Insights (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Recent Reports List Skeleton */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/60 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="space-y-1">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-3 w-56" />
              </div>
              <SkeletonBadge />
            </div>

            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-center justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-48 font-semibold" />
                      <Skeleton className="h-4 w-16 rounded" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-3 w-28" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                  <Skeleton className="h-8 w-24 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Key ML Insights Skeleton */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/60 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="space-y-1">
                <Skeleton className="h-5 w-36" />
                <Skeleton className="h-3 w-48" />
              </div>
              <SkeletonBadge />
            </div>

            <div className="space-y-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/60 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-5 w-24 rounded-full" />
                  </div>
                  <SkeletonText lines={2} />
                  <div className="pt-2 border-t border-slate-800/60 flex justify-between items-center">
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-6 w-16 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
