import { useState } from "preact/hooks";
import type { LoginHistoryProps } from "../../../../features/auth/types/auth.types";
import useAuditLogs from "../../../../shared/hooks/useAuditLogs";
import { Suspense } from "preact/compat";
import useGetTotalRows from "../../../../shared/hooks/useGetTotalRows";
import UserLogsAudit from "./UserLogTable";
import LoginHistorySkeleton from "../../../UI/skeletons/LoginHistorySkeleton";
import { useSearchParams } from "react-router-dom";
import useClientPagination from "../../../../shared/hooks/useClientPagination";
import { useServerPage } from "../../../../shared/hooks/useServerPagination";

const AuditLogTable = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [auditLogs, setAuditLogs] = useState<LoginHistoryProps[]>([]);
  const initialPage = Number(searchParams.get("page") ?? 1);
  const [uiPage, setUiPage] = useState(initialPage);
  const [limit, _setLimit] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  const serverPage = useServerPage(uiPage, limit, 30);

  useAuditLogs(setAuditLogs, serverPage, setLoading);
  useGetTotalRows(setTotalRows);

  if (loading) return <LoginHistorySkeleton />;
  const paginatedData = useClientPagination(auditLogs, uiPage, limit, 30);

  return (
    <Suspense fallback={<LoginHistorySkeleton />}>
      <UserLogsAudit
        auditLogs={paginatedData}
        limit={limit}
        totalRows={totalRows}
        setUiPage={setUiPage}
        uiPage={uiPage}
      />
    </Suspense>
  );
};

export default AuditLogTable;
