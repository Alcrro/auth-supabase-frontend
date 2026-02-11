import React, { Suspense, useEffect, useState } from "react";
import useGetTotalRows from "../../../shared/hooks/useGetTotalRows";
import type { LoginHistoryProps } from "../types/auth.types";
import useLoginHistory from "../../../shared/hooks/useLoginHistory";
import LoginHistorySkeleton from "../../../components/UI/skeletons/LoginHistorySkeleton";

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
  const totalCounterRows = limit * uiPage;

  useEffect(() => {
    if (totalCounterRows >= loginHistory.length) {
      setPage((p) => p + 1);
    }
  }, [uiPage]);

  useLoginHistory(setLoading, setLoginHistory, page);
  useGetTotalRows(setTotalRows, "login");

  if (loading) return <LoginHistorySkeleton />;

  let startPage = (uiPage - 1) * limit;
  let nextPage = startPage + limit;

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
