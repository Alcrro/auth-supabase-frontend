import React from "preact/compat";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        "flex flex-col gap-2 max-w-88 mx-auto h-screen justify-center items-center"
      }
    >
      {children}
    </div>
  );
};

export default MainLayout;
