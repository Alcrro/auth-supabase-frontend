// getCurrentDeviceInfo.ts
import { UAParser } from "ua-parser-js";
import { mapperActiveDevices } from "../mapper/mapperActiveDevices";

export function getCurrentDeviceInfo() {
  const result = new UAParser().getResult();
  return mapperActiveDevices(result);
}
