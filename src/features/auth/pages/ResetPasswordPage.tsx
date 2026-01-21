import DefaultButton from "../../../components/atoms/DefaultButton";
import PasswordInputGroup from "../../../components/molecules/form/PasswordInputGroup";
import useResetPasswordForm from "../../../shared/hooks/forms/useResetPasswordForm";

const ResetPasswordPage = () => {
  const { submitHandler } = useResetPasswordForm();
  return (
    <form onSubmit={submitHandler}>
      <PasswordInputGroup />
      <DefaultButton>Change password</DefaultButton>
    </form>
  );
};

export default ResetPasswordPage;
