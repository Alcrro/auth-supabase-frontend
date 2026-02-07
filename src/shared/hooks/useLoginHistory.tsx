import { useEffect, type Dispatch } from "react";
import { getActivityDevice } from "../../features/auth/services/getActivityDevice";
import type { StateUpdater } from "preact/hooks";
import type { LoginHistoryProps } from "../../features/auth/types/auth.types";
import { mapperLoginHistory } from "../../features/auth/mapper/mapperLoginHistory";

const useLoginHistory = (
  setLoading: (value: boolean) => void,
  setLoginDevice: Dispatch<StateUpdater<LoginHistoryProps[]>>,
  page: number,
) => {
  useEffect(() => {
    let mounted = true;

    async function load() {
      if (!mounted) return;

      setLoading(true);
      const { data, error } = await getActivityDevice(
        { action: "login" },
        page,
        30,
      );
      if (!mounted) return;

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      if (data) {
        const dataMapper = data.map(mapperLoginHistory);

        setLoginDevice((prev) => {
          const map = new Map(prev.map((x) => [x.id, x]));
          for (const row of dataMapper) {
            map.set(row.id, row);
          }

          return Array.from(map.values());
        });

        // setLoginDevice((prev) => [...prev, ...dataMapper]);
      }
      setLoading(false);
    }

    load();
    return () => {
      mounted = false;
    };
  }, [page]);
};

export default useLoginHistory;
