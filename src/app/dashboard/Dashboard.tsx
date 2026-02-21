import DashboardLayout from "../../components/organisms/dashboard/DashboardLayout";
import { DashboardHeader } from "../../components/organisms/dashboard/DashboardHeader";
import DashboardMain from "../../components/organisms/dashboard/DashboardMain";
import { Helmet } from "react-helmet-async";
import DashBoardMenu from "../../components/organisms/dashboard/DashBoardMenu";
import SessionProfile from "../../components/organisms/dashboard/currentSession/SessionProfile";
import { useAuthStore } from "../../features/auth/store/useAuthStore";
import { mapperSessionToCurrentSession } from "../../features/auth/mapper/mappSessionToCurrentSession";
import CurrentSessionCard from "../../components/organisms/CurrentSessionCard";
import { useToggleElementStore } from "../../features/auth/store/useToggleEleStore";
import { useCurrentDashboardTab } from "../../shared/hooks/currentDashboardTab";
import SettingsMenuSidebar from "../../components/organisms/dashboard/settingsMenu/SettingsMenuSidebar";

const Dashboard = () => {
  const { session } = useAuthStore();

  if (!session) return null;
  const currentSession = mapperSessionToCurrentSession(session);
  const { isToggled } = useToggleElementStore((store) => store);

  const isShowing = isToggled["currentTab"];
  const currentTab = useCurrentDashboardTab();

  return (
    <>
      <Helmet>
        <title>Dashboard | Alcrro</title>
      </Helmet>
      <DashboardLayout>
        <div className={"[grid-area:header] my-2"}>
          <DashboardHeader />
        </div>
        <div className="max-md:hidden container flex flex-col gap-2">
          <div
            className={` max-w-80 max-md:max-w-60 h-fit w-full p-2 bg-(--background-container-color) text-black md:[grid-area:dashboardMenu] rounded-md relative ${isShowing ? "delay-200 rounded-r-none" : "delay-200 rounded-r-md"}`}
          >
            {currentTab === "current" ||
              (currentSession.image && (
                <div
                  className={`profile ${isShowing ? "invisible" : "delay-200"}`}
                >
                  <SessionProfile image={currentSession.image} />
                </div>
              ))}
            <DashBoardMenu />
            <CurrentSessionCard session={currentSession} />
          </div>
          <SettingsMenuSidebar />
        </div>
        <div className={"flex [grid-area:dashboardMain] w-full h-full"}>
          <DashboardMain />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
