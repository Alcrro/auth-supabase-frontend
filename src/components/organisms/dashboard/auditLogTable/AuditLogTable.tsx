import { useState } from "preact/hooks";
import type { LoginAuditProps } from "../../../../features/auth/types/auth.types";
import useAuditLogs from "../../../../shared/hooks/useAuditLogs";

const AuditLogTable = () => {
  const [auditLogs, setAuditLogs] = useState<LoginAuditProps[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  useAuditLogs(auditLogs, setAuditLogs, page, setPage, setLoading);
  console.log({ auditLogs });

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {auditLogs.map((item) => (
        <div>{item.action}</div>
      ))}
    </div>
  );
};

export default AuditLogTable;
