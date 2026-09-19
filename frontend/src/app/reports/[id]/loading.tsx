import React from "react";
import { Skeleton, SkeletonBadge, SkeletonText } from "@/components/ui/Skeleton";

export default function ReportDetailLoading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="max-w-container mx-auto px-4 sm:px-6 py-8 space-y-8"
    >
      <span className="sr-only">Loading clinical report test breakdown...</span>

      {/* Report Header Metadata Skeleton */}
      <div className="p-6 rounded-panel border border-border bg-surface space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-32 rounded-chip" />
              <Skeleton className="h-4 w-24 rounded-chip" />
            </div>
            <Skeleton className="h-8 w-72 sm:w-96 rounded-control" />
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <Skeleton className="h-3 w-36" />
              <Skeleton className="h-3 w-40" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-44 rounded-control" />
            <Skeleton className="h-10 w-28 rounded-control" />
          </div>
        </div>
      </div>

      {/* AI & ML Executive Summary Banner Skeleton */}
      <div className="p-6 rounded-panel border border-border bg-surface-subtle space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="w-5 h-5 rounded-control" />
            <Skeleton className="h-5 w-48" />
          </div>
          <SkeletonBadge />
        </div>
        <SkeletonText lines={2} />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="p-3 rounded-control bg-surface border border-border text-center space-y-1"
            >
              <Skeleton className="h-6 w-12 mx-auto" />
              <Skeleton className="h-3 w-20 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Section Title & View Toggle Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div className="space-y-1">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-3.5 w-72" />
        </div>
        <Skeleton className="h-9 w-40 rounded-control" />
      </div>

      {/* Test Results Cards Grid Skeleton (3 columns on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-5 rounded-panel border border-border bg-surface space-y-4"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-32" />
              <SkeletonBadge />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="h-7 w-24" />
              <Skeleton className="h-3 w-40" />
            </div>
            <Skeleton className="h-2 w-full rounded-chip" />
            <SkeletonText lines={2} />
          </div>
        ))}
      </div>
    </div>
  );
}
