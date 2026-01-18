import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

export function supabaseWithEmail(payload: {
  email: string;
  password: string;
}) {
  return supabase.auth.signUp({
    email: payload.email,
    password: payload.password,
  });
}
