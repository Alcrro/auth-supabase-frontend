import { supabaseLoginWithGithub } from "../services/supabaseloginWithGithub";

export async function loginWithGithub() {
  localStorage.setItem("oauth_intent", "1");

  const { data, error } = await supabaseLoginWithGithub();

  if (error) throw error;
  return data;
}
