import type { Session } from "@supabase/supabase-js";
import ActiveDevices from "../../components/organisms/dashboard/ActiveDevices";
import AuditLogTable from "../../components/organisms/dashboard/auditLogTable/AuditLogTable";
import CurrentSession from "../../components/organisms/dashboard/CurrentSession";
import EmailVerified from "../../components/organisms/dashboard/EmailVerified";
import LoginHistory from "../../components/organisms/dashboard/LoginHistory";

import type { DashboardTab } from "../../shared/data/dashboard/dashboardTabsData";

export const DashboardContent = ({
  tab,
  session,
}: {
  tab: DashboardTab;
  session: Session | null;
}) => {
  if (!session) return null;

  switch (tab) {
    case "current":
      return <CurrentSession />;
    case "devices":
      return <ActiveDevices />;
    case "history":
      return <LoginHistory />;
    case "email":
      return <EmailVerified />;
    case "audit":
      return <AuditLogTable />;
    default:
      return null;
  }
};
