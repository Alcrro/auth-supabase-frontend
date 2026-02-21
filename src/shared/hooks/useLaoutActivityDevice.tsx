import { useEffect, type RefObject } from "react";
import type { ActiveDevice } from "../../features/auth/types/auth.types";

const useLayoutActivityDevice = (
  ref: RefObject<HTMLDivElement>,

  setMaxH: (value: number) => void,
  activity: ActiveDevice[],
  limit: number,
) => {
  useEffect(() => {
    if (!ref.current) return;

    setMaxH(ref.current.scrollHeight);
  }, [activity.length, limit]);
};

export default useLayoutActivityDevice;
