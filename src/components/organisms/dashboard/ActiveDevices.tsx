import { useLayoutEffect, useRef, useState } from "preact/hooks";
import type { ActiveDevice } from "../../../features/auth/types/auth.types";
import useGetActivityDevice from "../../../shared/hooks/useGetActivityDevice";
import { SkeletonList } from "../../UI/skeletons/ActivDeviceSkeletonCard";
import CurrentActiveDevice from "./CurrentActiveDevice";
import type { CSSProperties } from "preact";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

export const cardStyle = (isCurrent: boolean): CSSProperties => {
  console.log(isCurrent);

  return {
    border: "1px solid",

    borderColor: isCurrent ? "#e5e7eb" : "#333",
    color: isCurrent ? "#e5e7eb" : "#bbb",
    borderRadius: "12px",
    padding: "14px",
    marginBottom: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  };
};

const ActiveDevices = () => {
  const [activity, setActivity] = useState<ActiveDevice[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [maxH, setMaxH] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useGetActivityDevice(setLoading, setActivity);

  if (loading) {
    return (
      <div>
        <h3 style={{ marginBottom: "12px" }}>Active devices</h3>
        <SkeletonList count={1} />
      </div>
    );
  }

  if (!activity.length) {
    return <div>No device activity yet</div>;
  }

  useLayoutEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;

    if (!children.length) return;

    if (!expanded) {
      const first = children[0] as HTMLElement;
      console.log(first);

      setMaxH(first.offsetHeight);
    } else {
      setMaxH(ref.current.scrollHeight);
    }
  }, [activity, expanded]);

  return (
    <div className="activities relative z-10">
      <h3 style={{ margin: "12px", textAlign: "center" }}>Active devices</h3>
      <div
        className={"activity_list"}
        ref={ref}
        style={{
          overflow: "hidden",

          maxHeight: `${maxH}px`,
          transition: "max-height 500ms ease-in-out, opacity 300ms ease",
          opacity: expanded ? 1 : 0.98,
        }}
      >
        {activity.map((a, i) => {
          const deviceLabel =
            a.deviceModel ||
            (a.deviceType === "mobile" ? "📱 Mobile device" : "💻 Desktop");

          return (
            <div key={a.id ?? i} style={cardStyle(a.isCurrent)}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{deviceLabel}</strong>

                <CurrentActiveDevice isCurrent={a.isCurrent} />
              </div>

              <div style={{ fontSize: "14px", marginTop: "6px", opacity: 0.8 }}>
                OS: {a.os?.name}
              </div>

              <div style={{ fontSize: "14px", opacity: 0.8 }}>
                Browser: {a.browser}
              </div>

              {a.ip_address && (
                <div style={{ fontSize: "13px", opacity: 0.6 }}>
                  IP: {a.ip_address}
                </div>
              )}

              {a.created_at && (
                <div
                  style={{ fontSize: "12px", opacity: 0.5, marginTop: "4px" }}
                >
                  {a.created_at}
                </div>
              )}
            </div>
          );
        })}
        {activity.length > 1 && (
          <div
            className="expend absolute -bottom-10 left-1/2 -translate-x-1/2 z-20"
            onClick={() => setExpanded((v) => !v)}
          >
            {!expanded ? (
              <BsArrowDownCircle size={30} />
            ) : (
              <BsArrowUpCircle size={30} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveDevices;
