import React, { Suspense, useEffect, useState } from "react";
import useGetTotalRows from "../../../shared/hooks/useGetTotalRows";
import type { LoginHistoryProps } from "../types/auth.types";
import useLoginHistory from "../../../shared/hooks/useLoginHistory";
import LoginHistorySkeleton from "../../../components/UI/skeletons/LoginHistorySkeleton";
import { useSearchParams } from "react-router-dom";

const UserLoginHistory = React.lazy(
  () =>
    import("../../../components/organisms/dashboard/loginHistory/UserLoginHistory"),
);

const LoginHistoryPage = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [loginHistory, setLoginHistory] = useState<LoginHistoryProps[]>([]);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const initialPage = Number(searchParams.get("page") ?? 1);
  const [page, setPage] = useState(0);
  const [uiPage, setUiPage] = useState(initialPage);
  const [limit, _setLimit] = useState(10);

  useEffect(() => {
    const neededServerPage = Math.ceil((limit * uiPage) / 30);

    if (page < neededServerPage) {
      setPage(neededServerPage);
    }
  }, [uiPage]);
  useLoginHistory(setLoading, setLoginHistory, page);
  useGetTotalRows(setTotalRows, "login");

  if (loading) return <LoginHistorySkeleton />;

  const startPage = (uiPage - 1) * limit;
  const nextPage = startPage + limit;

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
