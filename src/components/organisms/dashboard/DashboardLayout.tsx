import { type ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // return <div className="flex flex-col min-h-screen">{children}</div>;
  return (
    <div className="min-h-screen m-2">
      <div
        className={
          "grid max-w-388 w-full mx-auto grid-cols-[300px_1fr] gap-2 grid-rows-[auto_1fr] [grid-template-areas:'header_header''dashboardMenu_dashboardMain']"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
