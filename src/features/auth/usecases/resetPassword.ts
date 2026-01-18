import { supabaseResetPassword } from "../services/supabaseResetPassword";

export async function resetPassword(payload: { email: string }): Promise<void> {
  const { error } = await supabaseResetPassword(payload.email);
  if (error) throw error;
  return;
}
