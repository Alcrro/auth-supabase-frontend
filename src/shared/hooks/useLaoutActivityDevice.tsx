import { useLayoutEffect, type RefObject } from "react";
import type { ActiveDevice } from "../../features/auth/types/auth.types";

const useLayoutActivityDevice = (
  ref: RefObject<HTMLDivElement>,
  expanded: boolean,
  setMaxH: (value: number) => void,
  activity: ActiveDevice[],
) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;

    if (!children.length) return;

    if (!expanded) {
      const first = children[0] as HTMLElement;

      setMaxH(first.offsetHeight);
    } else {
      setMaxH(ref.current.scrollHeight);
    }
  }, [activity, expanded]);
};

export default useLayoutActivityDevice;
