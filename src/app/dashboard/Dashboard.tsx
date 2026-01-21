import DashboardLayout from "../../components/organisms/dashboard/DashboardLayout";
import { DashboardHeader } from "../../components/organisms/dashboard/DashboardHeader";
import DashboardMain from "../../components/organisms/dashboard/DashboardMain";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <DashboardMain />
    </DashboardLayout>
  );
};

export default Dashboard;
