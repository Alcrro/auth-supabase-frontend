import type { ReactNode } from "preact/compat";

const TableContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`rounded-md pr-2 overflow-hidden`}>
      <div
        className={
          "min-h-full max-w-7xl min-w-full rounded-md xl:bg-white/15 backdrop-blur-lg"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default TableContainer;
