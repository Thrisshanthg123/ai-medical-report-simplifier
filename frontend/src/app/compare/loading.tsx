import React from "react";
import { Skeleton, SkeletonBadge, SkeletonText } from "@/components/ui/Skeleton";

export default function CompareLoading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn"
    >
      <span className="sr-only">Loading report comparison differential matrix...</span>

      {/* Top Navigation Skeleton */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>

      {/* Header Skeleton */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-36 rounded-full" />
          <Skeleton className="h-4 w-32 rounded" />
        </div>
        <Skeleton className="h-8 w-72 sm:w-96 rounded-lg" />
        <Skeleton className="h-4 w-full max-w-xl rounded" />
      </div>

      {/* Dual Panel Selector Skeleton */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-11 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-11 w-full rounded-xl" />
          </div>
        </div>

        {/* 3 Differential Metrics Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center space-y-1"
            >
              <Skeleton className="h-7 w-16 mx-auto" />
              <Skeleton className="h-3 w-32 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Comparative Matrix Table Skeleton */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <Skeleton className="h-5 w-44" />
          <SkeletonBadge className="w-28" />
        </div>

        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1 min-w-[160px]">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-3 w-24" />
              </div>

              <div className="flex flex-wrap items-center gap-6 text-xs">
                <div className="space-y-1">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-5 w-20" />
                </div>
                <div className="space-y-1">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-5 w-20" />
                </div>
                <div className="space-y-1">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-5 w-24" />
                </div>
                <SkeletonBadge className="w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
