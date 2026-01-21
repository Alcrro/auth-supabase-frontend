import { type ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col h-screen">{children}</div>;
};

export default DashboardLayout;
