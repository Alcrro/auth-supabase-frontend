import {
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "preact/compat";
import Title from "../atoms/Title";
import { cn } from "../../shared/utils/cn";
import { useTheme } from "next-themes";

const SettingsMenu = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="container h-full bg-(--background-container) text-(--text-primary) p-3 rounded-xl">
      <Title description="Settings" />
      <div className="toggle_theme flex justify-between bg-(--background-color) text-(--text-primary) p-3 rounded-2xl shadow-md">
        <div className="description">Theme</div>
        <ToggleButton
          type="switch"
          active={resolvedTheme === "dark" ? "dark" : "light"}
          setActive={() =>
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
        />
      </div>
    </div>
  );
};

export default SettingsMenu;

type ToggleButtonProps = {
  type: "switch";
  active: "dark" | "light";
  setActive: Dispatch<SetStateAction<{}>>;
};
const ToggleButton: FC<ToggleButtonProps> = ({ type, active, setActive }) => {
  return (
    <button
      className={`${cn(toggleStyle(type, active))}`}
      onClick={setActive}
    ></button>
  );
};

const toggleStyle = (type: "switch", active: "dark" | "light") => {
  const mapperStyles = {
    switch: `relative value w-14 rounded-4xl after:content-[''] flex items-center justify-start after:m-1 after:relative after:w-4 after:transition-all after:duration-600 before:absolute ${active === "dark" ? "before:content-['I'] before:text-gray-300 before:left-3 after:left-8 bg-black after:bg-white" : "before:content-['0'] before:text-white before:right-3 after:left-0 after:bg-black bg-gray-300"} after:h-4 after:rounded-2xl`,
  };

  return mapperStyles[type];
};
