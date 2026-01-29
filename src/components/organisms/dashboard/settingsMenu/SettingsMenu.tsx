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
      <div>Settings</div>
      {!isAuthenticated ? (
        <div
          onClick={onLogin}
          className={`group-hover:block ${active ? "hidden" : "flex"}`}
        >
          Login
        </div>
      ) : (
        <div
          className={`flex gap-2 absolute right-0.5 bg-[#251f25] rounded-md p-2 max-sm:right-1/2 max-sm:translate-x-1/2 text-nowrap text-center ${!active ? "hidden" : "flex"} group-hover:flex flex-col gap-1 shadow-xl`}
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
