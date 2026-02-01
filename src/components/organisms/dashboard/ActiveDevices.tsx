import { useState } from "preact/hooks";
import type { ActiveDevice } from "../../../features/auth/types/auth.types";
import useGetActivityDevice from "../../../shared/hooks/useGetActivityDevice";

const cardStyle = {
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "14px",
  marginBottom: "10px",

  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
};

const badgeStyle = {
  fontSize: "12px",
  padding: "2px 8px",
  borderRadius: "999px",
  background: "#333",
};

const ActiveDevices = () => {
  const [activity, setActivity] = useState<ActiveDevice[]>([]);
  const [loading, setLoading] = useState(true);

  useGetActivityDevice(setLoading, setActivity);

  if (loading) {
    return <div>Loading devices…</div>;
  }

  if (!activity.length) {
    return <div>No device activity yet</div>;
  }
  console.log(activity);

  return (
    <div>
      <h3 style={{ marginBottom: "12px" }}>Active devices</h3>

      {activity.map((a, i) => {
        const deviceLabel =
          a.deviceModel ||
          (a.deviceType === "mobile" ? "📱 Mobile device" : "💻 Desktop");

        return (
          <div key={a.id ?? i} style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{deviceLabel}</strong>

              {i === 0 && <span style={badgeStyle}>current</span>}
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
              <div style={{ fontSize: "12px", opacity: 0.5, marginTop: "4px" }}>
                {a.created_at}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ActiveDevices;
