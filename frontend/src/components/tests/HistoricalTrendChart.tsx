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
      <div className="rounded-xl border border-slate-700 bg-slate-900/95 p-3.5 shadow-xl backdrop-blur-md text-xs space-y-1.5 min-w-[180px]">
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
          <span className="font-semibold text-white">{item.month_label} 2026</span>
          <span className="text-[10px] text-slate-400 font-mono">{item.date}</span>
        </div>

        <div className="flex items-baseline justify-between pt-1">
          <span className="text-slate-400">Reported Value:</span>
          <span className="font-bold text-white text-sm">
            {item.value} {unit}
          </span>
        </div>

        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-500">Reference:</span>
          <span className="font-mono text-slate-300">
            {referenceMin} – {referenceMax} {unit}
          </span>
        </div>

        <div className="pt-1 text-[11px]">
          <span
            className={`px-2 py-0.5 rounded-full inline-block font-medium ${
              isWithin
                ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800/80"
                : "bg-amber-950/80 text-amber-300 border border-amber-800/80"
            }`}
          >
            {isWithin ? "Within reference range" : "Above reference range"}
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
      <div className="h-[340px] w-full flex items-center justify-center bg-slate-900/40 rounded-xl border border-slate-800 text-xs text-slate-500">
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
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 px-1">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-teal-400 inline-block shadow-sm shadow-teal-500/50" />
            <span className="text-slate-300 font-medium">{testName} ({unit})</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-2 rounded bg-teal-500/20 border border-teal-500/40 inline-block" />
            <span>Target Reference Zone ({referenceMin} – {referenceMax} {unit})</span>
          </div>
        </div>

        <span className="text-[11px] font-mono text-slate-500">
          Source: Verified Patient Lab Panels (2026)
        </span>
      </div>

      {/* Chart Canvas */}
      <div className="h-[340px] w-full p-2 bg-slate-950/50 rounded-xl border border-slate-800/80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="month_label"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: "#334155" }}
            />

            <YAxis
              domain={[domainMin, domainMax]}
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: "#334155" }}
              unit={` ${unit.split("/")[0]}`}
            />

            {/* Shaded Reference Area */}
            <ReferenceArea
              y1={referenceMin}
              y2={referenceMax}
              fill="#0d9488"
              fillOpacity={0.08}
              stroke="#0d9488"
              strokeOpacity={0.25}
              strokeDasharray="2 2"
            />

            <ReferenceLine
              y={referenceMax}
              stroke="#14b8a6"
              strokeDasharray="4 4"
              strokeOpacity={0.6}
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
              stroke="#2dd4bf"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#0f172a",
                stroke: "#2dd4bf",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
                fill: "#2dd4bf",
                stroke: "#ffffff",
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
