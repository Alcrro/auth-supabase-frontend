import { UAParser } from "ua-parser-js";
const ActiveDevices = () => {
  const { browser, os, device } = new UAParser().getResult();
  const result = new UAParser().getResult();
  console.log(result);

  return (
    <div>
      <div>browser - {browser.name}</div>
      <div>
        OS - {os.name} {os.version}
      </div>
      {device.model && (
        <div>
          device - {device.vendor} | `{device.type} | {device.model}
        </div>
      )}
    </div>
  );
};

export default ActiveDevices;
