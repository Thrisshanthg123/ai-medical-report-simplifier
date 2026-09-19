import React from "react";
import Link from "next/link";
import { Activity, ShieldCheck, HeartPulse } from "lucide-react";
import { DisclaimerNotice } from "@/components/ui/DisclaimerNotice";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">H2 Medical Simplifier</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Transforming complex clinical diagnostic reports into clear, structured, and longitudinal visual insights. Designed for patient clarity, powered by document understanding and historical trend modeling.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                Evaluator-Friendly Architecture
              </span>
              <span className="inline-flex items-center gap-1">
                <HeartPulse className="w-3.5 h-3.5 text-teal-400" />
                Non-Diagnostic Tracking
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Application
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/dashboard" className="hover:text-teal-300 transition-colors">
                  Overview Dashboard
                </Link>
              </li>
              <li>
                <Link href="/upload" className="hover:text-teal-300 transition-colors">
                  Upload Report Simulation
                </Link>
              </li>
              <li>
                <Link href="/reports/rep-001" className="hover:text-teal-300 transition-colors">
                  Sample Report (September 2026)
                </Link>
              </li>
              <li>
                <Link href="/tests/fasting-glucose" className="hover:text-teal-300 transition-colors">
                  Historical Trend Chart
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Analysis Pipeline
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/history" className="hover:text-teal-300 transition-colors">
                  Timeline History
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-teal-300 transition-colors">
                  Report Comparison
                </Link>
              </li>
              <li>
                <Link href="/simplified/rep-001" className="hover:text-teal-300 transition-colors">
                  Plain-Language Summary
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Responsible AI Disclaimer */}
        <DisclaimerNotice variant="footer" />

        <div className="mt-4 pt-4 border-t border-slate-900 text-center text-[11px] text-slate-600">
          H2 AI Medical Report Simplifier • Hackathon Edition • Frontend Architecture
        </div>
      </div>
    </footer>
  );
}
