import { forwardRef, type ReactNode } from "react";

type Props = {
  limit: number;
  children: ReactNode;
};

const ActiveDeviceLayout = forwardRef<HTMLDivElement, Props>(
  ({ limit, children }, ref) => {
    return (
      <div
        className={"activity_list flex gap-4"}
        ref={ref}
        style={{
          overflowY: limit > 5 ? "scroll" : "hidden",
          maxHeight: `${860}px`,
          transition: "max-height 500ms ease-in-out, opacity 300ms ease",
        }}
      >
        {children}
      </div>
    );
  },
);

export default ActiveDeviceLayout;
