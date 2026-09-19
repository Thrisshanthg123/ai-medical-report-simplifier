# Compliance Rules

> TokenCap Constitution Engine

## 🔴 CONST-COMP-001 — CRITICAL

**HIPAA compliance — protected health information (PHI) handling must remain compliant.**

> **Why:** HIPAA requires strict access control, audit logging, and encryption for all PHI. Removing protections is illegal.

> **What breaks:** HIPAA violation. Criminal liability. Patient data exposed.

*Files:* `.tokencap/constitution/compliance-rules.md`, `.tokencap/constitution/constitution.md`, `.tokencap/constitution/constitution.yaml`, `.tokencap/snapshot.md`

## 🔴 CONST-COMP-002 — CRITICAL

**Audit logging must always be written and never removed.**

> **Why:** Audit logs provide the immutable record required for compliance, forensic investigation, and regulatory review.

> **What breaks:** Compliance audit failures. Inability to investigate security incidents. Regulatory violations.

*Files:* `.tokencap/constitution/compliance-rules.md`, `.tokencap/constitution/constitution.md`, `.tokencap/constitution/constitution.yaml`, `.tokencap/snapshot.md`
