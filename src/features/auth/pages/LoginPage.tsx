import { Navigate } from "react-router-dom";
import useAuth from "../../../shared/hooks/useAuth";
import LoginMethodSwitcher from "../../../components/organisms/LoginMethodSwitcher";
import LoginLayout from "../../../components/organisms/LoginLayout";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return (
    <LoginLayout description="Login">
      <LoginMethodSwitcher />
    </LoginLayout>
  );
};

export default LoginPage;
