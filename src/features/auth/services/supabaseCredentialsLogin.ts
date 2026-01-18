import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

export function supabaseCredentialsLogin(credentials: {
  email: string;
  password: string;
}) {
  return supabase.auth.signInWithPassword(credentials);
}
