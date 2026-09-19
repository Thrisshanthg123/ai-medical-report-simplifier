import React from "react";
import { Skeleton, SkeletonBadge, SkeletonText } from "@/components/ui/Skeleton";

export default function HistoryLoading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn"
    >
      <span className="sr-only">Loading chronological medical report history...</span>

      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-32 rounded-full" />
            <Skeleton className="h-4 w-28 rounded" />
          </div>
          <Skeleton className="h-8 w-64 sm:w-80 rounded-lg" />
          <Skeleton className="h-4 w-full max-w-xl rounded" />
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Skeleton className="h-10 w-36 rounded-lg" />
          <Skeleton className="h-10 w-36 rounded-lg" />
        </div>
      </div>

      {/* Timeline Tree Skeleton */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="relative space-y-3">
            {/* Timeline Node Icon Skeleton */}
            <div className="absolute -left-6 sm:-left-8 top-4 w-5 h-5 rounded-full border-2 border-slate-800 bg-slate-900 flex items-center justify-center">
              <Skeleton className="w-2 h-2 rounded-full" />
            </div>

            {/* Timeline Item Card */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-4 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-24 rounded-full" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                  <Skeleton className="h-6 w-64 sm:w-80 font-semibold" />
                </div>
                <div className="flex items-center gap-2">
                  <SkeletonBadge className="w-20" />
                  <Skeleton className="h-8 w-28 rounded-lg" />
                </div>
              </div>

              <SkeletonText lines={2} />

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800/60 text-xs">
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-40" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
