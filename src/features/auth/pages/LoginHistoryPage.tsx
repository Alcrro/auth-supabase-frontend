import React, { Suspense, useState } from "react";
import useGetTotalRows from "../../../shared/hooks/useGetTotalRows";
import type { LoginHistoryProps } from "../types/auth.types";
import useLoginHistory from "../../../shared/hooks/useLoginHistory";
import LoginHistorySkeleton from "../../../components/UI/skeletons/LoginHistorySkeleton";
import { getGeolocation } from "../services/getGeolocation";

const UserLoginHistory = React.lazy(
  () =>
    import("../../../components/organisms/dashboard/loginHistory/UserLoginHistory"),
);

const LoginHistoryPage = () => {
  const [loginHistory, setLoginHistory] = useState<LoginHistoryProps[]>([]);
  const [_totalRows, setTotalRows] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [page, _setPage] = useState(0);

  useLoginHistory(setLoading, setLoginHistory, page);
  useGetTotalRows(setTotalRows);

  if (loading) return <LoginHistorySkeleton />;

  console.log(loginHistory);
  return (
    <Suspense fallback={<LoginHistorySkeleton />}>
      <UserLoginHistory loginHistories={loginHistory} />
    </Suspense>
  );
};

export default LoginHistoryPage;
