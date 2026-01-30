import type { ActiveDevice } from "../types/auth.types";

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
      deviceType !== "desktop"
        ? (result.device.model ?? "Unknown device")
        : undefined,

    browser: result.browser.name ?? "Unknown browser",

    os: { name: result.os.name ?? "Unknown OS", version: result.os.version },
  };
}
