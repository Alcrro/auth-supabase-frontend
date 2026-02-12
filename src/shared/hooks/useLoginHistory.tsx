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
        const sorted = sortDevices(data);
        const dataMapper = sorted.map((item, i) => {
          const mapped = mapperLoginHistory({
            ...item,
            nrCrt: page * 30 + i + 1,
          });

          return mapped;
        });

        setLoginHistory((prev) => {
          const map = new Map(prev.map((x) => [x.id, x]));

          for (const row of dataMapper) {
            map.set(row.id, row);
          }

          return Array.from(map.values());
        });

        // setLoginHistory((prev) => [...prev, ...dataMapper]);
      }
      setLoading(false);
    }

    load();
  }, [page]);
};

export default useLoginHistory;
