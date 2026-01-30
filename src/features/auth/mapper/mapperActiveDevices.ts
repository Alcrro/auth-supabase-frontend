import type { ActiveDevice } from "../types/auth.types";
import { isValidDeviceModel } from "../validation/iValidDeviceModel";

export function mapperActiveDevices(result: UAParser.IResult): ActiveDevice {
  const rawType = result.device.type;
  let deviceType: ActiveDevice["deviceType"];

  if (rawType === "mobile" || rawType === "tablet") {
    deviceType = rawType;
  } else {
    deviceType = "desktop";
  }
  return {
    deviceType,
    deviceModel:
      deviceType !== "desktop" && isValidDeviceModel(result.device.model)
        ? result.device.model
        : undefined,

    browser: result.browser.name ?? "Unknown browser",

    os: { name: result.os.name ?? "Unknown OS", version: result.os.version },
  };
}
