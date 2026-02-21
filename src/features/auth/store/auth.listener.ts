import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import { getGeolocation } from "../services/getGeolocation";
import { recordLoginAudit } from "../usecases/recordLoginAudit";
import { useAuthStore } from "./useAuthStore";

export function initAuth() {
  return new Promise<void>((resolve) => {
    const { setSession, setHydrated } = useAuthStore.getState();

    supabase.auth.onAuthStateChange((event, session) => {
      const store = useAuthStore.getState();

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

      if (event === "SIGNED_IN" && session?.user) {
        const prevSession = store.session;
        store.setSession(session);

        // 🔥 Rulează doar dacă NU exista sesiune înainte
        if (store.hydrated && !prevSession && session) {
          useAuthStore.setState({ authEvent: "SIGNED_IN" });

          // 👇 pune aici
          recordLoginAudit();
          getGeolocation();
        }

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
