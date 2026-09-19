import React from "react";
import { Sparkles } from "lucide-react";
import { Badge } from "./Badge";

interface AnomalyBadgeProps {
  label?: string;
  className?: string;
}

export function AnomalyBadge({
  label = "Unusual change detected",
  className,
}: AnomalyBadgeProps) {
  return (
    <Badge
      variant="warning"
      className={className}
    >
      <Sparkles className="w-3 h-3 text-amber-400" />
      <span>{label}</span>
    </Badge>
  );
}
