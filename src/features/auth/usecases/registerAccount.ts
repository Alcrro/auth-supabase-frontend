import { supabaseWithEmail } from "../services/supabaseSignUp";
import type { AuthCredentials } from "./authEngine";

export async function registerAccount(payload: AuthCredentials) {
  const { data, error } = await supabaseWithEmail(payload);

  if (error) {
    console.error(error);
    throw error;
  }
  return data;
}
