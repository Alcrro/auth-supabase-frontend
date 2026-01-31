import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import { getCurrentDeviceInfo } from "../services/getCurrentDeviceInfo";
import { supabaseCredentialsLogin } from "../services/supabaseCredentialsLogin";
import type { AuthCredentials } from "./authEngine";

export async function credentialsLogin(payload: AuthCredentials) {
  try {
    const { os, deviceType, browser } = getCurrentDeviceInfo();

    const { data, error } = await supabaseCredentialsLogin(payload);

    if (error) throw error;

    // sanity check
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      const { error: errorHandler } = await supabase.rpc("record_login_audit", {
        device_type: deviceType,
      });

      if (errorHandler) {
        throw errorHandler;
      }
    }
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Internal error");
  }
}
