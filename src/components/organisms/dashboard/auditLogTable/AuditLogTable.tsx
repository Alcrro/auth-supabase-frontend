import { useState } from "preact/hooks";
import type { LoginHistoryProps } from "../../../../features/auth/types/auth.types";
import useAuditLogs from "../../../../shared/hooks/useAuditLogs";
import { Suspense } from "preact/compat";
import useGetTotalRows from "../../../../shared/hooks/useGetTotalRows";
import UserLogsAudit from "./UserLogTable";
import LoginHistorySkeleton from "../../../UI/skeletons/LoginHistorySkeleton";

const AuditLogTable = () => {
  const [auditLogs, setAuditLogs] = useState<LoginHistoryProps[]>([]);
  const [page, setPage] = useState(0);
  const [uiPage, setUiPage] = useState(1);
  const [limit, _setLimit] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  useAuditLogs(auditLogs, setAuditLogs, page, setPage, setLoading, limit);
  useGetTotalRows(setTotalRows);

  if (loading) return <LoginHistorySkeleton />;
  const nextPage = uiPage > 1 ? uiPage * limit + 1 : limit;
  const startPage = uiPage === 1 ? 0 : nextPage / 2;

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
