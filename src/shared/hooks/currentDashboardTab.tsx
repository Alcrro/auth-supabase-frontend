import { useSearchParams } from "react-router-dom";
import type { DashboardTab } from "../data/dashboard/dashboardTabsData";

export function useCurrentDashboardTab() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") as DashboardTab;
  console.log({ tab });

  const currentTab = tab === null ? "current" : tab;

  return currentTab;
}
