import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import { getCurrentDeviceInfo } from "../services/getCurrentDeviceInfo";

export async function recordLoginAudit() {
  const { os, device_type, browser } = getCurrentDeviceInfo();
  const sessionId = crypto.randomUUID();
  localStorage.setItem("session_id", sessionId);

  const { error } = await supabase.rpc("record_login_audit", {
    session_id: sessionId,
    device_type,
    os,
    browser,
  });

  if (error) throw error;
}
