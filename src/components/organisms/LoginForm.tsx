import { useCredentialsLoginForm } from "../../shared/hooks/forms/useCredentialsLoginForm";
import DefaultButton from "../atoms/DefaultButton";
import EmailGroup from "../molecules/form/EmailInputGroup";
import PasswordGroup from "../molecules/form/PasswordInputGroup";
import LoadingSpinner from "../UI/LoadingSpinner";

export function LoginForm() {
  const { submitHandler, loading } = useCredentialsLoginForm();
  return (
    <form onSubmit={submitHandler} className={"flex flex-col gap-2 py-2"}>
      <div className={"flex flex-col gap-2"}>
        <EmailGroup />
        <PasswordGroup />
      </div>
      <div className="btn w-full ">
        <DefaultButton className={"w-full "} disabled={loading}>
          {loading ? (
            <LoadingSpinner className="size-6 mx-auto" />
          ) : (
            <span>Login</span>
          )}
        </DefaultButton>
      </div>
    </form>
  );
}

export default LoginForm;
