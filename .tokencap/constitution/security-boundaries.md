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
