import { supabaseCredentialsLogin } from "../services/supabaseCredentialsLogin";
import type { AuthCredentials } from "./authEngine";

export async function credentialsLogin(payload: AuthCredentials) {
  try {
    const { data, error } = await supabaseCredentialsLogin(payload);

    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
  }
}
