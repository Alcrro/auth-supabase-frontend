import { useNavigate } from "react-router-dom";

const SettingsMenuSidebar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard?tab=settings");
  };
  return (
    <div className={"px-3 py-1.5 rounded-lg text-black bg-white/80"}>
      <div
        className={
          "p-2 w-full cursor-pointer hover:bg-white/20 backdrop-blur rounded-xl"
        }
        onClick={handleClick}
      >
        <span>Settings</span>
      </div>
    </div>
  );
};

export default SettingsMenuSidebar;
