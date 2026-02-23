import type { ReactNode } from "preact/compat";

const TableContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`rounded-md overflow-hidden`}>
      <div
        className={
          "min-h-full max-w-7xl min-w-full rounded-md xl:bg-white/15 backdrop-blur-lg bg-(--table-bg) text-(--table-text)"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default TableContainer;
