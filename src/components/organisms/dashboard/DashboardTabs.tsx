import { tabs } from "../../../shared/data/dashboard/dashboardTabsData";
type DashboardTabsProps = {
  currentTab: string | null;
  onTabChange: (key: string) => void;
};

const DashboardTabs = ({ currentTab, onTabChange }: DashboardTabsProps) => {
  return (
    <>
      {tabs.map(({ key, label }) => (
        <div
          key={key}
          className={`capitalize cursor-pointer  ${
            currentTab === key && "font-semibold underline"
          } `}
          onClick={() => onTabChange(key)}
        >
          <span className={"relative"}>{label}</span>
        </div>
      ))}
    </>
  );
};

export default DashboardTabs;
