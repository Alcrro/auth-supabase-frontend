import type { TargetedSubmitEvent } from "preact";
import { actionHandler } from "./actionHandler";

export function useRegisterForm() {
  const { authAction } = actionHandler();

  const submitRegisterForm = async (
    e: TargetedSubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payloads = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    return authAction({ type: "registerAccount", payload: payloads });
  };

  return { submitRegisterForm };
}
