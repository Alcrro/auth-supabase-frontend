import type { TargetedSubmitEvent } from "preact";
import { actionHandler } from "./actionHandler";
import { useState } from "preact/hooks";
import { magicLinkSchema } from "../../../features/auth/validation/magicLink.schema";
import { toast } from "react-toastify";

export function useLoginMagicLinkForm() {
  const [loading, setLoading] = useState(false);
  const { authAction } = actionHandler();

  const submitHandler = async (e: TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");

    const parsed = magicLinkSchema.safeParse({ email });

    if (!parsed.success) {
      toast.error(parsed.error.flatten().fieldErrors.email?.toString());
      setLoading(false);
      return;
    }

    await authAction({
      type: "loginWithMagicLink",
      payload: { email: parsed.data.email },
    });

    toast.success("Check your email to confirm!");
    setLoading(false);
  };

  return { submitHandler, loading };
}
