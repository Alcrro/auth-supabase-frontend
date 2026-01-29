import { actionHandler } from "./actionHandler";
import type { TargetedSubmitEvent } from "preact";
import { toast } from "react-toastify";
import { updatePasswordSchema } from "../../../features/auth/validation/updatePassword.schema";
import { useNavigate } from "react-router-dom";

const useResetPasswordForm = () => {
  const navigate = useNavigate();
  const submitHandler = async (e: TargetedSubmitEvent<HTMLFormElement>) => {
    const { authAction } = actionHandler();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const parsedEmail = updatePasswordSchema.safeParse({ password });
    console.log(password);

    if (!parsedEmail.success) {
      console.log(parsedEmail.error.flatten());
      const error = Object.values(parsedEmail.error.flatten().fieldErrors)
        .flat()
        .forEach((message) => {
          if (message) toast.error(message);
        });
      return {
        success: false,
        error: error,
      };
    }

    try {
      await authAction({
        type: "updatePassword",
        payload: { password: parsedEmail.data.password },
      });

      toast.success("Password has been successfully changed!");
      navigate("/auth/login");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return { submitHandler };
};

export default useResetPasswordForm;
