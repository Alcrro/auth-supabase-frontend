import { useEffect, useState } from "preact/hooks";
import type { LoginHistoryProps } from "../../../../features/auth/types/auth.types";
import useAuditLogs from "../../../../shared/hooks/useAuditLogs";
import { Suspense } from "preact/compat";
import useGetTotalRows from "../../../../shared/hooks/useGetTotalRows";
import UserLogsAudit from "./UserLogTable";
import LoginHistorySkeleton from "../../../UI/skeletons/LoginHistorySkeleton";
import { useSearchParams } from "react-router-dom";

const AuditLogTable = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [auditLogs, setAuditLogs] = useState<LoginHistoryProps[]>([]);
  const [page, setPage] = useState(0);
  const initialPage = Number(searchParams.get("page") ?? 1);
  const [uiPage, setUiPage] = useState(initialPage);
  const [limit, _setLimit] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const neededServerPage = Math.ceil((limit * uiPage) / 30);

    if (page < neededServerPage) {
      setPage(neededServerPage);
    }
  }, [uiPage]);
  useAuditLogs(setAuditLogs, page, setLoading);
  useGetTotalRows(setTotalRows);

  if (loading) return <LoginHistorySkeleton />;
  const startPage = (uiPage - 1) * limit;
  const nextPage = startPage + limit;

  const data = auditLogs.slice(startPage, nextPage);

  return (
    <Suspense fallback={<LoginHistorySkeleton />}>
      <UserLogsAudit
        auditLogs={data}
        limit={limit}
        totalRows={totalRows}
        setUiPage={setUiPage}
        uiPage={uiPage}
      />
    </Suspense>
  );
};

export default AuditLogTable;
