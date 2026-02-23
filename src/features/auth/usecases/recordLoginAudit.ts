import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import { getCurrentDeviceInfo } from "../services/getCurrentDeviceInfo";
import { getGeolocation } from "../services/getGeolocation";

export async function recordLoginAudit(method: "login" | "logout" = "login") {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!session) return; // safety
  if (!user) return; // safety

  const { os, device_type, browser } = getCurrentDeviceInfo();

  const currentSession = session;

  const payload = JSON.parse(atob(currentSession?.access_token.split(".")[1]));

  const sessionId = payload.session_id;

  localStorage.setItem("session_id", sessionId);
  const provider = localStorage.getItem("login_method");

  const geolocation = await getGeolocation();

  const { error } = await supabase.rpc("record_login_audit", {
    p_user_id: session.user.id ?? user.id,
    p_provider: provider,
    p_action: method,
    p_session_id: sessionId,
    p_country_code: geolocation.country_code,
    p_os: os,
    p_browser: browser,
    p_device_type: device_type,
  });
  if (error) throw error;

  const { data: deviceId, error: errorRecordDevices } = await supabase.rpc(
    "record_devices",
    {
      p_user_id: session.user.id,
      p_os: os,
      p_browser: browser,
      p_device_type: device_type,
    },
  );

  if (errorRecordDevices || !deviceId)
    throw errorRecordDevices ?? new Error("Device not recorded");

  console.log(deviceId);

  const { error: errorDeviceSession } = await supabase.rpc(
    "record_device_sessions",
    {
      p_device_id: deviceId,
      p_session_id: sessionId,
    },
  );

  if (errorDeviceSession) throw errorDeviceSession;
}
