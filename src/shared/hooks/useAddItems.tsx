import type { SetStateAction } from "preact/compat";
import type { Dispatch } from "preact/hooks";
import type { SetURLSearchParams } from "react-router-dom";

const STEP = 5;
const useAddItems = (
  setLimit: Dispatch<SetStateAction<number>>,
  setPage: Dispatch<SetStateAction<number>>,
  fetchedCount: number,
  totalRows: number,
  setSearchParams: SetURLSearchParams,
) => {
  const addMoreItems = () => {
    setLimit((prev) => {
      // cât putem arăta maxim din ce avem deja
      const maxAvailable = Math.min(fetchedCount, totalRows);

      let next: number;

      if (prev === 1) {
        // prima extindere → 5 sau cât există
        next = Math.min(STEP, maxAvailable);
      } else if (prev < maxAvailable) {
        //merge la restul
        next = maxAvailable;
      } else {
        next = 1;
      }
      // const next =
      //   prev === totalRows
      //     ? 1
      //     : prev === 1
      //       ? 5
      //       : fetchedCount < prev
      //         ? Math.min(prev + 5, totalRows)
      //         : 5;

      // 🔹 trigger next DB page if needed
      if (next === maxAvailable && fetchedCount < totalRows) {
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
