import React, { Suspense, useState } from "react";
import useGetTotalRows from "../../../shared/hooks/useGetTotalRows";
import type { LoginHistoryProps } from "../types/auth.types";
import useLoginHistory from "../../../shared/hooks/useLoginHistory";
import LoginHistorySkeleton from "../../../components/UI/skeletons/LoginHistorySkeleton";
import { useSearchParams } from "react-router-dom";
import useClientPagination from "../../../shared/hooks/useClientPagination";
import { useServerPage } from "../../../shared/hooks/useServerPagination";

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

  const [uiPage, setUiPage] = useState(initialPage);
  const [limit, _setLimit] = useState(10);

  const serverPage = useServerPage(uiPage, limit, 30);

  useLoginHistory(setLoading, setLoginHistory, serverPage);
  useGetTotalRows(setTotalRows, "login");

  if (loading) return <LoginHistorySkeleton />;

  const paginatedData = useClientPagination(loginHistory, uiPage, limit, 30);

  return (
    <Suspense fallback={<LoginHistorySkeleton />}>
      <UserLoginHistory
        loginHistories={paginatedData}
        limit={limit}
        uiPage={uiPage}
        setUiPage={setUiPage}
        totalRows={totalRows}
      />
    </Suspense>
  );
};

export default LoginHistoryPage;
