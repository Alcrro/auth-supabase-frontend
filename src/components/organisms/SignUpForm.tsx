import EmailGroup from "../molecules/form/EmailInputGroup";
import PasswordGroup from "../molecules/form/PasswordInputGroup";
import { useRegisterForm } from "../../shared/hooks/forms/useRegisterForm";

const SignUpForm = () => {
  const { submitRegisterForm } = useRegisterForm();
  return (
    <form onSubmit={submitRegisterForm}>
      <div className={"flex flex-col gap-2"}>
        <EmailGroup />
        <PasswordGroup />
      </div>
      <div className="btn">
        <button>Signup</button>
      </div>
    </form>
  );
};

export default SignUpForm;
