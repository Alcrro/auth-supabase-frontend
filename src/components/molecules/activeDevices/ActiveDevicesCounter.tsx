const ActiveDevicesCounter = ({ limit }: { limit: number }) => {
  return <span className={"text-right py-2"}>total visible: {limit}</span>;
};

export default ActiveDevicesCounter;
