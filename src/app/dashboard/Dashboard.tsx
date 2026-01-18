import { useState } from "react";
import {
  tabs,
  type DashboardTab,
} from "../../shared/data/dashboard/dashboardTabsData";
import { DashboardContent } from "./DashboardContext";
import { useAuthStore } from "../../features/auth/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import LogoutForm from "../../components/organisms/LogoutForm";
import DefaultButton from "../../components/atoms/DefaultButton";

const Dashboard = () => {
  const [active, setActive] = useState<DashboardTab>("current");
  const email = useAuthStore((store) => store.session?.user.email) as string;
  const { session, ready, resetPassword } = useAuthStore((store) => store);
  const navigate = useNavigate();

  return (
    <div className={"flex flex-col h-screen"}>
      <div className={"flex gap-2 justify-center bg-blue-500 p-2 h-fit"}>
        {tabs.map((item) => (
          <div
            key={item.key}
            className={`capitalize cursor-pointer ${
              active === item.key && "font-semibold"
            } `}
            onClick={() => setActive(item.key)}
          >
            {item.label}
          </div>
        ))}
        <div className={"absolute right-0 px-4 cursor-pointer group"}>
          <div>Settings</div>
          {!ready && session ? (
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
        </div>
      </div>

      <div className="main flex-1 flex flex-col justify-center mx-auto">
        {!ready ? (
          <LoadingSpinner className="size-20" />
        ) : (
          <DashboardContent tab={active} session={session} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
