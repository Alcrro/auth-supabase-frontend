import { useEffect, type RefObject } from "react";
import type { LoginAuditProps } from "../../features/auth/types/auth.types";

const useLayoutActivityDevice = (
  ref: RefObject<HTMLDivElement>,

  setMaxH: (value: number) => void,
  activity: LoginAuditProps[],
  limit: number,
) => {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const children = el.children;

    if (!children.length) return;

    if (limit === 5) {
      setMaxH(el.scrollHeight);
    } else if (limit >= 5) {
      setMaxH(el.scrollHeight);
    } else {
      const fist = children[0] as HTMLElement;
      setMaxH(fist.scrollHeight);
    }
  }, [activity.length, limit, setMaxH]);
};

export default useLayoutActivityDevice;
