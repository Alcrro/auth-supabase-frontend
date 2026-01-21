import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import { useAuthStore } from "./useAuthStore";

supabase.auth.onAuthStateChange((event, session) => {
  const store = useAuthStore.getState();

  // prima sesiune (rehydrate)
  if (event === "INITIAL_SESSION") {
    store.setSession(session);
    store.setHydrated();

    const oauthIntent = localStorage.getItem("oauth_intent");

    if (session && oauthIntent) {
      localStorage.removeItem("oauth_intent");
      useAuthStore.setState({ authEvent: "SIGNED_IN" });
    }

    return;
  }

  if (event === "SIGNED_IN") {
    const wasLoggedIn = !!store.session;

    store.setSession(session);

    if (store.hydrated && !wasLoggedIn) {
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
