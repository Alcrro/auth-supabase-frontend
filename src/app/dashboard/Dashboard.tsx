import DashboardLayout from "../../components/organisms/dashboard/DashboardLayout";
import { DashboardHeader } from "../../components/organisms/dashboard/DashboardHeader";
import DashboardMain from "../../components/organisms/dashboard/DashboardMain";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Alcrro</title>
      </Helmet>
      <DashboardLayout>
        <DashboardHeader />
        <DashboardMain />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
