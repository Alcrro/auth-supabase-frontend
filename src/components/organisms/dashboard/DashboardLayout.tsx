import { type ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};

export default DashboardLayout;
