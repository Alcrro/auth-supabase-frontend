import {
  ClipboardList,
  History,
  MailCheck,
  Monitor,
  Settings2Icon,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type DashboardTab =
  | "current"
  | "devices"
  | "history"
  | "email"
  | "audit"
  | "settings";

interface TabProp {
  key: DashboardTab;
  label: string;
}
export const tabs: TabProp[] = [
  { key: "current", label: "Current session" },
  { key: "devices", label: "Active devices" },
  { key: "history", label: "Login history" },
  { key: "email", label: "Email verified" },
  { key: "audit", label: "Audit logs" },
];

export const tabsIconMap: Record<DashboardTab, LucideIcon> = {
  current: Monitor,
  devices: Smartphone,
  history: History,
  email: MailCheck,
  audit: ClipboardList,
  settings: Settings2Icon,
};
