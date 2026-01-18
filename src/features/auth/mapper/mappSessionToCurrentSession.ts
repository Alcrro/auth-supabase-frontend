import type { Session } from "@supabase/supabase-js";
import type { CurrentSessionVM } from "../../../components/organisms/dashboard/CurrentSession";

export function mapperSessionToCurrentSession(
  session: Session,
): CurrentSessionVM {
  let currentProvider: "email" | "github" | "google";

  if (!session) {
    currentProvider = "email";
  } else if (session.provider_token) {
    // OAuth login
    currentProvider = session.user.app_metadata.provider as
      | "email"
      | "github"
      | "google";
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
