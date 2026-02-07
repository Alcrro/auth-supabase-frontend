const ActiveDeviceRow = ({
  additionalText,
  description,
}: {
  additionalText?: string;
  description: string;
}) => {
  return (
    <div style={{ fontSize: "14px", marginTop: "6px", opacity: 0.8 }}>
      {additionalText && `${additionalText}:`} {description}
    </div>
  );
};

export default ActiveDeviceRow;
