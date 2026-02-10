import { osDeviceParse } from "../../../shared/utils/osDeviceParse";
import type { LoginAuditProps, LoginHistoryProps } from "../types/auth.types";

export function mapperLoginHistory(
  login: LoginAuditProps & { nrCrt: number },
): LoginHistoryProps {
  return {
    id: login.id,
    nrCrt: login.nrCrt,
    created_at: new Date(login.created_at).toLocaleString(),
    success: false,
    action: login.action,
    ip_address: login.ip_address ?? "Unknown IP",
    location: login.country_code,
    provider: login.provider,
    device: login.device_type,
    os: osDeviceParse(login.os).name,
    browser: login.browser,
  };
}
