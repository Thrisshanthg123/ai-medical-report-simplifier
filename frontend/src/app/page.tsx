import React from "react";
import Link from "next/link";
import { Upload, ArrowRight, Check, AlertCircle } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function HomePage() {
  return (
    <div className="bg-canvas text-ink py-10 sm:py-14">
      <div className="max-w-container mx-auto px-4 sm:px-6 space-y-16">
        {/* Hero Section: 2-Column on Desktop */}
        <section
          aria-labelledby="hero-heading"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
        >
          {/* Left Column: Headline, Description, CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h1
                id="hero-heading"
                className="font-serif font-semibold text-3xl sm:text-4xl text-ink tracking-tight leading-tight"
              >
                Understand your medical report in plain language.
              </h1>
              <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
                Upload a lab or medical report. H2 explains each result in simple
                words and points out what to ask your doctor.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/upload"
                  className="inline-flex items-center justify-center gap-2 min-h-target px-6 py-2.5 rounded-control bg-brand hover:bg-brand-hover text-surface font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  <span>Upload a report</span>
                </Link>

                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 min-h-target px-5 py-2.5 rounded-control bg-surface hover:bg-surface-subtle text-ink border border-border-strong font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <span>Go to dashboard</span>
                  <ArrowRight className="w-4 h-4 text-ink-muted" aria-hidden="true" />
                </Link>
              </div>

              <p className="text-xs text-ink-muted">
                Accepts PDF, JPG, JPEG, or PNG up to 25 MB.
              </p>
            </div>
          </div>

          {/* Right Column: Static Fictional Example Preview */}
          <div className="lg:col-span-6">
            <div
              className="rounded-panel border border-border bg-surface p-6 space-y-5"
              aria-label="Example report preview"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border">
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Report Preview
                  </span>
                  <p className="font-serif font-semibold text-base text-ink">
                    Routine Blood Panel
                  </p>
                </div>
                <span className="self-start sm:self-auto px-2 py-0.5 rounded-chip text-xs bg-surface-subtle border border-border text-ink-muted font-medium">
                  Example, not real patient data
                </span>
              </div>

              {/* Test List */}
              <div className="space-y-2.5">
                {/* Test 1 */}
                <div className="p-3 rounded-control bg-surface-subtle border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 text-xs">
                  <div>
                    <span className="font-medium text-ink block">
                      Fasting Blood Glucose
                    </span>
                    <span className="text-ink-muted">Ref: 70 – 99 mg/dL</span>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0 border-t sm:border-t-0 border-border/50">
                    <span className="font-medium tabular-nums text-ink text-sm">
                      108 mg/dL
                    </span>
                    <StatusBadge status="above_range" />
                  </div>
                </div>

                {/* Test 2 */}
                <div className="p-3 rounded-control bg-surface-subtle border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 text-xs">
                  <div>
                    <span className="font-medium text-ink block">
                      Serum Potassium
                    </span>
                    <span className="text-ink-muted">Ref: 3.5 – 5.0 mmol/L</span>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0 border-t sm:border-t-0 border-border/50">
                    <span className="font-medium tabular-nums text-ink text-sm">
                      4.2 mmol/L
                    </span>
                    <StatusBadge status="within_range" />
                  </div>
                </div>

                {/* Test 3 */}
                <div className="p-3 rounded-control bg-surface-subtle border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 text-xs">
                  <div>
                    <span className="font-medium text-ink block">
                      Total Cholesterol
                    </span>
                    <span className="text-ink-muted">Ref: 125 – 200 mg/dL</span>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0 border-t sm:border-t-0 border-border/50">
                    <span className="font-medium tabular-nums text-ink text-sm">
                      195 mg/dL
                    </span>
                    <StatusBadge status="within_range" />
                  </div>
                </div>
              </div>

              {/* Plain-Language Callout */}
              <div className="p-4 rounded-control bg-surface-subtle border border-border space-y-2 text-xs leading-relaxed">
                <div>
                  <span className="font-semibold text-ink block">
                    Plain-language explanation
                  </span>
                  <p className="text-ink-muted mt-1">
                    Your fasting glucose of 108 mg/dL is slightly above the
                    typical reference range. Potassium and total cholesterol are
                    both within normal boundaries.
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <span className="font-semibold text-ink block">
                    Questions for your doctor
                  </span>
                  <p className="text-ink-muted mt-0.5">
                    &ldquo;Should we recheck my fasting glucose at my next routine
                    visit, or consider any dietary adjustments?&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How H2 Works: 3 Plain Numbered Steps */}
        <section aria-labelledby="how-it-works-heading" className="space-y-6">
          <div className="border-t border-border pt-10">
            <h2
              id="how-it-works-heading"
              className="font-serif font-semibold text-2xl text-ink"
            >
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-panel border border-border bg-surface space-y-2">
              <span className="text-xs font-semibold text-brand">01</span>
              <h3 className="font-semibold text-base text-ink">
                Upload your report
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Select a document from your device in PDF, JPG, JPEG, or PNG
                format (up to 25 MB).
              </p>
            </div>

            <div className="p-5 rounded-panel border border-border bg-surface space-y-2">
              <span className="text-xs font-semibold text-brand">02</span>
              <h3 className="font-semibold text-base text-ink">
                H2 reads and simplifies it
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                H2 reads test names, measured values, and reference boundaries
                from your document and organizes them clearly.
              </p>
            </div>

            <div className="p-5 rounded-panel border border-border bg-surface space-y-2">
              <span className="text-xs font-semibold text-brand">03</span>
              <h3 className="font-semibold text-base text-ink">
                Review findings
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Read plain-language explanations, compare against past results,
                and review prepared questions for your next appointment.
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Get & What H2 Doesn't Do */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Features */}
          <div className="rounded-panel border border-border bg-surface p-6 space-y-4">
            <h2 className="font-serif font-semibold text-xl text-ink">
              What you will get
            </h2>
            <ul className="space-y-3 text-xs text-ink-muted">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-ink font-semibold">Plain-language summaries:</strong>{" "}
                  Clear overviews translating medical terminology into understandable prose.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-ink font-semibold">Reference ranges:</strong>{" "}
                  Factual comparison showing whether each test is in range or outside range.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-ink font-semibold">Simple test descriptions:</strong>{" "}
                  Concise explanations of what each test measures in the body.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-ink font-semibold">Track results over time:</strong>{" "}
                  Visual charts and timeline comparisons across past reports.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-ink font-semibold">Side-by-side comparison:</strong>{" "}
                  Direct differential view between any two reports.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-ink font-semibold">Dashboard:</strong>{" "}
                  see all your reports in one place.
                </span>
              </li>
            </ul>
          </div>

          {/* Boundaries */}
          <div className="rounded-panel border border-border bg-surface p-6 space-y-4">
            <h2 className="font-serif font-semibold text-xl text-ink">
              What H2 does not do
            </h2>
            <ul className="space-y-3 text-xs text-ink-muted">
              <li className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-ink font-semibold">No medical diagnosis:</strong>{" "}
                  H2 does not identify or diagnose diseases, conditions, or illnesses.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-ink font-semibold">No treatment advice:</strong>{" "}
                  H2 does not prescribe medication, suggest treatments, or modify dosages.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-ink font-semibold">No clinical substitute:</strong>{" "}
                  This tool cannot replace evaluation, advice, or care from a licensed healthcare provider.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-ink font-semibold">Summaries can contain mistakes:</strong>{" "}
                  Automated summaries may contain inaccuracies. Always verify important values directly with your physician.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
