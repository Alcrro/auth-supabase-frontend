import {
  tabs,
  tabsIconMap,
} from "../../../shared/data/dashboard/dashboardTabsData";
type DashboardTabsProps = {
  currentTab: string | null;
  onTabChange: (key: string) => void;
};

const DashboardTabs = ({ currentTab, onTabChange }: DashboardTabsProps) => {
  return tabs.map(({ key, label }) => {
    const TabIcon = tabsIconMap[key];
    const active = currentTab === key;

    return (
      <div
        key={key}
        onClick={() => onTabChange(key)}
        className={`relative z-10 cursor-pointer select-none px-3 py-1.5 rounded-xl transition-all duration-150 flex gap-2 items-center 
          ${
            active
              ? "bg-white/80 backdrop-blur font-semibold shadow-sm"
              : "hover:bg-white/20"
          }
      `}
      >
        <TabIcon className="text-base" />
        <span>{label}</span>
      </div>
    );
  });
};

export default DashboardTabs;
