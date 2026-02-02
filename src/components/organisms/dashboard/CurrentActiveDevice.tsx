const badgeStyle = {
  fontSize: "12px",
  padding: "2px 8px",
  borderRadius: "999px",
  background: "#333",
};
const CurrentActiveDevice = ({ isCurrent }: { isCurrent: boolean }) => {
  return isCurrent && <div style={badgeStyle}>current</div>;
};

export default CurrentActiveDevice;
