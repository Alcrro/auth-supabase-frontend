import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

export async function getDeviceActivity() {
  const { data, error } = await supabase
    .from("login_audit")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }
  return data;
}
