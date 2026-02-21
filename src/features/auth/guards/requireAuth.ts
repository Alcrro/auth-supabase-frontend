import { redirect } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

function waitForHydration() {
  return new Promise<void>((resolve) => {
    const unsub = useAuthStore.subscribe((s) => {
      if (s.hydrated) {
        unsub();
        resolve();
      }
    });
  });
}

export const requireAuth = async () => {
  const { session, hydrated } = useAuthStore.getState();

  if (!hydrated) {
    await waitForHydration();
    // throw new Error("Auth NOT hydrated before loader");
  }
  const token = localStorage.getItem("token");
  if (!session?.user && !token) {
    throw redirect("/auth/login");
  }

  if (!session.user.email_confirmed_at) {
    throw redirect("/auth/email-verified");
  }

  return null;
};
