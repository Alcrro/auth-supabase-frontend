import type { SetStateAction } from "preact/compat";
import type { Dispatch } from "preact/hooks";
import type { SetURLSearchParams } from "react-router-dom";

const useAddItems = (
  setLimit: Dispatch<SetStateAction<number>>,
  setPage: Dispatch<SetStateAction<number>>,
  fetchedCount: number,
  totalRows: number,
  setSearchParams: SetURLSearchParams,
) => {
  const addMoreItems = () => {
    setLimit((prev) => {
      const next =
        prev === totalRows ? 1 : prev === 1 ? 5 : Math.min(prev + 5, totalRows);

      // 🔹 trigger next DB page if needed
      if (next > fetchedCount && fetchedCount < totalRows) {
        setPage((p) => p + 1);
      }

      setSearchParams((p) => {
        const np = new URLSearchParams(p);
        np.set("limit", String(next));
        return np;
      });

      return next;
    });
  };

  return { addMoreItems };
};
export default useAddItems;
