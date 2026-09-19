<!-- TokenCap v1.6 Savings: baseline 244,051 tok → actual 69,406 tok (71.6% saved) -->
# AI ENTRY POINT

This repository has been indexed by TokenCap.

Before analyzing files, read:

.tokencap/agent/START_HERE.md

Use:

- .tokencap/agent/agent-pack.md
- .tokencap/agent/allowed-context.json
- .tokencap/agent/context-manifest.json

Do not rediscover the repository from scratch.

---

# TokenCap Snapshot

| Field | Value |
| --- | --- |
| Generated | 2026-09-19T11:17:58.426Z |
| Workspace | e:\antigravity\versathon2.0\ai-medical-report-simplifier |
| Profile | balanced |
| Selected files | 59 |
| Source bytes | 219998 |
| Estimated source tokens | 61779 |

## Read First

This file is a compressed coding-session handoff. Read it before editing, then inspect the referenced files directly. Prefer the live repository over this snapshot when there is a conflict.

## TokenCap Intelligence Files

- TOKENCAP_GRAPH.md — Project dependency and architecture graph *(JS/TS projects only)*
- TOKENCAP_MEMORY.md — Developer notes, current task, constraints, and context memory

## Handoff Summary

| Field | Value |
| --- | --- |
| Read order | .tokencap/agent/START_HERE.md > .tokencap/agent/architecture.md > frontend/src/app/api/analysis/route.ts > frontend/src/components/upload/ProcessingPipeline.tsx > frontend/src/lib/ai.ts |
| Primary anchors | .tokencap/agent/START_HERE.md, .tokencap/agent/architecture.md, frontend/src/app/api/analysis/route.ts |
| Changed files | 39 |
| TODO notes | 24 |
| File budget used | 66% |
| Source budget used | 100% |
| Token estimate | 61779 |
| Contents mode | enabled |

## Handoff Guidelines

- Preserve user changes; avoid reverting unrelated work.
- Start with changed files and files marked `high-signal` in the manifest.
- Treat the Git diff as intent and verify changes in source files.
- Update this snapshot after meaningful edits or before handing off.

## Git Snapshot

| Field | Value |
| --- | --- |
| Branch | person4 |
| Git root | E:/antigravity/versathon2.0/ai-medical-report-simplifier |

Recent commits:
```text
0560904 feat: include ML training data and pre-trained anomaly model
8f02d6c Merge pull request #7 from Thrisshanthg123/feature/backend
59f545a Merge remote-tracking branch 'origin/main' into feature/backend
9941693 fix: update Gemini model to gemini-2.5-flash in extraction layer
ce0a385 feat: complete end-to-end medical report processing pipeline
def92fb Merge pull request #6 from Thrisshanthg123/person4
199ed41  reslove api conflict
24cdbb7 Merge pull request #5 from Thrisshanthg123/feature/h2-frontend-ui
```

Status:
```text
M  .env.example
M  .gitignore
M  .tokencap/agent/START_HERE.md
M  .tokencap/agent/agent-pack.md
M  .tokencap/agent/agent.json
M  .tokencap/agent/allowed-context.json
M  .tokencap/agent/architecture.md
M  .tokencap/agent/context-manifest.json
M  .tokencap/agent/model-instructions.md
M  .tokencap/agent/review-rules.md
M  .tokencap/agent/risk-map.md
M  .tokencap/agent/rules.md
M  .tokencap/agent/skills.md
M  .tokencap/agent/tech-stack.md
M  .tokencap/brain/brain-index.json
M  .tokencap/brain/knowledge.json
M  .tokencap/constitution/api-contracts.yaml
M  .tokencap/constitution/compliance-rules.md
M  .tokencap/constitution/constitution-graph.html
M  .tokencap/constitution/constitution-history/constitution-2026-09-19.json
M  .tokencap/constitution/constitution.json
M  .tokencap/constitution/constitution.md
M  .tokencap/constitution/constitution.yaml
M  .tokencap/constitution/public-contracts.md
M  .tokencap/constitution/security-boundaries.md
M  .tokencap/debug/notes.md
M  .tokencap/graph/summary.md
M  .tokencap/memory/current.md
M  .tokencap/memory/dev-notes.md
M  .tokencap/savings.json
M  .tokencap/snapshot.md
M  .tokencap/stats.json
M  frontend/src/app/api/analysis/route.ts
M  frontend/src/app/api/reports/upload/route.ts
M  frontend/src/components/upload/ProcessingPipeline.tsx
M  frontend/src/lib/ai.ts
M  frontend/src/lib/api.ts
M  frontend/src/lib/ml.ts
M  frontend/src/lib/supabase.ts
```

## Project Map

```text
.kilo/
.kilo/worktrees/
.kilo/worktrees/ginger-myrtle/
.kilo/worktrees/ginger-myrtle/docs/
.kilo/worktrees/ginger-myrtle/frontend/
.kilo/worktrees/ginger-myrtle/frontend/src/
.kilo/worktrees/ginger-myrtle/frontend/src/app/
.kilo/worktrees/ginger-myrtle/frontend/src/app/api/
.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/
.kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/
.kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/
.kilo/worktrees/ginger-myrtle/frontend/src/app/compare/
.kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/
.kilo/worktrees/ginger-myrtle/frontend/src/app/history/
.kilo/worktrees/ginger-myrtle/frontend/src/app/reports/
.kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/
.kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/
.kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/
.kilo/worktrees/ginger-myrtle/frontend/src/app/tests/
.kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/
.kilo/worktrees/ginger-myrtle/frontend/src/app/upload/
.kilo/worktrees/ginger-myrtle/frontend/src/components/
.kilo/worktrees/ginger-myrtle/frontend/src/components/compare/
.kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/
.kilo/worktrees/ginger-myrtle/frontend/src/components/history/
.kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/
.kilo/worktrees/ginger-myrtle/frontend/src/components/reports/
.kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/
.kilo/worktrees/ginger-myrtle/frontend/src/components/tests/
.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/
.kilo/worktrees/ginger-myrtle/frontend/src/components/upload/
.kilo/worktrees/ginger-myrtle/frontend/src/lib/
.kilo/worktrees/ginger-myrtle/frontend/src/schemas/
.kilo/worktrees/ginger-myrtle/frontend/src/types/
.kilo/worktrees/ginger-myrtle/ml/
.kilo/worktrees/ginger-myrtle/ml/app/
.kilo/worktrees/ginger-myrtle/ml/tests/
.kilo/worktrees/ginger-myrtle/ml/training/
.kilo/worktrees/ginger-myrtle/ocr/
.tokencap/
.tokencap/agent/
.tokencap/agent/detail/
.tokencap/brain/
.tokencap/constitution/
.tokencap/constitution/constitution-history/
.tokencap/debug/
.tokencap/graph/
.tokencap/memory/
docs/
frontend/
frontend/src/
frontend/src/app/
frontend/src/app/api/
frontend/src/app/api/analysis/
frontend/src/app/api/history/
frontend/src/app/api/reports/
frontend/src/app/api/reports/[id]/
frontend/src/app/api/reports/upload/
frontend/src/app/api/tests/
frontend/src/app/api/tests/[slug]/
frontend/src/app/api/tests/[slug]/history/
frontend/src/app/compare/
frontend/src/app/dashboard/
frontend/src/app/history/
frontend/src/app/reports/
frontend/src/app/reports/[id]/
frontend/src/app/simplified/
frontend/src/app/simplified/[id]/
frontend/src/app/tests/
frontend/src/app/tests/[testName]/
frontend/src/app/upload/
frontend/src/components/
frontend/src/components/compare/
frontend/src/components/dashboard/
frontend/src/components/history/
frontend/src/components/navigation/
frontend/src/components/reports/
frontend/src/components/simplified/
frontend/src/components/tests/
frontend/src/components/ui/
frontend/src/components/upload/
frontend/src/lib/
frontend/src/schemas/
frontend/src/types/
ml/
ml/app/
ml/data/
ml/tests/
ml/training/
ocr/
.kilo/worktrees/ginger-myrtle/README.md
.kilo/worktrees/ginger-myrtle/docs/architecture.md
.kilo/worktrees/ginger-myrtle/frontend/AGENTS.md
.kilo/worktrees/ginger-myrtle/frontend/CLAUDE.md
.kilo/worktrees/ginger-myrtle/frontend/README.md
.kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs
.kilo/worktrees/ginger-myrtle/frontend/next.config.ts
.kilo/worktrees/ginger-myrtle/frontend/package.json
.kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs
.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts
.kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts
.kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts
.kilo/worktrees/ginger-myrtle/frontend/src/app/compare/loading.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/compare/page.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/loading.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/page.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/error.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/globals.css
.kilo/worktrees/ginger-myrtle/frontend/src/app/history/loading.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/history/page.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/loading.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/loading.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/loading.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/page.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/loading.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/page.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/app/upload/page.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/DashboardHeader.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/KeyInsightsList.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/RecentReportsList.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/StatsOverview.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/history/TimelineView.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/Footer.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/Navbar.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportHeader.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportSummaryBanner.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportViewToggle.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultCard.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultTable.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ImportantFindings.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/MedicalTermsExplained.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/SimplifiedReportView.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTable.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTrendChart.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/tests/MLInsightCard.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/tests/TestSelectorNav.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/AnomalyBadge.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Button.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Card.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/DisclaimerNotice.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Skeleton.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/StatusBadge.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/TrendBadge.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/upload/ProcessingPipeline.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/components/upload/UploadDropzone.tsx
.kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts
.kilo/worktrees/ginger-myrtle/frontend/src/lib/api.ts
.kilo/worktrees/ginger-myrtle/frontend/src/lib/file-validation.ts
.kilo/worktrees/ginger-myrtle/frontend/src/lib/ml.ts
.kilo/worktrees/ginger-myrtle/frontend/src/lib/mock-data.ts
.kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts
.kilo/worktrees/ginger-myrtle/frontend/src/lib/utils.ts
.kilo/worktrees/ginger-myrtle/frontend/src/lib/validation.ts
.kilo/worktrees/ginger-myrtle/frontend/src/schemas/medicalReport.ts
.kilo/worktrees/ginger-myrtle/frontend/src/types/medical.ts
.kilo/worktrees/ginger-myrtle/frontend/tsconfig.json
.kilo/worktrees/ginger-myrtle/ml/app/__init__.py
.kilo/worktrees/ginger-myrtle/ml/app/anomaly.py
.kilo/worktrees/ginger-myrtle/ml/app/features.py
.kilo/worktrees/ginger-myrtle/ml/app/main.py
.kilo/worktrees/ginger-myrtle/ml/app/reference_range.py
.kilo/worktrees/ginger-myrtle/ml/app/schemas.py
.kilo/worktrees/ginger-myrtle/ml/app/trend.py
.kilo/worktrees/ginger-myrtle/ml/demo_runner.py
.kilo/worktrees/ginger-myrtle/ml/requirements.txt
.kilo/worktrees/ginger-myrtle/ml/tests/__init__.py
.kilo/worktrees/ginger-myrtle/ml/tests/test_analysis.py
.kilo/worktrees/ginger-myrtle/ml/training/train_anomaly_model_.py
.kilo/worktrees/ginger-myrtle/ocr/__init__.py
.kilo/worktrees/ginger-myrtle/ocr/extractor.py
.kilo/worktrees/ginger-myrtle/ocr/image_extractor.py
.kilo/worktrees/ginger-myrtle/ocr/pdf_extractor.py
.kilo/worktrees/ginger-myrtle/ocr/test_extractor.py
.tokencap/agent/START_HERE.md
.tokencap/agent/agent-pack.md
.tokencap/agent/agent.json
.tokencap/agent/allowed-context.json
.tokencap/agent/architecture.md
.tokencap/agent/context-manifest.json
.tokencap/agent/detail/index.md
.tokencap/agent/model-instructions.md
.tokencap/agent/review-rules.md
.tokencap/agent/risk-map.md
.tokencap/agent/rules.md
.tokencap/agent/skills.md
.tokencap/agent/tech-stack.md
.tokencap/brain/brain-index.json
.tokencap/brain/knowledge.json
.tokencap/constitution/api-contracts.yaml
.tokencap/constitution/architecture-laws.md
.tokencap/constitution/compliance-rules.md
.tokencap/constitution/constitution-graph.html
.tokencap/constitution/constitution-history/constitution-2026-09-19.json
.tokencap/constitution/constitution.json
.tokencap/constitution/constitution.md
.tokencap/constitution/constitution.yaml
.tokencap/constitution/critical-flows.md
.tokencap/constitution/public-contracts.md
.tokencap/constitution/schema-invariants.yaml
.tokencap/constitution/security-boundaries.md
.tokencap/debug/notes.md
.tokencap/graph/summary.md
.tokencap/memory/current.md
.tokencap/memory/dev-notes.md
.tokencap/savings.json
.tokencap/stats.json
AGENTS.md
README.md
docs/architecture.md
frontend/AGENTS.md
frontend/CLAUDE.md
frontend/README.md
frontend/eslint.config.mjs
... 88 more entries omitted
```

## File Manifest

| File | Bytes | Score | Why |
| --- | ---: | ---: | --- |
| .tokencap/agent/START_HERE.md | 1105 | 225 | changed, project-metadata, high-signal-doc |
| .tokencap/agent/architecture.md | 1120 | 155 | changed, high-signal-doc |
| frontend/src/app/api/analysis/route.ts | 935 | 150 | changed, source |
| frontend/src/components/upload/ProcessingPipeline.tsx | 10522 | 150 | changed, source |
| frontend/src/lib/ai.ts | 7654 | 150 | changed, source |
| frontend/src/lib/api.ts | 4059 | 150 | changed, source |
| frontend/src/lib/ml.ts | 7607 | 150 | changed, source |
| frontend/src/app/api/reports/upload/route.ts | 12229 | 149 | changed, source |
| frontend/src/lib/supabase.ts | 13792 | 149 | changed, source |
| .tokencap/agent/agent-pack.md | 4231 | 120 | changed |
| .tokencap/agent/agent.json | 8411 | 120 | changed |
| .tokencap/agent/allowed-context.json | 3404 | 120 | changed |
| .tokencap/agent/context-manifest.json | 6248 | 120 | changed |
| .tokencap/agent/model-instructions.md | 2947 | 120 | changed |
| .tokencap/agent/review-rules.md | 922 | 120 | changed |
| .tokencap/agent/risk-map.md | 2938 | 120 | changed |
| .tokencap/agent/rules.md | 2055 | 120 | changed |
| .tokencap/agent/skills.md | 1754 | 120 | changed |
| .tokencap/agent/tech-stack.md | 216 | 120 | changed |
| .tokencap/brain/brain-index.json | 8931 | 120 | changed |
| .tokencap/constitution/api-contracts.yaml | 2020 | 120 | changed |
| .tokencap/constitution/compliance-rules.md | 1763 | 120 | changed |
| .tokencap/constitution/constitution.md | 10938 | 120 | changed |
| .tokencap/constitution/constitution.yaml | 11154 | 120 | changed |
| .tokencap/constitution/public-contracts.md | 3348 | 120 | changed |
| .tokencap/constitution/security-boundaries.md | 839 | 120 | changed |
| .tokencap/debug/notes.md | 499 | 120 | changed |
| .tokencap/memory/current.md | 4154 | 120 | changed |
| .tokencap/memory/dev-notes.md | 3713 | 120 | changed |
| .tokencap/savings.json | 2647 | 120 | changed |
| .tokencap/stats.json | 2203 | 120 | changed |
| .tokencap/brain/knowledge.json | 19480 | 119 | changed |
| .tokencap/constitution/constitution-history/constitution-2026-09-19.json | 14293 | 119 | changed |
| .tokencap/constitution/constitution.json | 14293 | 119 | changed |
| .tokencap/graph/summary.md | 18976 | 119 | changed |
| .kilo/worktrees/ginger-myrtle/frontend/README.md | 1486 | 105 | project-metadata, high-signal-doc |
| .kilo/worktrees/ginger-myrtle/README.md | 107 | 105 | project-metadata, high-signal-doc |
| frontend/README.md | 1486 | 105 | project-metadata, high-signal-doc |
| README.md | 107 | 105 | project-metadata, high-signal-doc |
| .kilo/worktrees/ginger-myrtle/frontend/package.json | 737 | 70 | project-metadata |
| .kilo/worktrees/ginger-myrtle/frontend/tsconfig.json | 704 | 70 | project-metadata |
| .kilo/worktrees/ginger-myrtle/ml/requirements.txt | 65 | 70 | project-metadata |
| frontend/package.json | 770 | 70 | project-metadata |
| frontend/tsconfig.json | 704 | 70 | project-metadata |
| ml/requirements.txt | 58 | 70 | project-metadata |
| .kilo/worktrees/ginger-myrtle/frontend/src/components/tests/TestSelectorNav.tsx | 1334 | 48 | source, test |
| .kilo/worktrees/ginger-myrtle/docs/architecture.md | 0 | 35 | high-signal-doc |
| docs/architecture.md | 0 | 35 | high-signal-doc |
| .kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts | 148 | 30 | source |
| .kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts | 147 | 30 | source |
| .kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts | 578 | 30 | source |
| .kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts | 0 | 30 | source |
| .kilo/worktrees/ginger-myrtle/frontend/src/lib/ml.ts | 0 | 30 | source |
| .kilo/worktrees/ginger-myrtle/frontend/src/lib/validation.ts | 0 | 30 | source |
| .kilo/worktrees/ginger-myrtle/frontend/src/schemas/medicalReport.ts | 0 | 30 | source |
| frontend/src/app/api/history/route.ts | 147 | 30 | source |
| .kilo/worktrees/ginger-myrtle/ml/tests/__init__.py | 20 | 18 | test |
| .kilo/worktrees/ginger-myrtle/ml/app/__init__.py | 0 | 0 | context |
| ml/app/__init__.py | 0 | 0 | context |

## Changed Files

- M  .env.example
- M  .gitignore
- M  .tokencap/agent/START_HERE.md
- M  .tokencap/agent/agent-pack.md
- M  .tokencap/agent/agent.json
- M  .tokencap/agent/allowed-context.json
- M  .tokencap/agent/architecture.md
- M  .tokencap/agent/context-manifest.json
- M  .tokencap/agent/model-instructions.md
- M  .tokencap/agent/review-rules.md
- M  .tokencap/agent/risk-map.md
- M  .tokencap/agent/rules.md
- M  .tokencap/agent/skills.md
- M  .tokencap/agent/tech-stack.md
- M  .tokencap/brain/brain-index.json
- M  .tokencap/brain/knowledge.json
- M  .tokencap/constitution/api-contracts.yaml
- M  .tokencap/constitution/compliance-rules.md
- M  .tokencap/constitution/constitution-graph.html
- M  .tokencap/constitution/constitution-history/constitution-2026-09-19.json
- M  .tokencap/constitution/constitution.json
- M  .tokencap/constitution/constitution.md
- M  .tokencap/constitution/constitution.yaml
- M  .tokencap/constitution/public-contracts.md
- M  .tokencap/constitution/security-boundaries.md
- M  .tokencap/debug/notes.md
- M  .tokencap/graph/summary.md
- M  .tokencap/memory/current.md
- M  .tokencap/memory/dev-notes.md
- M  .tokencap/savings.json
- M  .tokencap/snapshot.md
- M  .tokencap/stats.json
- M  frontend/src/app/api/analysis/route.ts
- M  frontend/src/app/api/reports/upload/route.ts
- M  frontend/src/components/upload/ProcessingPipeline.tsx
- M  frontend/src/lib/ai.ts
- M  frontend/src/lib/api.ts
- M  frontend/src/lib/ml.ts
- M  frontend/src/lib/supabase.ts

## Git Diff Snippets

### Staged Changes Diff

```diff
diff --git a/.env.example b/.env.example
index 8030360..96bb453 100644
--- a/.env.example
+++ b/.env.example
@@ -1,8 +1,9 @@
-# AI
+# AI Service API Key (Gemini)
 AI_API_KEY=
+GEMINI_API_KEY=
 
 # Supabase
-NEXT_PUBLIC_SUPABASE_URL=
+NEXT_PUBLIC_SUPABASE_URL=https://hxpskhiqfplhckwqeamm.supabase.co
 NEXT_PUBLIC_SUPABASE_ANON_KEY=
 SUPABASE_SERVICE_ROLE_KEY=
 
diff --git a/.gitignore b/.gitignore
index 2626880..64132e9 100644
--- a/.gitignore
+++ b/.gitignore
@@ -18,14 +18,14 @@ ml/venv/
 ml/.venv/
 
 # Medical/user data (ignore all except training data)
-ml/data/*
-!ml/data/medical_training_data.csv
+# ml/data/*
+# !ml/data/medical_training_data.csv
 
 # ML model files (ignore all except pre-trained anomaly model)
-ml/models/*.pth
-ml/models/*.pt
-ml/models/*.joblib
-!ml/models/anomaly_models.pkl
+# ml/models/*.pth
+# ml/models/*.pt
+# ml/models/*.joblib
+# !ml/models/anomaly_models.pkl
 
 # Logs
 *.log
diff --git a/.tokencap/agent/START_HERE.md b/.tokencap/agent/START_HERE.md
index 1835640..bb4daf6 100644
--- a/.tokencap/agent/START_HERE.md
+++ b/.tokencap/agent/START_HERE.md
@@ -1,6 +1,6 @@
 # START HERE - ai-medical-report-simplifier
 
-> Generated by TokenCap - 2026-09-19T06:10:15.426Z
+> Generated by TokenCap - 2026-09-19T09:59:32.522Z
 
 Project type: Unknown
 Architecture: Modular
@@ -22,8 +22,8 @@ Architecture: Modular
 ## Non-Negotiable Rules
 
 - Core library code lives in lib/ - keep it framework-agnostic
+- UI components live in components/ - keep them presentational
 - App Router entry points live in app/ - follow Next.js file conventions
-- API route handlers live in api/ - keep them thin, delegate to services
 
 ## Detail Map
 
diff --git a/.tokencap/agent/agent-pack.md b/.tokencap/agent/agent-pack.md
index 6d60d2b..d2025f8 100644
--- a/.tokencap/agent/agent-pack.md
+++ b/.tokencap/agent/agent-pack.md
@@ -4,7 +4,7 @@
 > Paste this entire file into ChatGPT, Claude, Gemini, Cursor, Windsurf, Cline, Roo Code, or OpenHands
 > to give the AI agent full project intelligence before it touches any code.
 
-**Generated:** 2026-09-19T06:10:15.425Z
+**Generated:** 2026-09-19T09:59:32.521Z
 **Project:** ai-medical-report-simplifier
 **Type:** Unknown
 
@@ -21,17 +21,20 @@
 Modular
 ```
 
-No end-to-end layered dependency chain was verified from the import graph; treat this repository as modular until a concrete flow is established. **Config** is the largest detected subsystem by file count. Detected subsystems: Config, Frontend, Utilities, Unclassified, API.
+No end-to-end layered dependency chain was verified from the import graph; treat this repository as modular until a concrete flow is established. **Frontend** is the largest detected subsystem by file count. Detected subsystems: Frontend, Dashboard, Unclassified, Utilities, API.
 
 ---
 
 ## 3. Project Rules
 
 - Core library code lives in lib/ - keep it framework-agnostic
+- UI components live in components/ - keep them presentational
 - App Router entry points live in app/ - follow Next.js file conventions
 - API route handlers live in api/ - keep them thin, delegate to services
 - Validation schemas live in schemas/ - use them at API boundaries
 - Shared TypeScript types live in types/ - import from here, not redeclared inline
+- Tests live in tests/ - co-locate unit tests near the file under test
+- Write tests for all service-layer functions
 
 ---
 
@@ -46,12 +49,18 @@ No end-to-end layered dependency chain was verified from the import graph; treat
 - `frontend/eslint.config.mjs`
 - `frontend/next.config.ts`
 - `frontend/postcss.config.mjs`
+- `frontend/src/app/api/analysis/route.ts`
 
 ---
 
 ## 5. High-Risk Areas
 
 - [HIGH] **API** - HIGH: API layer is the public contract. Breaking changes here break all consumers.
+- [MEDIUM] **Frontend** - MEDIUM: Frontend contains 42 modules with elevated risk.
+- [MEDIUM] **Ui (Badge)** - MEDIUM: Ui (Badge) contains 4 modules with elevated risk. Most-connected file: Badge.tsx (3 importers).
+- [MEDIUM] **Utilities** - MEDIUM: Utilities contains 11 modules with elevated risk.
+- [MEDIUM] **Unclassified: .tokencap/constitution** - MEDIUM: Unclassified: .tokencap/constitution contains 2 modules with elevated risk.
+- [MEDIUM] **Ui (Badge) 2** - MEDIUM: Ui (Badge) 2 contains 4 modules with elevated risk. Most-connected file: Badge.tsx (3 importers).
 
 ---
 
@@ -61,18 +70,29 @@ When any of these files change, review ALL files in the group together:
 
 ### [HIGH] API Review Group
 
-Shared dependency chain (3 files). Central file: route.ts with 0 importers. Changes in this group carry HIGH risk - review all listed files together.
+Shared dependency chain (9 files). Central file: route.ts with 0 importers. Changes in this group carry HIGH risk - review all listed files together.
 
+- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts`
+- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts`
+- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts`
 - `frontend/src/app/api/analysis/route.ts`
 - `frontend/src/app/api/history/route.ts`
+- `frontend/src/app/api/reports/[id]/route.ts`
 - `frontend/src/app/api/reports/route.ts`
+- `frontend/src/app/api/reports/upload/route.ts`
 
 ---
 
 ## 7. Core Features
 
 - Frontend
+- Dashboard
 - API
+- Simplified (ClearNextActions)
+- Ui (Badge)
+- Simplified (ClearNextActions) 2
+- Ui (Badge) 2
+- Reports (TestResultCard)
 
 ---
 
diff --git a/.tokencap/agent/agent.json b/.tokencap/agent/agent.json
index ea2df48..0bfd89d 100644
--- a/.tokencap/agent/agent.json
+++ b/.tokencap/agent/agent.json
@@ -1,7 +1,7 @@
 {
   "version": "0.8",
   "projectName": "ai-medical-report-simplifier",
-  "generatedAt": "2026-09-19T06:10:15.425Z",
+  "generatedAt": "2026-09-19T09:59:32.521Z",
   "projectType": "Unknown",
   "techStack": {
     "languages": [],
@@ -12,7 +12,9 @@
     "buildTools": [],
     "cloudSdks": [],
     "payments": [],
-    "externalServices": []
+    "externalServices": [
+      "External API via NEXT_PUBLIC_SUPABASE_URL: https://hxpskhiqfplhckwqeamm.supabase.co"
+    ]
   },
   "architecture": {
     "style": "Modular",
@@ -20,47 +22,107 @@
       "Modular"
     ],
     "clusters": [
+      {
+        "name": "Frontend",
+        "size": 42,
+        "risk": "MEDIUM",
+        "centralFile": "page.tsx"
+      },
+      {
+        "name": "Dashboard",
+        "size": 19,
+        "risk": "LOW",
+        "centralFile": "loading.tsx"
+      },
+      {
+        "name": "Unclassified",
+        "size": 16,
+        "risk": "MEDIUM",
+        "centralFile": "error.tsx"
+      },
+      {
+        "name": "Utilities",
+        "size": 11,
+        "risk": "MEDIUM",
+        "centralFile": "ai.ts"
+      },
+      {
+        "name": "API",
+        "size": 9,
+        "risk": "HIGH",
+        "centralFile": "route.ts"
+      },
       {
         "name": "Config",
-        "size": 6,
+        "size": 7,
         "risk": "LOW",
         "centralFile": "eslint.config.mjs"
       },
       {
-        "name": "Frontend",
+        "name": "Simplified (ClearNextActions)",
         "size": 4,
         "risk": "LOW",
-        "centralFile": "layout.tsx"
+        "centralFile": "ClearNextActions.tsx"
       },
       {
-        "name": "Utilities",
+        "name": "Ui (Badge)",
+        "size": 4,
+        "risk": "MEDIUM",
+        "centralFile": "Badge.tsx"
+      },
+      {
+        "name": "Simplified (ClearNextActions) 2",
         "size": 4,
         "risk": "LOW",
-        "centralFile": "ai.ts"
+        "centralFile": "ClearNextActions.tsx"
       },
       {
-        "name": "Unclassified",
+        "name": "Ui (Badge) 2",
+        "size": 4,
+        "risk": "MEDIUM",
+        "centralFile": "Badge.tsx"
+      },
+      {
+        "name": "Reports (TestResultCard)",
         "size": 3,
         "risk": "LOW",
-        "centralFile": "api-contracts.yaml"
+        "centralFile": "TestResultCard.tsx"
       },
       {
-        "name": "API",
+        "name": "Reports (TestResultCard) 2",
         "size": 3,
-        "risk": "HIGH",
-        "centralFile": "route.ts"
+        "risk": "LOW",
+        "centralFile": "TestResultCard.tsx"
       },
       {
-        "name": "Database",
-        "size": 1,
+        "name": "Lib (validation)",
+        "size": 3,
+        "risk": "MEDIUM",
+        "centralFile": "validation.ts"
+      },
+      {
+        "name": "Diff",
+        "size": 2,
         "risk": "LOW",
-        "centralFile": "schema-invariants.yaml"
+        "centralFile": "loading.tsx"
       },
       {
-        "name": "Dashboard",
+        "name": "Testing",
+        "size": 2,
+        "risk": "LOW",
+        "centralFile": "loading.tsx"
+      },
+      {
+        "name": "Lib (mock-data)",
+        "size": 2,
+        "risk": "LOW",
+        "centralFile": "mock-data.ts"
+      },
+      {
+        "name": "Database",
         "size": 1,
         "risk": "LOW",
-        "centralFile": "medicalReport.ts"
+        "centralFile": "schema-invariants.yaml"
       }
     ],
     "criticalChains": [],
@@ -75,42 +137,128 @@
     ".tokencap/constitution/schema-invariants.yaml",
     "frontend/eslint.config.mjs",
     "frontend/next.config.ts",
-    "frontend/postcss.config.mjs"
+    "frontend/postcss.config.mjs",
+    "frontend/src/app/api/analysis/route.ts"
   ],
   "riskAreas": [
     {
       "cluster": "API",
       "level": "HIGH",
       "files": [
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts",
         "frontend/src/app/api/analysis/route.ts",
         "frontend/src/app/api/history/route.ts",
-        "frontend/src/app/api/reports/route.ts"
+        "frontend/src/app/api/reports/[id]/route.ts",
+        "frontend/src/app/api/reports/route.ts",
+        "frontend/src/app/api/reports/upload/route.ts"
       ],
       "reason": "API layer is the public contract. Breaking changes here break all consumers."
+    },
+    {
+      "cluster": "Frontend",
+      "level": "MEDIUM",
+      "files": [
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/page.tsx",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/history/page.tsx",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx"
+      ],
+      "reason": "Frontend contains 42 modules with elevated risk."
+    },
+    {
+      "cluster": "Ui (Badge)",
+      "level": "MEDIUM",
+      "files": [
+        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/AnomalyBadge.tsx",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/StatusBadge.tsx",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/TrendBadge.tsx"
+      ],
+      "reason": "Ui (Badge) contains 4 modules with elevated risk. Most-connected file: Badge.tsx (3 importers)."
+    },
+    {
+      "cluster": "Utilities",
+      "level": "MEDIUM",
+      "files": [
+        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/file-validation.ts",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/ml.ts",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/utils.ts"
+      ],
+      "reason": "Utilities contains 11 modules with elevated risk."
+    },
+    {
+      "cluster": "Unclassified: .tokencap/constitution",
+      "level": "MEDIUM",
+      "files": [
+        ".tokencap/constitution/api-contracts.yaml",
+        ".tokencap/constitution/constitution.yaml"
+      ],
+      "reason": "Unclassified: .tokencap/constitution contains 2 modules with elevated risk."
+    },
+    {
+      "cluster": "Ui (Badge) 2",
+      "level": "MEDIUM",
+      "files": [
+        "frontend/src/components/ui/AnomalyBadge.tsx",
+        "frontend/src/components/ui/Badge.tsx",
+        "frontend/src/components/ui/StatusBadge.tsx",
+        "frontend/src/components/ui/TrendBadge.tsx"
+      ],
+      "reason": "Ui (Badge) 2 contains 4 modules with elevated risk. Most-connected file: Badge.tsx (3 importers)."
+    },
+    {
+      "cluster": "Lib (validation)",
+      "level": "MEDIUM",
+      "files": [
+        "frontend/src/lib/ai.ts",
+        "frontend/src/lib/validation.ts",
+        "frontend/src/schemas/medicalReport.ts"
+      ],
+      "reason": "Lib (validation) contains 3 modules with elevated risk. Most-connected file: validation.ts (2 importers)."
     }
   ],
   "reviewGroups": [
     {
       "name": "API Review Group",
       "files": [
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts",
+        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts",
         "frontend/src/app/api/analysis/route.ts",
         "frontend/src/app/api/history/route.ts",
-        "frontend/src/app/api/reports/route.ts"
+        "frontend/src/app/api/reports/[id]/route.ts",
+        "frontend/src/app/api/reports/route.ts",
+        "frontend/src/app/api/reports/upload/route.ts",
+        "frontend/src/app/api/tests/[slug]/history/route.ts"
       ],
-      "reason": "Shared dependency chain (3 files). Central file: route.ts with 0 importers. Changes in this group carry HIGH risk - review all listed files together.",
+      "reason": "Shared dependency chain (9 files). Central file: route.ts with 0 importers. Changes in this group carry HIGH risk - review all listed files together.",
       "risk": "HIGH"
     }
   ],
   "rules": [
     "Core library code lives in lib/ - keep it framework-agnostic",
+    "UI components live in components/ - keep them presentational",
     "App Router entry points live in app/ - follow Next.js file conventions",
     "API route handlers live in api/ - keep them thin, delegate to services",
     "Validation schemas live in schemas/ - use them at API boundaries",
-    "Shared TypeScript types live in types/ - import from here, not redeclared inline"
+    "Shared TypeScript types live in types/ - import from here, not redeclared inline",
+    "Tests live in tests/ - co-locate unit tests near the file under test",
+    "Write tests for all service-layer functions"
   ],
   "coreFeatures": [
     "Frontend",
-    "API"
+    "Dashboard",
+    "API",
+    "Simplified (ClearNextActions)",
+    "Ui (Badge)",
+    "Simplified (ClearNextActions) 2",
+    "Ui (Badge) 2",
+    "Reports (TestResultCard)"
   ],
   "agentInjectHooks": {}
 }
\ No newline at end of file
diff --git a/.tokencap/agent/allowed-context.json b/.tokencap/agent/allowed-context.json
index 4df23a2..87d6d0b 100644
--- a/.tokencap/agent/allowed-context.json
+++ b/.tokencap/agent/allowed-context.json
@@ -1,10 +1,91 @@
 {
+  "api": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route*",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route*",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route*",
+    "frontend/src/app/api/analysis/route*",
+    "frontend/src/app/api/history/route*",
+    "frontend/src/app/api/reports/[id]/route*",
+    "frontend/src/app/api/reports/route*",
+    "frontend/src/app/api/reports/upload/route*",
+    "frontend/src/app/api/tests/[slug]/history/route*"
+  ],
+  "frontend": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView*",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/history/TimelineView*",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/**",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/**",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/**",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/upload/**",
+    "frontend/src/app/**",
+    "frontend/src/components/compare/ComparisonView*",
+    "frontend/src/components/history/TimelineView*",
+    "frontend/src/components/navigation/**",
+    "frontend/src/components/tests/**",
+    "frontend/src/components/ui/**",
+    "frontend/src/components/upload/**"
+  ],
+  "other": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/types/medical*",
+    ".tokencap/constitution/**",
+    "frontend/src/app/**",
+    "frontend/src/types/medical*"
+  ],
+  "ui-badge": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/**"
+  ],
+  "utilities": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/**",
+    "frontend/src/lib/**"
+  ],
+  "ui-badge-2": [
+    "frontend/src/components/ui/**"
+  ],
+  "lib-validation": [
+    "frontend/src/lib/**",
+    "frontend/src/schemas/medicalReport*"
+  ],
   "config": [
     ".kilo/worktrees/ginger-myrtle/frontend/**",
     "frontend/**"
   ],
-  "frontend": [
-    ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
-    "frontend/src/app/**"
+  "diff": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/loading*",
+    "frontend/src/app/compare/loading*"
+  ],
+  "dashboard": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/**",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/**",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/**",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTrendChart*",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/schemas/medicalReport*",
+    "frontend/src/app/dashboard/**",
+    "frontend/src/components/dashboard/**",
+    "frontend/src/components/reports/**",
+    "frontend/src/components/tests/HistoricalTrendChart*"
+  ],
+  "testing": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/loading*",
+    "frontend/src/app/tests/[testName]/loading*"
+  ],
+  "reports-testresultcard": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/**"
+  ],
+  "simplified-clearnextactions": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/**"
+  ],
+  "lib-mock-data": [
+    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/**"
+  ],
+  "database": [
+    ".tokencap/constitution/schema-invariants*"
+  ],
+  "reports-testresultcard-2": [
+    "frontend/src/components/reports/**"
+  ],
+  "simplified-clearnextactions-2": [
+    "frontend/src/components/simplified/**"
   ]
 }
\ No newline at end of file
diff --git a/.tokencap/agent/architecture.md b/.tokencap/agent/architecture.md
index e6b5ea9..ce6a47c 100644
--- a/.tokencap/agent/architecture.md
+++ b/.tokencap/agent/architecture.md
@@ -1,12 +1,12 @@
 # Architecture - ai-medical-report-simplifier
 
-> Generated by TokenCap v0.8 - 2026-09-19T06:10:15.424Z
+> Generated by TokenCap v0.8 - 2026-09-19T09:59:32.520Z
 
 ---
 
 ## Overview
 
-No end-to-end layered dependency chain was verified from the import graph; treat this repository as modular until a concrete flow is established. **Config** is the largest detected subsystem by file count. Detected subsystems: Config, Frontend, Utilities, Unclassified, API.
+No end-to-end layered dependency chain was verified from the import graph; treat this repository as modular until a concrete flow is established. **Frontend** is the largest detected subsystem by file count. Detected subsystems: Frontend, Dashboard, Unclassified, Utilities, API.
 
 ---
 
@@ -22,11 +22,14 @@ Modular
 
 | Cluster | Files | Risk | Central File |
 | --- | --- | --- | --- |
-| **Config** | 6 | [LOW] LOW | `eslint.config.mjs` |
-| **Frontend** | 4 | [LOW] LOW | `layout.tsx` |
-| **Utilities** | 4 | [LOW] LOW | `ai.ts` |
-| **Unclassified** | 3 | [LOW] LOW | `api-contracts.yaml` |
-| **API** | 3 | [HIGH] HIGH | `route.ts` |
-| **Database** | 1 | [LOW] LOW | `schema-invariants.yaml` |
-| **Dashboard** | 1 | [LOW] LOW | `medicalReport.ts` |
+| **Frontend** | 42 | [MEDIUM] MEDIUM | `page.tsx` |
+| **Dashboard** | 19 | [LOW] LOW | `loading.tsx` |
+| **Unclassified** | 16 | [MEDIUM] MEDIUM | `error.tsx` |
+| **Utilities** | 11 | [MEDIUM] MEDIUM | `ai.ts` |
+| **API** | 9 | [HIGH] HIGH | `route.ts` |
+| **Config** | 7 | [LOW] LOW | `eslint.config.mjs` |
+| **Simplified (ClearNextActions)** | 4 | [LOW] LOW | `ClearNextActions.tsx` |
+| **Ui (Badge)** | 4 | [MEDIUM] MEDIUM | `Badge.tsx` |
+| **Simplified (ClearNextActions) 2** | 4 | [LOW] LOW | `ClearNextActions.tsx` |
+| **Ui (Badge) 2** | 4 | [MEDIUM] MEDIUM | `Badge.tsx` |
 
diff --git a/.tokencap/agent/context-manifest.json b/.tokencap/agent/context-manifest.json
index 7959496..77ea71c 100644
--- a/.tokencap/agent/context-manifest.json
+++ b/.tokencap/agent/context-manifest.json
@@ -1,6 +1,6 @@
 {
   "version": "1.0.0",
-  "generatedAt": "2026-09-19T06:10:15.427Z",
+  "generatedAt": "2026-09-19T09:59:32.523Z",
   "entry": "START_HERE.md",
   "project": {
     "name": "ai-medical-report-simplifier",
@@ -8,35 +8,171 @@
     "architectureStyle": "Modular"
   },
   "clusters": [
+    "api",
+    "frontend",
+    "other",
+    "ui-(badge)",
+    "utilities",
+    "ui-(badge)-2",
+    "lib-(validation)",
     "config",
-    "frontend"
+    "diff",
+    "dashboard",
+    "testing",
+    "reports-(testresultcard)",
+    "simplified-(clearnextactions)",
+    "lib-(mock-data)",
+    "database",
+    "reports-(testresultcard)-2",
+    "simplified-(clearnextactions)-2"
   ],
   "criticalFiles": [
     ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
     ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
     ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
-    "frontend/eslint.config.mjs",
-    "frontend/next.config.ts",
-    "frontend/postcss.config.mjs"
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts",
+    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts",
+    ".tokencap/constitution/api-contracts.yaml",
+    ".tokencap/constitution/constitution.yaml",
+    ".tokencap/constitution/schema-invariants.yaml",
+    "frontend/eslint.config.mjs"
+  ],
+  "riskAreas": [
+    {
+      "cluster": "api",
+      "level": "HIGH"
+    }
   ],
-  "riskAreas": [],
   "reviewGroups": [
     {
       "name": "API Review Group",
-      "fileCount": 3
+      "fileCount": 9
     }
   ],
   "allowedContext": {
+    "api": [
+      ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route*",
+      ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route*",
+      ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route*",
+      "frontend/src/app/api/analysis/route*",
+      "frontend/src/app/api/history/route*",
+      "frontend/src/app/api/reports/[id]/route*",
+      "frontend/src/app/api/reports/route*",
+      "frontend/src/app/api/reports/upload/route*",
+      "frontend/src/app/api/tests/[slug]/history/route*"
+    ],
+    "frontend": [
+      ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
+      ".kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView*",
+      ".kilo/worktrees/ginger-myrtle/frontend/src/components/history/TimelineView*",
+      ".kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/**",
+      ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/**",
+      ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/**",
+      ".kilo/worktrees/ginger-myrtle/frontend/src/components/upload/**",
+      "frontend/src/app/**",
+      "frontend/src/components/compare/ComparisonView*",
+      "frontend/src/components/history/TimelineView*",
+      "frontend/src/components/navigation/**",
+      "frontend/src/components/tests/**",
+      "frontend/src/components/ui/**",
+      "frontend/src/components/upload/**"
+    ],
+    "other": [
+      ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
+      ".kilo/worktrees/ginger-myrtle/frontend/src/types/medical*",
+      ".tokencap/constitution/**",
+      "frontend/src/app/**",
+      "frontend/src/types/medical*"
+    ],
+    "ui-badge": [
+      ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/**"
+    ],
+    "utilities": [
+      ".kilo/worktrees/ginger-myrtle/frontend/src/lib/**",
+      "frontend/src/lib/**"
+    ],
+    "ui-badge-2": [
+      "frontend/src/components/ui/**"
+    ],
+    "lib-validation": [
+      "frontend/src/lib/**",
+      "frontend/src/schemas/medicalReport*"
+    ],
     "config": [
       ".kilo/worktrees/ginger-myrtle/frontend/**",
       "frontend/**"
     ],
+    "diff": [
+      ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/loading*",
+      "frontend/src/app/compare/loading*"
+    

/* ...truncated for capsule budget... */
```

## TODO / FIXME / HACK Notes

- .tokencap/memory/current.md:29 - .tokencap/memory/current.md:29:- .tokencap/memory/current.md:22:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:30 - .tokencap/memory/current.md:30:- .tokencap/memory/current.md:23:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:31 - .tokencap/memory/current.md:31:- .tokencap/memory/current.md:24:- .tokencap/snapshot.md:47:| TODO notes | 0 |
- .tokencap/memory/current.md:32 - .tokencap/memory/current.md:32:- .tokencap/memory/current.md:25:- .tokencap/snapshot.md:422:## TODO / FIXME / HACK Notes
- .tokencap/memory/current.md:33 - .tokencap/memory/current.md:33:- .tokencap/memory/current.md:26:- .tokencap/snapshot.md:424:No TODO/FIXME/HACK notes found in selected files.
- .tokencap/memory/current.md:34 - .tokencap/memory/current.md:34:- .tokencap/memory/dev-notes.md:27:- .tokencap/memory/current.md:22:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:35 - .tokencap/memory/current.md:35:- .tokencap/memory/dev-notes.md:28:- .tokencap/memory/current.md:23:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:36 - .tokencap/memory/current.md:36:- .tokencap/memory/dev-notes.md:29:- .tokencap/memory/current.md:24:- .tokencap/snapshot.md:47:| TODO notes | 0 |
- .tokencap/memory/current.md:37 - .tokencap/memory/current.md:37:- .tokencap/memory/dev-notes.md:30:- .tokencap/memory/current.md:25:- .tokencap/snapshot.md:422:## TODO / FIXME / HACK Notes
- .tokencap/memory/current.md:38 - .tokencap/memory/current.md:38:- .tokencap/memory/dev-notes.md:31:- .tokencap/memory/current.md:26:- .tokencap/snapshot.md:424:No TODO/FIXME/HACK notes found in selected files.
- .tokencap/memory/current.md:39 - .tokencap/memory/current.md:39:- .tokencap/memory/dev-notes.md:32:- .tokencap/memory/dev-notes.md:20:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:40 - .tokencap/memory/current.md:40:- .tokencap/memory/dev-notes.md:33:- .tokencap/memory/dev-notes.md:21:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/dev-notes.md:27 - .tokencap/memory/current.md:29:- .tokencap/memory/current.md:29:- .tokencap/memory/current.md:22:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/dev-notes.md:28 - .tokencap/memory/current.md:30:- .tokencap/memory/current.md:30:- .tokencap/memory/current.md:23:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/dev-notes.md:29 - .tokencap/memory/current.md:31:- .tokencap/memory/current.md:31:- .tokencap/memory/current.md:24:- .tokencap/snapshot.md:47:| TODO notes | 0 |
- .tokencap/memory/dev-notes.md:30 - .tokencap/memory/current.md:32:- .tokencap/memory/current.md:32:- .tokencap/memory/current.md:25:- .tokencap/snapshot.md:422:## TODO / FIXME / HACK Notes
- .tokencap/memory/dev-notes.md:31 - .tokencap/memory/current.md:33:- .tokencap/memory/current.md:33:- .tokencap/memory/current.md:26:- .tokencap/snapshot.md:424:No TODO/FIXME/HACK notes found in selected files.
- .tokencap/memory/dev-notes.md:32 - .tokencap/memory/current.md:34:- .tokencap/memory/current.md:34:- .tokencap/memory/dev-notes.md:27:- .tokencap/memory/current.md:22:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detect
- .tokencap/memory/dev-notes.md:33 - .tokencap/memory/current.md:35:- .tokencap/memory/current.md:35:- .tokencap/memory/dev-notes.md:28:- .tokencap/memory/current.md:23:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers dete
- .tokencap/memory/dev-notes.md:34 - .tokencap/memory/current.md:36:- .tokencap/memory/current.md:36:- .tokencap/memory/dev-notes.md:29:- .tokencap/memory/current.md:24:- .tokencap/snapshot.md:47:| TODO notes | 0 |
- .tokencap/memory/dev-notes.md:35 - .tokencap/memory/current.md:37:- .tokencap/memory/current.md:37:- .tokencap/memory/dev-notes.md:30:- .tokencap/memory/current.md:25:- .tokencap/snapshot.md:422:## TODO / FIXME / HACK Notes
- .tokencap/memory/dev-notes.md:36 - .tokencap/memory/current.md:38:- .tokencap/memory/current.md:38:- .tokencap/memory/dev-notes.md:31:- .tokencap/memory/current.md:26:- .tokencap/snapshot.md:424:No TODO/FIXME/HACK notes found in selected files.
- .tokencap/memory/dev-notes.md:37 - .tokencap/memory/current.md:39:- .tokencap/memory/current.md:39:- .tokencap/memory/dev-notes.md:32:- .tokencap/memory/dev-notes.md:20:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers dete
- .tokencap/memory/dev-notes.md:38 - .tokencap/memory/current.md:40:- .tokencap/memory/current.md:40:- .tokencap/memory/dev-notes.md:33:- .tokencap/memory/dev-notes.md:21:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers de

## Selected File Context

### .tokencap/agent/START_HERE.md

| Field | Value |
| --- | --- |
| Bytes | 1105 |
| Score | 225 |
| Why | changed, project-metadata, high-signal-doc |
| Status | Full content |


```markdown
# START HERE - ai-medical-report-simplifier

> Generated by TokenCap - 2026-09-19T09:59:32.522Z

Project type: Unknown
Architecture: Modular

## Read in This Order

1. `allowed-context.json` - locate files for the current task.
2. `detail/index.md` - choose only the intelligence needed.
3. Use TokenCap MCP for overview, search, impact, memory, and debug context.

## Critical Areas

- [HIGH] API - HIGH

## Review Groups

- **API Review Group**: route.ts, route.ts, route.ts

## Non-Negotiable Rules

- Core library code lives in lib/ - keep it framework-agnostic
- UI components live in components/ - keep them presentational
- App Router entry points live in app/ - follow Next.js file conventions

## Detail Map

- `agent-pack.md`: full onboarding and architecture context
- `architecture.md`: dependency chains and boundaries
- `rules.md` and `review-rules.md`: conventions and review scope
- `risk-map.md`: high-risk files before editing
- `tech-stack.md` and `skills.md`: platform-specific context

Do not scan the repository broadly unless the generated context and MCP results are insufficient.
```

### .tokencap/agent/architecture.md

| Field | Value |
| --- | --- |
| Bytes | 1120 |
| Score | 155 |
| Why | changed, high-signal-doc |
| Status | Full content |


```markdown
# Architecture - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T09:59:32.520Z

---

## Overview

No end-to-end layered dependency chain was verified from the import graph; treat this repository as modular until a concrete flow is established. **Frontend** is the largest detected subsystem by file count. Detected subsystems: Frontend, Dashboard, Unclassified, Utilities, API.

---

## Architecture Pattern

```
Modular
```

---

## Subsystems

| Cluster | Files | Risk | Central File |
| --- | --- | --- | --- |
| **Frontend** | 42 | [MEDIUM] MEDIUM | `page.tsx` |
| **Dashboard** | 19 | [LOW] LOW | `loading.tsx` |
| **Unclassified** | 16 | [MEDIUM] MEDIUM | `error.tsx` |
| **Utilities** | 11 | [MEDIUM] MEDIUM | `ai.ts` |
| **API** | 9 | [HIGH] HIGH | `route.ts` |
| **Config** | 7 | [LOW] LOW | `eslint.config.mjs` |
| **Simplified (ClearNextActions)** | 4 | [LOW] LOW | `ClearNextActions.tsx` |
| **Ui (Badge)** | 4 | [MEDIUM] MEDIUM | `Badge.tsx` |
| **Simplified (ClearNextActions) 2** | 4 | [LOW] LOW | `ClearNextActions.tsx` |
| **Ui (Badge) 2** | 4 | [MEDIUM] MEDIUM | `Badge.tsx` |
```

### frontend/src/app/api/analysis/route.ts

| Field | Value |
| --- | --- |
| Bytes | 935 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```ts
import { NextResponse } from "next/server";
import { fetchMLAnalysis } from "@/lib/ml";

export async function GET() {
  return NextResponse.json({ message: "ML Analysis proxy endpoint ready. Use POST to submit test series data." });
}

export async function POST(request: Request) {
  try {
    const text = await request.text();
    if (!text || !text.trim()) {
      return NextResponse.json(
        { error: "Empty request body" },
        { status: 400 }
      );
    }
    const body = JSON.parse(text);
    const mlResult = await fetchMLAnalysis(body);
    
    if (!mlResult) {
      return NextResponse.json(
        { error: "ML service unavailable at http://localhost:8000" },
        { status: 503 }
      );
    }
    
    return NextResponse.json(mlResult);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to process analysis request" },
      { status: 400 }
    );
  }
}
```

### frontend/src/components/upload/ProcessingPipeline.tsx

| Field | Value |
| --- | --- |
| Bytes | 10522 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Loader2,
  Sparkles,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface StepItem {
  id: number;
  label: string;
  detail: string;
  badge: string;
}

const STEPS: StepItem[] = [
  {
    id: 1,
    label: "Reading report",
    detail: "Parsing document structure and preparing for AI extraction",
    badge: "Document Ingestion",
  },
  {
    id: 2,
    label: "Extracting information & test results",
    detail: "Gemini AI converting unstructured clinical text into structured lab metrics",
    badge: "AI Extraction",
  },
  {
    id: 3,
    label: "Analyzing historical trends",
    detail: "Cross-matching with prior reports to calculate rate of change and anomaly markers",
    badge: "Historical ML",
  },
  {
    id: 4,
    label: "Saving to database",
    detail: "Storing report, tests, and ML analysis in your secure health record",
    badge: "Database Save",
  },
];

interface ProcessingPipelineProps {
  fileName: string;
  file?: File;
  onComplete?: (reportId: string) => void;
}

export function ProcessingPipeline({
  fileName,
  file,
  onComplete,
}: ProcessingPipelineProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reportId, setReportId] = useState<string | null>(null);
  const uploadStarted = useRef(false);

  useEffect(() => {
    if (uploadStarted.current) return;
    uploadStarted.current = true;

    async function runUpload() {
      try {
        if (!file) {
          // No real file — show demo mode steps with fake timing
          await new Promise((r) => setTimeout(r, 900));
          setCurrentStep(2);
          await new Promise((r) => setTimeout(r, 1200));
          setCurrentStep(3);
          await new Promise((r) => setTimeout(r, 1200));
          setCurrentStep(4);
          await new Promise((r) => setTimeout(r, 900));
          setCurrentStep(5);
          setCompleted(true);
          return;
        }

        // Step 1: Reading report (immediate)
        setCurrentStep(1);

        const formData = new FormData();
        formData.append("file", file);

        // Step 2: AI Extraction starts
        await new Promise((r) => setTimeout(r, 400));
        setCurrentStep(2);

        const response = await fetch("/api/reports/upload", {
          method: "POST",
          body: formData,
        });

        // Step 3: Historical ML (show while processing response)
        setCurrentStep(3);

        const text = await response.text();
        let data: any = {};
        try {
          data = text ? JSON.parse(text) : {};
        } catch {
          throw new Error(
            `Server returned non-JSON response (status ${response.status}). ${
              text ? text.slice(0, 150) : "Empty response body."
            }`
          );
        }

        if (!response.ok || !data.success) {
          const serverError =
            data.error ||
            data.message ||
            `Upload failed with status ${response.status}`;
          throw new Error(serverError);
        }

        // Step 4: Saving to database
        setCurrentStep(4);
        await new Promise((r) => setTimeout(r, 400));

        const newReportId: string = data.report_id;
        setReportId(newReportId);
        setCurrentStep(5);
        setCompleted(true);

        if (onComplete) {
          onComplete(newReportId);
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Upload failed. Please try again.";
        setError(message);
        console.error("[ProcessingPipeline] Upload error:", err);
      }
    }

    runUpload();
  }, [file, onComplete]);

  const handleNavigate = () => {
    if (reportId) {
      router.push(`/reports/${reportId}`);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            {!error && (
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
            )}
            {error && <AlertCircle className="w-4 h-4 text-red-400" />}
            <h3 className="text-base font-bold text-white">
              {error ? "Processing Failed" : `Processing: ${fileName}`}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {error
              ? "An error occurred during report processing."
              : "AI document extraction + ML historical trend analysis"}
          </p>
        </div>

        {completed ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Analysis Ready
          </span>
        ) : error ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-red-300 bg-red-950/80 border border-red-800/80 px-2.5 py-1 rounded-full">
            Failed
          </span>
        ) : (
          <span className="text-xs font-mono text-teal-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1.5">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Step {Math.min(currentStep, 4)} of 4
          </span>
        )}
      </div>

      {/* Error display */}
      {error && (
        <div className="mt-6 p-4 rounded-xl bg-red-950/30 border border-red-800/60 text-xs text-red-300 space-y-2">
          <p className="font-semibold">Error Details:</p>
          <p className="leading-relaxed">{error}</p>
          <p className="text-slate-400 text-[11px]">
            Please check that your file is a valid medical report (PDF, JPG, or PNG) and try again.
          </p>
        </div>
      )}

      {/* Steps list */}
      {!error && (
        <div className="py-6 space-y-4">
          {STEPS.map((step) => {
            const isDone = currentStep > step.id;
            const isCurrent = currentStep === step.id;

            return (
              <div
                key={step.id}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isDone
                    ? "bg-slate-800/30 border-slate-800 text-slate-300"
                    : isCurrent
                    ? "bg-teal-950/20 border-teal-800/80 text-white shadow-sm"
                    : "bg-slate-900/30 border-slate-800/40 text-slate-500 opacity-60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    {isDone ? (
                      <div className="w-6 h-6 rounded-full bg-emerald-950/80 border border-emerald-700/80 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    ) : isCurrent ? (
                      <div className="w-6 h-6 rounded-full bg-teal-950/80 border border-teal-600 flex items-center justify-center text-teal-300 animate-pulse">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 text-xs font-mono">
                        {step.id}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`text-sm font-semibold ${
                          isCurrent
                            ? "text-teal-200"
                            : isDone
                            ? "text-slate-200"
                            : "text-slate-400"
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/70 text-slate-400">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Completion / Error CTA */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400">
          {error
            ? "Please try uploading again or contact support."
            : completed
            ? "Report analyzed successfully. Your results are ready to review."
            : "Processing your medical report — this usually takes 10–30 seconds..."}
        </div>

        {error ? (
          <Button
            onClick={() => router.push("/upload")}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <span>Try Again</span>
          </Button>
        ) : (
          <Button
            onClick={handleNavigate}
            disabled={!completed}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>View Report</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
```

### frontend/src/lib/ai.ts

| Field | Value |
| --- | --- |
| Bytes | 7654 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```ts
/**
 * AI extraction using Gemini.
 *
 * Sends the uploaded file bytes to Gemini with a structured prompt asking
 * it to extract all medical test results.
 *
 * SAFETY RULES enforced in the prompt:
 * - Only extract values that are literally present in the document
 * - Never fabricate reference ranges — use only what the report states
 * - Never provide medical diagnoses or recommendations
 * - Use neutral wording: "above the reported reference range"
 */
import { GoogleGenAI } from "@google/genai";
import { ExtractedReport, normalizeSlug, validateExtractedReport } from "./validation";

function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.AI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

function getMockExtractedReport(fileName: string): ExtractedReport {
  return {
    report_name: "Comprehensive Laboratory Panel",
    date: new Date().toISOString().split("T")[0],
    provider_or_lab: "Clinical Diagnostics (Demo Mode)",
    tests: [
      {
        test_name: "Fasting Blood Glucose",
        slug: "fasting-blood-glucose",
        value: 108,
        unit: "mg/dL",
        reference_range: "70 - 99 mg/dL",
        reference_min: 70,
        reference_max: 99,
        category: "Metabolic",
        simple_explanation: "Measures the level of glucose (sugar) in your blood after fasting.",
      },
      {
        test_name: "Total Cholesterol",
        slug: "total-cholesterol",
        value: 215,
        unit: "mg/dL",
        reference_range: "125 - 200 mg/dL",
        reference_min: 125,
        reference_max: 200,
        category: "Lipids",
        simple_explanation: "Measures the overall amount of cholesterol in your blood.",
      },
      {
        test_name: "Hemoglobin A1c",
        slug: "hemoglobin-a1c",
        value: 5.6,
        unit: "%",
        reference_range: "4.0 - 5.6 %",
        reference_min: 4.0,
        reference_max: 5.6,
        category: "Metabolic",
        simple_explanation: "Reflects average blood sugar levels over the past 2-3 months.",
      },
      {
        test_name: "Serum Creatinine",
        slug: "serum-creatinine",
        value: 0.95,
        unit: "mg/dL",
        reference_range: "0.74 - 1.35 mg/dL",
        reference_min: 0.74,
        reference_max: 1.35,
        category: "Kidney",
        simple_explanation: "Measures kidney function by checking creatinine levels in blood.",
      },
      {
        test_name: "White Blood Cell Count",
        slug: "white-blood-cell-count",
        value: 6.8,
        unit: "x10^3/uL",
        reference_range: "4.5 - 11.0 x10^3/uL",
        reference_min: 4.5,
        reference_max: 11.0,
        category: "Hematology",
        simple_explanation: "Measures the cells that help your immune system fight infection.",
      },
    ],
  };
}

const EXTRACTION_PROMPT = `You are a medical document parser. Extract all laboratory test results from the provided document.

STRICT RULES:
1. Only extract values that are LITERALLY present in the document. Do NOT invent or estimate any values.
2. Only include reference ranges that are EXPLICITLY stated in the document. If not stated, set reference_min and reference_max to null.
3. Do NOT provide any medical interpretation, diagnosis, or recommendation.
4. Use neutral wording only.
5. If a field cannot be reliably extracted, use null or an empty string.

Return ONLY a valid JSON object with this exact structure (no markdown, no explanation, just raw JSON):

{
  "report_name": "<name of the report or lab panel — e.g. 'Complete Blood Count' or 'Metabolic Panel'>",
  "date": "<report/collection date as ISO 8601 string, e.g. '2026-09-01' — use today's date if not found>",
  "provider_or_lab": "<laboratory or provider name — use 'Unknown Lab' if not found>",
  "tests": [
    {
      "test_name": "<full test name as written in report>",
      "slug": "<lowercase-hyphenated version of test_name, e.g. 'fasting-glucose'>",
      "value": <numeric value only, e.g. 109>,
      "unit": "<unit as written, e.g. 'mg/dL' — empty string if not stated>",
      "reference_range": "<full reference range as written, e.g. '70-99 mg/dL' — empty string if not stated>",
      "reference_min": <lower bound as number, e.g. 70 — null if not stated>,
      "reference_max": <upper bound as number, e.g. 99 — null if not stated>,
      "category": "<one of: Metabolic, Hematology, Lipids, Hormones, Vitamins, Liver, Kidney, Thyroid, Cardiac, General>",
      "simple_explanation": "<one sentence plain-language description of what this test measures, e.g. 'Measures blood sugar levels after fasting.' — do NOT include interpretation of the result>"
    }
  ]
}

Extract ALL tests visible in the document. If no tests can be found, return an empty tests array.`;

// ---------------------------------------------------------------------------
// Extract structured medical data from a file buffer
// ---------------------------------------------------------------------------
export async function extractMedicalReport(
  fileBuffer: Buffer,
  mimeType: "application/pdf" | "image/jpeg" | "image/png" | "image/jpg",
  fileName: string
): Promise<ExtractedReport> {
  // Normalize mime type
  const normalizedMime: "application/pdf" | "image/jpeg" | "image/png" =
    mimeType === "image/jpg" ? "image/jpeg" : mimeType;

  // Convert buffer to base64 for inline data
  const ai = getAIClient();
  if (!ai) {
    console.warn(
      `[ai] AI_API_KEY environment variable is not set — returning demonstration report extraction for "${fileName}"`
    );
    return getMockExtractedReport(fileName);
  }
  const base64Data = fileBuffer.toString("base64");
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        parts: [
          {
            inlineData: {
              mimeType: normalizedMime,
              data: base64Data,
            },
          },
          {
            text: EXTRACTION_PROMPT,
          },
        ],
      },
    ],
    config: {
      temperature: 0,
      responseMimeType: "application/json",
    },
  });

  const rawText = response.text ?? "";
  if (!rawText || !rawText.trim()) {
    throw new Error(
      `Gemini returned an empty response for "${fileName}". Please verify the file contains readable medical text or image data.`
    );
  }

  // Parse JSON from response
  let parsed: unknown;
  try {
    // Strip markdown fences if present
    const cleaned = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();
    if (!cleaned) {
      throw new Error("Extracted content was empty after stripping markdown syntax.");
    }
    parsed = JSON.parse(cleaned);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(
      `Gemini returned non-JSON response for "${fileName}" (${msg}): ${rawText.slice(0, 200)}`
    );
  }

  // Validate the parsed output
  const validation = validateExtractedReport(parsed);
  if (!validation.success) {
    throw new Error(
      `Gemini extraction failed validation for "${fileName}": ${validation.error}`
    );
  }

  // Ensure all slugs are normalized
  const report = validation.data;
  report.tests = report.tests.map((t) => ({
    ...t,
    slug: t.slug || normalizeSlug(t.test_name),
  }));

  return report;
}
```

### frontend/src/lib/api.ts

| Field | Value |
| --- | --- |
| Bytes | 4059 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```ts
import {
  MedicalReport,
  MedicalTest,
  HistoricalValue,
  ReportSummary,
  ReportComparisonItem,
} from "@/types/medical";

function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  return `http://localhost:${process.env.PORT || 3000}`;
}

export async function uploadMedicalReport(
  file: File
): Promise<{ report_id: string; message: string; report: MedicalReport }> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${getBaseUrl()}/api/reports/upload`, {
    method: "POST",
    body: formData,
  });

  const text = await res.text();
  let errData: any = {};
  try {
    errData = text ? JSON.parse(text) : {};
  } catch {
    errData = { error: `Server returned non-JSON response (status ${res.status}): ${text.slice(0, 100)}` };
  }

  if (!res.ok) {
    throw new Error(errData.error ?? `Upload failed: server returned status ${res.status}`);
  }
  return errData;
}

export async function getReports(): Promise<MedicalReport[]> {
  try {
    const res = await fetch(`${getBaseUrl()}/api/reports`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return [];
    }
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    return data.reports ?? [];
  } catch (error) {
    console.error("Failed to fetch reports:", error);
    return [];
  }
}

export async function getReport(id: string): Promise<MedicalReport | null> {
  try {
    const res = await fetch(`${getBaseUrl()}/api/reports/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    return data.report ?? data ?? null;
  } catch (error) {
    console.error(`Failed to fetch report ${id}:`, error);
    return null;
  }
}

export async function getTestHistory(
  slug: string
): Promise<{ test: MedicalTest; history: HistoricalValue[] } | null> {
  try {
    const res = await fetch(`${getBaseUrl()}/api/tests/${slug}/history`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    return data ?? null;
  } catch (error) {
    console.error(`Failed to fetch test history for ${slug}:`, error);
    return null;
  }
}

export async function getAnalysis(reportId: string): Promise<ReportSummary | null> {
  const report = await getReport(reportId);
  return report ? report.summary : null;
}

export async function compareReports(
  reportIdA: string,
  reportIdB: string
): Promise<{
  reportA: MedicalReport;
  reportB: MedicalReport;
  comparisons: ReportComparisonItem[];
} | null> {
  const [rA, rB] = await Promise.all([getReport(reportIdA), getReport(reportIdB)]);
  if (!rA || !rB) return null;

  const [prev, curr] =
    new Date(rA.date).getTime() < new Date(rB.date).getTime()
      ? [rA, rB]
      : [rB, rA];

  const comparisons: ReportComparisonItem[] = curr.tests.map((currTest) => {
    const prevTest = prev.tests.find((t) => t.slug === currTest.slug);
    const prevVal = prevTest ? prevTest.value : currTest.value;
    const diff = currTest.value - prevVal;
    const pct = prevVal !== 0 ? (diff / prevVal) * 100 : 0;

    return {
      test_name: currTest.test_name,
      slug: currTest.slug,
      unit: currTest.unit,
      reference_range: currTest.reference_range,
      previous_value: prevVal,
      previous_date: prev.date,
      current_value: currTest.value,
      current_date: curr.date,
      change_absolute: Math.round(diff * 10) / 10,
      change_percentage: Math.round(pct * 10) / 10,
      trend: currTest.trend,
      status: currTest.status,
      anomaly: currTest.anomaly,
    };
  });

  return {
    reportA: prev,
    reportB: curr,
    comparisons,
  };
}
```

### frontend/src/lib/ml.ts

| Field | Value |
| --- | --- |
| Bytes | 7607 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```ts
/**
 * ML HTTP client for the Python FastAPI service (ml/).
 *
 * Provides:
 * 1. batchAnalyzeTests: used by the upload pipeline to analyze multiple tests against historical data
 * 2. fetchMLAnalysis: single test series analysis (used by /api/analysis)
 *
 * Handles service unavailability gracefully — reports are still usable
 * without ML analysis.
 */
import { MLAnalysis, HistoricalValue, TrendDirection } from "@/types/medical";

const ML_API_URL =
  process.env.ML_API_URL ||
  process.env.NEXT_PUBLIC_ML_SERVICE_URL ||
  "http://localhost:8000";

// ---------------------------------------------------------------------------
// Single test payload & response interfaces (for /api/analysis compatibility)
// ---------------------------------------------------------------------------
export interface MLAnalysisPayload {
  test_name: string;
  values: (number | null | string)[];
  reference_range?: {
    min?: number | null;
    max?: number | null;
  };
  unit?: string;
}

export interface MLFindingsResponse {
  test_name: string;
  unit?: string | null;
  current_value?: number | null;
  previous_value?: number | null;
  statistics: {
    mean?: number | null;
    minimum?: number | null;
    maximum?: number | null;
    standard_deviation?: number | null;
  };
  change: {
    absolute?: number | null;
    percentage?: number | null;
  };
  trend: {
    direction: "increasing" | "decreasing" | "stable" | "insufficient_data";
    slope?: number | null;
  };
  reference_range: {
    min?: number | null;
    max?: number | null;
    within_range?: boolean | null;
    message?: string | null;
  };
  anomaly: {
    detected: boolean;
    score: number;
    status?: string | null;
  };
  data_points: number;
}

export async function fetchMLAnalysis(
  payload: MLAnalysisPayload
): Promise<MLFindingsResponse | null> {
  try {
    const res = await fetch(`${ML_API_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      console.warn(`ML Service responded with status ${res.status}`);
      return null;
    }

    const text = await res.text();
    if (!text || !text.trim()) return null;
    return JSON.parse(text) as MLFindingsResponse;
  } catch (error) {
    console.error("Failed to connect to ML service at " + ML_API_URL, error);
    return null;
  }
}

// ---------------------------------------------------------------------------
// ML service input types for batch processing
// ---------------------------------------------------------------------------
interface MLReferenceRangeInput {
  min?: number | null;
  max?: number | null;
}

interface MLTestInput {
  test_name: string;
  values: number[];
  reference_range?: MLReferenceRangeInput;
  unit?: string;
}

// Check ML service health
export async function checkMLHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${ML_API_URL}/health`, {
      signal: AbortSignal.timeout(3000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// Map ML direction string to frontend TrendDirection
function mapDirection(direction: string): TrendDirection {
  if (direction === "increasing") return "increasing";
  if (direction === "decreasing") return "decreasing";
  return "stable";
}

// Map MLFindingsResponse -> frontend MLAnalysis
function mapMLFindings(findings: MLFindingsResponse): MLAnalysis {
  const direction = mapDirection(findings.trend.direction);
  const anomalyDetected = findings.anomaly.detected;
  const changeAbs = findings.change.absolute;
  const changePct = findings.change.percentage;

  // Build a plain-language, non-diagnostic change label
  let changeLabel = "No prior data available for comparison.";
  if (changeAbs !== null && changeAbs !== undefined) {
    const sign = changeAbs > 0 ? "+" : "";
    const unitPart = findings.unit ? ` ${findings.unit}` : "";
    const pctPart =
      changePct !== null && changePct !== undefined
        ? ` (${changeAbs > 0 ? "+" : ""}${changePct.toFixed(1)}%)`
        : "";
    changeLabel = `${sign}${changeAbs}${unitPart} from prior value${pctPart}`;
  }

  // Neutral, non-diagnostic explanation
  let explanation: string;
  if (findings.data_points < 2) {
    explanation =
      "Insufficient historical data for trend analysis. This is the first recorded value for this test.";
  } else if (direction === "stable") {
    explanation = `The reported values have remained relatively stable across ${findings.data_points} recorded data point(s).`;
  } else {
    const dirWord = direction === "increasing" ? "an increasing" : "a decreasing";
    explanation = `The reported values show ${dirWord} trend across ${findings.data_points} recorded data point(s). This is a statistical observation and does not constitute medical advice.`;
  }

  if (anomalyDetected) {
    explanation +=
      " A statistical deviation was detected in the most recent value relative to prior observations.";
  }

  if (findings.reference_range?.message) {
    explanation += ` ${findings.reference_range.message}`;
  }

  return {
    trend_direction: direction,
    anomaly_detected: anomalyDetected,
    confidence_score: findings.anomaly.score,
    change_label: changeLabel,
    explanation,
    historical_points_analyzed: findings.data_points,
  };
}

// ---------------------------------------------------------------------------
// Batch-analyze multiple tests
// ---------------------------------------------------------------------------
export interface MLInput {
  test_name: string;
  unit: string;
  reference_min?: number | null;
  reference_max?: number | null;
  values: number[];
}

export async function batchAnalyzeTests(
  inputs: MLInput[]
): Promise<Map<string, MLAnalysis>> {
  const result = new Map<string, MLAnalysis>();

  if (inputs.length === 0) return result;

  // Filter to tests with at least 2 data points (historical + current)
  const eligible = inputs.filter((inp) => inp.values.length >= 2);
  if (eligible.length === 0) return result;

  const payload: MLTestInput[] = eligible.map((inp) => {
    const hasRef =
      (inp.reference_min !== null && inp.reference_min !== undefined) ||
      (inp.reference_max !== null && inp.reference_max !== undefined);

    return {
      test_name: inp.test_name,
      values: inp.values,
      unit: inp.unit || undefined,
      reference_range: hasRef
        ? {
            min: inp.reference_min ?? undefined,
            max: inp.reference_max ?? undefined,
          }
        : undefined,
    };
  });

  try {
    const res = await fetch(`${ML_API_URL}/analyze/batch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
      console.warn(`ML service returned ${res.status} — skipping ML analysis`);
      return result;
    }

    const text = await res.text();
    if (!text || !text.trim()) return result;
    const findings: MLFindingsResponse[] = JSON.parse(text);
    for (const f of findings) {
      result.set(f.test_name, mapMLFindings(f));
    }
  } catch (err) {
    console.warn("ML service unavailable:", err instanceof Error ? err.message : err);
  }

  return result;
}
```

### frontend/src/app/api/reports/upload/route.ts

| Field | Value |
| --- | --- |
| Bytes | 12229 |
| Score | 149 |
| Why | changed, source |
| Status | Full content |


```ts
/**
 * POST /api/reports/upload
 *
 * Pipeline:
 * 1. Accept multipart/form-data with "file" field
 * 2. Validate file type (PDF, JPG, PNG) and size (max 25 MB)
 * 3. Read file bytes
 * 4. Call Gemini to extract structured medical report JSON
 * 5. Validate extracted JSON with Zod
 * 6. Fetch historical values from Supabase for each test slug
 * 7. Call ML service for tests with sufficient history
 * 8. Compute per-test status, trend, change fields
 * 9. Save report + tests to Supabase
 * 10. Return { report_id, report }
 *
 * Safety: never fabricates values, never provides diagnosis
 */
import { NextRequest, NextResponse } from "next/server";
import { extractMedicalReport } from "@/lib/ai";
import { batchAnalyzeTests, MLInput } from "@/lib/ml";
import { validateMedicalReportFile } from "@/lib/file-validation";
import { saveReport, saveTests, getHistoricalTestValues } from "@/lib/supabase";
import type { SaveTestInput } from "@/lib/supabase";
import type { TestStatus, TrendDirection, HistoricalValue } from "@/types/medical";

// ---------------------------------------------------------------------------
// Determine TestStatus from value vs reference range
// ---------------------------------------------------------------------------
function computeStatus(
  value: number,
  refMin: number | null | undefined,
  refMax: number | null | undefined
): TestStatus {
  if (refMin === null || refMin === undefined || refMax === null || refMax === undefined) {
    return "within_range"; // Cannot assess without reference range
  }
  if (value < refMin) return "below_range";
  if (value > refMax) return "above_range";
  return "within_range";
}

// ---------------------------------------------------------------------------
// Compute change fields from historical values
// ---------------------------------------------------------------------------
function computeChange(currentValue: number, history: HistoricalValue[]) {
  if (history.length < 1) {
    return { previous_value: undefined, change_absolute: undefined, change_percentage: undefined };
  }
  // history is ordered ascending, so the last entry before current is the previous
  const prev = history[history.length - 1];
  const prevVal = prev.value;
  const absChange = Math.round((currentValue - prevVal) * 100) / 100;
  const pctChange = prevVal !== 0
    ? Math.round(((currentValue - prevVal) / Math.abs(prevVal)) * 10000) / 100
    : null;
  return {
    previous_value: prevVal,
    change_absolute: absChange,
    change_percentage: pctChange ?? undefined,
  };
}

// ---------------------------------------------------------------------------
// Main upload handler
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    // 1. Parse multipart form data
    const formData = await request.formData().catch(() => null);
    if (!formData) {
      return NextResponse.json(
        { success: false, error: "Invalid request: expected multipart/form-data" },
        { status: 400 }
      );
    }

    const fileEntry = formData.get("file");
    if (!fileEntry || typeof fileEntry === "string") {
      return NextResponse.json(
        { success: false, error: "No file provided. Include a 'file' field in the form data." },
        { status: 400 }
      );
    }

    const file = fileEntry as File;

    // 2. Validate file type and size
    const validation = validateMedicalReportFile({
      name: file.name,
      size: file.size,
      type: file.type,
    });

    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      );
    }

    // 3. Read file bytes
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    // Determine MIME type
    const mimeType = (
      file.type === "application/pdf"
        ? "application/pdf"
        : file.type === "image/png"
        ? "image/png"
        : "image/jpeg"
    ) as "application/pdf" | "image/jpeg" | "image/png";

    console.log(`[upload] Processing "${file.name}" (${file.size} bytes, ${mimeType})`);

    // 4. Extract structured data with Gemini
    const extractedReport = await extractMedicalReport(fileBuffer, mimeType, file.name);
    console.log(`[upload] Extracted ${extractedReport.tests.length} tests from "${file.name}"`);

    // 5. Fetch historical values from Supabase for each unique test slug
    const historicalMap = new Map<string, HistoricalValue[]>();
    await Promise.all(
      extractedReport.tests.map(async (test) => {
        try {
          const history = await getHistoricalTestValues(test.slug);
          historicalMap.set(test.slug, history);
        } catch {
          historicalMap.set(test.slug, []);
        }
      })
    );

    // 6. Call ML service for tests with sufficient history (at least 2 points including current)
    const mlInputs: MLInput[] = extractedReport.tests.map((test) => {
      const history = historicalMap.get(test.slug) ?? [];
      const historicalValues = history.map((h) => h.value);
      const values = [...historicalValues, test.value];

      return {
        test_name: test.test_name,
        unit: test.unit ?? "",
        reference_min: test.reference_min ?? null,
        reference_max: test.reference_max ?? null,
        values,
      };
    });

    const mlResults = await batchAnalyzeTests(mlInputs);
    console.log(`[upload] ML analysis completed for ${mlResults.size} test(s)`);

    // 7. Build per-test save inputs with computed fields
    const testInputs: SaveTestInput[] = extractedReport.tests.map((test) => {
      const history = historicalMap.get(test.slug) ?? [];
      const status = computeStatus(test.value, test.reference_min, test.reference_max);
      const changeFields = computeChange(test.value, history);
      const mlAnalysis = mlResults.get(test.test_name);

      // Determine trend direction from ML if available, else from change
      let trend: TrendDirection = "stable";
      if (mlAnalysis) {
        trend = mlAnalysis.trend_direction;
      } else if (changeFields.change_absolute !== undefined) {
        const abs = changeFields.change_absolute;
        if (abs > 0) trend = "increasing";
        else if (abs < 0) trend = "decreasing";
      }

      return {
        test_name: test.test_name,
        slug: test.slug,
        value: test.value,
        unit: test.unit ?? "",
        reference_range: test.reference_range ?? "",
        reference_min: test.reference_min ?? undefined,
        reference_max: test.reference_max ?? undefined,
        status,
        trend,
        previous_value: changeFields.previous_value,
        change_absolute: changeFields.change_absolute,
        change_percentage: changeFields.change_percentage,
        anomaly: mlAnalysis?.anomaly_detected ?? false,
        category: test.category ?? "General",
        simple_explanation: test.simple_explanation ?? "",
        ml_analysis: mlAnalysis ?? undefined,
      };
    });

    // 8. Save report to Supabase
    const reportId = await saveReport({
      report_name: extractedReport.report_name,
      report_date: extractedReport.date,
      provider_or_lab: extractedReport.provider_or_lab,
      status: "analyzed",
      summary_overview: buildSummaryOverview(testInputs),
      key_takeaways: buildKeyTakeaways(testInputs),
    });

    // 9. Save tests to Supabase
    const savedTests = await saveTests(reportId, testInputs);
    console.log(`[upload] Saved report ${reportId} with ${savedTests.length} tests`);

    // 10. Build full report response
    const withinRange = savedTests.filter((t) => t.status === "within_range").length;
    const outsideRange = savedTests.filter(
      (t) => t.status === "above_range" || t.status === "below_range"
    ).length;
    const trendsDetected = savedTests.filter((t) => t.trend !== "stable").length;
    const anomalies = savedTests.filter((t) => t.anomaly).length;

    const report = {
      id: reportId,
      report_name: extractedReport.report_name,
      date: extractedReport.date,
      provider_or_lab: extractedReport.provider_or_lab,
      tests_count: savedTests.length,
      status: "analyzed" as const,
      tests: savedTests,
      summary: {
        total_tests: savedTests.length,
        within_range_count: withinRange,
        outside_range_count: outsideRange,
        trends_detected_count: trendsDetected,
        anomalies_detected_count: anomalies,
        overview_text: buildSummaryOverview(testInputs),
        key_takeaways: buildKeyTakeaways(testInputs),
      },
    };

    return NextResponse.json({
      success: true,
      report_id: reportId,
      report,
      message: `Report processed successfully. ${savedTests.length} test(s) extracted.`,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("[upload] Error processing upload:", err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// Build plain-language summary overview
// ---------------------------------------------------------------------------
function buildSummaryOverview(tests: SaveTestInput[]): string {
  const total = tests.length;
  const outside = tests.filter(
    (t) => t.status === "above_range" || t.status === "below_range"
  ).length;
  const within = total - outside;

  if (total === 0) return "No tests were extracted from this report.";

  const parts: string[] = [
    `This report contains ${total} extracted biomarker(s).`,
    `${within} value(s) fall within the reported reference range.`,
  ];

  if (outside > 0) {
    parts.push(
      `${outside} value(s) are outside the reported reference range as stated in the document.`
    );
  }

  parts.push(
    "This summary is informational only and does not constitute medical advice."
  );

  return parts.join(" ");
}

// ---------------------------------------------------------------------------
// Build key takeaways list
// ---------------------------------------------------------------------------
function buildKeyTakeaways(tests: SaveTestInput[]): string[] {
  const takeaways: string[] = [];

  const above = tests.filter((t) => t.status === "above_range");
  const below = tests.filter((t) => t.status === "below_range");
  const increasing = tests.filter((t) => t.trend === "increasing");
  const decreasing = tests.filter((t) => t.trend === "decreasing");
  const anomalous = tests.filter((t) => t.anomaly);

  if (above.length > 0) {
    const names = above.map((t) => t.test_name).join(", ");
    takeaways.push(
      `${above.length} test(s) above the reported reference range: ${names}.`
    );
  }

  if (below.length > 0) {
    const names = below.map((t) => t.test_name).join(", ");
    takeaways.push(
      `${below.length} test(s) below the reported reference range: ${names}.`
    );
  }

  if (increasing.length > 0) {
    const names = increasing.map((t) => t.test_name).join(", ");
    takeaways.push(`Increasing trend observed in: ${names}.`);
  }

  if (decreasing.length > 0) {
    const names = decreasing.map((t) => t.test_name).join(", ");
    takeaways.push(`Decreasing trend observed in: ${names}.`);
  }

  if (anomalous.length > 0) {
    const names = anomalous.map((t) => t.test_name).join(", ");
    takeaways.push(
      `Statistical deviation detected in: ${names}. Discuss with your healthcare provider.`
    );
  }

  if (takeaways.length === 0) {
    takeaways.push("All extracted values are within the reference ranges stated in this report.");
  }

  takeaways.push(
    "These observations are based solely on values present in the uploaded document and do not constitute a medical diagnosis."
  );

  return takeaways;
}
```

### frontend/src/lib/supabase.ts

| Field | Value |
| --- | --- |
| Bytes | 13792 |
| Score | 149 |
| Why | changed, source |
| Status | Full content |


```ts
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import {
  MedicalReport,
  MedicalTest,
  HistoricalValue,
  ReportSummary,
  TestStatus,
  TrendDirection,
  ReportStatus,
  MLAnalysis,
} from "@/types/medical";

export function isSupabaseConfigured(): boolean {
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_KEY;
  return Boolean(key && key.trim());
}

let _supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (_supabaseClient) return _supabaseClient;

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://hxpskhiqfplhckwqeamm.supabase.co";

  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_KEY ||
    "dummy-anon-key";

  _supabaseClient = createClient(supabaseUrl, supabaseKey);
  return _supabaseClient;
}

export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = getSupabaseClient();
    const val = (client as any)[prop];
    return typeof val === "function" ? val.bind(client) : val;
  },
});

// Local in-memory fallback store when Supabase keys are not configured
const inMemoryReports: DbReportRow[] = [];
const inMemoryTests: DbTestRow[] = [];

// ==========================================
// DB-SPECIFIC ROW SCHEMAS (ACTUAL SUPABASE)
// ==========================================

export interface DbReportRow {
  id: string;
  report_name: string;
  report_date: string | null;
  provider_or_lab: string | null;
  status: string | null;
  summary_overview: string | null;
  key_takeaways: string[] | null;
  created_at?: string;
  tests?: DbTestRow[];
}

export interface DbTestRow {
  id: string;
  report_id: string;
  test_name: string | null;
  slug: string | null;
  value: number | null;
  unit: string | null;
  reference_range: string | null;
  reference_min: number | null;
  reference_max: number | null;
  status: string | null;
  trend: string | null;
  previous_value: number | null;
  change_absolute: number | null;
  change_percentage: number | null;
  anomaly: boolean | null;
  category: string | null;
  simple_explanation: string | null;
  ml_analysis: MLAnalysis | null;
  created_at?: string;
  reports?: {
    id: string;
    report_date: string | null;
  } | null;
}

export interface SaveReportInput {
  id?: string;
  report_name: string;
  report_date?: string | null;
  date?: string | null;
  provider_or_lab?: string | null;
  status?: ReportStatus | string | null;
  summary_overview?: string | null;
  summary?: {
    overview_text?: string;
    key_takeaways?: string[];
  } | null;
  key_takeaways?: string[] | null;
}

export interface SaveTestInput {
  test_name: string;
  slug: string;
  value: number;
  unit?: string;
  reference_range?: string;
  reference_min?: number;
  reference_max?: number;
  status?: TestStatus;
  trend?: TrendDirection;
  previous_value?: number;
  change_absolute?: number;
  change_percentage?: number;
  anomaly?: boolean;
  category?: string;
  simple_explanation?: string;
  ml_analysis?: MLAnalysis;
}

// ==========================================
// ADAPTER MAPPERS
// ==========================================

function getMonthLabel(dateString: string): string {
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleString("en-US", { month: "long" });
  } catch {
    return "";
  }
}

export function mapDbTestToMedicalTest(row: DbTestRow): MedicalTest {
  return {
    id: row.id,
    test_name: row.test_name ?? "",
    slug: row.slug ?? "",
    value: row.value !== null ? Number(row.value) : 0,
    unit: row.unit ?? "",
    reference_range: row.reference_range ?? "",
    reference_min: row.reference_min !== null ? Number(row.reference_min) : 0,
    reference_max: row.reference_max !== null ? Number(row.reference_max) : 0,
    status: (row.status as TestStatus) ?? "within_range",
    trend: (row.trend as TrendDirection) ?? "stable",
    previous_value:
      row.previous_value !== null && row.previous_value !== undefined
        ? Number(row.previous_value)
        : undefined,
    change_absolute:
      row.change_absolute !== null && row.change_absolute !== undefined
        ? Number(row.change_absolute)
        : undefined,
    change_percentage:
      row.change_percentage !== null && row.change_percentage !== undefined
        ? Number(row.change_percentage)
        : undefined,
    anomaly: Boolean(row.anomaly),
    category: row.category ?? "General",
    simple_explanation: row.simple_explanation ?? "",
    ml_analysis: row.ml_analysis ?? undefined,
  };
}

export function mapDbReportToMedicalReport(
  reportRow: DbReportRow,
  testsRows: DbTestRow[] = []
): MedicalReport {
  const tests = testsRows.map(mapDbTestToMedicalTest);

  const within_range_count = tests.filter((t) => t.status === "within_range").length;
  const outside_range_count = tests.filter(
    (t) => t.status === "above_range" || t.status === "below_range"
  ).length;
  const trends_detected_count = tests.filter((t) => t.trend && t.trend !== "stable").length;
  const anomalies_detected_count = tests.filter((t) => t.anomaly === true).length;

  const summary: ReportSummary = {
    total_tests: tests.length,
    within_range_count,
    outside_range_count,
    trends_detected_count,
    anomalies_detected_count,
    overview_text: reportRow.summary_overview ?? "",
    key_takeaways: Array.isArray(reportRow.key_takeaways) ? reportRow.key_takeaways : [],
  };

  return {
    id: reportRow.id,
    report_name: reportRow.report_name,
    date: reportRow.report_date ?? reportRow.created_at ?? new Date().toISOString(),
    provider_or_lab: reportRow.provider_or_lab ?? "",
    tests_count: tests.length,
    status: (reportRow.status as ReportStatus) ?? "analyzed",
    tests,
    summary,
  };
}

// ==========================================
// REUSABLE DATABASE ACCESS FUNCTIONS
// ==========================================

function genId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * 1. getReports()
 * Fetch all reports with their related tests, ordered by report_date descending.
 * Falls back to in-memory store when Supabase keys are not configured.
 */
export async function getReports(): Promise<MedicalReport[]> {
  if (!isSupabaseConfigured()) {
    console.warn("[supabase] Using in-memory store (demo mode) — NEXT_PUBLIC_SUPABASE_ANON_KEY not set");
    const sorted = [...inMemoryReports].sort((a, b) => {
      const aDate = a.report_date ?? a.created_at ?? "";
      const bDate = b.report_date ?? b.created_at ?? "";
      return bDate.localeCompare(aDate);
    });
    return sorted.map((row) =>
      mapDbReportToMedicalReport(row, inMemoryTests.filter((t) => t.report_id === row.id))
    );
  }

  const { data, error } = await supabase
    .from("reports")
    .select("*, tests(*)")
    .order("report_date", { ascending: false });

  if (error) {
    console.error("Error fetching reports from Supabase:", error);
    return [];
  }

  if (!data) return [];

  return (data as DbReportRow[]).map((row) =>
    mapDbReportToMedicalReport(row, row.tests ?? [])
  );
}

/**
 * 2. getReportById(reportId)
 * Fetch a single report and its related tests by ID.
 * Falls back to in-memory store when Supabase keys are not configured.
 */
export async function getReportById(reportId: string): Promise<MedicalReport | null> {
  if (!isSupabaseConfigured()) {
    const row = inMemoryReports.find((r) => r.id === reportId) ?? null;
    if (!row) return null;
    return mapDbReportToMedicalReport(row, inMemoryTests.filter((t) => t.report_id === reportId));
  }

  const { data, error } = await supabase
    .from("reports")
    .select("*, tests(*)")
    .eq("id", reportId)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching report ${reportId} from Supabase:`, error);
    return null;
  }

  if (!data) return null;

  const row = data as DbReportRow;
  return mapDbReportToMedicalReport(row, row.tests ?? []);
}

/**
 * 3. getHistoricalTestValues(slug)
 * Find tests matching the given test slug across historical reports.
 * Falls back to in-memory store when Supabase keys are not configured.
 */
export async function getHistoricalTestValues(slug: string): Promise<HistoricalValue[]> {
  if (!isSupabaseConfigured()) {
    const rows = inMemoryTests.filter((t) => t.slug === slug);
    const mapped: HistoricalValue[] = rows.map((row) => {
      const report = inMemoryReports.find((r) => r.id === row.report_id);
      const date = report?.report_date ?? row.created_at ?? new Date().toISOString();
      return {
        date,
        month_label: getMonthLabel(date),
        value: row.value !== null ? Number(row.value) : 0,
        reference_min: row.reference_min !== null ? Number(row.reference_min) : 0,
        reference_max: row.reference_max !== null ? Number(row.reference_max) : 0,
        unit: row.unit ?? "",
        report_id: row.report_id,
      };
    });
    mapped.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return mapped;
  }

  const { data, error } = await supabase
    .from("tests")
    .select("*, reports!inner(id, report_date)")
    .eq("slug", slug)
    .order("reports(report_date)", { ascending: true });

  if (error) {
    console.error(`Error fetching historical test values for slug '${slug}':`, error);
    return [];
  }

  if (!data) return [];

  const rows = data as unknown as DbTestRow[];

  const mapped: HistoricalValue[] = rows.map((row) => {
    const date = row.reports?.report_date ?? row.created_at ?? new Date().toISOString();
    return {
      date,
      month_label: getMonthLabel(date),
      value: row.value !== null ? Number(row.value) : 0,
      reference_min: row.reference_min !== null ? Number(row.reference_min) : 0,
      reference_max: row.reference_max !== null ? Number(row.reference_max) : 0,
      unit: row.unit ?? "",
      report_id: row.report_id,
    };
  });

  mapped.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return mapped;
}

/**
 * 4. saveReport(report)
 * Inserts one report record into the `reports` table.
 * Falls back to in-memory store when Supabase keys are not configured.
 */
export async function saveReport(report: SaveReportInput): Promise<string> {
  const payload = {
    report_name: report.report_name,
    report_date: report.report_date ?? report.date ?? new Date().toISOString(),
    provider_or_lab: report.provider_or_lab ?? "",
    status: report.status ?? "analyzed",
    summary_overview: report.summary_overview ?? report.summary?.overview_text ?? "",
    key_takeaways: report.key_takeaways ?? report.summary?.key_takeaways ?? [],
  };

  if (!isSupabaseConfigured()) {
    console.warn("[supabase] Using in-memory store (demo mode) — persisting report locally");
    const id = genId();
    const row: DbReportRow = {
      id,
      ...payload,
      created_at: new Date().toISOString(),
    };
    inMemoryReports.push(row);
    return id;
  }

  const { data, error } = await supabase
    .from("reports")
    .insert(payload)
    .select("id")
    .single();

  if (error) {
    console.error("Error inserting report into Supabase:", error);
    throw new Error(`Failed to save report: ${error.message}`);
  }

  return data.id;
}

/**
 * 5. saveTests(reportId, tests)
 * Inserts test records into the `tests` table associated with `report_id`.
 * Falls back to in-memory store when Supabase keys are not configured.
 */
export async function saveTests(
  reportId: string,
  tests: SaveTestInput[]
): Promise<MedicalTest[]> {
  if (!tests || tests.length === 0) {
    return [];
  }

  const rows = tests.map((t) => ({
    report_id: reportId,
    test_name: t.test_name,
    slug: t.slug,
    value: t.value,
    unit: t.unit ?? "",
    reference_range: t.reference_range ?? "",
    reference_min: t.reference_min ?? 0,
    reference_max: t.reference_max ?? 0,
    status: t.status ?? "within_range",
    trend: t.trend ?? "stable",
    previous_value: t.previous_value ?? null,
    change_absolute: t.change_absolute ?? null,
    change_percentage: t.change_percentage ?? null,
    anomaly: t.anomaly ?? false,
    category: t.category ?? "General",
    simple_explanation: t.simple_explanation ?? "",
    ml_analysis: t.ml_analysis ?? null,
  }));

  if (!isSupabaseConfigured()) {
    console.warn("[supabase] Using in-memory store (demo mode) — persisting tests locally");
    const savedRows: DbTestRow[] = rows.map((r) => ({
      ...r,
      id: genId(),
      created_at: new Date().toISOString(),
    }));
    inMemoryTests.push(...savedRows);
    return savedRows.map(mapDbTestToMedicalTest);
  }

  const { data, error } = await supabase
    .from("tests")
    .insert(rows)
    .select();

  if (error) {
    console.error(`Error inserting tests for report ${reportId} into Supabase:`, error);
    throw new Error(`Failed to save tests: ${error.message}`);
  }

  return (data as DbTestRow[]).map(mapDbTestToMedicalTest);
}
```

### .tokencap/agent/agent-pack.md

| Field | Value |
| --- | --- |
| Bytes | 4231 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Agent Pack - ai-medical-report-simplifier

> This file was auto-generated by **TokenCap v0.8**.
> Paste this entire file into ChatGPT, Claude, Gemini, Cursor, Windsurf, Cline, Roo Code, or OpenHands
> to give the AI agent full project intelligence before it touches any code.

**Generated:** 2026-09-19T09:59:32.521Z
**Project:** ai-medical-report-simplifier
**Type:** Unknown

---

## 1. Tech Stack


---

## 2. Architecture

```
Modular
```

No end-to-end layered dependency chain was verified from the import graph; treat this repository as modular until a concrete flow is established. **Frontend** is the largest detected subsystem by file count. Detected subsystems: Frontend, Dashboard, Unclassified, Utilities, API.

---

## 3. Project Rules

- Core library code lives in lib/ - keep it framework-agnostic
- UI components live in components/ - keep them presentational
- App Router entry points live in app/ - follow Next.js file conventions
- API route handlers live in api/ - keep them thin, delegate to services
- Validation schemas live in schemas/ - use them at API boundaries
- Shared TypeScript types live in types/ - import from here, not redeclared inline
- Tests live in tests/ - co-locate unit tests near the file under test
- Write tests for all service-layer functions

---

## 4. Important Files

- `.kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs`
- `.kilo/worktrees/ginger-myrtle/frontend/next.config.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs`
- `.tokencap/constitution/api-contracts.yaml`
- `.tokencap/constitution/constitution.yaml`
- `.tokencap/constitution/schema-invariants.yaml`
- `frontend/eslint.config.mjs`
- `frontend/next.config.ts`
- `frontend/postcss.config.mjs`
- `frontend/src/app/api/analysis/route.ts`

---

## 5. High-Risk Areas

- [HIGH] **API** - HIGH: API layer is the public contract. Breaking changes here break all consumers.
- [MEDIUM] **Frontend** - MEDIUM: Frontend contains 42 modules with elevated risk.
- [MEDIUM] **Ui (Badge)** - MEDIUM: Ui (Badge) contains 4 modules with elevated risk. Most-connected file: Badge.tsx (3 importers).
- [MEDIUM] **Utilities** - MEDIUM: Utilities contains 11 modules with elevated risk.
- [MEDIUM] **Unclassified: .tokencap/constitution** - MEDIUM: Unclassified: .tokencap/constitution contains 2 modules with elevated risk.
- [MEDIUM] **Ui (Badge) 2** - MEDIUM: Ui (Badge) 2 contains 4 modules with elevated risk. Most-connected file: Badge.tsx (3 importers).

---

## 6. Review Rules

When any of these files change, review ALL files in the group together:

### [HIGH] API Review Group

Shared dependency chain (9 files). Central file: route.ts with 0 importers. Changes in this group carry HIGH risk - review all listed files together.

- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts`
- `frontend/src/app/api/analysis/route.ts`
- `frontend/src/app/api/history/route.ts`
- `frontend/src/app/api/reports/[id]/route.ts`
- `frontend/src/app/api/reports/route.ts`
- `frontend/src/app/api/reports/upload/route.ts`

---

## 7. Core Features

- Frontend
- Dashboard
- API
- Simplified (ClearNextActions)
- Ui (Badge)
- Simplified (ClearNextActions) 2
- Ui (Badge) 2
- Reports (TestResultCard)

---

## 8. Agent Instructions

You are an AI agent working on **ai-medical-report-simplifier**.

Before making any changes:
1. Understand the **Modular** architecture pattern.
2. Follow all **Project Rules** listed in Section 3.
3. Check the **High-Risk Areas** - any change there requires extra review.
4. When touching files in a **Review Group**, review all files in that group together.
5. Never hard-code secrets or skip validation at API boundaries.

The most important files in this project are:
- `.kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs`
- `.kilo/worktrees/ginger-myrtle/frontend/next.config.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs`
- `.tokencap/constitution/api-contracts.yaml`
- `.tokencap/constitution/constitution.yaml`

Start here. Work methodically. Ask before making assumptions about intent.
```

### .tokencap/agent/agent.json

| Field | Value |
| --- | --- |
| Bytes | 8411 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```json
{
  "version": "0.8",
  "projectName": "ai-medical-report-simplifier",
  "generatedAt": "2026-09-19T09:59:32.521Z",
  "projectType": "Unknown",
  "techStack": {
    "languages": [],
    "frameworks": [],
    "databases": [],
    "auth": [],
    "testing": [],
    "buildTools": [],
    "cloudSdks": [],
    "payments": [],
    "externalServices": [
      "External API via NEXT_PUBLIC_SUPABASE_URL: https://hxpskhiqfplhckwqeamm.supabase.co"
    ]
  },
  "architecture": {
    "style": "Modular",
    "layers": [
      "Modular"
    ],
    "clusters": [
      {
        "name": "Frontend",
        "size": 42,
        "risk": "MEDIUM",
        "centralFile": "page.tsx"
      },
      {
        "name": "Dashboard",
        "size": 19,
        "risk": "LOW",
        "centralFile": "loading.tsx"
      },
      {
        "name": "Unclassified",
        "size": 16,
        "risk": "MEDIUM",
        "centralFile": "error.tsx"
      },
      {
        "name": "Utilities",
        "size": 11,
        "risk": "MEDIUM",
        "centralFile": "ai.ts"
      },
      {
        "name": "API",
        "size": 9,
        "risk": "HIGH",
        "centralFile": "route.ts"
      },
      {
        "name": "Config",
        "size": 7,
        "risk": "LOW",
        "centralFile": "eslint.config.mjs"
      },
      {
        "name": "Simplified (ClearNextActions)",
        "size": 4,
        "risk": "LOW",
        "centralFile": "ClearNextActions.tsx"
      },
      {
        "name": "Ui (Badge)",
        "size": 4,
        "risk": "MEDIUM",
        "centralFile": "Badge.tsx"
      },
      {
        "name": "Simplified (ClearNextActions) 2",
        "size": 4,
        "risk": "LOW",
        "centralFile": "ClearNextActions.tsx"
      },
      {
        "name": "Ui (Badge) 2",
        "size": 4,
        "risk": "MEDIUM",
        "centralFile": "Badge.tsx"
      },
      {
        "name": "Reports (TestResultCard)",
        "size": 3,
        "risk": "LOW",
        "centralFile": "TestResultCard.tsx"
      },
      {
        "name": "Reports (TestResultCard) 2",
        "size": 3,
        "risk": "LOW",
        "centralFile": "TestResultCard.tsx"
      },
      {
        "name": "Lib (validation)",
        "size": 3,
        "risk": "MEDIUM",
        "centralFile": "validation.ts"
      },
      {
        "name": "Diff",
        "size": 2,
        "risk": "LOW",
        "centralFile": "loading.tsx"
      },
      {
        "name": "Testing",
        "size": 2,
        "risk": "LOW",
        "centralFile": "loading.tsx"
      },
      {
        "name": "Lib (mock-data)",
        "size": 2,
        "risk": "LOW",
        "centralFile": "mock-data.ts"
      },
      {
        "name": "Database",
        "size": 1,
        "risk": "LOW",
        "centralFile": "schema-invariants.yaml"
      }
    ],
    "criticalChains": [],
    "evidence": []
  },
  "criticalFiles": [
    ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
    ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
    ".tokencap/constitution/api-contracts.yaml",
    ".tokencap/constitution/constitution.yaml",
    ".tokencap/constitution/schema-invariants.yaml",
    "frontend/eslint.config.mjs",
    "frontend/next.config.ts",
    "frontend/postcss.config.mjs",
    "frontend/src/app/api/analysis/route.ts"
  ],
  "riskAreas": [
    {
      "cluster": "API",
      "level": "HIGH",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts",
        "frontend/src/app/api/analysis/route.ts",
        "frontend/src/app/api/history/route.ts",
        "frontend/src/app/api/reports/[id]/route.ts",
        "frontend/src/app/api/reports/route.ts",
        "frontend/src/app/api/reports/upload/route.ts"
      ],
      "reason": "API layer is the public contract. Breaking changes here break all consumers."
    },
    {
      "cluster": "Frontend",
      "level": "MEDIUM",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/history/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx"
      ],
      "reason": "Frontend contains 42 modules with elevated risk."
    },
    {
      "cluster": "Ui (Badge)",
      "level": "MEDIUM",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/AnomalyBadge.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/StatusBadge.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/TrendBadge.tsx"
      ],
      "reason": "Ui (Badge) contains 4 modules with elevated risk. Most-connected file: Badge.tsx (3 importers)."
    },
    {
      "cluster": "Utilities",
      "level": "MEDIUM",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/file-validation.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/ml.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/utils.ts"
      ],
      "reason": "Utilities contains 11 modules with elevated risk."
    },
    {
      "cluster": "Unclassified: .tokencap/constitution",
      "level": "MEDIUM",
      "files": [
        ".tokencap/constitution/api-contracts.yaml",
        ".tokencap/constitution/constitution.yaml"
      ],
      "reason": "Unclassified: .tokencap/constitution contains 2 modules with elevated risk."
    },
    {
      "cluster": "Ui (Badge) 2",
      "level": "MEDIUM",
      "files": [
        "frontend/src/components/ui/AnomalyBadge.tsx",
        "frontend/src/components/ui/Badge.tsx",
        "frontend/src/components/ui/StatusBadge.tsx",
        "frontend/src/components/ui/TrendBadge.tsx"
      ],
      "reason": "Ui (Badge) 2 contains 4 modules with elevated risk. Most-connected file: Badge.tsx (3 importers)."
    },
    {
      "cluster": "Lib (validation)",
      "level": "MEDIUM",
      "files": [
        "frontend/src/lib/ai.ts",
        "frontend/src/lib/validation.ts",
        "frontend/src/schemas/medicalReport.ts"
      ],
      "reason": "Lib (validation) contains 3 modules with elevated risk. Most-connected file: validation.ts (2 importers)."
    }
  ],
  "reviewGroups": [
    {
      "name": "API Review Group",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts",
        "frontend/src/app/api/analysis/route.ts",
        "frontend/src/app/api/history/route.ts",
        "frontend/src/app/api/reports/[id]/route.ts",
        "frontend/src/app/api/reports/route.ts",
        "frontend/src/app/api/reports/upload/route.ts",
        "frontend/src/app/api/tests/[slug]/history/route.ts"
      ],
      "reason": "Shared dependency chain (9 files). Central file: route.ts with 0 importers. Changes in this group carry HIGH risk - review all listed files together.",
      "risk": "HIGH"
    }
  ],
  "rules": [
    "Core library code lives in lib/ - keep it framework-agnostic",
    "UI components live in components/ - keep them presentational",
    "App Router entry points live in app/ - follow Next.js file conventions",
    "API route handlers live in api/ - keep them thin, delegate to services",
    "Validation schemas live in schemas/ - use them at API boundaries",
    "Shared TypeScript types live in types/ - import from here, not redeclared inline",
    "Tests live in tests/ - co-locate unit tests near the file under test",
    "Write tests for all service-layer functions"
  ],
  "coreFeatures": [
    "Frontend",
    "Dashboard",
    "API",
    "Simplified (ClearNextActions)",
    "Ui (Badge)",
    "Simplified (ClearNextActions) 2",
    "Ui (Badge) 2",
    "Reports (TestResultCard)"
  ],
  "agentInjectHooks": {}
}
```

### .tokencap/agent/allowed-context.json

| Field | Value |
| --- | --- |
| Bytes | 3404 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```json
{
  "api": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route*",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route*",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route*",
    "frontend/src/app/api/analysis/route*",
    "frontend/src/app/api/history/route*",
    "frontend/src/app/api/reports/[id]/route*",
    "frontend/src/app/api/reports/route*",
    "frontend/src/app/api/reports/upload/route*",
    "frontend/src/app/api/tests/[slug]/history/route*"
  ],
  "frontend": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView*",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/history/TimelineView*",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/**",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/**",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/**",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/upload/**",
    "frontend/src/app/**",
    "frontend/src/components/compare/ComparisonView*",
    "frontend/src/components/history/TimelineView*",
    "frontend/src/components/navigation/**",
    "frontend/src/components/tests/**",
    "frontend/src/components/ui/**",
    "frontend/src/components/upload/**"
  ],
  "other": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
    ".kilo/worktrees/ginger-myrtle/frontend/src/types/medical*",
    ".tokencap/constitution/**",
    "frontend/src/app/**",
    "frontend/src/types/medical*"
  ],
  "ui-badge": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/**"
  ],
  "utilities": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/**",
    "frontend/src/lib/**"
  ],
  "ui-badge-2": [
    "frontend/src/components/ui/**"
  ],
  "lib-validation": [
    "frontend/src/lib/**",
    "frontend/src/schemas/medicalReport*"
  ],
  "config": [
    ".kilo/worktrees/ginger-myrtle/frontend/**",
    "frontend/**"
  ],
  "diff": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/loading*",
    "frontend/src/app/compare/loading*"
  ],
  "dashboard": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/**",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/**",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/**",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTrendChart*",
    ".kilo/worktrees/ginger-myrtle/frontend/src/schemas/medicalReport*",
    "frontend/src/app/dashboard/**",
    "frontend/src/components/dashboard/**",
    "frontend/src/components/reports/**",
    "frontend/src/components/tests/HistoricalTrendChart*"
  ],
  "testing": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/loading*",
    "frontend/src/app/tests/[testName]/loading*"
  ],
  "reports-testresultcard": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/**"
  ],
  "simplified-clearnextactions": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/**"
  ],
  "lib-mock-data": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/**"
  ],
  "database": [
    ".tokencap/constitution/schema-invariants*"
  ],
  "reports-testresultcard-2": [
    "frontend/src/components/reports/**"
  ],
  "simplified-clearnextactions-2": [
    "frontend/src/components/simplified/**"
  ]
}
```

### .tokencap/agent/context-manifest.json

| Field | Value |
| --- | --- |
| Bytes | 6248 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```json
{
  "version": "1.0.0",
  "generatedAt": "2026-09-19T09:59:32.523Z",
  "entry": "START_HERE.md",
  "project": {
    "name": "ai-medical-report-simplifier",
    "type": "Unknown",
    "architectureStyle": "Modular"
  },
  "clusters": [
    "api",
    "frontend",
    "other",
    "ui-(badge)",
    "utilities",
    "ui-(badge)-2",
    "lib-(validation)",
    "config",
    "diff",
    "dashboard",
    "testing",
    "reports-(testresultcard)",
    "simplified-(clearnextactions)",
    "lib-(mock-data)",
    "database",
    "reports-(testresultcard)-2",
    "simplified-(clearnextactions)-2"
  ],
  "criticalFiles": [
    ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
    ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts",
    ".tokencap/constitution/api-contracts.yaml",
    ".tokencap/constitution/constitution.yaml",
    ".tokencap/constitution/schema-invariants.yaml",
    "frontend/eslint.config.mjs"
  ],
  "riskAreas": [
    {
      "cluster": "api",
      "level": "HIGH"
    }
  ],
  "reviewGroups": [
    {
      "name": "API Review Group",
      "fileCount": 9
    }
  ],
  "allowedContext": {
    "api": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route*",
      ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route*",
      ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route*",
      "frontend/src/app/api/analysis/route*",
      "frontend/src/app/api/history/route*",
      "frontend/src/app/api/reports/[id]/route*",
      "frontend/src/app/api/reports/route*",
      "frontend/src/app/api/reports/upload/route*",
      "frontend/src/app/api/tests/[slug]/history/route*"
    ],
    "frontend": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView*",
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/history/TimelineView*",
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/**",
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/**",
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/**",
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/upload/**",
      "frontend/src/app/**",
      "frontend/src/components/compare/ComparisonView*",
      "frontend/src/components/history/TimelineView*",
      "frontend/src/components/navigation/**",
      "frontend/src/components/tests/**",
      "frontend/src/components/ui/**",
      "frontend/src/components/upload/**"
    ],
    "other": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/app/**",
      ".kilo/worktrees/ginger-myrtle/frontend/src/types/medical*",
      ".tokencap/constitution/**",
      "frontend/src/app/**",
      "frontend/src/types/medical*"
    ],
    "ui-badge": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/**"
    ],
    "utilities": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/lib/**",
      "frontend/src/lib/**"
    ],
    "ui-badge-2": [
      "frontend/src/components/ui/**"
    ],
    "lib-validation": [
      "frontend/src/lib/**",
      "frontend/src/schemas/medicalReport*"
    ],
    "config": [
      ".kilo/worktrees/ginger-myrtle/frontend/**",
      "frontend/**"
    ],
    "diff": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/loading*",
      "frontend/src/app/compare/loading*"
    ],
    "dashboard": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/**",
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/**",
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/**",
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTrendChart*",
      ".kilo/worktrees/ginger-myrtle/frontend/src/schemas/medicalReport*",
      "frontend/src/app/dashboard/**",
      "frontend/src/components/dashboard/**",
      "frontend/src/components/reports/**",
      "frontend/src/components/tests/HistoricalTrendChart*"
    ],
    "testing": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/loading*",
      "frontend/src/app/tests/[testName]/loading*"
    ],
    "reports-testresultcard": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/**"
    ],
    "simplified-clearnextactions": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/**"
    ],
    "lib-mock-data": [
      ".kilo/worktrees/ginger-myrtle/frontend/src/lib/**"
    ],
    "database": [
      ".tokencap/constitution/schema-invariants*"
    ],
    "reports-testresultcard-2": [
      "frontend/src/components/reports/**"
    ],
    "simplified-clearnextactions-2": [
      "frontend/src/components/simplified/**"
    ]
  },
  "recommendedReads": {
    "api": [
      "architecture.md",
      "rules.md",
      "risk-map.md",
      "review-rules.md"
    ],
    "frontend": [
      "architecture.md",
      "rules.md"
    ],
    "ui-(badge)": [
      "architecture.md",
      "rules.md"
    ],
    "utilities": [
      "architecture.md",
      "rules.md"
    ],
    "unclassified:-.tokencap/constitution": [
      "architecture.md",
      "rules.md"
    ],
    "ui-(badge)-2": [
      "architecture.md",
      "rules.md"
    ],
    "lib-(validation)": [
      "architecture.md",
      "rules.md"
    ]
  },
  "files": {
    "entry": "START_HERE.md",
    "intelligence": "agent-pack.md",
    "allowedContext": "allowed-context.json",
    "modelInstructions": "model-instructions.md",
    "architecture": "architecture.md",
    "rules": "rules.md",
    "reviewRules": "review-rules.md",
    "riskMap": "risk-map.md",
    "techStack": "tech-stack.md",
    "skills": "skills.md",
    "machineReadable": "agent.json"
  },
  "meta": {
    "tokencapVersion": "1.0.0",
    "description": "Self-Loading Universal Context Layer - machine-readable repository intelligence index.",
    "usage": "Read entry file first, then use allowedContext and recommendedReads for navigation."
  }
}
```

### .tokencap/agent/model-instructions.md

| Field | Value |
| --- | --- |
| Bytes | 2947 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Model Instructions - ai-medical-report-simplifier

> Generated by TokenCap v1.0.0 - 2026-09-19T09:59:32.523Z

---

## Before Touching Code

1. Read `START_HERE.md` - repository overview
2. Read `agent-pack.md` - full project intelligence
3. Use `allowed-context.json` - locate files for your task
4. Read `risk-map.md` before modifying HIGH or CRITICAL areas

---

## Architecture

Modular

---

## Where Things Live

- **Api** -> `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route*, .kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route*`
- **Frontend** -> `.kilo/worktrees/ginger-myrtle/frontend/src/app/**, .kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView*`
- **Other** -> `.kilo/worktrees/ginger-myrtle/frontend/src/app/**, .kilo/worktrees/ginger-myrtle/frontend/src/types/medical*`
- **Ui badge** -> `.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/**`
- **Utilities** -> `.kilo/worktrees/ginger-myrtle/frontend/src/lib/**, frontend/src/lib/**`
- **Ui badge 2** -> `frontend/src/components/ui/**`
- **Lib validation** -> `frontend/src/lib/**, frontend/src/schemas/medicalReport*`
- **Config** -> `.kilo/worktrees/ginger-myrtle/frontend/**, frontend/**`

---

## Non-Negotiable Rules

- Core library code lives in lib/ - keep it framework-agnostic
- UI components live in components/ - keep them presentational
- App Router entry points live in app/ - follow Next.js file conventions
- API route handlers live in api/ - keep them thin, delegate to services
- Validation schemas live in schemas/ - use them at API boundaries
- Shared TypeScript types live in types/ - import from here, not redeclared inline
- Tests live in tests/ - co-locate unit tests near the file under test
- Write tests for all service-layer functions

---

## High-Risk Files - Extra Care Required

- [HIGH] `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts`
- [HIGH] `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts`
- [HIGH] `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts`
- [HIGH] `frontend/src/app/api/analysis/route.ts`
- [HIGH] `frontend/src/app/api/history/route.ts`
- [HIGH] `frontend/src/app/api/reports/[id]/route.ts`

---

## Do Not

- Scan the full repository unless the task specifically requires it
- Make assumptions about architecture - read `architecture.md` first
- Modify HIGH or CRITICAL files without checking `risk-map.md`
- Change files in multiple clusters in one pass without checking review groups
- Create new patterns that contradict `rules.md`

---

## Navigation

| Tool | How to use it |
|---|---|
| Find files for a feature | Look up topic in `allowed-context.json` |
| Understand the full project | Read `agent-pack.md` |
| Check what changed recently | Read `TOKENCAP.md` Recent Changes section |
| Understand dependencies | Read `architecture.md` |
| Know what to review together | Read `review-rules.md` |
```

### .tokencap/agent/review-rules.md

| Field | Value |
| --- | --- |
| Bytes | 922 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Review Rules - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T09:59:32.520Z
> When reviewing changes in any of these groups, review ALL listed files together.

---

## API Review Group

**Risk:** [HIGH] HIGH

**Reason:** Shared dependency chain (9 files). Central file: route.ts with 0 importers. Changes in this group carry HIGH risk - review all listed files together.

**Review Together:**

- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts`
- `frontend/src/app/api/analysis/route.ts`
- `frontend/src/app/api/history/route.ts`
- `frontend/src/app/api/reports/[id]/route.ts`
- `frontend/src/app/api/reports/route.ts`
- `frontend/src/app/api/reports/upload/route.ts`
- `frontend/src/app/api/tests/[slug]/history/route.ts`

---
```

### .tokencap/agent/risk-map.md

| Field | Value |
| --- | --- |
| Bytes | 2938 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Risk Map - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T09:59:32.520Z

---

## Summary

[HIGH] **HIGH clusters:** API

---

## Risk Areas

### [HIGH] API

**Risk Level:** HIGH

**Why:** API layer is the public contract. Breaking changes here break all consumers.

**Key Files:**

- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts`
- `frontend/src/app/api/analysis/route.ts`
- `frontend/src/app/api/history/route.ts`
- `frontend/src/app/api/reports/[id]/route.ts`

### [MEDIUM] Frontend

**Risk Level:** MEDIUM

**Why:** Frontend contains 42 modules with elevated risk.

**Key Files:**

- `.kilo/worktrees/ginger-myrtle/frontend/src/app/compare/page.tsx`
- `.kilo/worktrees/ginger-myrtle/frontend/src/app/history/page.tsx`
- `.kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx`
- `.kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx`
- `.kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx`

### [MEDIUM] Ui (Badge)

**Risk Level:** MEDIUM

**Why:** Ui (Badge) contains 4 modules with elevated risk. Most-connected file: Badge.tsx (3 importers).

**Key Files:**

- `.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/AnomalyBadge.tsx`
- `.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx`
- `.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/StatusBadge.tsx`
- `.kilo/worktrees/ginger-myrtle/frontend/src/components/ui/TrendBadge.tsx`

### [MEDIUM] Utilities

**Risk Level:** MEDIUM

**Why:** Utilities contains 11 modules with elevated risk.

**Key Files:**

- `.kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/src/lib/file-validation.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/src/lib/ml.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/src/lib/utils.ts`

### [MEDIUM] Unclassified: .tokencap/constitution

**Risk Level:** MEDIUM

**Why:** Unclassified: .tokencap/constitution contains 2 modules with elevated risk.

**Key Files:**

- `.tokencap/constitution/api-contracts.yaml`
- `.tokencap/constitution/constitution.yaml`

### [MEDIUM] Ui (Badge) 2

**Risk Level:** MEDIUM

**Why:** Ui (Badge) 2 contains 4 modules with elevated risk. Most-connected file: Badge.tsx (3 importers).

**Key Files:**

- `frontend/src/components/ui/AnomalyBadge.tsx`
- `frontend/src/components/ui/Badge.tsx`
- `frontend/src/components/ui/StatusBadge.tsx`
- `frontend/src/components/ui/TrendBadge.tsx`

### [MEDIUM] Lib (validation)

**Risk Level:** MEDIUM

**Why:** Lib (validation) contains 3 modules with elevated risk. Most-connected file: validation.ts (2 importers).

**Key Files:**

- `frontend/src/lib/ai.ts`
- `frontend/src/lib/validation.ts`
- `frontend/src/schemas/medicalReport.ts`
```

### .tokencap/agent/rules.md

| Field | Value |
| --- | --- |
| Bytes | 2055 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Project Rules - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T09:59:32.520Z
> These rules are inferred automatically from the project structure and tech stack.

---

## Folder Conventions

### `lib/`

**Rule:** Core library code lives in lib/ - keep it framework-agnostic

**Example:** `.kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts`

### `components/`

**Rule:** UI components live in components/ - keep them presentational

**Example:** `.kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView.tsx`

### `app/`

**Rule:** App Router entry points live in app/ - follow Next.js file conventions

**Example:** `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts`

### `api/`

**Rule:** API route handlers live in api/ - keep them thin, delegate to services

**Example:** `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts`

### `schemas/`

**Rule:** Validation schemas live in schemas/ - use them at API boundaries

**Example:** `.kilo/worktrees/ginger-myrtle/frontend/src/schemas/medicalReport.ts`

### `types/`

**Rule:** Shared TypeScript types live in types/ - import from here, not redeclared inline

**Example:** `.kilo/worktrees/ginger-myrtle/frontend/src/types/medical.ts`

### `tests/`

**Rule:** Tests live in tests/ - co-locate unit tests near the file under test

**Example:** `.kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/loading.tsx`

---

## Quick Reference

All conventions at a glance:

- Core library code lives in lib/ - keep it framework-agnostic
- UI components live in components/ - keep them presentational
- App Router entry points live in app/ - follow Next.js file conventions
- API route handlers live in api/ - keep them thin, delegate to services
- Validation schemas live in schemas/ - use them at API boundaries
- Shared TypeScript types live in types/ - import from here, not redeclared inline
- Tests live in tests/ - co-locate unit tests near the file under test
- Write tests for all service-layer functions
```

### .tokencap/agent/skills.md

| Field | Value |
| --- | --- |
| Bytes | 1754 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Agent Skills - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T09:59:32.521Z
> This file teaches an AI agent the essential knowledge needed to work on this project.

---

## Project Type

You are working on a **Unknown** project.

---

## Core Features

- Frontend
- Dashboard
- API
- Simplified (ClearNextActions)
- Ui (Badge)
- Simplified (ClearNextActions) 2
- Ui (Badge) 2
- Reports (TestResultCard)

---

## Architecture

```
Modular
```

---

## Project Conventions

Follow these rules when writing or reviewing code:

- Core library code lives in lib/ - keep it framework-agnostic
- UI components live in components/ - keep them presentational
- App Router entry points live in app/ - follow Next.js file conventions
- API route handlers live in api/ - keep them thin, delegate to services
- Validation schemas live in schemas/ - use them at API boundaries
- Shared TypeScript types live in types/ - import from here, not redeclared inline
- Tests live in tests/ - co-locate unit tests near the file under test
- Write tests for all service-layer functions

---

## Important Files

These files are critical - understand them before making changes:

- `.kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs`
- `.kilo/worktrees/ginger-myrtle/frontend/next.config.ts`
- `.kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs`
- `.tokencap/constitution/api-contracts.yaml`
- `.tokencap/constitution/constitution.yaml`
- `.tokencap/constitution/schema-invariants.yaml`
- `frontend/eslint.config.mjs`
- `frontend/next.config.ts`
- `frontend/postcss.config.mjs`
- `frontend/src/app/api/analysis/route.ts`

---

## High-Risk Areas

Changes to these areas require extra care and thorough review:

- [HIGH] **API** - HIGH
```

### .tokencap/agent/tech-stack.md

| Field | Value |
| --- | --- |
| Bytes | 216 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Tech Stack - ai-medical-report-simplifier

> Generated by TokenCap v0.8 - 2026-09-19T09:59:32.519Z

---

## External Services

- External API via NEXT_PUBLIC_SUPABASE_URL: https://hxpskhiqfplhckwqeamm.supabase.co
```

### .tokencap/brain/brain-index.json

| Field | Value |
| --- | --- |
| Bytes | 8931 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```json
{
  "api": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts",
    "frontend/src/app/api/analysis/route.ts",
    "frontend/src/app/api/history/route.ts",
    "frontend/src/app/api/reports/[id]/route.ts",
    "frontend/src/app/api/reports/route.ts",
    "frontend/src/app/api/reports/upload/route.ts",
    "frontend/src/app/api/tests/[slug]/history/route.ts"
  ],
  "frontend": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/page.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/history/page.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/page.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/page.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/upload/page.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/history/TimelineView.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/Footer.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/Navbar.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTable.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/MLInsightCard.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/TestSelectorNav.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Button.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Card.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/DisclaimerNotice.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Skeleton.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/upload/ProcessingPipeline.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/upload/UploadDropzone.tsx",
    "frontend/src/app/compare/page.tsx",
    "frontend/src/app/history/page.tsx",
    "frontend/src/app/layout.tsx",
    "frontend/src/app/page.tsx",
    "frontend/src/app/reports/[id]/page.tsx",
    "frontend/src/app/simplified/[id]/page.tsx",
    "frontend/src/app/tests/[testName]/page.tsx",
    "frontend/src/app/upload/page.tsx",
    "frontend/src/components/compare/ComparisonView.tsx",
    "frontend/src/components/history/TimelineView.tsx",
    "frontend/src/components/navigation/Footer.tsx",
    "frontend/src/components/navigation/Navbar.tsx",
    "frontend/src/components/tests/HistoricalTable.tsx",
    "frontend/src/components/tests/MLInsightCard.tsx",
    "frontend/src/components/tests/TestSelectorNav.tsx",
    "frontend/src/components/ui/Button.tsx",
    "frontend/src/components/ui/Card.tsx",
    "frontend/src/components/ui/DisclaimerNotice.tsx",
    "frontend/src/components/ui/Skeleton.tsx",
    "frontend/src/components/upload/ProcessingPipeline.tsx",
    "frontend/src/components/upload/UploadDropzone.tsx"
  ],
  "other": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/error.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/history/loading.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/loading.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/loading.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/loading.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/types/medical.ts",
    ".tokencap/constitution/api-contracts.yaml",
    ".tokencap/constitution/constitution.yaml",
    "frontend/src/app/error.tsx",
    "frontend/src/app/history/loading.tsx",
    "frontend/src/app/loading.tsx",
    "frontend/src/app/not-found.tsx",
    "frontend/src/app/reports/[id]/loading.tsx",
    "frontend/src/app/simplified/[id]/loading.tsx",
    "frontend/src/types/medical.ts"
  ],
  "ui (badge)": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/AnomalyBadge.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/StatusBadge.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/TrendBadge.tsx"
  ],
  "utilities": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/file-validation.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/ml.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/utils.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/validation.ts",
    "frontend/src/lib/api.ts",
    "frontend/src/lib/file-validation.ts",
    "frontend/src/lib/ml.ts",
    "frontend/src/lib/supabase.ts",
    "frontend/src/lib/utils.ts"
  ],
  "ui (badge) 2": [
    "frontend/src/components/ui/AnomalyBadge.tsx",
    "frontend/src/components/ui/Badge.tsx",
    "frontend/src/components/ui/StatusBadge.tsx",
    "frontend/src/components/ui/TrendBadge.tsx"
  ],
  "lib (validation)": [
    "frontend/src/lib/ai.ts",
    "frontend/src/lib/validation.ts",
    "frontend/src/schemas/medicalReport.ts"
  ],
  "config": [
    ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
    ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
    "frontend/eslint.config.mjs",
    "frontend/next-env.d.ts",
    "frontend/next.config.ts",
    "frontend/postcss.config.mjs"
  ],
  "diff": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/loading.tsx",
    "frontend/src/app/compare/loading.tsx"
  ],
  "dashboard": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/loading.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/page.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/DashboardHeader.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/KeyInsightsList.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/RecentReportsList.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/StatsOverview.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportHeader.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportSummaryBanner.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTrendChart.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/schemas/medicalReport.ts",
    "frontend/src/app/dashboard/loading.tsx",
    "frontend/src/app/dashboard/page.tsx",
    "frontend/src/components/dashboard/DashboardHeader.tsx",
    "frontend/src/components/dashboard/KeyInsightsList.tsx",
    "frontend/src/components/dashboard/RecentReportsList.tsx",
    "frontend/src/components/dashboard/StatsOverview.tsx",
    "frontend/src/components/reports/ReportHeader.tsx",
    "frontend/src/components/reports/ReportSummaryBanner.tsx",
    "frontend/src/components/tests/HistoricalTrendChart.tsx"
  ],
  "testing": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/loading.tsx",
    "frontend/src/app/tests/[testName]/loading.tsx"
  ],
  "reports (testresultcard)": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportViewToggle.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultCard.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultTable.tsx"
  ],
  "simplified (clearnextactions)": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ImportantFindings.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/MedicalTermsExplained.tsx",
    ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/SimplifiedReportView.tsx"
  ],
  "lib (mock-data)": [
    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/api.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/lib/mock-data.ts"
  ],
  "database": [
    ".tokencap/constitution/schema-invariants.yaml"
  ],
  "reports (testresultcard) 2": [
    "frontend/src/components/reports/ReportViewToggle.tsx",
    "frontend/src/components/reports/TestResultCard.tsx",
    "frontend/src/components/reports/TestResultTable.tsx"
  ],
  "simplified (clearnextactions) 2": [
    "frontend/src/components/simplified/ClearNextActions.tsx",
    "frontend/src/components/simplified/ImportantFindings.tsx",
    "frontend/src/components/simplified/MedicalTermsExplained.tsx",
    "frontend/src/components/simplified/SimplifiedReportView.tsx"
  ]
}
```

### .tokencap/constitution/api-contracts.yaml

| Field | Value |
| --- | --- |
| Bytes | 2020 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```yaml
# API Contracts
# TokenCap Constitution Engine

CONST-API-001: /api/analysis public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.72
  source:     nextjs
  derivedFrom: .kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts

CONST-API-002: /api/history public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.72
  source:     nextjs
  derivedFrom: .kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts

CONST-API-003: /api/reports public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.72
  source:     nextjs
  derivedFrom: .kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts

CONST-API-004: /api/reports/upload public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.72
  source:     nextjs
  derivedFrom: frontend/src/app/api/reports/upload/route.ts

CONST-API-005: /api/reports/[id] public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.72
  source:     nextjs
  derivedFrom: frontend/src/app/api/reports/[id]/route.ts

CONST-API-006: /api/tests/[slug]/history public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.72
  source:     nextjs
  derivedFrom: frontend/src/app/api/tests/[slug]/history/route.ts

CONST-API-007: GET /health public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.76
  source:     fastapi
  derivedFrom: .kilo/worktrees/ginger-myrtle/ml/app/main.py

CONST-API-008: POST /analyze public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.76
  source:     fastapi
  derivedFrom: .kilo/worktrees/ginger-myrtle/ml/app/main.py

CONST-API-009: POST /analyze/batch public response structure must remain backward compatible.
  severity:   HIGH
  confidence: 0.76
  source:     fastapi
  derivedFrom: .kilo/worktrees/ginger-myrtle/ml/app/main.py
```

### .tokencap/constitution/compliance-rules.md

| Field | Value |
| --- | --- |
| Bytes | 1763 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Compliance Rules

> TokenCap Constitution Engine

## 🔴 CONST-COMP-001 — CRITICAL

**Payment processing (PCI-DSS) — all Stripe/payment code requires compliance review.**

> **Why:** PCI-DSS requires that all payment card data handling meets security standards. Any change to payment flows must be reviewed.

> **What breaks:** PCI compliance violation. Payment processor account suspension. Legal liability.

*Files:* `.kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx`, `.tokencap/constitution/compliance-rules.md`, `.tokencap/constitution/constitution.md`, `.tokencap/constitution/constitution.yaml`

## 🔴 CONST-COMP-002 — CRITICAL

**HIPAA compliance — protected health information (PHI) handling must remain compliant.**

> **Why:** HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.

> **What breaks:** HIPAA violation. Criminal liability. Patient data exposed.

*Files:* `.kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx`, `.kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx`, `.kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/loading.tsx`, `.kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx`

## 🔴 CONST-COMP-003 — CRITICAL

**Audit logging must always be written and never removed.**

> **Why:** Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.

> **What breaks:** Compliance audit failures. Inability to investigate security incidents. Regulatory violations.

*Files:* `.tokencap/constitution/compliance-rules.md`, `.tokencap/constitution/constitution.md`, `.tokencap/constitution/constitution.yaml`, `.tokencap/snapshot.md`
```

### .tokencap/constitution/constitution.md

| Field | Value |
| --- | --- |
| Bytes | 10938 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Repository Constitution — ai-medical-report-simplifier

> Generated by TokenCap Constitution Engine v1.2 — 2026-09-19
> ⬡ Every AI coding agent reads this before editing.

---

## Constitution Score

| Category | Score |
|---|---|
| **Overall** | **94 / 100** |
| Architecture | 100 |
| API Stability | 100 |
| Schema Integrity | 90 |
| Security | 85 |
| Compliance | 100 |

---

## Rules (19 total)

### Security (2)

#### 🔴 CONST-SEC-001

**Environment secrets must never be hardcoded in source files.**

| Field | Value |
|---|---|
| Severity | `CRITICAL` |
| Category | Security |
| Source | heuristic |
| Confidence | █████████░ 90% |
| Manual | No |

**Why:** Secrets committed to source are exposed via version control history and repository access.

**What breaks:** Security breach. API keys, database credentials, and tokens compromised.

**Derived from:** `.kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts`, `frontend/src/lib/ai.ts`, `frontend/src/lib/api.ts`, `frontend/src/lib/ml.ts`

#### 🔴 CONST-SEC-002

**Environment variable files (.env) must never be committed to version control.**

| Field | Value |
|---|---|
| Severity | `CRITICAL` |
| Category | Security |
| Source | heuristic |
| Confidence | ██████████ 99% |
| Manual | No |

**Why:** .env files contain secrets. Committing them exposes credentials to all repository users.

**What breaks:** All secrets in .env become public. Immediate security incident.

**Derived from:** `.env`, `.env.example`

### Compliance (3)

#### 🔴 CONST-COMP-001

**Payment processing (PCI-DSS) — all Stripe/payment code requires compliance review.**

| Field | Value |
|---|---|
| Severity | `CRITICAL` |
| Category | Compliance |
| Source | heuristic |
| Confidence | █████████░ 90% |
| Manual | No |

**Why:** PCI-DSS requires that all payment card data handling meets security standards. Any change to payment flows must be reviewed.

**What breaks:** PCI compliance violation. Payment processor account suspension. Legal liability.

**Derived from:** `.kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx`, `.tokencap/constitution/compliance-rules.md`, `.tokencap/constitution/constitution.md`, `.tokencap/constitution/constitution.yaml`

#### 🔴 CONST-COMP-002

**HIPAA compliance — protected health information (PHI) handling must remain compliant.**

| Field | Value |
|---|---|
| Severity | `CRITICAL` |
| Category | Compliance |
| Source | heuristic |
| Confidence | ████████░░ 75% |
| Manual | No |

**Why:** HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.

**What breaks:** HIPAA violation. Criminal liability. Patient data exposed.

**Derived from:** `.kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx`, `.kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx`, `.kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/loading.tsx`, `.kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx`

#### 🔴 CONST-COMP-003

**Audit logging must always be written and never removed.**

| Field | Value |
|---|---|
| Severity | `CRITICAL` |
| Category | Compliance |
| Source | heuristic |
| Confidence | █████████░ 85% |
| Manual | No |

**Why:** Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.

**What breaks:** Compliance audit failures. Inability to investigate security incidents. Regulatory violations.

**Derived from:** `.tokencap/constitution/compliance-rules.md`, `.tokencap/constitution/constitution.md`, `.tokencap/constitution/constitution.yaml`, `.tokencap/snapshot.md`

### API (9)

#### 🟠 CONST-API-001

**/api/analysis public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | nextjs |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts`

#### 🟠 CONST-API-002

**/api/history public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | nextjs |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts`

#### 🟠 CONST-API-003

**/api/reports public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | nextjs |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts`

#### 🟠 CONST-API-004

**/api/reports/upload public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | nextjs |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `frontend/src/app/api/reports/upload/route.ts`

#### 🟠 CONST-API-005

**/api/reports/[id] public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | nextjs |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `frontend/src/app/api/reports/[id]/route.ts`

#### 🟠 CONST-API-006

**/api/tests/[slug]/history public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | nextjs |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `frontend/src/app/api/tests/[slug]/history/route.ts`

#### 🟠 CONST-API-007

**GET /health public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | fastapi |
| Confidence | ████████░░ 76% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `.kilo/worktrees/ginger-myrtle/ml/app/main.py`

#### 🟠 CONST-API-008

**POST /analyze public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | fastapi |
| Confidence | ████████░░ 76% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `.kilo/worktrees/ginger-myrtle/ml/app/main.py`

#### 🟠 CONST-API-009

**POST /analyze/batch public response structure must remain backward compatible.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | API |
| Source | fastapi |
| Confidence | ████████░░ 76% |
| Manual | No |

**Why:** Public API endpoints form the contract between this service and its consumers.

**What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

**Derived from:** `.kilo/worktrees/ginger-myrtle/ml/app/main.py`

### Architecture (5)

#### 🟠 CONST-ARCH-001

**Services cannot import UI components.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | Architecture |
| Source | heuristic |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Importing UI components into services couples server-side logic to browser rendering. This breaks SSR, testability, and separation of concerns.

**What breaks:** Server-side services gain browser-only dependencies. Unit tests for services fail. SSR breaks.

#### 🟠 CONST-ARCH-002

**Controllers cannot access the database directly.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | Architecture |
| Source | heuristic |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Direct DB access in controllers bypasses the service layer. This breaks the layered architecture and makes logic untestable.

**What breaks:** Business logic leaks into controllers. Database coupling makes refactoring expensive.

#### 🟠 CONST-ARCH-003

**Route handlers cannot access the database directly.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | Architecture |
| Source | heuristic |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Routes should delegate to services/controllers, not query the database themselves.

**What breaks:** Business logic scattered across route files. Impossible to test in isolation.

#### 🟠 CONST-ARCH-004

**UI components cannot import server-only modules.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | Architecture |
| Source | heuristic |
| Confidence | ███████░░░ 72% |
| Manual | No |

**Why:** Server-only modules may contain secrets or Node.js-only APIs that crash in the browser.

**What breaks:** Build errors in browser environments. Potential secret exposure.

#### 🟠 CONST-ARCH-005

**High-impact clusters (Config, Other, Database) must not gain new circular dependencies.**

| Field | Value |
|---|---|
| Severity | `HIGH` |
| Category | Architecture |
| Source | heuristic |
| Confidence | ████████░░ 80% |
| Manual | No |

**Why:** High-impact clusters already coordinate many modules. Adding circular imports makes builds fragile.

**What breaks:** Module resolution fails. Build tools (webpack, esbuild) may hang or produce incorrect output.

---

> Protect your architecture before AI changes it.
```

### .tokencap/constitution/constitution.yaml

| Field | Value |
| --- | --- |
| Bytes | 11154 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```yaml
# TokenCap Constitution Engine
# Generated: 2026-09-19T09:59:33.190Z
# Version: 1.2

constitution:
  version: "1.2"
  generated_at: "2026-09-19T09:59:33.190Z"
  rule_count: 19

  score:
    total:            94
    architecture:     100
    api_stability:    100
    schema_integrity: 90
    security:         85
    compliance:       100

  rules:
    - id: "CONST-SEC-001"
      category: "Security"
      severity: "CRITICAL"
      confidence: 0.90
      source: "heuristic"
      manual: false
      description: |-
        Environment secrets must never be hardcoded in source files.
      reason: |-
        Secrets committed to source are exposed via version control history and repository access.
      what_breaks: |-
        Security breach. API keys, database credentials, and tokens compromised.
      derived_from:
        - ".kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts"
        - "frontend/src/lib/ai.ts"
        - "frontend/src/lib/api.ts"
        - "frontend/src/lib/ml.ts"

    - id: "CONST-SEC-002"
      category: "Security"
      severity: "CRITICAL"
      confidence: 0.99
      source: "heuristic"
      manual: false
      description: |-
        Environment variable files (.env) must never be committed to version control.
      reason: |-
        .env files contain secrets. Committing them exposes credentials to all repository users.
      what_breaks: |-
        All secrets in .env become public. Immediate security incident.
      derived_from:
        - ".env"
        - ".env.example"

    - id: "CONST-COMP-001"
      category: "Compliance"
      severity: "CRITICAL"
      confidence: 0.90
      source: "heuristic"
      manual: false
      description: |-
        Payment processing (PCI-DSS) — all Stripe/payment code requires compliance review.
      reason: |-
        PCI-DSS requires that all payment card data handling meets security standards. Any change to payment flows must be reviewed.
      what_breaks: |-
        PCI compliance violation. Payment processor account suspension. Legal liability.
      derived_from:
        - ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx"
        - ".tokencap/constitution/compliance-rules.md"
        - ".tokencap/constitution/constitution.md"
        - ".tokencap/constitution/constitution.yaml"

    - id: "CONST-COMP-002"
      category: "Compliance"
      severity: "CRITICAL"
      confidence: 0.75
      source: "heuristic"
      manual: false
      description: |-
        HIPAA compliance — protected health information (PHI) handling must remain compliant.
      reason: |-
        HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.
      what_breaks: |-
        HIPAA violation. Criminal liability. Patient data exposed.
      derived_from:
        - ".kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx"
        - ".kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx"
        - ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/loading.tsx"
        - ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx"

    - id: "CONST-COMP-003"
      category: "Compliance"
      severity: "CRITICAL"
      confidence: 0.85
      source: "heuristic"
      manual: false
      description: |-
        Audit logging must always be written and never removed.
      reason: |-
        Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.
      what_breaks: |-
        Compliance audit failures. Inability to investigate security incidents. Regulatory violations.
      derived_from:
        - ".tokencap/constitution/compliance-rules.md"
        - ".tokencap/constitution/constitution.md"
        - ".tokencap/constitution/constitution.yaml"
        - ".tokencap/snapshot.md"

    - id: "CONST-API-001"
      category: "API"
      severity: "HIGH"
      confidence: 0.72
      source: "nextjs"
      manual: false
      description: |-
        /api/analysis public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts"

    - id: "CONST-API-002"
      category: "API"
      severity: "HIGH"
      confidence: 0.72
      source: "nextjs"
      manual: false
      description: |-
        /api/history public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts"

    - id: "CONST-API-003"
      category: "API"
      severity: "HIGH"
      confidence: 0.72
      source: "nextjs"
      manual: false
      description: |-
        /api/reports public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts"

    - id: "CONST-API-004"
      category: "API"
      severity: "HIGH"
      confidence: 0.72
      source: "nextjs"
      manual: false
      description: |-
        /api/reports/upload public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - "frontend/src/app/api/reports/upload/route.ts"

    - id: "CONST-API-005"
      category: "API"
      severity: "HIGH"
      confidence: 0.72
      source: "nextjs"
      manual: false
      description: |-
        /api/reports/[id] public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - "frontend/src/app/api/reports/[id]/route.ts"

    - id: "CONST-API-006"
      category: "API"
      severity: "HIGH"
      confidence: 0.72
      source: "nextjs"
      manual: false
      description: |-
        /api/tests/[slug]/history public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - "frontend/src/app/api/tests/[slug]/history/route.ts"

    - id: "CONST-API-007"
      category: "API"
      severity: "HIGH"
      confidence: 0.76
      source: "fastapi"
      manual: false
      description: |-
        GET /health public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - ".kilo/worktrees/ginger-myrtle/ml/app/main.py"

    - id: "CONST-API-008"
      category: "API"
      severity: "HIGH"
      confidence: 0.76
      source: "fastapi"
      manual: false
      description: |-
        POST /analyze public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - ".kilo/worktrees/ginger-myrtle/ml/app/main.py"

    - id: "CONST-API-009"
      category: "API"
      severity: "HIGH"
      confidence: 0.76
      source: "fastapi"
      manual: false
      description: |-
        POST /analyze/batch public response structure must remain backward compatible.
      reason: |-
        Public API endpoints form the contract between this service and its consumers.
      what_breaks: |-
        External integrations, mobile apps, or SDKs break if response shape changes.
      derived_from:
        - ".kilo/worktrees/ginger-myrtle/ml/app/main.py"

    - id: "CONST-ARCH-001"
      category: "Architecture"
      severity: "HIGH"
      confidence: 0.72
      source: "heuristic"
      manual: false
      description: |-
        Services cannot import UI components.
      reason: |-
        Importing UI components into services couples server-side logic to browser rendering. This breaks SSR, testability, and separation of concerns.
      what_breaks: |-
        Server-side services gain browser-only dependencies. Unit tests for services fail. SSR breaks.

    - id: "CONST-ARCH-002"
      category: "Architecture"
      severity: "HIGH"
      confidence: 0.72
      source: "heuristic"
      manual: false
      description: |-
        Controllers cannot access the database directly.
      reason: |-
        Direct DB access in controllers bypasses the service layer. This breaks the layered architecture and makes logic untestable.
      what_breaks: |-
        Business logic leaks into controllers. Database coupling makes refactoring expensive.

    - id: "CONST-ARCH-003"
      category: "Architecture"
      severity: "HIGH"
      confidence: 0.72
      source: "heuristic"
      manual: false
      description: |-
        Route handlers cannot access the database directly.
      reason: |-
        Routes should delegate to services/controllers, not query the database themselves.
      what_breaks: |-
        Business logic scattered across route files. Impossible to test in isolation.

    - id: "CONST-ARCH-004"
      category: "Architecture"
      severity: "HIGH"
      confidence: 0.72
      source: "heuristic"
      manual: false
      description: |-
        UI components cannot import server-only modules.
      reason: |-
        Server-only modules may contain secrets or Node.js-only APIs that crash in the browser.
      what_breaks: |-
        Build errors in browser environments. Potential secret exposure.

    - id: "CONST-ARCH-005"
      category: "Architecture"
      severity: "HIGH"
      confidence: 0.80
      source: "heuristic"
      manual: false
      description: |-
        High-impact clusters (Config, Other, Database) must not gain new circular dependencies.
      reason: |-
        High-impact clusters already coordinate many modules. Adding circular imports makes builds fragile.
      what_breaks: |-
        Module resolution fails. Build tools (webpack, esbuild) may hang or produce incorrect output.
```

### .tokencap/constitution/public-contracts.md

| Field | Value |
| --- | --- |
| Bytes | 3348 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Public API Contracts

> TokenCap Constitution Engine

## 🟠 CONST-API-001 — HIGH

**/api/analysis public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts`

## 🟠 CONST-API-002 — HIGH

**/api/history public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts`

## 🟠 CONST-API-003 — HIGH

**/api/reports public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `.kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts`

## 🟠 CONST-API-004 — HIGH

**/api/reports/upload public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `frontend/src/app/api/reports/upload/route.ts`

## 🟠 CONST-API-005 — HIGH

**/api/reports/[id] public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `frontend/src/app/api/reports/[id]/route.ts`

## 🟠 CONST-API-006 — HIGH

**/api/tests/[slug]/history public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `frontend/src/app/api/tests/[slug]/history/route.ts`

## 🟠 CONST-API-007 — HIGH

**GET /health public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `.kilo/worktrees/ginger-myrtle/ml/app/main.py`

## 🟠 CONST-API-008 — HIGH

**POST /analyze public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `.kilo/worktrees/ginger-myrtle/ml/app/main.py`

## 🟠 CONST-API-009 — HIGH

**POST /analyze/batch public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `.kilo/worktrees/ginger-myrtle/ml/app/main.py`
```

### .tokencap/constitution/security-boundaries.md

| Field | Value |
| --- | --- |
| Bytes | 839 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Security Boundaries

> TokenCap Constitution Engine

## 🔴 CONST-SEC-001 — CRITICAL

**Environment secrets must never be hardcoded in source files.**

> **Why:** Secrets committed to source are exposed via version control history and repository access.

> **What breaks:** Security breach. API keys, database credentials, and tokens compromised.

*Files:* `.kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts`, `frontend/src/lib/ai.ts`, `frontend/src/lib/api.ts`, `frontend/src/lib/ml.ts`

## 🔴 CONST-SEC-002 — CRITICAL

**Environment variable files (.env) must never be committed to version control.**

> **Why:** .env files contain secrets. Committing them exposes credentials to all repository users.

> **What breaks:** All secrets in .env become public. Immediate security incident.

*Files:* `.env`, `.env.example`
```

### .tokencap/debug/notes.md

| Field | Value |
| --- | --- |
| Bytes | 499 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# Debug Notes

<!-- Managed by TokenCap. Generated 2026-09-19T09:59:33.906Z. -->

## Problem

No active failure has been captured.

## Error Logs

```
No captured error output is available.
```

## Stack Trace

```
No captured stack trace is available.
```

## Failed Tests

- No captured failed tests.

## Attempted Fixes

- No attempted fixes captured in this debug session.

## Suspected Files

- No suspected files inferred yet.

## Unresolved Questions

- No unresolved questions inferred yet.
```

### .tokencap/memory/current.md

| Field | Value |
| --- | --- |
| Bytes | 4154 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# TokenCap Memory

Generated: September 19, 2026 at 03:29 PM

**Branch:** `person4`

## Current Task

Working on `person4` with 38 uncommitted files:
- .env.example
- .tokencap/agent/START_HERE.md
- .tokencap/agent/agent-pack.md
- .tokencap/agent/agent.json
- .tokencap/agent/allowed-context.json
- .tokencap/agent/architecture.md
- .tokencap/agent/context-manifest.json
- .tokencap/agent/model-instructions.md
- .tokencap/agent/review-rules.md
- .tokencap/agent/risk-map.md
- .tokencap/agent/rules.md
- .tokencap/agent/skills.md

## Developer Intent

Not inferred from local repository evidence.

## Known Issues

- .tokencap/memory/current.md:29:- .tokencap/memory/current.md:22:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:30:- .tokencap/memory/current.md:23:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:31:- .tokencap/memory/current.md:24:- .tokencap/snapshot.md:47:| TODO notes | 0 |
- .tokencap/memory/current.md:32:- .tokencap/memory/current.md:25:- .tokencap/snapshot.md:422:## TODO / FIXME / HACK Notes
- .tokencap/memory/current.md:33:- .tokencap/memory/current.md:26:- .tokencap/snapshot.md:424:No TODO/FIXME/HACK notes found in selected files.
- .tokencap/memory/current.md:34:- .tokencap/memory/dev-notes.md:27:- .tokencap/memory/current.md:22:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:35:- .tokencap/memory/dev-notes.md:28:- .tokencap/memory/current.md:23:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:36:- .tokencap/memory/dev-notes.md:29:- .tokencap/memory/current.md:24:- .tokencap/snapshot.md:47:| TODO notes | 0 |
- .tokencap/memory/current.md:37:- .tokencap/memory/dev-notes.md:30:- .tokencap/memory/current.md:25:- .tokencap/snapshot.md:422:## TODO / FIXME / HACK Notes
- .tokencap/memory/current.md:38:- .tokencap/memory/dev-notes.md:31:- .tokencap/memory/current.md:26:- .tokencap/snapshot.md:424:No TODO/FIXME/HACK notes found in selected files.
- .tokencap/memory/current.md:39:- .tokencap/memory/dev-notes.md:32:- .tokencap/memory/dev-notes.md:20:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:40:- .tokencap/memory/dev-notes.md:33:- .tokencap/memory/dev-notes.md:21:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers detected.

## Constraints

- No additional constraints inferred.

## Decisions Made

- No decisions inferred from the current repository state.

## Recent Changed Files

- .env.example
- .tokencap/agent/START_HERE.md
- .tokencap/agent/agent-pack.md
- .tokencap/agent/agent.json
- .tokencap/agent/allowed-context.json
- .tokencap/agent/architecture.md
- .tokencap/agent/context-manifest.json
- .tokencap/agent/model-instructions.md
- .tokencap/agent/review-rules.md
- .tokencap/agent/risk-map.md
- .tokencap/agent/rules.md
- .tokencap/agent/skills.md
- .tokencap/agent/tech-stack.md
- .tokencap/brain/brain-index.json
- .tokencap/brain/knowledge.json
- .tokencap/constitution/api-contracts.yaml
- .tokencap/constitution/compliance-rules.md
- .tokencap/constitution/constitution-graph.html
- .tokencap/constitution/constitution-history/constitution-2026-09-19.json
- .tokencap/constitution/constitution.json
- .tokencap/constitution/constitution.md
- .tokencap/constitution/constitution.yaml
- .tokencap/constitution/public-contracts.md
- .tokencap/constitution/security-boundaries.md
- .tokencap/debug/notes.md
- .tokencap/graph/summary.md
- .tokencap/memory/current.md
- .tokencap/memory/dev-notes.md
- .tokencap/savings.json
- .tokencap/snapshot.md
- .tokencap/stats.json
- frontend/src/app/api/analysis/route.ts
- frontend/src/app/api/reports/upload/route.ts
- frontend/src/components/upload/ProcessingPipeline.tsx
- frontend/src/lib/ai.ts
- frontend/src/lib/api.ts
- frontend/src/lib/ml.ts
- frontend/src/lib/supabase.ts

## Next Steps

- Review the changed files and recent commits listed above.
```

### .tokencap/memory/dev-notes.md

| Field | Value |
| --- | --- |
| Bytes | 3713 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```markdown
# TokenCap Notes

<!-- Managed by TokenCap. Generated 2026-09-19T09:59:33.905Z. -->

## Current Task

Working on `person4` with 38 uncommitted files:
- .env.example
- .tokencap/agent/START_HERE.md
- .tokencap/agent/agent-pack.md
- .tokencap/agent/agent.json
- .tokencap/agent/allowed-context.json
- .tokencap/agent/architecture.md
- .tokencap/agent/context-manifest.json
- .tokencap/agent/model-instructions.md
- .tokencap/agent/review-rules.md
- .tokencap/agent/risk-map.md
- .tokencap/agent/rules.md
- .tokencap/agent/skills.md

## Developer Intent

Not inferred from local repository evidence.

## Known Issues

- .tokencap/memory/current.md:29:- .tokencap/memory/current.md:29:- .tokencap/memory/current.md:22:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:30:- .tokencap/memory/current.md:30:- .tokencap/memory/current.md:23:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:31:- .tokencap/memory/current.md:31:- .tokencap/memory/current.md:24:- .tokencap/snapshot.md:47:| TODO notes | 0 |
- .tokencap/memory/current.md:32:- .tokencap/memory/current.md:32:- .tokencap/memory/current.md:25:- .tokencap/snapshot.md:422:## TODO / FIXME / HACK Notes
- .tokencap/memory/current.md:33:- .tokencap/memory/current.md:33:- .tokencap/memory/current.md:26:- .tokencap/snapshot.md:424:No TODO/FIXME/HACK notes found in selected files.
- .tokencap/memory/current.md:34:- .tokencap/memory/current.md:34:- .tokencap/memory/dev-notes.md:27:- .tokencap/memory/current.md:22:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:35:- .tokencap/memory/current.md:35:- .tokencap/memory/dev-notes.md:28:- .tokencap/memory/current.md:23:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:36:- .tokencap/memory/current.md:36:- .tokencap/memory/dev-notes.md:29:- .tokencap/memory/current.md:24:- .tokencap/snapshot.md:47:| TODO notes | 0 |
- .tokencap/memory/current.md:37:- .tokencap/memory/current.md:37:- .tokencap/memory/dev-notes.md:30:- .tokencap/memory/current.md:25:- .tokencap/snapshot.md:422:## TODO / FIXME / HACK Notes
- .tokencap/memory/current.md:38:- .tokencap/memory/current.md:38:- .tokencap/memory/dev-notes.md:31:- .tokencap/memory/current.md:26:- .tokencap/snapshot.md:424:No TODO/FIXME/HACK notes found in selected files.
- .tokencap/memory/current.md:39:- .tokencap/memory/current.md:39:- .tokencap/memory/dev-notes.md:32:- .tokencap/memory/dev-notes.md:20:- .tokencap/memory/current.md:29:- No failing test output or TODO/FIXME markers detected.
- .tokencap/memory/current.md:40:- .tokencap/memory/current.md:40:- .tokencap/memory/dev-notes.md:33:- .tokencap/memory/dev-notes.md:21:- .tokencap/memory/dev-notes.md:27:- No failing test output or TODO/FIXME markers detected.

## Recent Commits

- 8f02d6c Merge pull request #7 from Thrisshanthg123/feature/backend
- 59f545a Merge remote-tracking branch 'origin/main' into feature/backend
- 9941693 fix: update Gemini model to gemini-2.5-flash in extraction layer
- ce0a385 feat: complete end-to-end medical report processing pipeline
- def92fb Merge pull request #6 from Thrisshanthg123/person4
- 199ed41  reslove api conflict
- 24cdbb7 Merge pull request #5 from Thrisshanthg123/feature/h2-frontend-ui
- 25f8ca4 Merge pull request #4 from Thrisshanthg123/feature/ocr

## Constraints

- No additional constraints inferred.

## Decisions Made

- No decisions inferred from the current repository state.

## Next Steps

- Review the changed files and recent commits listed above.
```

### .tokencap/savings.json

| Field | Value |
| --- | --- |
| Bytes | 2647 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```json
{
  "baseline": {
    "tokens": 242851,
    "dollars": 0.607128
  },
  "actual": {
    "tokens": 68961,
    "dollars": 0.172403
  },
  "savings": {
    "tokens": 173890,
    "dollars": 0.43472500000000003,
    "percent": 71.6
  },
  "generatedAt": "2026-09-19T09:59:31.977Z",
  "profile": "balanced",
  "stats": {
    "version": 2,
    "runCount": 5,
    "totalTokensSaved": 547070,
    "lastBuildSavings": 173890,
    "lastBuildAt": "2026-09-19T09:59:31.977Z",
    "notifiedMilestones": [
      50000,
      100000,
      200000,
      400000
    ],
    "newMilestones": [
      400000
    ],
    "notice": "TokenCap has saved 547,070 context tokens across 5 builds.",
    "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression.",
    "tokenizerProfile": "tokencap-estimate-v1",
    "runs": [
      {
        "generatedAt": "2026-09-19T06:01:14.062Z",
        "profile": "balanced",
        "baselineTokens": 47766,
        "snapshotTokens": 25525,
        "savedTokens": 22241,
        "tokenizerProfile": "tokencap-estimate-v1",
        "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
      },
      {
        "generatedAt": "2026-09-19T06:10:15.033Z",
        "profile": "balanced",
        "baselineTokens": 72100,
        "snapshotTokens": 46457,
        "savedTokens": 25643,
        "tokenizerProfile": "tokencap-estimate-v1",
        "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
      },
      {
        "generatedAt": "2026-09-19T09:23:27.286Z",
        "profile": "balanced",
        "baselineTokens": 219493,
        "snapshotTokens": 63002,
        "savedTokens": 156491,
        "tokenizerProfile": "tokencap-estimate-v1",
        "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
      },
      {
        "generatedAt": "2026-09-19T09:40:46.796Z",
        "profile": "balanced",
        "baselineTokens": 237765,
        "snapshotTokens": 68960,
        "savedTokens": 168805,
        "tokenizerProfile": "tokencap-estimate-v1",
        "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
      },
      {
        "generatedAt": "2026-09-19T09:59:31.977Z",
        "profile": "balanced",
        "baselineTokens": 242851,
        "snapshotTokens": 68961,
        "savedTokens": 173890,
        "tokenizerProfile": "tokencap-estimate-v1",
        "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
      }
    ]
  }
}
```

### .tokencap/stats.json

| Field | Value |
| --- | --- |
| Bytes | 2203 |
| Score | 120 |
| Why | changed |
| Status | Full content |


```json
{
  "version": 2,
  "runCount": 5,
  "totalTokensSaved": 547070,
  "lastBuildSavings": 173890,
  "lastBuildAt": "2026-09-19T09:59:31.977Z",
  "notifiedMilestones": [
    50000,
    100000,
    200000,
    400000
  ],
  "newMilestones": [
    400000
  ],
  "notice": "TokenCap has saved 547,070 context tokens across 5 builds.",
  "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression.",
  "tokenizerProfile": "tokencap-estimate-v1",
  "runs": [
    {
      "generatedAt": "2026-09-19T06:01:14.062Z",
      "profile": "balanced",
      "baselineTokens": 47766,
      "snapshotTokens": 25525,
      "savedTokens": 22241,
      "tokenizerProfile": "tokencap-estimate-v1",
      "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
    },
    {
      "generatedAt": "2026-09-19T06:10:15.033Z",
      "profile": "balanced",
      "baselineTokens": 72100,
      "snapshotTokens": 46457,
      "savedTokens": 25643,
      "tokenizerProfile": "tokencap-estimate-v1",
      "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
    },
    {
      "generatedAt": "2026-09-19T09:23:27.286Z",
      "profile": "balanced",
      "baselineTokens": 219493,
      "snapshotTokens": 63002,
      "savedTokens": 156491,
      "tokenizerProfile": "tokencap-estimate-v1",
      "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
    },
    {
      "generatedAt": "2026-09-19T09:40:46.796Z",
      "profile": "balanced",
      "baselineTokens": 237765,
      "snapshotTokens": 68960,
      "savedTokens": 168805,
      "tokenizerProfile": "tokencap-estimate-v1",
      "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
    },
    {
      "generatedAt": "2026-09-19T09:59:31.977Z",
      "profile": "balanced",
      "baselineTokens": 242851,
      "snapshotTokens": 68961,
      "savedTokens": 173890,
      "tokenizerProfile": "tokencap-estimate-v1",
      "baselineDefinition": "Eligible redacted text source files before ranking, selection, or compression."
    }
  ]
}
```

### .tokencap/brain/knowledge.json

| Field | Value |
| --- | --- |
| Bytes | 19480 |
| Score | 119 |
| Why | changed |
| Status | Truncated (budget limit) |


```json
{
  "version": "0.9",
  "generatedAt": "2026-09-19T09:59:34.153Z",
  "techStack": {
    "languages": [],
    "frameworks": [],
    "databases": [],
    "orms": [],
    "auth": [],
    "testing": [],
    "buildTools": [],
    "cloudSdks": [],
    "payments": [],
    "other": [],
    "packageManager": null,
    "summary": "(unknown)"
  },
  "clusters": [
    {
      "name": "API",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts",
        "frontend/src/app/api/analysis/route.ts",
        "frontend/src/app/api/history/route.ts",
        "frontend/src/app/api/reports/[id]/route.ts",
        "frontend/src/app/api/reports/route.ts",
        "frontend/src/app/api/reports/upload/route.ts",
        "frontend/src/app/api/tests/[slug]/history/route.ts"
      ],
      "risk": "HIGH",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Frontend",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/history/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/layout.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/upload/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonView.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/history/TimelineView.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/Footer.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/navigation/Navbar.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTable.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/MLInsightCard.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/TestSelectorNav.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Button.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Card.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/DisclaimerNotice.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Skeleton.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/upload/ProcessingPipeline.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/upload/UploadDropzone.tsx",
        "frontend/src/app/compare/page.tsx",
        "frontend/src/app/history/page.tsx",
        "frontend/src/app/layout.tsx",
        "frontend/src/app/page.tsx",
        "frontend/src/app/reports/[id]/page.tsx",
        "frontend/src/app/simplified/[id]/page.tsx",
        "frontend/src/app/tests/[testName]/page.tsx",
        "frontend/src/app/upload/page.tsx",
        "frontend/src/components/compare/ComparisonView.tsx",
        "frontend/src/components/history/TimelineView.tsx",
        "frontend/src/components/navigation/Footer.tsx",
        "frontend/src/components/navigation/Navbar.tsx",
        "frontend/src/components/tests/HistoricalTable.tsx",
        "frontend/src/components/tests/MLInsightCard.tsx",
        "frontend/src/components/tests/TestSelectorNav.tsx",
        "frontend/src/components/ui/Button.tsx",
        "frontend/src/components/ui/Card.tsx",
        "frontend/src/components/ui/DisclaimerNotice.tsx",
        "frontend/src/components/ui/Skeleton.tsx",
        "frontend/src/components/upload/ProcessingPipeline.tsx",
        "frontend/src/components/upload/UploadDropzone.tsx"
      ],
      "risk": "MEDIUM",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/page.tsx",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Other",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/error.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/history/loading.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/loading.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/loading.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/simplified/[id]/loading.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/types/medical.ts",
        ".tokencap/constitution/api-contracts.yaml",
        ".tokencap/constitution/constitution.yaml",
        "frontend/src/app/error.tsx",
        "frontend/src/app/history/loading.tsx",
        "frontend/src/app/loading.tsx",
        "frontend/src/app/not-found.tsx",
        "frontend/src/app/reports/[id]/loading.tsx",
        "frontend/src/app/simplified/[id]/loading.tsx",
        "frontend/src/types/medical.ts"
      ],
      "risk": "MEDIUM",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/app/error.tsx",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Ui (Badge)",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/AnomalyBadge.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/StatusBadge.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/TrendBadge.tsx"
      ],
      "risk": "MEDIUM",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/components/ui/Badge.tsx",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Utilities",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/file-validation.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/ml.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/utils.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/validation.ts",
        "frontend/src/lib/api.ts",
        "frontend/src/lib/file-validation.ts",
        "frontend/src/lib/ml.ts",
        "frontend/src/lib/supabase.ts",
        "frontend/src/lib/utils.ts"
      ],
      "risk": "MEDIUM",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Ui (Badge) 2",
      "files": [
        "frontend/src/components/ui/AnomalyBadge.tsx",
        "frontend/src/components/ui/Badge.tsx",
        "frontend/src/components/ui/StatusBadge.tsx",
        "frontend/src/components/ui/TrendBadge.tsx"
      ],
      "risk": "MEDIUM",
      "centralFile": "frontend/src/components/ui/Badge.tsx",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Lib (validation)",
      "files": [
        "frontend/src/lib/ai.ts",
        "frontend/src/lib/validation.ts",
        "frontend/src/schemas/medicalReport.ts"
      ],
      "risk": "MEDIUM",
      "centralFile": "frontend/src/lib/validation.ts",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Config",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
        ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
        "frontend/eslint.config.mjs",
        "frontend/next-env.d.ts",
        "frontend/next.config.ts",
        "frontend/postcss.config.mjs"
      ],
      "risk": "LOW",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Diff",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/loading.tsx",
        "frontend/src/app/compare/loading.tsx"
      ],
      "risk": "LOW",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/app/compare/loading.tsx",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Dashboard",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/loading.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/DashboardHeader.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/KeyInsightsList.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/RecentReportsList.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/dashboard/StatsOverview.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportHeader.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportSummaryBanner.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/tests/HistoricalTrendChart.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/schemas/medicalReport.ts",
        "frontend/src/app/dashboard/loading.tsx",
        "frontend/src/app/dashboard/page.tsx",
        "frontend/src/components/dashboard/DashboardHeader.tsx",
        "frontend/src/components/dashboard/KeyInsightsList.tsx",
        "frontend/src/components/dashboard/RecentReportsList.tsx",
        "frontend/src/components/dashboard/StatsOverview.tsx",
        "frontend/src/components/reports/ReportHeader.tsx",
        "frontend/src/components/reports/ReportSummaryBanner.tsx",
        "frontend/src/components/tests/HistoricalTrendChart.tsx"
      ],
      "risk": "LOW",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/app/dashboard/loading.tsx",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Testing",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/loading.tsx",
        "frontend/src/app/tests/[testName]/loading.tsx"
      ],
      "risk": "LOW",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/app/tests/[testName]/loading.tsx",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Reports (TestResultCard)",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/ReportViewToggle.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultCard.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultTable.tsx"
      ],
      "risk": "LOW",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/components/reports/TestResultCard.tsx",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Simplified (ClearNextActions)",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ImportantFindings.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/MedicalTermsExplained.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/SimplifiedReportView.tsx"
      ],
      "risk": "LOW",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Lib (mock-data)",
      "files": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/api.ts",
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/mock-data.ts"
      ],
      "risk": "LOW",
      "centralFile": ".kilo/worktrees/ginger-myrtle/frontend/src/lib/mock-data.ts",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Database",
      "files": [
        ".tokencap/constitution/schema-invariants.yaml"
      ],
      "risk": "LOW",
      "centralFile": ".tokencap/constitution/schema-invariants.yaml",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Reports (TestResultCard) 2",
      "files": [
        "frontend/src/components/reports/ReportViewToggle.tsx",
        "frontend/src/components/reports/TestResultCard.tsx",
        "frontend/src/components/reports/TestResultTable.tsx"
      ],
      "risk": "LOW",
      "centralFile": "frontend/src/components/reports/TestResultCard.tsx",
      "dependsOn": [],
      "usedBy": []
    },
    {
      "name": "Simplified (ClearNextActions) 2",
      "files": [
        "frontend/src/components/simplified/ClearNextActions.tsx",
        "frontend/src/components/simplified/ImportantFindings.tsx",
        "frontend/src/components/simplified/MedicalTermsExplained.tsx",
        "frontend/src/components/simplified/SimplifiedReportView.tsx"
      ],
      "risk": "LOW",
      "centralFile": "frontend/src/components/simplified/ClearNextActions.tsx",
      "dependsOn": [],
      "usedBy": []
    }
  ],
  "criticalFiles": [
    ".kilo/worktrees/ginger-myrtle/frontend/eslint.config.mjs",
    ".kilo/worktrees/ginger-myrtle/frontend/next.config.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/postcss.config.mjs",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts",
    ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts",
    ".tokencap/constitution/api-contracts.yaml",
    ".tokencap/constitution/constitution.yaml",
    ".tokencap/constitution/schema-invariants.yaml",
    "frontend/eslint.config.mjs",
    "frontend/next.config.ts",
    "frontend/postcss.config.mjs",
    "frontend/src/app/api/analysis/route.ts",
    "frontend/src/app/api/history/route.ts",
    "frontend/src/app/api/reports/[id]/route.ts"
  ],
  "architecture": {
    "style": "Modular",
    "layers": [
   

/* ...truncated for capsule budget... */
```

### .tokencap/constitution/constitution-history/constitution-2026-09-19.json

| Field | Value |
| --- | --- |
| Bytes | 14293 |
| Score | 119 |
| Why | changed |
| Status | Truncated (budget limit) |


```json
{
  "version": "1.2",
  "generatedAt": "2026-09-19T09:59:33.190Z",
  "rules": [
    {
      "id": "CONST-API-001",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/analysis public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/analysis."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-002",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/history public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/history."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-003",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/reports public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/reports."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-004",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/reports/upload public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/reports/upload."
      ],
      "derivedFrom": [
        "frontend/src/app/api/reports/upload/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-005",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/reports/[id] public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/reports/[id]."
      ],
      "derivedFrom": [
        "frontend/src/app/api/reports/[id]/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-006",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/tests/[slug]/history public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/tests/[slug]/history."
      ],
      "derivedFrom": [
        "frontend/src/app/api/tests/[slug]/history/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-007",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "GET /health public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /health."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-008",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "POST /analyze public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /analyze."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-009",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "POST /analyze/batch public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /analyze/batch."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-001",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Services cannot import UI components.",
      "reason": "Importing UI components into services couples server-side logic to browser rendering. This breaks SSR, testability, and separation of concerns.",
      "whatBreaks": "Server-side services gain browser-only dependencies. Unit tests for services fail. SSR breaks.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-002",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Controllers cannot access the database directly.",
      "reason": "Direct DB access in controllers bypasses the service layer. This breaks the layered architecture and makes logic untestable.",
      "whatBreaks": "Business logic leaks into controllers. Database coupling makes refactoring expensive.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-003",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Route handlers cannot access the database directly.",
      "reason": "Routes should delegate to services/controllers, not query the database themselves.",
      "whatBreaks": "Business logic scattered across route files. Impossible to test in isolation.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-004",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "UI components cannot import server-only modules.",
      "reason": "Server-only modules may contain secrets or Node.js-only APIs that crash in the browser.",
      "whatBreaks": "Build errors in browser environments. Potential secret exposure.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-005",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.8,
      "source": "heuristic",
      "description": "High-impact clusters (Config, Other, Database) must not gain new circular dependencies.",
      "reason": "High-impact clusters already coordinate many modules. Adding circular imports makes builds fragile.",
      "whatBreaks": "Module resolution fails. Build tools (webpack, esbuild) may hang or produce incorrect output.",
      "examples": [
        "Use dependency injection or an event bus to break cycles."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-SEC-001",
      "category": "Security",
      "severity": "CRITICAL",
      "confidence": 0.9,
      "source": "heuristic",
      "description": "Environment secrets must never be hardcoded in source files.",
      "reason": "Secrets committed to source are exposed via version control history and repository access.",
      "whatBreaks": "Security breach. API keys, database credentials, and tokens compromised.",
      "examples": [
        "Found in: .kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts, frontend/src/lib/ai.ts"
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts",
        "frontend/src/lib/ai.ts",
        "frontend/src/lib/api.ts",
        "frontend/src/lib/ml.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-SEC-002",
      "category": "Security",
      "severity": "CRITICAL",
      "confidence": 0.99,
      "source": "heuristic",
      "description": "Environment variable files (.env) must never be committed to version control.",
      "reason": ".env files contain secrets. Committing them exposes credentials to all repository users.",
      "whatBreaks": "All secrets in .env become public. Immediate security incident.",
      "examples": [
        "Ensure .env is in .gitignore.",
        "Use a secrets manager for production."
      ],
      "derivedFrom": [
        ".env",
        ".env.example"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-COMP-001",
      "category": "Compliance",
      "severity": "CRITICAL",
      "confidence": 0.9,
      "source": "heuristic",
      "description": "Payment processing (PCI-DSS) — all Stripe/payment code requires compliance review.",
      "reason": "PCI-DSS requires that all payment card data handling meets security standards. Any change to payment flows must be reviewed.",
      "whatBreaks": "PCI compliance violation. Payment processor account suspension. Legal liability.",
      "examples": [
        "Always review PCI-related code before merging.",
        "Found in: .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx, .tokencap/constitution/compliance-rules.md"
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx",
        ".tokencap/constitution/compliance-rules.md",
        ".tokencap/constitution/constitution.md",
        ".tokencap/constitution/constitution.yaml"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-COMP-002",
      "category": "Compliance",
      "severity": "CRITICAL",
      "confidence": 0.75,
      "source": "heuristic",
      "description": "HIPAA compliance — protected health information (PHI) handling must remain compliant.",
      "reason": "HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.",
      "whatBreaks": "HIPAA violation. Criminal liability. Patient data exposed.",
      "examples": [
        "Always review HIPAA-related code before merging.",
        "Found in: .kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx, .kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx"
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/loading.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-COMP-003",
      "category": "Compliance",
      "severity": "CRITICAL",
      "confidence": 0.85,
      "source": "heuristic",
      "description": "Audit logging must always be written and never removed.",
      "reason": "Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.",
      "whatBreaks": "Compliance audit failures. Inability to investigate security incidents. Regulatory violations.",
      "examples": [
        "Always review AUDIT-related code before merging.",
        "Found in: .tokencap/constitution/compliance-rules.md, .tokencap/constitution/constitution.md"
      ],
      "derivedFrom": [
        ".tokencap/constitution/compliance-rules.md",
        ".tokencap/constitution/constitution.md",
        ".tokencap/constitution/cons

/* ...truncated for capsule budget... */
```

### .tokencap/constitution/constitution.json

| Field | Value |
| --- | --- |
| Bytes | 14293 |
| Score | 119 |
| Why | changed |
| Status | Truncated (budget limit) |


```json
{
  "version": "1.2",
  "generatedAt": "2026-09-19T09:59:33.190Z",
  "rules": [
    {
      "id": "CONST-API-001",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/analysis public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/analysis."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-002",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/history public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/history."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-003",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/reports public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/reports."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-004",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/reports/upload public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/reports/upload."
      ],
      "derivedFrom": [
        "frontend/src/app/api/reports/upload/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-005",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/reports/[id] public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/reports/[id]."
      ],
      "derivedFrom": [
        "frontend/src/app/api/reports/[id]/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-006",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "nextjs",
      "description": "/api/tests/[slug]/history public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /api/tests/[slug]/history."
      ],
      "derivedFrom": [
        "frontend/src/app/api/tests/[slug]/history/route.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-007",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "GET /health public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /health."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-008",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "POST /analyze public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /analyze."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-API-009",
      "category": "API",
      "severity": "HIGH",
      "confidence": 0.76,
      "source": "fastapi",
      "description": "POST /analyze/batch public response structure must remain backward compatible.",
      "reason": "Public API endpoints form the contract between this service and its consumers.",
      "whatBreaks": "External integrations, mobile apps, or SDKs break if response shape changes.",
      "examples": [
        "Do not remove or rename fields from the response of /analyze/batch."
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/ml/app/main.py"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-001",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Services cannot import UI components.",
      "reason": "Importing UI components into services couples server-side logic to browser rendering. This breaks SSR, testability, and separation of concerns.",
      "whatBreaks": "Server-side services gain browser-only dependencies. Unit tests for services fail. SSR breaks.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-002",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Controllers cannot access the database directly.",
      "reason": "Direct DB access in controllers bypasses the service layer. This breaks the layered architecture and makes logic untestable.",
      "whatBreaks": "Business logic leaks into controllers. Database coupling makes refactoring expensive.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-003",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "Route handlers cannot access the database directly.",
      "reason": "Routes should delegate to services/controllers, not query the database themselves.",
      "whatBreaks": "Business logic scattered across route files. Impossible to test in isolation.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-004",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.72,
      "source": "heuristic",
      "description": "UI components cannot import server-only modules.",
      "reason": "Server-only modules may contain secrets or Node.js-only APIs that crash in the browser.",
      "whatBreaks": "Build errors in browser environments. Potential secret exposure.",
      "examples": [
        "Respect the layer boundary described."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-ARCH-005",
      "category": "Architecture",
      "severity": "HIGH",
      "confidence": 0.8,
      "source": "heuristic",
      "description": "High-impact clusters (Config, Other, Database) must not gain new circular dependencies.",
      "reason": "High-impact clusters already coordinate many modules. Adding circular imports makes builds fragile.",
      "whatBreaks": "Module resolution fails. Build tools (webpack, esbuild) may hang or produce incorrect output.",
      "examples": [
        "Use dependency injection or an event bus to break cycles."
      ],
      "derivedFrom": [],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-SEC-001",
      "category": "Security",
      "severity": "CRITICAL",
      "confidence": 0.9,
      "source": "heuristic",
      "description": "Environment secrets must never be hardcoded in source files.",
      "reason": "Secrets committed to source are exposed via version control history and repository access.",
      "whatBreaks": "Security breach. API keys, database credentials, and tokens compromised.",
      "examples": [
        "Found in: .kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts, frontend/src/lib/ai.ts"
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/lib/supabase.ts",
        "frontend/src/lib/ai.ts",
        "frontend/src/lib/api.ts",
        "frontend/src/lib/ml.ts"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-SEC-002",
      "category": "Security",
      "severity": "CRITICAL",
      "confidence": 0.99,
      "source": "heuristic",
      "description": "Environment variable files (.env) must never be committed to version control.",
      "reason": ".env files contain secrets. Committing them exposes credentials to all repository users.",
      "whatBreaks": "All secrets in .env become public. Immediate security incident.",
      "examples": [
        "Ensure .env is in .gitignore.",
        "Use a secrets manager for production."
      ],
      "derivedFrom": [
        ".env",
        ".env.example"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-COMP-001",
      "category": "Compliance",
      "severity": "CRITICAL",
      "confidence": 0.9,
      "source": "heuristic",
      "description": "Payment processing (PCI-DSS) — all Stripe/payment code requires compliance review.",
      "reason": "PCI-DSS requires that all payment card data handling meets security standards. Any change to payment flows must be reviewed.",
      "whatBreaks": "PCI compliance violation. Payment processor account suspension. Legal liability.",
      "examples": [
        "Always review PCI-related code before merging.",
        "Found in: .kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx, .tokencap/constitution/compliance-rules.md"
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/components/simplified/ClearNextActions.tsx",
        ".tokencap/constitution/compliance-rules.md",
        ".tokencap/constitution/constitution.md",
        ".tokencap/constitution/constitution.yaml"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-COMP-002",
      "category": "Compliance",
      "severity": "CRITICAL",
      "confidence": 0.75,
      "source": "heuristic",
      "description": "HIPAA compliance — protected health information (PHI) handling must remain compliant.",
      "reason": "HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.",
      "whatBreaks": "HIPAA violation. Criminal liability. Patient data exposed.",
      "examples": [
        "Always review HIPAA-related code before merging.",
        "Found in: .kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx, .kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx"
      ],
      "derivedFrom": [
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/not-found.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/page.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/loading.tsx",
        ".kilo/worktrees/ginger-myrtle/frontend/src/app/reports/[id]/page.tsx"
      ],
      "relationships": [],
      "manual": false
    },
    {
      "id": "CONST-COMP-003",
      "category": "Compliance",
      "severity": "CRITICAL",
      "confidence": 0.85,
      "source": "heuristic",
      "description": "Audit logging must always be written and never removed.",
      "reason": "Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.",
      "whatBreaks": "Compliance audit failures. Inability to investigate security incidents. Regulatory violations.",
      "examples": [
        "Always review AUDIT-related code before merging.",
        "Found in: .tokencap/constitution/compliance-rules.md, .tokencap/constitution/constitution.md"
      ],
      "derivedFrom": [
        ".tokencap/constitution/compliance-rules.md",
        ".tokencap/constitution/constitution.md",
        ".tokencap/constitution/cons

/* ...truncated for capsule budget... */
```

### .tokencap/graph/summary.md

| Field | Value |
| --- | --- |
| Bytes | 18976 |
| Score | 119 |
| Why | changed |
| Status | Truncated (budget limit) |


```markdown
# TokenCap Project Graph

Generated: 9/19/2026, 3:29:32 PM

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

- .kilo/worktrees/ginger-myrtle/frontend/src/components/compare/ComparisonV

/* ...truncated for capsule budget... */
```

### .kilo/worktrees/ginger-myrtle/frontend/README.md

| Field | Value |
| --- | --- |
| Bytes | 1486 |
| Score | 105 |
| Why | project-metadata, high-signal-doc |
| Status | Full content |


```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

### .kilo/worktrees/ginger-myrtle/README.md

| Field | Value |
| --- | --- |
| Bytes | 107 |
| Score | 105 |
| Why | project-metadata, high-signal-doc |
| Status | Full content |


```markdown
   # AI-Powered Medical Report Simplifier
   Hackathon project that simplifies medical reports using AI.
```

### frontend/README.md

| Field | Value |
| --- | --- |
| Bytes | 1486 |
| Score | 105 |
| Why | project-metadata, high-signal-doc |
| Status | Full content |


```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

### README.md

| Field | Value |
| --- | --- |
| Bytes | 107 |
| Score | 105 |
| Why | project-metadata, high-signal-doc |
| Status | Full content |


```markdown
   # AI-Powered Medical Report Simplifier
   Hackathon project that simplifies medical reports using AI.
```

### .kilo/worktrees/ginger-myrtle/frontend/package.json

| Field | Value |
| --- | --- |
| Bytes | 737 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.116.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.453.0",
    "next": "16.3.5",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "recharts": "^3.10.1",
    "tailwind-merge": "^2.5.4",
    "zod": "^4.6.5"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### .kilo/worktrees/ginger-myrtle/frontend/tsconfig.json

| Field | Value |
| --- | --- |
| Bytes | 704 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### .kilo/worktrees/ginger-myrtle/ml/requirements.txt

| Field | Value |
| --- | --- |
| Bytes | 65 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```txt
fastapi
uvicorn
pydantic
numpy
pandas
scikit-learn
pytest
```

### frontend/package.json

| Field | Value |
| --- | --- |
| Bytes | 770 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@google/genai": "^2.23.0",
    "@supabase/supabase-js": "^2.116.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.453.0",
    "next": "16.3.5",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "recharts": "^3.10.1",
    "tailwind-merge": "^2.5.4",
    "zod": "^4.6.5"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### frontend/tsconfig.json

| Field | Value |
| --- | --- |
| Bytes | 704 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### ml/requirements.txt

| Field | Value |
| --- | --- |
| Bytes | 58 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```txt
fastapi
uvicorn
pydantic
numpy
pandas
scikit-learn
pytest
```

### .kilo/worktrees/ginger-myrtle/frontend/src/components/tests/TestSelectorNav.tsx

| Field | Value |
| --- | --- |
| Bytes | 1334 |
| Score | 48 |
| Why | source, test |
| Status | Full content |


```tsx
import React from "react";
import Link from "next/link";
import { MedicalTest } from "@/types/medical";
import { cn } from "@/lib/utils";

interface TestSelectorNavProps {
  currentSlug: string;
  allTests: MedicalTest[];
}

export function TestSelectorNav({
  currentSlug,
  allTests,
}: TestSelectorNavProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
      <span className="text-xs text-slate-400 shrink-0 font-medium mr-1">
        Switch Biomarker:
      </span>
      {allTests.map((t) => {
        const isActive = t.slug === currentSlug;
        return (
          <Link
            key={t.slug}
            href={`/tests/${t.slug}`}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border",
              isActive
                ? "bg-teal-950/80 text-teal-300 border-teal-700/80 shadow-sm"
                : "bg-slate-900/60 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700"
            )}
          >
            <span>{t.test_name}</span>
            {t.anomaly && (
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block ml-1.5" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
```

### .kilo/worktrees/ginger-myrtle/docs/architecture.md

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 35 |
| Why | high-signal-doc |
| Status | Full content |


```markdown

```

### docs/architecture.md

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 35 |
| Why | high-signal-doc |
| Status | Full content |


```markdown

```

### .kilo/worktrees/ginger-myrtle/frontend/src/app/api/analysis/route.ts

| Field | Value |
| --- | --- |
| Bytes | 148 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Analysis API endpoint" });
}
```

### .kilo/worktrees/ginger-myrtle/frontend/src/app/api/history/route.ts

| Field | Value |
| --- | --- |
| Bytes | 147 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "History API endpoint" });
}
```

### .kilo/worktrees/ginger-myrtle/frontend/src/app/api/reports/route.ts

| Field | Value |
| --- | --- |
| Bytes | 578 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
import { NextResponse } from "next/server";
import { getReports } from "@/lib/supabase";

export async function GET() {
  try {
    const reports = await getReports();

    return NextResponse.json({
      success: true,
      reports,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    console.error("Server error fetching reports:", err);
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
```

### .kilo/worktrees/ginger-myrtle/frontend/src/lib/ai.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### .kilo/worktrees/ginger-myrtle/frontend/src/lib/ml.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### .kilo/worktrees/ginger-myrtle/frontend/src/lib/validation.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### .kilo/worktrees/ginger-myrtle/frontend/src/schemas/medicalReport.ts

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts

```

### frontend/src/app/api/history/route.ts

| Field | Value |
| --- | --- |
| Bytes | 147 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "History API endpoint" });
}
```

### .kilo/worktrees/ginger-myrtle/ml/tests/__init__.py

| Field | Value |
| --- | --- |
| Bytes | 20 |
| Score | 18 |
| Why | test |
| Status | Full content |


```py
# ML tests package
```

### .kilo/worktrees/ginger-myrtle/ml/app/__init__.py

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 0 |
| Why | context |
| Status | Full content |


```py

```

### ml/app/__init__.py

| Field | Value |
| --- | --- |
| Bytes | 0 |
| Score | 0 |
| Why | context |
| Status | Full content |


```py

```