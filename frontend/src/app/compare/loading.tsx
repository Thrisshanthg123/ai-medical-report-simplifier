import React from "react";
import { Skeleton, SkeletonBadge } from "@/components/ui/Skeleton";

export default function CompareLoading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="max-w-container mx-auto px-4 sm:px-6 py-8 space-y-8"
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
          <Skeleton className="h-4 w-36 rounded-chip" />
          <Skeleton className="h-4 w-32 rounded-chip" />
        </div>
        <Skeleton className="h-8 w-72 sm:w-96 rounded-control" />
        <Skeleton className="h-4 w-full max-w-xl rounded-control" />
      </div>

      {/* Dual Panel Selector Skeleton */}
      <div className="p-6 rounded-panel border border-border bg-surface space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-11 w-full rounded-control" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-11 w-full rounded-control" />
          </div>
        </div>

        {/* 3 Differential Metrics Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-control bg-surface-subtle border border-border text-center space-y-1"
            >
              <Skeleton className="h-7 w-16 mx-auto" />
              <Skeleton className="h-3 w-32 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Comparative Matrix Table Skeleton */}
      <div className="p-6 rounded-panel border border-border bg-surface space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <Skeleton className="h-5 w-44" />
          <SkeletonBadge className="w-28" />
        </div>

        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-control bg-surface-subtle border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1 min-w-40">
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
