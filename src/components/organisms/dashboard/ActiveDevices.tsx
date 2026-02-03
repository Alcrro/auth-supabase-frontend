import { useRef, useState } from "preact/hooks";
import type { ActiveDevice } from "../../../features/auth/types/auth.types";
import useGetActivityDevice from "../../../shared/hooks/useGetActivityDevice";
import { SkeletonList } from "../../UI/skeletons/ActivDeviceSkeletonCard";
import CurrentActiveDevice from "./CurrentActiveDevice";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { cardStyle } from "../../styles/activityDeviceStyle";
import useLayoutActivityDevice from "../../../shared/hooks/useLaoutActivityDevice";
import DefaultButton from "../../atoms/DefaultButton";

const ActiveDevices = () => {
  const [activity, setActivity] = useState<ActiveDevice[]>([]);
  const [loading, setLoading] = useState(true);
  // const [expanded, setExpanded] = useState(false);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [limit, setLimit] = useState<number>(1);
  const [maxH, setMaxH] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const addMoreItems = () => {
    setLimit((prev) => {
      if (prev === 1) return 5;
      if (prev >= totalRows) return 5;
      return prev + 5;
    });
  };

  useGetActivityDevice(setLoading, setActivity, limit, setTotalRows);

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

  useLayoutActivityDevice(ref, setMaxH, activity, limit);
  console.log({ limit });
  console.log({ totalRows });
  console.log({ maxH });

  return (
    <div className="activities relative z-10">
      <div className="title">
        <h3
          style={{ margin: "12px", textAlign: "center" }}
          className={"font-semibold text-2xl"}
        >
          Active devices
        </h3>
        <div className={"text-right py-2"}>total visible: {limit}</div>
      </div>
      <div
        className={"activity_list"}
        ref={ref}
        style={{
          overflowY: limit > 5 ? "scroll" : "hidden",
          maxHeight: `${768}px`,
          transition: "max-height 500ms ease-in-out, opacity 300ms ease",
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
      </div>
      {totalRows > 1 && (
        <DefaultButton
          variant="none"
          className={`
            ${
              activity.length > 3
                ? "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 cursor-pointer"
                : "flex justify-center mt-4 cursor-pointer mx-auto"
            }`}
          onClick={addMoreItems}
        >
          {totalRows > 5 ? (
            <BsArrowDownCircle
              size={30}
              className={"text-white/60 hover:text-white"}
            />
          ) : (
            <BsArrowUpCircle
              size={30}
              className={"text-white/60 hover:text-white"}
            />
          )}
        </DefaultButton>
      )}
    </div>
  );
};

export default ActiveDevices;
