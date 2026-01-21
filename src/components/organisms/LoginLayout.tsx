import { type ReactNode } from "react";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center max-w-220 h-screen w-full m-auto">
      <h1 className={""}>Login</h1>
      <div className="flex flex-col gap-2 max-w-80 w-full">{children}</div>
    </div>
  );
};

export default LoginLayout;
