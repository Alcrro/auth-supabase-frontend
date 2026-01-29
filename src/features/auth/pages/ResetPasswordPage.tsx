import DefaultButton from "../../../components/atoms/DefaultButton";
import PasswordInputGroup from "../../../components/molecules/form/PasswordInputGroup";
import LoginLayout from "../../../components/organisms/LoginLayout";
import useResetPasswordForm from "../../../shared/hooks/forms/useResetPasswordForm";

const ResetPasswordPage = () => {
  const { submitHandler } = useResetPasswordForm();
  return (
    <LoginLayout description="Reset password">
      <form
        onSubmit={submitHandler}
        className={"flex flex-col justify-center gap-2 py-2"}
      >
        <PasswordInputGroup />
        <DefaultButton variant="default">
          <span className={"text-md md:text-xl"}>Change password</span>
        </DefaultButton>
      </form>
    </LoginLayout>
  );
};

export default ResetPasswordPage;
