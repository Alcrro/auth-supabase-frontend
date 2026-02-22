import type { SetStateAction } from "preact/compat";
import type { Dispatch } from "preact/hooks";
import type { SetURLSearchParams } from "react-router-dom";

const useAddItems = (
  setLimit: Dispatch<SetStateAction<number>>,
  totalRows: number,
  setSearchParams: SetURLSearchParams,
) => {
  console.log(totalRows);

  const addMoreItems = () => {
    setLimit((prev) => {
      if (!totalRows || prev >= totalRows) return prev;

      const next = Math.min(prev + 10, totalRows);

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
