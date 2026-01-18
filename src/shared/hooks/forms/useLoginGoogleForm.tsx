import type { TargetedSubmitEvent } from "preact";
import { actionHandler } from "./actionHandler";

export function useLoginGoogleForm() {
  const { authAction } = actionHandler();

  const submitHandler = async (e: TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authAction({ type: "loginWithGoogle" });
  };

  return { submitHandler };
}
