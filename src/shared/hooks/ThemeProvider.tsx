import { createContext } from "preact";
import type { ReactNode, SetStateAction } from "preact/compat";
import { useContext, useEffect, useState, type Dispatch } from "preact/hooks";

type ThemeProps = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};
export const ThemeContext = createContext<ThemeProps>({
  toggle: false,
  setToggle: () => false,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState(false);

  // load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setToggle(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // update DOM + storage
  useEffect(() => {
    if (toggle) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [toggle]);
  return (
    <ThemeContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
