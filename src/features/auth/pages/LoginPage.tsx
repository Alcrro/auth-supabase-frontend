import { Navigate } from "react-router-dom";
import useAuth from "../../../shared/hooks/useAuth";
import LoginMethodSwitcher from "../../../components/organisms/LoginMethodSwitcher";
import LoginLayout from "../../../components/organisms/LoginLayout";
import { Helmet } from "react-helmet-async";
const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return (
    <>
      <Helmet>
        <title>Sign in | Alcrro</title>
        <meta name="description" content={"Sign in to your account!"}></meta>
        <meta name="robots" content={"noindex,nofollow"}></meta>
      </Helmet>
      <LoginLayout description="Login">
        <LoginMethodSwitcher />
      </LoginLayout>
    </>
  );
};

export default LoginPage;
