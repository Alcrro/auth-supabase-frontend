import { useNavigate } from "react-router-dom";
import { useToggleElementStore } from "../../../features/auth/store/useToggleEleStore";
import {
  tabs,
  tabsIconMap,
} from "../../../shared/data/dashboard/dashboardTabsData";
import { useCurrentDashboardTab } from "../../../shared/hooks/currentDashboardTab";

const DashboardTabs = ({ modalTab }: { modalTab: string }) => {
  const navigate = useNavigate();
  const currentTab = useCurrentDashboardTab();
  const { setIsToggled, isToggled, removeToggle } = useToggleElementStore(
    (store) => store,
  );

  const handleTabChange = (tabKey: string) => {
    if (tabKey === "current" && modalTab !== "header") {
      setIsToggled("currentTab");
    } else {
      removeToggle("currentTab");
      navigate(`/dashboard?tab=${tabKey}`);
    }
  };

  return tabs.map(({ key, label }) => {
    const TabIcon = tabsIconMap[key];
    const active = currentTab === key;

    return (
      <div
        key={key}
        onClick={() => handleTabChange(key)}
        className={`relative z-50 cursor-pointer select-none px-3 py-1.5 rounded-xl transition-all duration-150 flex gap-2 items-center ${
          key === "current" && isToggled["currentTab"]
            ? "bg-white/80 backdrop-blur font-semibold shadow-sm"
            : active
              ? ` ${isToggled["currentTab"] ? "bg-white/60" : "bg-white/80"} backdrop-blur font-semibold shadow-sm `
              : "hover:bg-white/20"
        }`}
      >
        <TabIcon className="text-base" />
        <span>{label}</span>
      </div>
    );
  });
};

export default DashboardTabs;
