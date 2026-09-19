"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Upload,
  LayoutDashboard,
  History,
  GitCompare,
  Menu,
  X,
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

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface">
      <div className="max-w-container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand Wordmark */}
        <Link
          href="/"
          className="flex items-baseline gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-control"
          aria-label="H2 Medical Report Simplifier Home"
        >
          <span className="font-serif font-semibold text-2xl text-ink tracking-tight">
            H2
          </span>
          <span className="text-xs text-ink-muted hidden sm:inline font-normal">
            Medical Report Simplifier
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 h-full"
          aria-label="Main Navigation"
        >
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
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-2 h-16 text-sm font-medium border-b-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                  isActive
                    ? "border-brand text-brand font-semibold"
                    : "border-transparent text-ink-muted hover:text-ink hover:border-border-strong"
                )}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 min-h-target px-4 py-2 rounded-control bg-brand hover:bg-brand-hover text-surface font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <Upload className="w-4 h-4" aria-hidden="true" />
            <span>Upload report</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden min-h-target min-w-target inline-flex items-center justify-center p-2 rounded-control text-ink-muted hover:text-ink hover:bg-surface-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="md:hidden border-b border-border bg-surface px-4 pt-2 pb-4 space-y-1"
        >
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
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 min-h-target-lg px-3 py-3 rounded-control text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                  isActive
                    ? "bg-brand-tint text-brand font-semibold"
                    : "text-ink-muted hover:text-ink hover:bg-surface-subtle"
                )}
              >
                <Icon className="w-5 h-5 text-ink-muted" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/upload"
              className="flex items-center justify-center gap-2 min-h-target-lg w-full py-3 rounded-control bg-brand hover:bg-brand-hover text-surface font-semibold text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <Upload className="w-5 h-5" aria-hidden="true" />
              <span>Upload report</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
