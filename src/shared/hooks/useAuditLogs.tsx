import { useEffect, type Dispatch, type SetStateAction } from "react";
import { getActivityDevice } from "../../features/auth/services/getActivityDevice";
import type { LoginAuditProps } from "../../features/auth/types/auth.types";

const useAuditLogs = (
  _auditLogs: LoginAuditProps[],
  setAuditLogs: Dispatch<SetStateAction<LoginAuditProps[]>>,
  page: number,
  _setPage: Dispatch<SetStateAction<number>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data, error } = await getActivityDevice({}, page, 30);

      if (error) {
        console.log(error);

        throw new Error(error.message);
      }

      if (data) {
        console.log({ data });

        setAuditLogs(data);
      }
      setLoading(false);
    }
    load();
  }, []);
};

export default useAuditLogs;
