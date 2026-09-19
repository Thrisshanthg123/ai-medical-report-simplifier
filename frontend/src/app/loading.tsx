import React from "react";
import { Skeleton, SkeletonCard, SkeletonBadge } from "@/components/ui/Skeleton";

export default function GlobalLoading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="max-w-container mx-auto px-4 sm:px-6 py-8 space-y-8"
    >
      <span className="sr-only">Loading medical report data...</span>

      {/* Header Placeholder */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-28 rounded-chip" />
          <Skeleton className="h-4 w-20 rounded-chip" />
        </div>
        <Skeleton className="h-8 w-72 sm:w-96 rounded-control" />
        <Skeleton className="h-4 w-full max-w-xl rounded-control" />
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="p-5 rounded-panel border border-border bg-surface space-y-3"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="w-8 h-8 rounded-control" />
            </div>
            <Skeleton className="h-7 w-16" />
            <Skeleton className="h-3 w-32" />
          </div>
        ))}
      </div>

      {/* Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-panel border border-border bg-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <Skeleton className="h-5 w-40" />
              <SkeletonBadge />
            </div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="p-3.5 rounded-control bg-surface-subtle border border-border flex items-center justify-between"
              >
                <div className="space-y-1.5">
                  <Skeleton className="h-4 w-44" />
                  <Skeleton className="h-3 w-28" />
                </div>
                <Skeleton className="h-8 w-20 rounded-control" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-panel border border-border bg-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <Skeleton className="h-5 w-36" />
              <SkeletonBadge />
            </div>
            {Array.from({ length: 2 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
