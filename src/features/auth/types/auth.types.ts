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
  deviceType: "desktop" | "mobile" | "tablet";
  deviceModel?: string; // doar pe mobile
  browser: string;
  os: {
    name: string;
    version?: string;
  };
};
