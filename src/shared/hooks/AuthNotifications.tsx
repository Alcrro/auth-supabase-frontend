import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthStore } from "../../features/auth/store/useAuthStore";

export function AuthNotifications() {
  const { hydrated, authEvent, clearAuthEvent } = useAuthStore();

  useEffect(() => {
    if (!hydrated || !authEvent) return;

    switch (authEvent) {
      case "SIGNED_IN":
        toast.success("Logged in successfully!");

        break;

      case "SIGNED_OUT":
        toast.info("Logged out successfully!");
        break;

      case "ERROR":
        toast.error("Authentication error");
        break;
    }

    clearAuthEvent();
  }, [hydrated, authEvent, clearAuthEvent]);

  return null;
}
