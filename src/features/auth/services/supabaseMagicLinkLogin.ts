import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
export function supabaseMagicLinkLogin(email: string) {
  return supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: "http://localhost:5173/dashboard",
    },
  });
}
