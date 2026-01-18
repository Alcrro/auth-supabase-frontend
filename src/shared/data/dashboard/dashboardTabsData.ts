export type DashboardTab =
  | "current"
  | "devices"
  | "history"
  | "email"
  | "audit";

export const tabs: { key: DashboardTab; label: string }[] = [
  { key: "current", label: "Current session" },
  { key: "devices", label: "Active devices" },
  { key: "history", label: "Login history" },
  { key: "email", label: "Email verified" },
  { key: "audit", label: "Audit logs" },
];
