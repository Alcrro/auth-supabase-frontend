import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

export async function hasActiveSession() {
  const { data } = await supabase.auth.getSession();

  return !!data.session;
}
