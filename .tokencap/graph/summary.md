# TokenCap Project Graph

Generated: 9/19/2026, 4:48:00 PM

> **Language Support Note**: The graph only parses JS/TS imports
> (`.js`, `.jsx`, `.ts`, `.tsx`, `.mjs`, `.cjs`). Files in other languages
> (Python, Go, Rust, etc.) appear as isolated nodes with no edges.

## Changed Files

- .tokencap/constitution/api-contracts.yaml
- .tokencap/constitution/constitution.yaml
- frontend/src/app/api/analysis/route.ts
- frontend/src/app/api/reports/upload/route.ts
- frontend/src/components/upload/ProcessingPipeline.tsx
- frontend/src/lib/ai.ts
- frontend/src/lib/api.ts
- frontend/src/lib/ml.ts
- frontend/src/lib/supabase.ts

## File Relationships

.kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportViewToggle.tsx
→ .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultCard.tsx
→ .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultTable.tsx

.kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/SimplifiedReportView.tsx
→ .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ImportantFindings.tsx
→ .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/MedicalTermsExplained.tsx
→ .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx

.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/AnomalyBadge.tsx
→ .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx

.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/StatusBadge.tsx
→ .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx

.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/TrendBadge.tsx
→ .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx

.kilo/worktrees/ginger-myrtle/frontend/src/lib/api.ts
→ .kilo/worktrees/ginger-myrtle/frontend/src/lib/mock-data.ts

frontend/src/components/reports/ReportViewToggle.tsx
→ frontend/src/components/reports/TestResultCard.tsx
→ frontend/src/components/reports/TestResultTable.tsx

frontend/src/components/simplified/SimplifiedReportView.tsx
→ frontend/src/components/simplified/ImportantFindings.tsx
→ frontend/src/components/simplified/MedicalTermsExplained.tsx
→ frontend/src/components/simplified/ClearNextActions.tsx

frontend/src/components/ui/AnomalyBadge.tsx
→ frontend/src/components/ui/Badge.tsx

frontend/src/components/ui/StatusBadge.tsx
→ frontend/src/components/ui/Badge.tsx

frontend/src/components/ui/TrendBadge.tsx
→ frontend/src/components/ui/Badge.tsx

frontend/src/lib/ai.ts
→ frontend/src/lib/validation.ts

frontend/src/schemas/medicalReport.ts
⇒ frontend/src/lib/validation.ts

## Important Nodes

- .kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/loading.tsx — test
- .kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/page.tsx — test
- .kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTable.tsx — test
- .kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTrendChart.tsx — test
- .kilo/worktrees/ginger-myrtle/frontend/src/components/tests/MLInsightCard.tsx — test
- .kilo/worktrees/ginger-myrtle/frontend/src/components/tests/TestSelectorNav.tsx — test
- frontend/src/app/api/tests/[slug]/history/route.ts — test
- frontend/src/app/tests/[testName]/loading.tsx — test
- frontend/src/app/tests/[testName]/page.tsx — test
- frontend/src/components/tests/HistoricalTable.tsx — test
- frontend/src/components/tests/HistoricalTrendChart.tsx — test
- frontend/src/components/tests/MLInsightCard.tsx — test
- frontend/src/components/tests/TestSelectorNav.tsx — test
- .kilo/worktrees/ginger-myrtle/frontend/src/app/compare/loading.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/compare/page.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/loading.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/page.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/error.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/history/loading.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/history/page.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/loading.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/loading.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/loading.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/page.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/upload/page.tsx — route
- frontend/src/app/compare/loading.tsx — route
- frontend/src/app/compare/page.tsx — route
- frontend/src/app/dashboard/loading.tsx — route
- frontend/src/app/dashboard/page.tsx — route
- frontend/src/app/error.tsx — route
- frontend/src/app/history/loading.tsx — route
- frontend/src/app/history/page.tsx — route
- frontend/src/app/layout.tsx — route
- frontend/src/app/loading.tsx — route
- frontend/src/app/not-found.tsx — route
- frontend/src/app/page.tsx — route
- frontend/src/app/reports/[id]/loading.tsx — route
- frontend/src/app/reports/[id]/page.tsx — route
- frontend/src/app/simplified/[id]/loading.tsx — route
- frontend/src/app/simplified/[id]/page.tsx — route
- frontend/src/app/upload/page.tsx — route
- .kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts — api
- .kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts — api
- .kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts — api
- frontend/src/app/api/analysis/route.ts — api *(changed)*
- frontend/src/app/api/history/route.ts — api
- frontend/src/app/api/reports/[id]/route.ts — api
- frontend/src/app/api/reports/route.ts — api
- frontend/src/app/api/reports/upload/route.ts — api *(changed)*
- .kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/DashboardHeader.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/KeyInsightsList.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/RecentReportsList.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/StatsOverview.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/history/TimelineView.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/Footer.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/Navbar.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportHeader.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportSummaryBanner.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportViewToggle.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultCard.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultTable.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ImportantFindings.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/MedicalTermsExplained.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/SimplifiedReportView.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/AnomalyBadge.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Button.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Card.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/DisclaimerNotice.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Skeleton.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/StatusBadge.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/TrendBadge.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/upload/ProcessingPipeline.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/components/upload/UploadDropzone.tsx — component
- frontend/src/components/compare/ComparisonView.tsx — component
- frontend/src/components/dashboard/DashboardHeader.tsx — component
- frontend/src/components/dashboard/KeyInsightsList.tsx — component
- frontend/src/components/dashboard/RecentReportsList.tsx — component
- frontend/src/components/dashboard/StatsOverview.tsx — component
- frontend/src/components/history/TimelineView.tsx — component
- frontend/src/components/navigation/Footer.tsx — component
- frontend/src/components/navigation/Navbar.tsx — component
- frontend/src/components/reports/ReportHeader.tsx — component
- frontend/src/components/reports/ReportSummaryBanner.tsx — component
- frontend/src/components/reports/ReportViewToggle.tsx — component
- frontend/src/components/reports/TestResultCard.tsx — component
- frontend/src/components/reports/TestResultTable.tsx — component
- frontend/src/components/simplified/ClearNextActions.tsx — component
- frontend/src/components/simplified/ImportantFindings.tsx — component
- frontend/src/components/simplified/MedicalTermsExplained.tsx — component
- frontend/src/components/simplified/SimplifiedReportView.tsx — component
- frontend/src/components/ui/AnomalyBadge.tsx — component
- frontend/src/components/ui/Badge.tsx — component
- frontend/src/components/ui/Button.tsx — component
- frontend/src/components/ui/Card.tsx — component
- frontend/src/components/ui/DisclaimerNotice.tsx — component
- frontend/src/components/ui/Skeleton.tsx — component
- frontend/src/components/ui/StatusBadge.tsx — component
- frontend/src/components/ui/TrendBadge.tsx — component
- frontend/src/components/upload/ProcessingPipeline.tsx — component *(changed)*
- frontend/src/components/upload/UploadDropzone.tsx — component
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts — service
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/api.ts — service
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/file-validation.ts — service
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/ml.ts — service
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/mock-data.ts — service
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts — service
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/utils.ts — service
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/validation.ts — service
- frontend/src/lib/ai.ts — service *(changed)*
- frontend/src/lib/api.ts — service *(changed)*
- frontend/src/lib/file-validation.ts — service
- frontend/src/lib/ml.ts — service *(changed)*
- frontend/src/lib/supabase.ts — service *(changed)*
- frontend/src/lib/utils.ts — service
- frontend/src/lib/validation.ts — service
- .kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs — config
- .kilo/worktrees/ginger-myrtle/frontend/next.config.ts — config
- .kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs — config
- frontend/eslint.config.mjs — config
- frontend/next.config.ts — config
- frontend/postcss.config.mjs — config

## All Scanned Files

Total: 136 JS/TS files scanned.

### 🛣️ Route (32)

- .kilo/worktrees/ginger-myrtle/frontend/src/app/compare/loading.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/compare/page.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/loading.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/page.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/error.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/history/loading.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/history/page.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/loading.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/loading.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/loading.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/page.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/app/upload/page.tsx
- frontend/src/app/compare/loading.tsx
- frontend/src/app/compare/page.tsx
- frontend/src/app/dashboard/loading.tsx
- frontend/src/app/dashboard/page.tsx
- frontend/src/app/error.tsx
- frontend/src/app/history/loading.tsx
- frontend/src/app/history/page.tsx
- frontend/src/app/layout.tsx
- frontend/src/app/loading.tsx
- frontend/src/app/not-found.tsx
- frontend/src/app/page.tsx
- frontend/src/app/reports/[id]/loading.tsx
- frontend/src/app/reports/[id]/page.tsx
- frontend/src/app/simplified/[id]/loading.tsx
- frontend/src/app/simplified/[id]/page.tsx
- frontend/src/app/upload/page.tsx

### 🔌 Api (8)

- .kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts
- .kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts
- .kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts
- frontend/src/app/api/analysis/route.ts *(changed)*
- frontend/src/app/api/history/route.ts
- frontend/src/app/api/reports/[id]/route.ts
- frontend/src/app/api/reports/route.ts
- frontend/src/app/api/reports/upload/route.ts *(changed)*

### 🧩 Component (54)

- .kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/DashboardHeader.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/KeyInsightsList.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/RecentReportsList.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/StatsOverview.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/history/TimelineView.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/Footer.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/Navbar.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportHeader.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportSummaryBanner.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportViewToggle.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultCard.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultTable.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ImportantFindings.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/MedicalTermsExplained.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/SimplifiedReportView.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/AnomalyBadge.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Button.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Card.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/DisclaimerNotice.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Skeleton.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/StatusBadge.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/ui/TrendBadge.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/upload/ProcessingPipeline.tsx
- .kilo/worktrees/ginger-myrtle/frontend/src/components/upload/UploadDropzone.tsx
- frontend/src/components/compare/ComparisonView.tsx
- frontend/src/components/dashboard/DashboardHeader.tsx
- frontend/src/components/dashboard/KeyInsightsList.tsx
- frontend/src/components/dashboard/RecentReportsList.tsx
- frontend/src/components/dashboard/StatsOverview.tsx
- frontend/src/components/history/TimelineView.tsx
- frontend/src/components/navigation/Footer.tsx
- frontend/src/components/navigation/Navbar.tsx
- frontend/src/components/reports/ReportHeader.tsx
- frontend/src/components/reports/ReportSummaryBanner.tsx
- frontend/src/components/reports/ReportViewToggle.tsx
- frontend/src/components/reports/TestResultCard.tsx
- frontend/src/components/reports/TestResultTable.tsx
- frontend/src/components/simplified/ClearNextActions.tsx
- frontend/src/components/simplified/ImportantFindings.tsx
- frontend/src/components/simplified/MedicalTermsExplained.tsx
- frontend/src/components/simplified/SimplifiedReportView.tsx
- frontend/src/components/ui/AnomalyBadge.tsx
- frontend/src/components/ui/Badge.tsx
- frontend/src/components/ui/Button.tsx
- frontend/src/components/ui/Card.tsx
- frontend/src/components/ui/DisclaimerNotice.tsx
- frontend/src/components/ui/Skeleton.tsx
- frontend/src/components/ui/StatusBadge.tsx
- frontend/src/components/ui/TrendBadge.tsx
- frontend/src/components/upload/ProcessingPipeline.tsx *(changed)*
- frontend/src/components/upload/UploadDropzone.tsx

### ⚙️ Service (15)

- .kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/api.ts
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/file-validation.ts
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/ml.ts
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/mock-data.ts
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/utils.ts
- .kilo/worktrees/ginger-myrtle/frontend/src/lib/validation.ts
- frontend/src/lib/ai.ts *(changed)*
- frontend/src/lib/api.ts *(changed)*
- frontend/src/lib/file-validation.ts
- frontend/src/lib/ml.ts *(changed)*
- frontend/src/lib/supabase.ts *(changed)*
- frontend/src/lib/utils.ts
- frontend/src/lib/validation.ts

### 🔧 Config (6)

- .kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs
- .kilo/worktrees/ginger-myrtle/frontend/next.config.ts
- .kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs
- frontend/eslint.config.mjs
- frontend/next.config.ts
- frontend/postcss.config.mjs

### 📄 Unknown (8)

- .kilo/worktrees/ginger-myrtle/frontend/src/schemas/medicalReport.ts
- .kilo/worktrees/ginger-myrtle/frontend/src/types/medical.ts
- .tokencap/constitution/api-contracts.yaml *(changed)*
- .tokencap/constitution/constitution.yaml *(changed)*
- .tokencap/constitution/schema-invariants.yaml
- frontend/next-env.d.ts
- frontend/src/schemas/medicalReport.ts
- frontend/src/types/medical.ts
