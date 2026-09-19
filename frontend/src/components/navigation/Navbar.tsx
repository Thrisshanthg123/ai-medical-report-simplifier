"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Upload,
  LayoutDashboard,
  History,
  GitCompare,
  Menu,
  X,
  LogOut,
  LogIn,
  User as UserIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Upload Report", href: "/upload", icon: Upload },
  { label: "History", href: "/history", icon: History },
  { label: "Compare", href: "/compare", icon: GitCompare },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut, loading } = useAuth();
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

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

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

        {/* Primary Action Button & Auth Controls */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 min-h-target px-4 py-2 rounded-control bg-brand hover:bg-brand-hover text-surface font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <Upload className="w-4 h-4" aria-hidden="true" />
            <span>Upload report</span>
          </Link>

          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-2 pl-2 border-l border-border">
                  <div
                    className="flex items-center gap-1.5 text-xs text-ink max-w-[140px] truncate"
                    title={user.email}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-tint border border-brand/30 flex items-center justify-center text-brand shrink-0">
                      <UserIcon className="w-3 h-3" />
                    </div>
                    <span className="truncate">{user.email?.split("@")[0]}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="p-1.5 rounded-control text-ink-muted hover:text-status-outside-text hover:bg-status-outside-bg transition-colors"
                    title="Sign Out"
                    aria-label="Sign Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 pl-2 border-l border-border">
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-control text-ink-muted hover:text-ink hover:bg-surface-subtle transition-colors"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Log In</span>
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-control border border-border text-ink hover:bg-surface-subtle transition-colors"
                  >
                    <span>Sign Up</span>
                  </Link>
                </div>
              )}
            </>
          )}
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

          <div className="pt-2 border-t border-border space-y-2">
            <Link
              href="/upload"
              className="flex items-center justify-center gap-2 min-h-target-lg w-full py-3 rounded-control bg-brand hover:bg-brand-hover text-surface font-semibold text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <Upload className="w-5 h-5" aria-hidden="true" />
              <span>Upload report</span>
            </Link>

            {user ? (
              <div className="pt-2 space-y-2 border-t border-border">
                <div className="px-3 py-1.5 text-xs text-ink-muted truncate">
                  Signed in as <span className="text-ink font-medium">{user.email}</span>
                </div>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleSignOut();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-control bg-status-outside-bg border border-status-outside-border text-status-outside-text font-medium text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 rounded-control bg-surface-subtle text-ink text-xs font-medium border border-border"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Log In</span>
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 rounded-control border border-border text-ink text-xs font-medium text-center hover:bg-surface-subtle"
                >
                  <span>Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
