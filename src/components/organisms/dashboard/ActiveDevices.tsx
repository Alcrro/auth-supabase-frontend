import { getCurrentDeviceInfo } from "../../../features/auth/services/getCurrentDeviceInfo";
const ActiveDevices = () => {
  const { os, deviceType, deviceModel, browser } = getCurrentDeviceInfo();

  return (
    <div>
      <div>
        Device –{" "}
        {deviceModel
          ? deviceModel
          : deviceType === "mobile"
            ? "Android device"
            : "Desktop"}
      </div>

      <div>
        OS - {os.name} {os.version}
      </div>
      <div>browser - {browser}</div>
    </div>
  );
};

export default ActiveDevices;
