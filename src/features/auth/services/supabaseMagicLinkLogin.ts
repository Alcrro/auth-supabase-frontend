import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
const API_URL = import.meta.env.VITE_API_URL;

export function supabaseMagicLinkLogin(email: string) {
  return supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: `${API_URL}/dashboard`,
    },
  });
}
