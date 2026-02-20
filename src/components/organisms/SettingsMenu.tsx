import { useState, type FC } from "preact/compat";
import { useToggleElementStore } from "../../features/auth/store/useToggleEleStore";
import Title from "../atoms/Title";
import { cn } from "../../shared/utils/cn";

const SettingsMenu = () => {
  const [theme, setTheme] = useState<boolean>(() => {
    const stored = localStorage.getItem("theme");
    return stored ? JSON.parse(stored) : false;
  });
  const { setIsToggled, isToggled } = useToggleElementStore((store) => store);
  const isActive = isToggled["toggleTheme"];

  const switchTheme = () => {
    const nextValue = !theme;
    setTheme(nextValue);
    localStorage.setItem("theme", JSON.stringify(nextValue));
    console.log({ isActive });
  };

  return (
    <>
      <Title description="Settings" />
      <div className="container">
        <div className="toggle_theme flex justify-between bg-gray-300 text-black p-3 rounded-2xl">
          <div className="description">Theme</div>
          <ToggleButton type="switch" active={theme} setActive={switchTheme} />
        </div>
      </div>
    </>
  );
};

export default SettingsMenu;

type ToggleButtonProps = {
  type: "switch";
  active: boolean;
  setActive: () => void;
};
const ToggleButton: FC<ToggleButtonProps> = ({ type, active, setActive }) => {
  return (
    <button
      className={cn(toggleStyle(type, active))}
      onClick={setActive}
    ></button>
  );
};

const toggleStyle = (type: "switch", active: boolean) => {
  const mapperStyles = {
    switch: `relative value w-14 rounded-4xl after:content-[''] flex items-center justify-start after:m-1 after:relative after:w-4 after:transition-all after:duration-600 before:absolute ${active ? "before:content-['I'] before:text-gray-300 before:left-3 after:left-8 bg-black after:bg-white" : "before:content-['0'] before:text-gray-300 before:right-3 after:left-0 bg-white"} after:h-4 after:rounded-2xl after:bg-gray-800`,
  };

  return mapperStyles[type];
};
