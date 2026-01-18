import LoginForm from "../../../components/organisms/LoginForm";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../shared/hooks/useAuth";
import { useState } from "preact/hooks";
import MagicLinkForm from "../../../components/organisms/MagicLinkForm";
import DefaultButton from "../../../components/atoms/DefaultButton";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import LoginGithubForm from "../../../components/organisms/LoginGithubForm";
import LoginGoogleForm from "../../../components/organisms/LoginWithGoogleForm";
import type { AuthType } from "../usecases/authEngine";

const LoginPage = () => {
  const [method, setMethod] = useState<AuthType>("loginWithCredentials");
  const navigate = useNavigate();
  const session = useAuth();

  if (session.isAuthenticated) {
    navigate("/dashboard"); // redirect doar dacă userul e logat
    return (
      <div className="flex flex-col gap-2 justify-center items-center max-w-220 h-screen w-full m-auto">
        <LoadingSpinner className="size-20" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center max-w-220 h-screen w-full m-auto">
      <h1 className={""}>Login</h1>

      <div className="flex flex-col gap-2 max-w-80 w-full">
        {method === "loginWithCredentials" && <LoginForm />}
        {method === "loginWithMagicLink" && <MagicLinkForm />}

        <div className="divider flex items-center gap-2">
          <hr className={"flex-1  border-t border-[#ccc]"} />
          <span>Extras</span>
          <hr className={"flex-1  border-t border-[#ccc]"} />
        </div>
        <div className={"flex flex-col gap-2 w-full"}>
          {method !== "loginWithCredentials" && (
            <DefaultButton onClick={() => setMethod("loginWithCredentials")}>
              Email & Password
            </DefaultButton>
          )}
          {method !== "loginWithMagicLink" && (
            <DefaultButton onClick={() => setMethod("loginWithMagicLink")}>
              Magic Link
            </DefaultButton>
          )}

          <LoginGithubForm />
          <LoginGoogleForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
