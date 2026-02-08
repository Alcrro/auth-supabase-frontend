import { useEffect, type Dispatch, type SetStateAction } from "react";
import { getActivityDevice } from "../../features/auth/services/getActivityDevice";
import type { LoginAuditProps } from "../../features/auth/types/auth.types";

const useAuditLogs = (
  auditLogs: LoginAuditProps[],
  setAuditLogs: Dispatch<SetStateAction<LoginAuditProps[]>>,
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
) => {
  useEffect(() => {
    async function load() {
      const { data, error } = await getActivityDevice({}, page, 30);

      if (error) {
        console.log(error);

        throw new Error(error.message);
      }

      if (data) {
        console.log({ data });

        setAuditLogs(data);
      }
    }
    load();
  }, []);
};

export default useAuditLogs;
