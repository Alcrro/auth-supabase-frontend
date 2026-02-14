import { useRef, useState } from "preact/hooks";
import DefaultButton from "../../../atoms/DefaultButton";
import ResetPassword from "../../../UI/buttons/goTo/ResetPassword";
import LogoutForm from "../../LogoutForm";
import useToggleDiv from "../../../../shared/hooks/useToggleDiv";

type SettingsMenuProps = {
  isAuthenticated: boolean;
  onLogin: () => void;
};
const SettingsMenu = ({ isAuthenticated, onLogin }: SettingsMenuProps) => {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const showingMenu = () => {
    setActive((prev: boolean) => !prev);
    return;
  };

  useToggleDiv({ ref, active, setActive });

  return (
    <div
      className={`dashboard_settings_menu absolute right-0 px-4 cursor-pointer group max-sm:relative mx-auto z-10 ${active ? "active" : ""} `}
      onClick={showingMenu}
      ref={ref}
    >
      <div className=" px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 transition select-none">
        Settings
      </div>
      {!isAuthenticated ? (
        <div
          onClick={onLogin}
          className={`group-hover:block ${active ? "hidden" : "flex"}`}
        >
          Login
        </div>
      ) : (
        <div
          className={` absolute right-0 mt-2 min-w-44 rounded-2xl p-2 flex flex-col gap-1 bg-white/15 backdrop-blur-lg border border-white/25 shadow-xl transition-all duration-150 origin-top-right ${!active ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"} max-sm:right-1/2 max-sm:translate-x-1/2
  `}
        >
          <ResetPassword />
          <LogoutForm>
            <DefaultButton
              variant="default"
              className={"default_button w-full"}
            >
              Logout
            </DefaultButton>
          </LogoutForm>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
