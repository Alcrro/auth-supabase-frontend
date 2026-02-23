import { useRef } from "preact/hooks";
import DefaultButton from "../../../atoms/DefaultButton";
import ResetPassword from "../../../UI/buttons/goTo/ResetPassword";
import LogoutForm from "../../LogoutForm";
import useToggleDiv from "../../../../shared/hooks/useToggleDiv";
import { useToggleElementStore } from "../../../../features/auth/store/useToggleEleStore";

type SettingsMenuProps = {
  isAuthenticated: boolean;
  onLogin: () => void;
};
const SettingsMenu = ({ isAuthenticated, onLogin }: SettingsMenuProps) => {
  const { setIsToggled, isToggled } = useToggleElementStore((store) => store);
  const ref = useRef<HTMLDivElement>(null);
  const isActive = isToggled["settingsMenu"];
  const showingMenu = () => {
    setIsToggled("settingsMenu");

    return;
  };

  useToggleDiv({
    ref,
    active: isActive,
    setActive: () => setIsToggled("settingsMenu"),
  });

  return (
    <div
      className={`dashboard_settings_menu relative z-50 px-4 cursor-pointer group max-sm:relative md:ml-auto  ${isActive ? "active" : ""} `}
      onClick={showingMenu}
      ref={ref}
    >
      <div className="px-3 py-1.5 rounded-xl text-(--text-primary) bg-(--background-subtle) hover:bg-white/30 backdrop-blur-md border border-white/30 transition select-none">
        Settings
      </div>
      {!isAuthenticated ? (
        <div
          onClick={onLogin}
          className={`group-hover:block ${isActive ? "hidden" : "flex"}`}
        >
          Login
        </div>
      ) : (
        <div
          className={`absolute right-0 z-9999 mt-2 min-w-44 rounded-2xl p-2 flex flex-col gap-1 bg-(--background-subtle) backdrop-blur-lg border border-white/25 shadow-xl transition-all duration-150 origin-top-right ${!isActive ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"} max-md:right-1/2 max-md:translate-x-1/2
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
