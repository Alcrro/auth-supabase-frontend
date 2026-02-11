import { useEffect, type Dispatch, type SetStateAction } from "react";
import { getActivityDevice } from "../../features/auth/services/getActivityDevice";
import type { LoginHistoryProps } from "../../features/auth/types/auth.types";
import { mapperLoginHistory } from "../../features/auth/mapper/mapperLoginHistory";

const useAuditLogs = (
  setAuditLogs: Dispatch<SetStateAction<LoginHistoryProps[]>>,
  page: number,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data, error } = await getActivityDevice({}, page, 30);

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        const mapper = data.map((item, i) => {
          const mapped = mapperLoginHistory(item);

          return {
            ...mapped,
            nrCrt: page * 30 + i + 1,
          };
        });

        setAuditLogs((prev) => [...prev, ...mapper]);
      }
      setLoading(false);
    }
    load();
  }, [page]);
};

export default useAuditLogs;
