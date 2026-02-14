import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../features/auth/store/useAuthStore";
import { useCurrentDashboardTab } from "../../../shared/hooks/currentDashboardTab";
import SettingsMenu from "./settingsMenu/SettingsMenu";
import DashboardTabs from "./DashboardTabs";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { useRef, useState } from "preact/hooks";
import useToggleDiv from "../../../shared/hooks/useToggleDiv";
import DefaultButton from "../../atoms/DefaultButton";

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

  return (
    <div
      className={
        "flex gap-2 justify-center items-center p-2 rounded-3xl relative bg-white/15 backdrop-blur-lg border border-white/30 shadow-lg max-md:flex-col max-md:text-center"
      }
    >
      <div className="dashboard_menu hidden max-md:block">
        <div
          className="dashboard_title relative inline"
          onClick={() => setActive((prev) => !prev)}
        >
          <DefaultButton variant="toggle">Dashboard</DefaultButton>
          <div className={"md:hidden absolute -right-6 top-3 -translate-y-1/2"}>
            <BiCaretDown className={`${active && "hidden"}`} />
            <BiCaretUp className={`${!active && "hidden"}`} />
          </div>
        </div>
      </div>

      <div
        className={`md:hidden gap-2 justify-center max-md:flex-col max-md:text-center p-3 ${active ? "flex max-md:absolute md:flex md:relative z-20 max-md:top-8 max-md:left-1/2 max-md:-translate-x-1/2" : "max-md:hidden md:flex"} rounded-2xl text-black bg-gray-300 opacity-100 font-semibold shadow-sm`}
        ref={ref}
      >
        <DashboardTabs currentTab={currentTab} onTabChange={handleTabChange} />
      </div>
      <SettingsMenu isAuthenticated={isAuthenticated} onLogin={handleLogin} />
    </div>
  );
};
