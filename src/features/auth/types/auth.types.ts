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
  id?: string;
  session_id: string;
  isCurrent: boolean;
  deviceType: ActiveDeviceType;
  deviceModel?: string; // doar pe mobile
  browser: string;
  // os: string;
  os: { name: string };
  ip_address?: string;
  created_at?: string;
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
