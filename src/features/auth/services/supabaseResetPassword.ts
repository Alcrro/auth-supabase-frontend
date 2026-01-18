import type { AuthError } from "@supabase/supabase-js";
import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

export async function supabaseResetPassword(
  email: string,
): Promise<{ error: AuthError | null }> {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/auth/reset-password",
  });

  return { error };
}
