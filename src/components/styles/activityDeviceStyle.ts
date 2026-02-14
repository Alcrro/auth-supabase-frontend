import type { CSSProperties } from "preact";

export const cardStyle = (isCurrent: boolean): CSSProperties => {
  return {
    border: "1px solid",
    borderColor: isCurrent ? "#e5e7eb" : "#333",
    color: isCurrent ? "#e5e7eb" : "#bbb",
    borderRadius: "12px",
    padding: "14px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    position: "relative",
    zIndex: "-1",
  };
};
