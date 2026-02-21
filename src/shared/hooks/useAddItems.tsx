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
  console.log(totalRows);

  const addMoreItems = () => {
    setLimit((prev) => {
      if (!totalRows || prev >= totalRows) return prev;

      const next = Math.min(prev + 10, totalRows);

      // dacă avem nevoie să mai luăm din DB
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
