---

# 3️⃣ `README.architecture.md` – ARHITECTURĂ (foarte curat)

👉 **Scop**: colegi, tech leads, design review

```md
# 🧱 System Architecture

This document describes the high-level architecture of the authentication system.

---

## Components

- **Frontend**
  - Stateless UI
  - No sensitive logic
  - Read-only access to audit data

- **Backend / Edge Functions**
  - Authentication orchestration
  - Audit logging
  - Security enforcement

- **Authentication Provider**
  - Identity verification
  - Token & session management

- **Database**
  - Persistent audit logs
  - User metadata
  - Authorization rules

---

## Data Flow

1. User initiates authentication
2. Auth provider validates identity
3. Session is issued
4. Authentication event is logged
5. Frontend displays audit history

---

## Key Architectural Decisions

- Backend is the source of truth
- Frontend never logs security events
- Audit logs are append-only
- Security rules live close to data

---

## Scalability Considerations

- Append-only audit tables
- Indexed by user_id and timestamp
- Ready for pagination and retention policies

---

## Why This Architecture Works

- Clear separation of concerns
- Easy to audit and reason about
- Easy to extend with new security features
