import { supabaseLoginWithGoogle } from "../services/supabaseLoginWIthGoogle";

export async function loginWithGoogle() {
  localStorage.setItem("oauth_intent", "1");
  const { data, error } = await supabaseLoginWithGoogle();

  if (error) throw error;
  localStorage.setItem("login_method", "google");
  return data;
}
