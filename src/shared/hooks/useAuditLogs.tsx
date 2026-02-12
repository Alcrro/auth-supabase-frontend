import { useEffect, type Dispatch, type SetStateAction } from "react";
import { getActivityDevice } from "../../features/auth/services/getActivityDevice";
import type { LoginHistoryProps } from "../../features/auth/types/auth.types";
import { mapperLoginHistory } from "../../features/auth/mapper/mapperLoginHistory";
import { sortDevices } from "../utils/sortDevices";

const useAuditLogs = (
  setAuditLogs: Dispatch<SetStateAction<LoginHistoryProps[]>>,
  page: number,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  console.log(page);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data, error } = await getActivityDevice({}, page, 30);

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        const sortLogs = sortDevices(data);
        const mapper = sortLogs.map((item, i) => {
          const mapped = mapperLoginHistory({
            ...item,
            nrCrt: page * 30 + i + 1,
          });

          // return {
          //   ...mapped,
          //   nrCrt: page * 30 + i + 1,
          // };

          return mapped;
        });

        setAuditLogs((prev) => {
          const map = new Map(prev.map((x) => [x.id, x]));

          for (const row of mapper) {
            map.set(row.id, row);
          }

          return Array.from(map.values());
        });
      }
      setLoading(false);
    }
    load();
  }, [page]);
};

export default useAuditLogs;
