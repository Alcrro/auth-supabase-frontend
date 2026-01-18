import PasswordInputGroup from "../../../components/molecules/form/PasswordInputGroup";
import type { TargetedSubmitEvent } from "preact";
import { actionHandler } from "../../../shared/hooks/forms/actionHandler";
import { magicLinkSchema } from "../validation/magicLink.schema";

const ResetPasswordPage = () => {
  const resetPassword = async (e: TargetedSubmitEvent<HTMLFormElement>) => {
    const { authAction } = actionHandler();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawPEmail = formData.get("email");
    const parsedEmail = magicLinkSchema.safeParse(rawPEmail);

    if (!parsedEmail.success) {
      return {
        success: false,
        error: parsedEmail.error.flatten().fieldErrors,
      };
    }
    const reset = await authAction({
      type: "resetPassword",
      payload: { email: parsedEmail.data.email },
    });
    console.log(reset);
  };
  return (
    <form onSubmit={(e) => resetPassword(e)}>
      <PasswordInputGroup />
      <button>Change password</button>
    </form>
  );
};

export default ResetPasswordPage;
