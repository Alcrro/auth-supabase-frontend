import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import { getCurrentDeviceInfo } from "../services/getCurrentDeviceInfo";

export async function recordLoginAudit() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!session) return; // safety
  if (!user) return; // safety

  const { os, device_type, browser } = getCurrentDeviceInfo();
  const sessionId = crypto.randomUUID();

  localStorage.setItem("session_id", sessionId);
  const provider = localStorage.getItem("login_method");

  const { error } = await supabase.rpc("record_login_audit", {
    p_user_id: session.user.id ?? user.id,
    p_provider: provider,
    p_session_id: sessionId,
    p_device_type: device_type,
    p_os: os,
    p_browser: browser,
  });

  if (error) throw error;
}
