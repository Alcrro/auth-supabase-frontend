import type { Session } from "@supabase/supabase-js";
import type { CurrentSessionVM } from "../types/auth.types";

export function mapperSessionToCurrentSession(
  session: Session,
): CurrentSessionVM {
  const provider = localStorage.getItem("login_method");
  return {
    userId: session.user.id,
    email: session.user.email ?? "",
    provider: provider ?? "unknown",
    image: session.user.user_metadata.avatar_url,
    ip: undefined,
    createdAt: new Date(session.user.created_at).toDateString(),
    expiresAt: session.expires_at
      ? new Date(Date.now() + session.expires_in).toDateString()
      : "",
  };
}
