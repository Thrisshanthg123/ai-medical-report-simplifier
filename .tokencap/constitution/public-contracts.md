# Public API Contracts

> TokenCap Constitution Engine

## 🟠 CONST-API-001 — HIGH

**/api/analysis public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `frontend/src/app/api/analysis/route.ts`

## 🟠 CONST-API-002 — HIGH

**/api/history public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `frontend/src/app/api/history/route.ts`

## 🟠 CONST-API-003 — HIGH

**/api/reports public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `frontend/src/app/api/reports/route.ts`

## 🟠 CONST-API-004 — HIGH

**GET /health public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `ml/app/main.py`

## 🟠 CONST-API-005 — HIGH

**POST /analyze public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `ml/app/main.py`

## 🟠 CONST-API-006 — HIGH

**POST /analyze/batch public response structure must remain backward compatible.**

> **Why:** Public API endpoints form the contract between this service and its consumers.

> **What breaks:** External integrations, mobile apps, or SDKs break if response shape changes.

*Files:* `ml/app/main.py`
