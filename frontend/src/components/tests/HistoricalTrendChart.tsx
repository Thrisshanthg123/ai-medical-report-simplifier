"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  ReferenceLine,
} from "recharts";
import { HistoricalValue } from "@/types/medical";

interface HistoricalTrendChartProps {
  data: HistoricalValue[];
  unit: string;
  referenceMin: number;
  referenceMax: number;
  testName: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: HistoricalValue;
  }>;
  label?: string;
  unit: string;
  referenceMin: number;
  referenceMax: number;
}

function CustomTooltip({
  active,
  payload,
  label,
  unit,
  referenceMin,
  referenceMax,
}: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    const isWithin =
      item.value >= referenceMin && item.value <= referenceMax;

    return (
      <div className="rounded-panel border border-border bg-surface p-3 text-xs space-y-1.5 min-w-[180px]">
        <div className="flex items-center justify-between border-b border-border pb-1.5">
          <span className="font-semibold text-ink">{item.month_label}</span>
          <span className="text-[10px] text-ink-muted font-mono tabular-nums">{item.date}</span>
        </div>

        <div className="flex items-baseline justify-between pt-1">
          <span className="text-ink-muted">Reported value:</span>
          <span className="font-semibold text-ink text-sm tabular-nums">
            {item.value} {unit}
          </span>
        </div>

        <div className="flex items-center justify-between text-[11px]">
          <span className="text-ink-muted">Reference:</span>
          <span className="font-mono text-ink-muted tabular-nums">
            {referenceMin} – {referenceMax} {unit}
          </span>
        </div>

        <div className="pt-1 text-[11px]">
          <span
            className={`px-2 py-0.5 rounded-panel inline-block font-medium border ${
              isWithin
                ? "bg-status-success-bg text-status-success-text border-status-success-border"
                : "bg-status-warning-bg text-status-warning-text border-status-warning-border"
            }`}
          >
            {isWithin ? "In range" : "Above range"}
          </span>
        </div>
      </div>
    );
  }
  return null;
}

export function HistoricalTrendChart({
  data,
  unit,
  referenceMin,
  referenceMax,
  testName,
}: HistoricalTrendChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[340px] w-full flex items-center justify-center bg-surface-subtle rounded-panel border border-border text-xs text-ink-muted">
        Loading chart visualization...
      </div>
    );
  }

  // Calculate dynamic domain
  const values = data.map((d) => d.value);
  const minVal = Math.min(...values, referenceMin);
  const maxVal = Math.max(...values, referenceMax);
  const padding = (maxVal - minVal) * 0.15 || 5;
  const domainMin = Math.floor(Math.max(0, minVal - padding));
  const domainMax = Math.ceil(maxVal + padding);

  return (
    <div className="space-y-3">
      {/* Legend & Reference Range indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-ink-muted px-1">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand inline-block" />
            <span className="text-ink font-medium">{testName} ({unit})</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-3 h-2 rounded-panel bg-brand/10 border border-brand/30 inline-block" />
            <span>Target reference zone ({referenceMin} – {referenceMax} {unit})</span>
          </div>
        </div>

        <span className="text-[11px] font-mono text-ink-subtle">
          Longitudinal trend
        </span>
      </div>

      {/* Chart Canvas */}
      <div className="h-[340px] w-full p-2 bg-surface rounded-panel border border-border">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid stroke="#E4E1DB" strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="month_label"
              stroke="#5A6578"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: "#E4E1DB" }}
            />

            <YAxis
              domain={[domainMin, domainMax]}
              stroke="#5A6578"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: "#E4E1DB" }}
              unit={` ${unit.split("/")[0]}`}
            />

            {/* Shaded Reference Area */}
            <ReferenceArea
              y1={referenceMin}
              y2={referenceMax}
              fill="#144E4D"
              fillOpacity={0.06}
              stroke="#144E4D"
              strokeOpacity={0.25}
              strokeDasharray="2 2"
            />

            <ReferenceLine
              y={referenceMax}
              stroke="#144E4D"
              strokeDasharray="4 4"
              strokeOpacity={0.4}
            />

            <Tooltip
              content={
                <CustomTooltip
                  unit={unit}
                  referenceMin={referenceMin}
                  referenceMax={referenceMax}
                />
              }
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#144E4D"
              strokeWidth={2.5}
              dot={{
                r: 4,
                fill: "#FFFFFF",
                stroke: "#144E4D",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: "#144E4D",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
              animationDuration={800}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
