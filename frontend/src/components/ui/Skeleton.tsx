import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "shimmer" | "subtle";
}

export function Skeleton({
  className,
  variant = "default",
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-control motion-reduce:animate-none",
        variant === "default" && "animate-pulse bg-surface-muted",
        variant === "shimmer" && "animate-pulse bg-surface-muted",
        variant === "subtle" && "animate-pulse bg-surface-subtle",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

export function SkeletonBadge({ className }: { className?: string }) {
  return <Skeleton className={cn("h-5 w-16 rounded-chip", className)} />;
}

export function SkeletonText({
  lines = 1,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-3.5 rounded-control",
            i === lines - 1 && lines > 1 ? "w-3/4" : "w-full",
            className
          )}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-panel border border-border bg-surface p-6 space-y-4",
        className
      )}
      aria-hidden="true"
    >
      {children || (
        <>
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-32" />
            <SkeletonBadge />
          </div>
          <SkeletonText lines={2} />
          <div className="pt-2 border-t border-border flex items-center justify-between">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-6 w-16 rounded-control" />
          </div>
        </>
      )}
    </div>
  );
}
