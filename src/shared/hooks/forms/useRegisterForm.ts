import type { TargetedSubmitEvent } from "preact";
import { actionHandler } from "./actionHandler";
import { credentialsLoginSchema } from "../../../features/auth/validation/credentialsLogin.schema";
import { toast } from "react-toastify";

export function useRegisterForm() {
  const { authAction } = actionHandler();

  const submitRegisterForm = async (
    e: TargetedSubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const rowData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const parsed = credentialsLoginSchema.safeParse(rowData);

    if (!parsed.success) {
      Object.values(parsed.error.flatten().fieldErrors)
        .flat()
        .forEach((message) => {
          if (message) toast.error(message);
        });
      return;
    }
    return await authAction({ type: "registerAccount", payload: parsed.data });
  };

  return { submitRegisterForm };
}
