import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

export function supabaseLogout() {
  return supabase.auth.signOut();
}
