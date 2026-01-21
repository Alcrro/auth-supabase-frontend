import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../features/auth/store/useAuthStore";
import LogoutForm from "../LogoutForm";
import DefaultButton from "../../atoms/DefaultButton";
import { tabs } from "../../../shared/data/dashboard/dashboardTabsData";
import { useCurrentDashboardTab } from "../../../shared/hooks/currentDashboardTab";

export const DashboardHeader = () => {
  const { session, hydrated, resetPassword } = useAuthStore();
  const navigate = useNavigate();
  const email = session?.user.email ?? "";

  const currentTab = useCurrentDashboardTab();

  return (
    <div className={"flex gap-2 justify-center bg-blue-400 p-4"}>
      {tabs.map((item) => (
        <div
          key={item.key}
          className={`capitalize cursor-pointer ${
            currentTab === item.key && "font-semibold"
          } `}
          onClick={() => navigate(`/dashboard?tab=${item.key}`)}
        >
          {item.label}
        </div>
      ))}
      <div className={"absolute right-0 px-4 cursor-pointer group"}>
        <div>Settings</div>
        {!hydrated && session ? (
          <div onClick={() => navigate("/auth/login")} className={""}>
            Login
          </div>
        ) : (
          <div className="absolute right-0.5 text-nowrap text-center  py-2 group-hover:block">
            <div onClick={() => resetPassword(email)} className={""}>
              Reset password
            </div>
            <LogoutForm>
              <DefaultButton>Logout</DefaultButton>
            </LogoutForm>
          </div>
        )}
        {!session && <div onClick={() => navigate("/auth/login")}>Login</div>}
      </div>
    </div>
  );
};
