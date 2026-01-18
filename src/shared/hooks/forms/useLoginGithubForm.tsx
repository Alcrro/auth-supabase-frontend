import type { TargetedSubmitEvent } from "preact";
import { actionHandler } from "./actionHandler";

export function useLoginGithubForm() {
  const { authAction } = actionHandler();
  const submitHandler = async (e: TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authAction({ type: "loginWithGithub" });
  };

  return { submitHandler };
}
