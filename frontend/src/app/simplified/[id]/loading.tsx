import React from "react";
import { Skeleton, SkeletonBadge, SkeletonText } from "@/components/ui/Skeleton";

export default function SimplifiedReportLoading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="max-w-container mx-auto px-4 sm:px-6 py-8 space-y-8"
    >
      <span className="sr-only">Loading plain-language simplified medical report...</span>

      {/* Action Bar Skeleton */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-44" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-24 rounded-control" />
          <Skeleton className="h-9 w-44 rounded-control" />
        </div>
      </div>

      {/* Main Document Container Skeleton */}
      <div className="rounded-panel border border-border bg-surface p-6 sm:p-10 space-y-8">
        {/* Document Header Skeleton */}
        <div className="border-b border-border pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-40 rounded-chip" />
                <Skeleton className="h-4 w-28 rounded-chip" />
              </div>
              <Skeleton className="h-8 w-72 sm:w-96 rounded-control" />
            </div>

            <div className="space-y-1.5 text-left sm:text-right">
              <Skeleton className="h-3 w-32 ml-auto" />
              <Skeleton className="h-3 w-40 ml-auto" />
              <Skeleton className="h-3 w-28 ml-auto" />
            </div>
          </div>
        </div>

        {/* Section 1: Executive Overview Skeleton */}
        <div className="rounded-panel bg-surface-subtle border border-border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Skeleton className="w-4 h-4 rounded-chip" />
            <Skeleton className="h-4 w-48" />
          </div>
          <SkeletonText lines={2} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="p-3 rounded-control bg-surface border border-border text-center space-y-1.5"
              >
                <Skeleton className="h-7 w-12 mx-auto" />
                <Skeleton className="h-3 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Important Findings Skeleton */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-1 border-b border-border">
            <div className="flex items-center gap-2">
              <Skeleton className="w-7 h-7 rounded-control" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-3 w-64" />
              </div>
            </div>
            <SkeletonBadge className="w-28" />
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="p-4 rounded-control bg-surface-subtle border border-border space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-36" />
                    <Skeleton className="h-4 w-20 rounded-chip" />
                  </div>
                  <div className="flex items-center gap-2">
                    <SkeletonBadge className="w-24" />
                    <SkeletonBadge className="w-20" />
                  </div>
                </div>
                <SkeletonText lines={2} />
                <div className="pt-2 border-t border-border flex items-center justify-between">
                  <Skeleton className="h-3 w-40" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Medical Terms Explained Skeleton */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-1 border-b border-border">
            <div className="flex items-center gap-2">
              <Skeleton className="w-7 h-7 rounded-control" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-44" />
                <Skeleton className="h-3 w-56" />
              </div>
            </div>
            <SkeletonBadge className="w-28" />
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-10 flex-1 rounded-control" />
            <Skeleton className="h-10 w-24 rounded-control" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="p-4 rounded-control bg-surface-subtle border border-border space-y-2"
              >
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <SkeletonText lines={2} />
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Biomarker Breakdown Skeleton */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-52" />
            <Skeleton className="h-3 w-24" />
          </div>

          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="p-4 rounded-control bg-surface-subtle border border-border space-y-3"
              >
                <div className="flex items-center justify-between">
                  <Skeleton className="h-5 w-40" />
                  <div className="flex gap-2">
                    <SkeletonBadge />
                    <SkeletonBadge />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-36" />
                </div>
                <SkeletonText lines={2} />
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Clear Next Actions Skeleton */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between pb-1 border-b border-border">
            <div className="flex items-center gap-2">
              <Skeleton className="w-7 h-7 rounded-control" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-56" />
                <Skeleton className="h-3 w-64" />
              </div>
            </div>
            <SkeletonBadge className="w-24" />
          </div>

          <div className="p-5 rounded-panel border border-border bg-surface-subtle space-y-3">
            <Skeleton className="h-5 w-64" />
            <SkeletonText lines={3} />
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-9 w-32 rounded-control" />
              <Skeleton className="h-9 w-32 rounded-control" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
