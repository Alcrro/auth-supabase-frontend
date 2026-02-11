import { osDeviceParse } from "../../../shared/utils/osDeviceParse";
import type { ActiveDevice, LoginAuditProps } from "../types/auth.types";

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

export function mapperDbActiveDevices(result: LoginAuditProps): ActiveDevice {
  // if (!result || result.length === 0) return [];

  const { device_type, browser, ip_address, created_at, id, session_id, os } =
    result;

  const created_atFormat = new Date(created_at).toUTCString();
  const currentSessionId = localStorage.getItem("session_id");

  return {
    id: id,
    session_id: session_id,
    deviceType: device_type,
    browser: browser ?? "Unknown browser",
    os: osDeviceParse(os),
    ip_address: ip_address ?? "Unknown ip address",
    created_at: created_atFormat,
    isCurrent: session_id === currentSessionId,
  };
}
