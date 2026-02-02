import { supabaseCredentialsLogin } from "../services/supabaseCredentialsLogin";
import type { AuthCredentials } from "./authEngine";
import { hasActiveSession } from "./hasActiveSession";
import { recordLoginAudit } from "./recordLoginAudit";

export async function credentialsLogin(payload: AuthCredentials) {
  try {
    const { data, error } = await supabaseCredentialsLogin(payload);

    if (error) throw error;

    if (await hasActiveSession()) {
      await recordLoginAudit();
    }
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Internal error");
  }
}
