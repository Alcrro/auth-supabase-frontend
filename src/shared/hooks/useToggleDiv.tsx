import type { RefObject } from "preact";
import { useEffect } from "preact/hooks";

interface ToggleProps<T extends HTMLElement> {
  ref: RefObject<T | null>;
  active: boolean;
  setActive: () => void;
}

const useToggleDiv = <T extends HTMLElement>({
  ref,
  active,
  setActive,
}: ToggleProps<T>) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current) return;

      if (
        active &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        setActive();
      }
    }
    if (active) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [active, setActive]);
};

export default useToggleDiv;
