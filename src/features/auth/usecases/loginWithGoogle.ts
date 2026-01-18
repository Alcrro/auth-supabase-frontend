import { supabaseLoginWithGoogle } from "../services/supabaseLoginWIthGoogle";

export async function loginWithGoogle() {
  const { data, error } = await supabaseLoginWithGoogle();

  if (error) throw error;
  return data;
}
