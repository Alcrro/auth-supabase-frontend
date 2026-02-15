import DashboardTabs from "./DashboardTabs";

const DashBoardMenu = () => {
  return (
    <div className={"flex flex-col gap-4 justify-center"}>
      <DashboardTabs modalTab="menuTabs" />
    </div>
  );
};

export default DashBoardMenu;
