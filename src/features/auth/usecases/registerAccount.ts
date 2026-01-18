import { supabaseWithEmail } from "../services/supabaseSignUp";
import type { AuthCredentials } from "./authEngine";

export async function registerAccount(payload: AuthCredentials) {
  const { data, error } = await supabaseWithEmail(payload);

  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}
