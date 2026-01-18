import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

export function supabaseUpdatePassword(payload: {
  email?: string;
  password?: string;
}) {
  return supabase.auth.updateUser(payload);
}
