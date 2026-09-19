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
