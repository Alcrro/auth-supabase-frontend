import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../features/auth/store/useAuthStore";
import { useCurrentDashboardTab } from "../../../shared/hooks/currentDashboardTab";
import SettingsMenu from "./settingsMenu/SettingsMenu";
import DashboardTabs from "./DashboardTabs";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { useRef, useState } from "preact/hooks";
import useToggleDiv from "../../../shared/hooks/useToggleDiv";

export const DashboardHeader = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  const currentTab = useCurrentDashboardTab();
  const { session, hydrated } = useAuthStore();

  const isAuthenticated = hydrated && Boolean(session);

  const handleTabChange = (tabKey: string) => {
    navigate(`/dashboard?tab=${tabKey}`);
  };

  const handleLogin = () => {
    navigate("/auth/login");
  };

  useToggleDiv({ ref, active, setActive });
  console.log(active);

  return (
    <div
      className={
        "flex gap-2 justify-center bg-blue-400 p-2 max-sm:flex-col max-sm:text-center relative"
      }
    >
      <div className="dashboard_menu  hidden max-sm:block">
        <div
          className="dashboard_title relative inline"
          onClick={() => setActive((prev) => !prev)}
        >
          Dashboard
          <div className={"sm:hidden absolute -right-6 top-3 -translate-y-1/2"}>
            <BiCaretDown className={""} />
            <BiCaretUp className={"hidden"} />
          </div>
        </div>
      </div>

      <div
        className={`gap-2 justify-center bg-blue-400 max-sm:flex-col max-sm:text-center p-3 sm:flex ${active ? "flex absolute z-20 top-8 left-1/2 -translate-x-1/2" : "hidden"} rounded-2xl`}
        ref={ref}
      >
        <DashboardTabs currentTab={currentTab} onTabChange={handleTabChange} />
      </div>
      <SettingsMenu isAuthenticated={isAuthenticated} onLogin={handleLogin} />
    </div>
  );
};
