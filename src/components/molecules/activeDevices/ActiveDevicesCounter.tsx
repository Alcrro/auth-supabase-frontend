const ActiveDevicesCounter = ({ rowsVisible }: { rowsVisible: number }) => {
  return (
    <span className={"text-right py-2"}>total visible: {rowsVisible}</span>
  );
};

export default ActiveDevicesCounter;
