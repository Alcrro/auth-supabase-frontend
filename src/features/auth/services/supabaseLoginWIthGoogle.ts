import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

export function supabaseLoginWithGoogle() {
  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173/dashboard",
    },
  });
}
