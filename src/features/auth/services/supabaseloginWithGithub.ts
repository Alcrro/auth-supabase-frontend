import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
const API_URL = import.meta.env.VITE_API_URL;

export function supabaseLoginWithGithub() {
  return supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${API_URL}/verify-email`,
    },
  });
}
