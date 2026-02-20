import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../features/auth/store/useAuthStore";
import SettingsMenu from "./settingsMenu/SettingsMenu";
import DashboardTabs from "./DashboardTabs";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { useRef } from "preact/hooks";
import DefaultButton from "../../atoms/DefaultButton";
import useToggleDiv from "../../../shared/hooks/useToggleDiv";
import { useToggleElementStore } from "../../../features/auth/store/useToggleEleStore";

export const DashboardHeader = () => {
  const { setIsToggled, isToggled } = useToggleElementStore((store) => store);
  const isShowing = isToggled["dashboardHeaderMobile"];
  const ref = useRef(null);
  const navigate = useNavigate();

  const { session, hydrated } = useAuthStore();

  const isAuthenticated = hydrated && Boolean(session);

  const handleLogin = () => {
    navigate("/auth/login");
  };
  useToggleDiv({
    ref,
    active: isShowing,
    setActive: () => setIsToggled("dashboardHeaderMobile"),
  });

  return (
    <div
      className={
        "flex gap-2 justify-center items-center p-2 rounded-3xl relative z-1000 bg-white/15 backdrop-blur-lg border border-white/30 shadow-lg max-md:flex-col max-md:text-center"
      }
    >
      <div className="dashboard_menu hidden max-md:block">
        <div
          className="dashboard_title relative inline"
          onClick={() => setIsToggled("dashboardHeaderMobile")}
        >
          <DefaultButton variant="toggle">Dashboard</DefaultButton>
          <div className={"md:hidden absolute -right-6 top-3 -translate-y-1/2"}>
            <BiCaretDown className={`${isShowing && "hidden"}`} />
            <BiCaretUp className={`${!isShowing && "hidden"}`} />
          </div>
        </div>
      </div>
      <div
        className={`md:hidden relative z-9999 p-2 justify-center max-md:flex-col max-md:text-center w-full max-w-60 ${isShowing ? "flex max-md:absolute md:flex md:relative max-md:top-8 max-md:left-1/2 max-md:-translate-x-1/2" : "max-md:hidden md:flex"} rounded-2xl text-black bg-gray-300 opacity-100 font-semibold shadow-sm `}
        ref={ref}
      >
        <DashboardTabs modalTab={"header"} />
      </div>
      <SettingsMenu isAuthenticated={isAuthenticated} onLogin={handleLogin} />
    </div>
  );
};
