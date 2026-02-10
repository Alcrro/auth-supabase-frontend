import { useEffect, type Dispatch, type SetStateAction } from "react";
import { getActivityDevice } from "../../features/auth/services/getActivityDevice";
import type { LoginHistoryProps } from "../../features/auth/types/auth.types";
import { mapperLoginHistory } from "../../features/auth/mapper/mapperLoginHistory";

const useAuditLogs = (
  _auditLogs: LoginHistoryProps[],
  setAuditLogs: Dispatch<SetStateAction<LoginHistoryProps[]>>,
  page: number,
  _setPage: Dispatch<SetStateAction<number>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  limit: number,
) => {
  console.log(limit);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data, error } = await getActivityDevice({}, page, 30);

      if (error) {
        console.log(error);

        throw new Error(error.message);
      }

      if (data) {
        const mapper = data.map((item, i) => {
          const mapped = mapperLoginHistory(item);

          return {
            ...mapped,
            nrCrt: page + i + 1,
          };
        });

        setAuditLogs(mapper);
      }
      setLoading(false);
    }
    load();
  }, []);
};

export default useAuditLogs;
