import type { LoginHistoryProps } from "../../../../features/auth/types/auth.types";
import Table from "../loginHistory/Table";
import { tableDocumentMap } from "../../../../shared/data/dashboard/loginHistoryData";
import Pagination from "../../../UI/pagination/Pagination";
import type { Dispatch } from "preact/hooks";
import type { FC, SetStateAction } from "preact/compat";
import Title from "../../../atoms/Title";
import EmptyState from "../../../atoms/EmptyState";
import TableContainer from "../../TableContainer";
import TotalItems from "../../../atoms/TotalItems";

type UserLogsAuditProps = {
  auditLogs: LoginHistoryProps[];
  limit: number;
  totalRows: number;
  setUiPage: Dispatch<SetStateAction<number>>;
  uiPage: number;
};
const UserLogsAudit: FC<UserLogsAuditProps> = ({
  auditLogs,
  limit,
  totalRows,
  setUiPage,
  uiPage,
}) => {
  const hasLogs = auditLogs.length > 0;

  return (
    <div className={"bg-(--background-container) rounded-md p-2"}>
      <Title description="History Logs" />
      <TotalItems items={totalRows} />
      <TableContainer>
        {hasLogs ? (
          <Table dataBody={auditLogs} dataHeader={tableDocumentMap} />
        ) : (
          <EmptyState message="No login activity recorded yet." />
        )}
      </TableContainer>
      <Pagination
        limit={limit}
        totalRows={totalRows}
        setPage={setUiPage}
        page={uiPage}
      />
    </div>
  );
};

export default UserLogsAudit;
