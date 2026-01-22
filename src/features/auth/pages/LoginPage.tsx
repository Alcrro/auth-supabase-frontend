import { Navigate } from "react-router-dom";
import useAuth from "../../../shared/hooks/useAuth";
import { useState } from "preact/hooks";
import type { AuthType } from "../usecases/authEngine";
import LoginMethodSwitcher from "../../../components/organisms/LoginMethodSwitcher";
import LoginLayout from "../../../components/organisms/LoginLayout";

const LoginPage = () => {
  const [method, setMethod] = useState<AuthType>("loginWithCredentials");

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return (
    <LoginLayout description="Login">
      <LoginMethodSwitcher method={method} onChange={setMethod} />
    </LoginLayout>
  );
};

export default LoginPage;
