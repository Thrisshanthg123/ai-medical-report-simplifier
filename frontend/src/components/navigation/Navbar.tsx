"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Activity,
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

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

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
                    ? "bg-teal-50 text-teal-800 border border-teal-200/80 font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", isActive ? "text-teal-600" : "text-slate-400")} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA / Auth Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/upload"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-all shadow-sm shadow-teal-900/30 hover:shadow-teal-900/50 active:scale-95"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Report</span>
          </Link>

          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 max-w-[140px] truncate" title={user.email}>
                    <div className="w-6 h-6 rounded-full bg-teal-950 border border-teal-800/80 flex items-center justify-center text-teal-300 shrink-0">
                      <UserIcon className="w-3 h-3" />
                    </div>
                    <span className="truncate">{user.email?.split("@")[0]}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="p-2 rounded-lg text-slate-400 hover:text-rose-300 hover:bg-rose-950/40 transition-colors"
                    title="Sign Out"
                    aria-label="Sign Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Log In</span>
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 hover:border-slate-600 hover:text-white transition-colors"
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
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-900/95 px-4 pt-2 pb-4 space-y-2">
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

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <Link
              href="/upload"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-teal-600 text-white font-medium text-sm"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Report</span>
            </Link>

            {user ? (
              <div className="pt-2 space-y-2">
                <div className="px-3 py-1.5 text-xs text-slate-400 truncate">
                  Signed in as <span className="text-slate-200 font-medium">{user.email}</span>
                </div>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleSignOut();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-300 font-medium text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Log In</span>
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 rounded-lg border border-slate-700 text-slate-200 text-xs font-medium text-center"
                >
                  <span>Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
