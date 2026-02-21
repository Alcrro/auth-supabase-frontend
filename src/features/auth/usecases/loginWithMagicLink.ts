import { supabaseMagicLinkLogin } from "../services/supabaseMagicLinkLogin";

export async function loginWithMagicLink(payload: { email: string }) {
  const { data, error } = await supabaseMagicLinkLogin(payload.email);

  if (error) throw error;

  localStorage.setItem("login_method", "password");
  return data;
}
