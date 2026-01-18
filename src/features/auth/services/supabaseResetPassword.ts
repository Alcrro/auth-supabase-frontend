import type { AuthError } from "@supabase/supabase-js";
import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
const API_URL = import.meta.env.VITE_API_URL;

export async function supabaseResetPassword(
  email: string,
): Promise<{ error: AuthError | null }> {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${API_URL}/auth/reset-password`,
  });

  return { error };
}
