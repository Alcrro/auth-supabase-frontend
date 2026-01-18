import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

export function supabaseLoginWithGithub() {
  return supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:5173/dashboard",
    },
  });
}
