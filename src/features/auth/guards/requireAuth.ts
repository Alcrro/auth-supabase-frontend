import { redirect } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const requireAuth = () => {
  const { session, hydrated } = useAuthStore.getState();

  if (!hydrated) return;
  if (!session) {
    throw redirect("/auth/login");
  }

  if (!session.user.email_confirmed_at) {
    throw redirect("/auth/email-verified");
  }

  return null;
};
