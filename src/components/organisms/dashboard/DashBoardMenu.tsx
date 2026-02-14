import DashboardTabs from "./DashboardTabs";
import { useCurrentDashboardTab } from "../../../shared/hooks/currentDashboardTab";
import { useNavigate } from "react-router-dom";

const DashBoardMenu = () => {
  const navigate = useNavigate();
  const currentTab = useCurrentDashboardTab();
  const handleTabChange = (tabKey: string) => {
    navigate(`/dashboard?tab=${tabKey}`);
  };
  return (
    <div className={"flex flex-col gap-4 justify-center"}>
      <DashboardTabs currentTab={currentTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default DashBoardMenu;
