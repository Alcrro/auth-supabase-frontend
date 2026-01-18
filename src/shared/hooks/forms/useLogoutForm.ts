import { useState } from "preact/hooks";
import { actionHandler } from "./actionHandler";
import type { TargetedSubmitEvent } from "preact";
import { useNavigate } from "react-router-dom";

export function useLogoutForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { authAction } = actionHandler();

  const handleSubmit = async (e: TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await authAction({ type: "logout" });

    navigate("/home");
    setLoading(false);
  };

  return { handleSubmit, loading };
}
