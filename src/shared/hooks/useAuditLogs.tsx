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

        setAuditLogs((prev) => {
          const startIndex = prev.length;
          const newRows = sortLogs.map((item, i) =>
            mapperLoginHistory({
              ...item,
              nrCrt: startIndex + i + 1,
            }),
          );
          return [...prev, ...newRows];
        });
      }
      setLoading(false);
    }
    load();
  }, [page]);
};

export default useAuditLogs;
