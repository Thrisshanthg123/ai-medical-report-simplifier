import React from "react";
import { ArrowUp, ArrowDown, ArrowRight } from "lucide-react";
import { TrendDirection } from "@/types/medical";
import { Badge } from "./Badge";

interface TrendBadgeProps {
  trend: TrendDirection;
  compact?: boolean;
}

export function TrendBadge({ trend, compact = false }: TrendBadgeProps) {
  if (trend === "increasing") {
    return (
      <Badge variant="warning">
        <ArrowUp className="w-3 h-3 text-amber-400" />
        <span>{compact ? "Increasing" : "Increasing trend detected"}</span>
      </Badge>
    );
  }

  if (trend === "decreasing") {
    return (
      <Badge variant="brand">
        <ArrowDown className="w-3 h-3 text-teal-400" />
        <span>{compact ? "Decreasing" : "Decreasing trend detected"}</span>
      </Badge>
    );
  }

  return (
    <Badge variant="neutral">
      <ArrowRight className="w-3 h-3 text-slate-400" />
      <span>Stable</span>
    </Badge>
  );
}
