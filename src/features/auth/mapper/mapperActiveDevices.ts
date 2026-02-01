import type { ActiveDevice } from "../types/auth.types";

export interface LoginAuditProps {
  id?: string;
  user_id?: string;
  device_type: ActiveDevice["deviceType"];
  os: string;
  browser: string;
  ip_address?: string;
  created_at: string;
}

export function mapperActiveDevices(result: UAParser.IResult): ActiveDevice {
  return {
    deviceType: !result.device.type ? "desktop" : result.device.type,
    browser: result.browser.name ?? "Unknown browser",
    os: { name: result.os.name ?? "Unknown OS" },
  };
}

export function mapperDbActDev(result: LoginAuditProps[]): ActiveDevice[] {
  if (!result || result.length === 0) return [];

  const { device_type, browser, ip_address, created_at, id } = result[0];
  let parsedOs: any = { name: "Unknown OS" };
  result.map((r) => {
    try {
      parsedOs = JSON.parse(r.os);
    } catch {}
  });
  const created_atFormat = new Date(created_at).toUTCString();
  return [
    {
      id: id,
      deviceType: device_type,
      browser: browser ?? "Unknown browser",
      os: parsedOs,
      ip_address: ip_address ?? "Unknown ip address",
      created_at: created_atFormat,
    },
  ];
}
