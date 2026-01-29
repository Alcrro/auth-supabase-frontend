import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import { useAuthStore } from "./useAuthStore";

export function initAuth() {
  return new Promise<void>((resolve) => {
    const { setSession, setHydrated } = useAuthStore.getState();

    supabase.auth.onAuthStateChange((event, session) => {
      const store = useAuthStore.getState();

      // prima sesiune (rehydrate)

      if (event === "INITIAL_SESSION") {
        setSession(session);
        setHydrated();
        resolve();

        const oauthIntent = localStorage.getItem("oauth_intent");

        if (session && oauthIntent) {
          localStorage.removeItem("oauth_intent");
          useAuthStore.setState({ authEvent: "SIGNED_IN" });
        }

        return;
      }

      if (event === "SIGNED_IN") {
        const prevSession = store.session;
        store.setSession(session);

        if (store.hydrated && !prevSession) {
          useAuthStore.setState({ authEvent: "SIGNED_IN" });
        }
        return;
      }

      if (event === "SIGNED_OUT") {
        store.setSession(null);

        if (store.hydrated) {
          useAuthStore.setState({ authEvent: "SIGNED_OUT" });
        }
        return;
      }
    });

    setTimeout(() => resolve(), 1000);
  });
}
