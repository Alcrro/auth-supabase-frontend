import type { Dispatch } from "preact/hooks";
import type { LoginHistoryProps } from "../../../../features/auth/types/auth.types";
import { tableDocumentMap } from "../../../../shared/data/dashboard/loginHistoryData";
import Pagination from "../../../UI/pagination/Pagination";
import Table from "./Table";
import type { SetStateAction } from "preact/compat";
import TableContainer from "../../TableContainer";
import TotalItems from "../../../atoms/TotalItems";
import Title from "../../../atoms/Title";

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
    <div>
      <Title description="Login History" />
      <TotalItems items={totalRows} />
      <TableContainer>
        {loginHistories.length > 0 ? (
          <Table dataBody={loginHistories} dataHeader={tableDocumentMap} />
        ) : (
          <div>No login history</div>
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

export default UserLoginHistory;
