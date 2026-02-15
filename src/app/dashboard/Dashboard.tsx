import DashboardLayout from "../../components/organisms/dashboard/DashboardLayout";
import { DashboardHeader } from "../../components/organisms/dashboard/DashboardHeader";
import DashboardMain from "../../components/organisms/dashboard/DashboardMain";
import { Helmet } from "react-helmet-async";
import DashBoardMenu from "../../components/organisms/dashboard/DashBoardMenu";
import SessionProfile from "../../components/organisms/dashboard/currentSession/SessionProfile";
import { useAuthStore } from "../../features/auth/store/useAuthStore";
import { mapperSessionToCurrentSession } from "../../features/auth/mapper/mappSessionToCurrentSession";
import { useToggleElementStore } from "../../features/auth/store/useToggleEleStore";
import useToggleDiv from "../../shared/hooks/useToggleDiv";
import { useRef } from "preact/hooks";
import { useCurrentDashboardTab } from "../../shared/hooks/currentDashboardTab";
import {
  currentSessionMapper,
  type CurrentSessionVM,
} from "../../features/auth/types/auth.types";

const Dashboard = () => {
  const { isToggled, removeToggle } = useToggleElementStore((store) => store);
  const { session } = useAuthStore();
  if (!session) return null;
  const currentSession = mapperSessionToCurrentSession(session);
  const isShowing = isToggled["currentTab"];
  const ref = useRef(null);
  const currentTab = useCurrentDashboardTab();

  useToggleDiv({
    ref,
    active: isToggled["currentTab"],
    setActive: () => removeToggle("currentTab"),
  });
  console.log(currentTab === "current");

  const visibleKeys: (keyof CurrentSessionVM)[] = [
    "userId",
    "email",
    "createdAt",
    "expiresAt",
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard | Alcrro</title>
      </Helmet>
      <DashboardLayout>
        <div className={"[grid-area:header] m-2"}>
          <DashboardHeader />
        </div>

        <div
          className={`max-md:hidden max-w-80 max-md:max-w-60 h-fit w-full p-2 bg-gray-300 text-black md:[grid-area:dashboardMenu] rounded-md relative ${isShowing ? "delay-200 rounded-r-none" : "delay-200 rounded-r-md"}`}
        >
          {currentSession.image && (
            <div className={`profile ${isShowing ? "invisible" : "delay-700"}`}>
              <SessionProfile image={currentSession.image} />
            </div>
          )}
          <DashBoardMenu />
          <div
            className={` absolute top-0 transition-all duration-700 ${isShowing ? "h-95 left-full delay-150 duration-700 text-black" : "left-0 delay-150 duration-700 text-transparent"}`}
            ref={ref}
          >
            <div
              className={`flex flex-col gap-2 bg-gray-300 w-70 h-full ${isShowing ? " delay-1000 rounded-r-md" : "invisible"}`}
            >
              <SessionProfile image={currentSession.image!} />

              <div
                className={`flex flex-col gap-2 ${!isShowing ? "delay-400 duration-100 invisible" : "delay-700 duration-700 visible"}`}
              >
                {/* <div className="flex-col"> */}
                {visibleKeys.map((key) => (
                  <div
                    key={key}
                    className={`flex flex-col items-center text-center ${!isShowing ? "delay-100 duration-200 invisible" : "delay-700 duration-400 visible"}`}
                  >
                    <div className={"font-semibold"}>
                      {currentSessionMapper[key]}
                    </div>
                    <div>{currentSession[key]}</div>
                  </div>
                ))}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className={"flex [grid-area:dashboardMain] w-full h-full"}>
          <DashboardMain />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
