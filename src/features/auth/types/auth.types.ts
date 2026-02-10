export type CurrentSessionVM = {
  userId: string;
  email: string;
  provider: string;
  image?: string;
  ip?: string;
  createdAt: string;
  expiresAt: string;
};

export type ActiveDevice = {
  id: string;
  session_id: string;
  isCurrent: boolean;
  deviceType: ActiveDeviceType;
  deviceModel?: string; // doar pe mobile
  browser: string;
  // os: string;
  os: { name: string };
  ip_address?: string;
  created_at?: string;
  totalRows?: number;
};

export type ActiveDeviceType =
  | "desktop"
  | "mobile"
  | "tablet"
  | "console"
  | "embedded"
  | "smarttv"
  | "wearable"
  | "xr";

export type LoginHistoryProps = {
  id: string;
  nrCrt: number;
  created_at: string;
  success: boolean;
  action: string;
  ip_address: string;
  location?: string;
  provider: string;
  device: string;
  os: string;
  browser: string;
};

export interface LoginAuditProps {
  id: string;
  user_id?: string;
  session_id: string;
  device_type: ActiveDevice["deviceType"];
  os: string;
  browser: string;
  provider: string;
  ip_address?: string;
  created_at: string;
  country_code: string;
  isCurrent: boolean | false;
  action: string;
}

export type ActivityFilters = {
  action?: LoginAuditProps["action"];
};
