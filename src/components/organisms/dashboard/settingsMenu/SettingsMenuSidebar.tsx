import { Link } from "react-router-dom";

const SettingsMenuSidebar = () => {
  return (
    <div
      className={
        "px-3 py-1.5 rounded-lg text-black bg-white/80 hover:bg-white/60 backdrop-blur"
      }
    >
      <Link to={"/dashboard?tab=settings"} className={"p-2 w-full"}>
        Settings
      </Link>
    </div>
  );
};

export default SettingsMenuSidebar;
