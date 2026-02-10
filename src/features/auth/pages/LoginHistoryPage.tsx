import React, { Suspense, useState } from "react";
import useGetTotalRows from "../../../shared/hooks/useGetTotalRows";
import type { LoginHistoryProps } from "../types/auth.types";
import useLoginHistory from "../../../shared/hooks/useLoginHistory";
import LoginHistorySkeleton from "../../../components/UI/skeletons/LoginHistorySkeleton";
import Pagination from "../../../components/UI/pagination/Pagination";

const UserLoginHistory = React.lazy(
  () =>
    import("../../../components/organisms/dashboard/loginHistory/UserLoginHistory"),
);

const LoginHistoryPage = () => {
  const [loginHistory, setLoginHistory] = useState<LoginHistoryProps[]>([]);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [uiPage, setUiPage] = useState(1);
  const [limit, _setLimit] = useState(10);

  useLoginHistory(setLoading, loginHistory, setLoginHistory, page, setPage);
  useGetTotalRows(setTotalRows, "login");

  if (loading) return <LoginHistorySkeleton />;

  const nextPage = uiPage > 1 ? uiPage * limit + 1 : limit;
  const startPage = uiPage === 1 ? 0 : nextPage / 2;

  const data = loginHistory.slice(startPage, nextPage);

  return (
    <Suspense fallback={<LoginHistorySkeleton />}>
      <UserLoginHistory
        loginHistories={data}
        limit={limit}
        uiPage={uiPage}
        setUiPage={setUiPage}
        totalRows={totalRows}
      />
    </Suspense>
  );
};

export default LoginHistoryPage;
