import type { RefObject } from "preact";
import { useEffect, type Dispatch, type StateUpdater } from "preact/hooks";

interface ToggleProps<T extends HTMLElement> {
  ref: RefObject<T | null>;
  active: boolean;
  setActive: Dispatch<StateUpdater<boolean>>;
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
        setActive(false);
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
