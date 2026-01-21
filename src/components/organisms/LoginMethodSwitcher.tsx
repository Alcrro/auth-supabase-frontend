import type { AuthType } from "../../features/auth/usecases/authEngine";
import DefaultButton from "../atoms/DefaultButton";
import LoginForm from "./LoginForm";
import LoginGithubForm from "./LoginGithubForm";
import LoginGoogleForm from "./LoginWithGoogleForm";
import MagicLinkForm from "./MagicLinkForm";
import { Divider } from "../molecules/Divider";

interface Props {
  method: AuthType;
  onChange: (method: AuthType) => void;
}
const LoginMethodSwitcher = ({ method, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {method === "loginWithCredentials" && <LoginForm />}
      {method === "loginWithMagicLink" && <MagicLinkForm />}

      <Divider />

      <div className="flex flex-col gap-2">
        {method !== "loginWithCredentials" && (
          <DefaultButton onClick={() => onChange("loginWithCredentials")}>
            Email & Password
          </DefaultButton>
        )}
        {method !== "loginWithMagicLink" && (
          <DefaultButton onClick={() => onChange("loginWithMagicLink")}>
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
