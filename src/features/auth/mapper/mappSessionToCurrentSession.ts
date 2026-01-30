import type { Session } from "@supabase/supabase-js";
import type { CurrentSessionVM } from "../types/auth.types";

export function mapperSessionToCurrentSession(
  session: Session,
): CurrentSessionVM {
  let currentProvider;

  if (!session) {
    currentProvider = "email";
  } else if (session.provider_token) {
    // OAuth login

    currentProvider = session.user.identities?.at(-1)?.provider;
  } else {
    // Email / Magic link
    currentProvider = "email";
  }
  return {
    userId: session.user.id,
    email: session.user.email ?? "",
    provider: currentProvider ?? "unknown",
    image: session.user.user_metadata.avatar_url,
    ip: undefined,
    createdAt: session.user.created_at,
    expiresAt: session.expires_at
      ? new Date(Date.now() + session.expires_in).toDateString()
      : "",
  };
}
