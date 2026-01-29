import { redirect } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const requireAuth = () => {
  const { session, hydrated } = useAuthStore.getState();
  console.log({ hydrated });

  if (!hydrated) {
    throw new Error("Auth NOT hydrated before loader");
  }
  if (!session) {
    throw redirect("/auth/login");
  }

  if (!session.user.email_confirmed_at) {
    throw redirect("/auth/email-verified");
  }

  return null;
};
