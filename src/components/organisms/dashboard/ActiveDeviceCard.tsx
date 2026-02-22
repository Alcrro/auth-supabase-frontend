import CurrentActiveDevice from "./CurrentActiveDevice";
import ActiveDeviceRow from "../../molecules/activeDevices/ActiveDeviceRow";
import type { FC } from "preact/compat";
import type { ActiveDevice } from "../../../features/auth/types/auth.types";

type ILoginAuditProps = {
  deviceLabel: string;
} & ActiveDevice;
const ActiveDeviceCard: FC<ILoginAuditProps> = ({ ...props }) => {
  const {
    isCurrent,
    deviceLabel,
    ip_address,
    browser,
    created_at,
    os: { name },
  } = props;

  return (
    <div
      className={`p-2 rounded-xl shadow-xl ${isCurrent ? "bg-(--background-container) text-(--text-primary)" : "bg-(--background-container)/20 border-(--border-color)"}`}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>{deviceLabel}</strong>

        <CurrentActiveDevice isCurrent={isCurrent} />
      </div>
      <ActiveDeviceRow additionalText="OS" description={name} />
      <ActiveDeviceRow additionalText="Browser" description={browser} />

      {ip_address && (
        <ActiveDeviceRow additionalText="IP" description={ip_address} />
      )}

      {created_at && <ActiveDeviceRow description={created_at} />}
    </div>
  );
};

export default ActiveDeviceCard;
