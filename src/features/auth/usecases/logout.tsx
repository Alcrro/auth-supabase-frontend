import { supabaseLogout } from "../services/supabaseLogout";

export async function logout(): Promise<void> {
  const { error } = await supabaseLogout();
  if (error) throw error;
  console.log({ error });

  return;
}
