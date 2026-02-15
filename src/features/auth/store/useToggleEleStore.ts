import { create } from "zustand";
interface UseToggleEleStoreProps {
  isToggled: Record<string, boolean>;
  toggle: (key: string) => void;
  setIsToggled: (key: string) => void;
  removeToggle: (key: string) => void;
}
export const useToggleElementStore = create<UseToggleEleStoreProps>((set) => ({
  isToggled: {},
  toggle: (key) =>
    set((s) => ({
      isToggled: { ...s.isToggled, [key]: !s.isToggled[key] },
    })),
  setIsToggled: (key) =>
    set((s) => ({ isToggled: { ...s.isToggled, [key]: !s.isToggled[key] } })),
  removeToggle: (key) =>
    set((s) => {
      const copy = { ...s.isToggled };
      delete copy[key];
      return { isToggled: copy };
    }),
}));
