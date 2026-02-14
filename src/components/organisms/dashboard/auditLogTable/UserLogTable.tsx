import type { LoginHistoryProps } from "../../../../features/auth/types/auth.types";
import Table from "../loginHistory/Table";
import { tableDocumentMap } from "../../../../shared/data/dashboard/loginHistoryData";
import Pagination from "../../../UI/pagination/Pagination";
import type { Dispatch } from "preact/hooks";
import type { SetStateAction } from "preact/compat";

const UserLogsAudit = ({
  auditLogs,
  limit,
  totalRows,
  setUiPage,
  uiPage,
}: {
  auditLogs: LoginHistoryProps[];
  limit: number;
  totalRows: number;
  setUiPage: Dispatch<SetStateAction<number>>;
  uiPage: number;
}) => {
  return (
    <div className={""}>
      <div className="title text-2xl text-center py-2"> History Logs</div>
      <div className="loginHistoriesCounter text-end py-2">
        <span
          className={"text-white bg-white/30 backdrop-blur-lg p-2 rounded-md"}
        >
          {auditLogs.length}
        </span>
      </div>

      <div className={"min-h-full max-w-7xl min-w-full rounded-xl"}>
        {auditLogs.length > 0 ? (
          <Table dataBody={auditLogs} dataHeader={tableDocumentMap} />
        ) : (
          <div>No login history</div>
        )}
      </div>
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
