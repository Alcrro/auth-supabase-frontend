import { create } from "zustand";
import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import type { Session, User } from "@supabase/supabase-js";
import { supabaseResetPassword } from "../services/supabaseResetPassword";
import { supabaseUpdatePassword } from "../services/supabaseUpdatePassword";

interface AuthStore {
  session: Session | null;
  user: User | null;
  ready: boolean;
  hydrated: boolean;
  authEvent: "SIGNED_IN" | "SIGNED_OUT" | null;
  clearAuthEvent: () => void;
  setReady: (s: boolean) => void;
  setSession: (session: Session | null) => void;
  updatePassword: (newPassword: string) => void;
  resetPassword: (email: string) => void;
  logout: () => Promise<void>;
}
export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  user: null,
  ready: false,
  authEvent: null,
  hydrated: false,
  clearAuthEvent: () => set({ authEvent: null }),

  setReady: (ready) => set({ ready }),
  setSession: (session) => set({ session, user: session?.user, ready: true }),
  logout: async () => {
    await supabase.auth.signOut();
    set({ session: null, user: null, ready: false });
  },

  updatePassword: async (password: string) => {
    await supabaseUpdatePassword({ password });
  },
  resetPassword: async (email) => {
    await supabaseResetPassword(email);
  },
}));

supabase.auth.onAuthStateChange((event, session) => {
  const store = useAuthStore.getState();

  // prima sesiune (rehydrate)
  if (event === "INITIAL_SESSION") {
    store.setSession(session);
    useAuthStore.setState({ hydrated: true });

    return;
  }

  // login REAL (după ce app e hydrated)
  if (event === "SIGNED_IN") {
    store.setSession(session);
    useAuthStore.setState({ authEvent: "SIGNED_IN" });
    return;
  }

  if (event === "SIGNED_OUT") {
    store.setSession(null);
    return;
  }

  store.setSession(session);
});
