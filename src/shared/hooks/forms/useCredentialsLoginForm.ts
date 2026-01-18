import type { TargetedSubmitEvent } from "preact";
import { actionHandler } from "./actionHandler";
import { credentialsLoginSchema } from "../../../features/auth/validation/credentialsLogin.schema";
import { useState } from "preact/hooks";
import { toast } from "react-toastify";

export function useCredentialsLoginForm() {
  const [loading, setLoading] = useState(false);
  const { authAction } = actionHandler();

  const submitHandler = async (e: TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const rawData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const parsed = credentialsLoginSchema.safeParse(rawData);

    if (!parsed.success) {
      Object.entries(parsed.error.flatten().fieldErrors).forEach((errors) => {
        errors.forEach((message) => {
          toast.error(message);
        });
      });
      setLoading(false);
      return;
    }

    try {
      const result = await authAction({
        type: "loginWithCredentials",
        payload: parsed.data,
      });

      return result;
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }

    setLoading(false);
  };

  return { submitHandler, loading };
}
