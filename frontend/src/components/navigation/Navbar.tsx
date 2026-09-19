"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Upload,
  LayoutDashboard,
  History,
  GitCompare,
  Menu,
  X,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Upload Report", href: "/upload", icon: Upload },
  { label: "History", href: "/history", icon: History },
  { label: "Compare", href: "/compare", icon: GitCompare },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold shadow-sm shadow-teal-500/20 group-hover:scale-105 transition-transform">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg text-white tracking-tight">H2</span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-teal-400 bg-teal-950/80 border border-teal-800/60 px-1.5 py-0.2 rounded">
                Evaluator Preview
              </span>
            </div>
            <span className="text-[11px] text-slate-400 -mt-1 font-normal hidden sm:inline">
              Medical Report Simplifier
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                  isActive
                    ? "bg-slate-800 text-teal-300 shadow-inner"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", isActive ? "text-teal-400" : "text-slate-400")} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/upload"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-all shadow-sm shadow-teal-900/30 hover:shadow-teal-900/50 active:scale-95"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Report</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-900/95 px-4 pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-800 text-teal-300"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-teal-400" : "text-slate-400")} />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/upload"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-teal-600 text-white font-medium text-sm"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Report</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
