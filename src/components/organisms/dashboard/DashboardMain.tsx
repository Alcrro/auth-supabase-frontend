import { useAuthStore } from "../../../features/auth/store/useAuthStore";
import { DashboardContent } from "../../../app/dashboard/DashboardContext";
import CurrentSessionSkeleton from "../../UI/skeletons/CurrentSessionSkeleton";
import { useCurrentDashboardTab } from "../../../shared/hooks/currentDashboardTab";

const DashboardMain = () => {
  const { hydrated, session } = useAuthStore();
  const currentTab = useCurrentDashboardTab();

  return (
    <div className="main flex-1 flex flex-col justify-center mx-auto">
      <div>
        {!hydrated ? (
          <CurrentSessionSkeleton />
        ) : (
          <DashboardContent tab={currentTab} session={session} />
        )}
      </div>
    </div>
  );
};

export default DashboardMain;
