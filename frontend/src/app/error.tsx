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
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-rose-950/60 border border-rose-800/80 flex items-center justify-center text-rose-400 mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
        <p className="text-xs text-slate-400 leading-relaxed">
          An unexpected error occurred while rendering the medical report interface.
        </p>
        <div className="pt-2 flex items-center justify-center gap-3">
          <Button onClick={() => reset()} variant="primary" size="md">
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </Button>
          <Link href="/dashboard">
            <Button variant="secondary" size="md">
              <Home className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
