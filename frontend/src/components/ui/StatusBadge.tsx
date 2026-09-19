import React from "react";
import { CheckCircle2, AlertCircle, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { TestStatus } from "@/types/medical";
import { Badge } from "./Badge";

interface StatusBadgeProps {
  status: TestStatus;
  showIcon?: boolean;
}

export function StatusBadge({ status, showIcon = true }: StatusBadgeProps) {
  if (status === "within_range") {
    return (
      <Badge variant="success">
        {showIcon && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
        <span>Within provided reference range</span>
      </Badge>
    );
  }

  if (status === "above_range") {
    return (
      <Badge variant="warning">
        {showIcon && <ArrowUpRight className="w-3 h-3 text-amber-400" />}
        <span>Above provided reference range</span>
      </Badge>
    );
  }

  if (status === "below_range") {
    return (
      <Badge variant="warning">
        {showIcon && <ArrowDownRight className="w-3 h-3 text-amber-400" />}
        <span>Below provided reference range</span>
      </Badge>
    );
  }

  return (
    <Badge variant="neutral">
      {showIcon && <AlertCircle className="w-3 h-3" />}
      <span>Reference status unavailable</span>
    </Badge>
  );
}
