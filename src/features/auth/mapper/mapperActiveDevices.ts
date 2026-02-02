import { maskIPv4 } from "../../../shared/hooks/maskIPv4";
import type { ActiveDevice } from "../types/auth.types";

export interface LoginAuditProps {
  id?: string;
  user_id?: string;
  session_id: string;
  device_type: ActiveDevice["deviceType"];
  os: string;
  browser: string;
  ip_address?: string;
  created_at: string;
  isCurrent: boolean | false;
}

export interface UAParserProps {
  device_type: ActiveDevice["deviceType"];
  os: { name: string };
  browser: string;
}

export function mapperActiveDevices(result: UAParser.IResult): UAParserProps {
  return {
    device_type: !result.device.type ? "desktop" : result.device.type,
    browser: result.browser.name ?? "Unknown browser",
    os: { name: result.os.name ?? "Unknown OS" },
  };
}

export function mapperDbActDev(result: LoginAuditProps): ActiveDevice {
  // if (!result || result.length === 0) return [];

  const {
    device_type,
    browser,
    ip_address,
    created_at,
    id,
    session_id,
    isCurrent,
  } = result;
  const parsedOs: any = result.os
    ? JSON.parse(result.os)
    : { name: "Unknown OS" };

  const created_atFormat = new Date(created_at).toUTCString();

  return {
    id: id,
    session_id: session_id,
    deviceType: device_type,
    browser: browser ?? "Unknown browser",
    os: parsedOs,
    ip_address: !ip_address ? "Unknown ip address" : maskIPv4(ip_address),
    created_at: created_atFormat,
    isCurrent,
  };
}
