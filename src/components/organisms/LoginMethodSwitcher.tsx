import type { AuthType } from "../../features/auth/usecases/authEngine";
import DefaultButton from "../atoms/DefaultButton";
import LoginForm from "./LoginForm";
import LoginGithubForm from "./LoginGithubForm";
import LoginGoogleForm from "./LoginWithGoogleForm";
import MagicLinkForm from "./MagicLinkForm";
import { Divider } from "../molecules/Divider";
import { useState } from "preact/hooks";
import { Link } from "react-router-dom";

const LoginMethodSwitcher = () => {
  const [method, setMethod] = useState<AuthType>("loginWithCredentials");

  return (
    <div className="flex flex-col gap-2">
      {method === "loginWithCredentials" && <LoginForm />}
      {method === "loginWithMagicLink" && <MagicLinkForm />}

      <div className="additional">
        if you don't have account.
        <Link to={"/auth/signup"}> Create one here</Link>
      </div>
      <Divider />

      <div className="flex flex-col gap-2">
        {method !== "loginWithCredentials" && (
          <DefaultButton
            variant="default"
            onClick={() => setMethod("loginWithCredentials")}
          >
            Email & Password
          </DefaultButton>
        )}
        {method !== "loginWithMagicLink" && (
          <DefaultButton
            variant="default"
            onClick={() => setMethod("loginWithMagicLink")}
          >
            Magic Link
          </DefaultButton>
        )}

        <LoginGithubForm />
        <LoginGoogleForm />
      </div>
    </div>
  );
};

export default LoginMethodSwitcher;
