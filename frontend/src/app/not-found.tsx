import React from "react";
import Link from "next/link";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 mx-auto">
          <FileQuestion className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-white">Report Not Found</h1>
        <p className="text-xs text-slate-400 leading-relaxed">
          The requested medical report or biomarker could not be located in your patient archive.
        </p>
        <div className="pt-2 flex items-center justify-center gap-3">
          <Link href="/dashboard">
            <Button variant="primary" size="md">
              <Home className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Button>
          </Link>
          <Link href="/history">
            <Button variant="secondary" size="md">
              <span>View All Reports</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
