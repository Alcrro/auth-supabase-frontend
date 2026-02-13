
# 2️⃣ `README.security.md` – SECURITY DEEP DIVE (senior energy)

# 🔐 Security & Authentication Design

This document explains the security decisions behind the authentication system.

---

## 🎯 Objectives

- Ensure strong isolation between users
- Provide transparent authentication auditing
- Detect abnormal authentication behavior
- Minimize trust in the frontend

---

## 🔍 Why Implement Custom Login History?

Authentication providers focus on identity verification, not user-facing audit logs.

To address this, the system:

- Logs authentication events explicitly
- Stores audit data in a dedicated table
- Enforces strict access via RLS

This mirrors the approach used in enterprise systems.

---

## 🛡️ Row Level Security (RLS)

All user-facing tables are protected with PostgreSQL RLS policies.

Example:

```sql
user_id = auth.uid()
```
