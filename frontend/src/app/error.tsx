"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="rounded-panel border border-border bg-surface p-8 max-w-md w-full mx-auto text-center space-y-4">
        <div className="w-12 h-12 rounded-control bg-status-outside-bg border border-status-outside-border flex items-center justify-center text-status-outside-text mx-auto">
          <AlertTriangle className="w-6 h-6" aria-hidden="true" />
        </div>
        <h1 className="font-serif font-semibold text-xl text-ink">
          The service is temporarily unavailable
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed">
          We encountered an issue while loading this page. Please try refreshing or return to your dashboard.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={() => reset()} variant="primary" size="md" className="w-full sm:w-auto">
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            <span>Try again</span>
          </Button>
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button variant="secondary" size="md" className="w-full sm:w-auto">
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Back to dashboard</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
