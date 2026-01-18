import { supabaseLoginWithGoogle } from "../services/supabaseLoginWIthGoogle";

export async function loginWithGoogle() {
  localStorage.setItem("oauth_intent", "1");

  const { data, error } = await supabaseLoginWithGoogle();

  if (error) throw error;
  return data;
}
