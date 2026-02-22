import { forwardRef, type ReactNode } from "react";

type Props = {
  limit: number;
  children: ReactNode;
};

const ActiveDeviceLayout = forwardRef<HTMLDivElement, Props>(
  ({ limit, children }, ref) => {
    return (
      <div
        className={"activity_list relative"}
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: "1rem",
          overflowY: limit > 5 ? "scroll" : "hidden",
          maxHeight: `${860}px`,
          background: "var(--background-color)",
          borderRadius: "1rem",
          padding: ".5rem",
          transition: "max-height 500ms ease-in-out, opacity 300ms ease",
        }}
      >
        {children}
      </div>
    );
  },
);

export default ActiveDeviceLayout;
