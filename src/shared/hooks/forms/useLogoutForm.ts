import { useState } from "preact/hooks";
import { actionHandler } from "./actionHandler";
import type { TargetedSubmitEvent } from "preact";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../features/auth/store/useAuthStore";

export function useLogoutForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { authAction } = actionHandler();
  const { setSession } = useAuthStore((store) => store);

  const handleSubmit = async (e: TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authAction({ type: "logout" });
    } catch (error) {
      console.warn("Logout failed, clearing local session anyway", error);
    } finally {
      setSession(null);
      navigate("/auth/login");
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
}
