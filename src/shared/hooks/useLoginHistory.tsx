import { useEffect, type Dispatch } from "react";
import { getActivityDevice } from "../../features/auth/services/getActivityDevice";
import type { StateUpdater } from "preact/hooks";
import type { LoginHistoryProps } from "../../features/auth/types/auth.types";
import { mapperLoginHistory } from "../../features/auth/mapper/mapperLoginHistory";
import { sortDevices } from "../utils/sortDevices";

const useLoginHistory = (
  setLoading: (value: boolean) => void,
  setLoginHistory: Dispatch<StateUpdater<LoginHistoryProps[]>>,
  page: number,
) => {
  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data, error } = await getActivityDevice(
        { action: "login" },
        page,
        30,
      );

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      if (data) {
        setLoginHistory((prev) => {
          const startIndex = prev.length;
          const newRows = data.map((item, i) =>
            mapperLoginHistory({ ...item, nrCrt: startIndex + i + 1 }),
          );
          const sorted = sortDevices(newRows);

          return [...prev, ...sorted];
        });
      }
      setLoading(false);
    }

    load();
  }, [page]);
};

export default useLoginHistory;
