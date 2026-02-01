import { useEffect, useState } from "preact/hooks";
import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import type { ActiveDevice } from "../../../features/auth/types/auth.types";

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

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("login_audit")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      if (data) {
        const parsed = data.map((d) => {
          let osParsed = d.os;
          try {
            osParsed = JSON.parse(d.os);
          } catch {}
          return { ...d, os: osParsed };
        });

        setActivity(parsed);
      }

      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return <div>Loading devices…</div>;
  }

  if (!activity.length) {
    return <div>No device activity yet</div>;
  }

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
              OS: {a.os?.name ?? a.os}
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
                {new Date(a.created_at).toLocaleString()}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ActiveDevices;
