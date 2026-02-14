import DashboardLayout from "../../components/organisms/dashboard/DashboardLayout";
import { DashboardHeader } from "../../components/organisms/dashboard/DashboardHeader";
import DashboardMain from "../../components/organisms/dashboard/DashboardMain";
import { Helmet } from "react-helmet-async";
import DashBoardMenu from "../../components/organisms/dashboard/DashBoardMenu";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Alcrro</title>
      </Helmet>
      <DashboardLayout>
        <div className={"[grid-area:header]"}>
          <DashboardHeader />
        </div>
        <div
          className={
            "max-w-80 max-md:max-w-60 h-fit w-full p-2 bg-gray-300 text-black [grid-area:dashboardMenu] rounded-md "
          }
        >
          <DashBoardMenu />
        </div>
        <div className={"[grid-area:dashboardMain]"}>
          <DashboardMain />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
