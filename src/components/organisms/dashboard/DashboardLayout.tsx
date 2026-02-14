import { type ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // return <div className="flex flex-col min-h-screen">{children}</div>;
  return (
    <div className="min-h-screen m-2">
      <div
        className={
          "grid max-w-388 w-full mx-auto md:grid-cols-[300px_1fr] grid-cols-auto gap-2 max-md:grid-rows-[auto_1fr] max-md:[grid-template-areas:'header''dashboardMain'] [grid-template-areas:'header_header''dashboardMenu_dashboardMain']"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
