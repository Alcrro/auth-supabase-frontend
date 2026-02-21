import { useNavigate } from "react-router-dom";
import LogoutForm from "../../LogoutForm";
import { LogOutIcon, SettingsIcon } from "lucide-react";
import DefaultButton from "../../../atoms/DefaultButton";

const SettingsMenuSidebar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard?tab=settings");
  };
  return (
    <div
      className={
        "flex flex-col gap-2 px-3 py-1.5 rounded-lg text-black bg-white/80"
      }
    >
      <div
        className={
          "flex gap-2 p-2 w-full cursor-pointer hover:bg-white/20 backdrop-blur rounded-xl"
        }
        onClick={handleClick}
      >
        <SettingsIcon />
        <span>Settings</span>
      </div>
      <LogoutForm>
        <DefaultButton className="bg-red-600">
          <LogOutIcon className={"text-center mx-auto"} />
        </DefaultButton>
      </LogoutForm>
    </div>
  );
};

export default SettingsMenuSidebar;
