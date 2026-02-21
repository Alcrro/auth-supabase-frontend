const badgeStyle = {
  fontSize: "12px",
  padding: "2px 8px",
  borderRadius: "999px",
  background: "#333",
};
const CurrentActiveDevice = ({ isCurrent }: { isCurrent: boolean }) => {
  return (
    isCurrent && (
      <div
        className={
          "text-xs bg-(--background-color) rounded-4xl py-1 px-2 text-(--text-primary)"
        }
      >
        current
      </div>
    )
  );
};

export default CurrentActiveDevice;
