import { supabaseLoginWithGithub } from "../services/supabaseloginWithGithub";

export async function loginWithGithub() {
  const { data, error } = await supabaseLoginWithGithub();

  if (error) throw error;
  return data;
}
