import { actionHandler } from "./actionHandler";
import { magicLinkSchema } from "../../../features/auth/validation/magicLink.schema";
import type { TargetedSubmitEvent } from "preact";

const useResetPasswordForm = () => {
  const submitHandler = async (e: TargetedSubmitEvent<HTMLFormElement>) => {
    const { authAction } = actionHandler();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawPEmail = formData.get("email") as string;
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

  return { submitHandler };
};

export default useResetPasswordForm;
