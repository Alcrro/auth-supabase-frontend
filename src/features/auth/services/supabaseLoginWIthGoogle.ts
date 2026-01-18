import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);
export function supabaseLoginWithGoogle() {
  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${API_URL}/dashboard`,
    },
  });
}
