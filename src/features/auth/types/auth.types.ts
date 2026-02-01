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
  deviceType: "desktop" | "mobile" | "tablet";
  deviceModel?: string; // doar pe mobile
  browser: string;
  // os: string;
  os: { name: string };
  ip_address: string;
  created_at: string;
};
