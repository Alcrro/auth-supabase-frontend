import { getGeolocation } from "../services/getGeolocation";
import { supabaseCredentialsLogin } from "../services/supabaseCredentialsLogin";
import type { AuthCredentials } from "./authEngine";
import { recordLoginAudit } from "./recordLoginAudit";

export async function credentialsLogin(payload: AuthCredentials) {
  try {
    const { data, error } = await supabaseCredentialsLogin(payload);

    if (error) throw error;
    localStorage.setItem("login_method", "password");

    await recordLoginAudit();
    await getGeolocation();

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Internal error");
  }
}
