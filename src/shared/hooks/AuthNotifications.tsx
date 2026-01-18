// AuthEffects.tsx
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthStore } from "../../features/auth/store/useAuthStore";

export function AuthNotifications() {
  const { ready, authEvent, clearAuthEvent } = useAuthStore();

  if (!ready) return null;

  useEffect(() => {
    if (authEvent === "SIGNED_IN") {
      toast.success("Logged in successfully!");
      clearAuthEvent();
    }
    if (authEvent === "SIGNED_OUT") {
      toast.info("Logged  out successfully!");
      clearAuthEvent();
    }
    if (authEvent === "ERROR") {
      toast.error("Authentication error");
    }
  }, [ready, authEvent]);

  return null;
}
