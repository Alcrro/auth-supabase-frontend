import type { Dispatch } from "preact/hooks";
import type { LoginHistoryProps } from "../../../../features/auth/types/auth.types";
import { tableDocumentMap } from "../../../../shared/data/dashboard/loginHistoryData";
import Pagination from "../../../UI/pagination/Pagination";
import Table from "./Table";
import type { SetStateAction } from "preact/compat";

const UserLoginHistory = ({
  loginHistories,
  limit,
  totalRows,
  setUiPage,
  uiPage,
}: {
  loginHistories: LoginHistoryProps[];
  limit: number;
  totalRows: number;
  setUiPage: Dispatch<SetStateAction<number>>;
  uiPage: number;
}) => {
  return (
    <div className={""}>
      <div className="title text-2xl text-center py-2">Login History</div>
      <div className="loginHistoriesCounter text-end p-2">
        <span
          className={"text-white bg-white/30 backdrop-blur-lg p-2 rounded-md"}
        >
          {loginHistories.length}
        </span>
      </div>
      <div className={`rounded-md px-2 overflow-hidden `}>
        <div
          className={
            "min-h-full max-w-7xl min-w-full rounded-md xl:bg-white/15 backdrop-blur-lg"
          }
        >
          {loginHistories.length > 0 ? (
            <Table dataBody={loginHistories} dataHeader={tableDocumentMap} />
          ) : (
            <div>No login history</div>
          )}
        </div>
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

export default UserLoginHistory;
