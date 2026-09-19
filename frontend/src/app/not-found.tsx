import React from "react";
import Link from "next/link";
import { FileQuestion, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="rounded-panel border border-border bg-surface p-8 max-w-md w-full mx-auto text-center space-y-4">
        <div className="w-12 h-12 rounded-control bg-surface-subtle border border-border flex items-center justify-center text-ink-muted mx-auto">
          <FileQuestion className="w-6 h-6" aria-hidden="true" />
        </div>
        <h1 className="font-serif font-semibold text-xl text-ink">
          Report not found
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed">
          The requested report or biomarker could not be located. It may have been moved or does not exist.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Back to dashboard</span>
            </Button>
          </Link>
          <Link href="/upload" className="w-full sm:w-auto">
            <Button variant="secondary" size="md" className="w-full sm:w-auto">
              <span>Upload a report</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
