import { create } from "zustand";
import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import type { Session, User } from "@supabase/supabase-js";
import { supabaseResetPassword } from "../services/supabaseResetPassword";
import { supabaseUpdatePassword } from "../services/supabaseUpdatePassword";

type AuthEvent = "SIGNED_IN" | "SIGNED_OUT" | "ERROR" | null;

interface AuthStore {
  session: Session | null;
  user: User | null;
  hydrated: boolean;
  authEvent: AuthEvent;

  setSession: (session: Session | null) => void;
  setHydrated: () => void;
  setAuthEvent: (event: AuthEvent) => void;
  clearAuthEvent: () => void;

  logout: () => Promise<void>;
  updatePassword: (newPassword: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  user: null,
  hydrated: false,
  authEvent: null,

  setSession: (session) =>
    set({
      session,
      user: session?.user ?? null,
    }),

  setHydrated: () => set({ hydrated: true }),

  setAuthEvent: (event) => set({ authEvent: event }),
  clearAuthEvent: () => set({ authEvent: null }),

  logout: async () => {
    await supabase.auth.signOut();
    set({ session: null, user: null });
  },

  updatePassword: async (password) => {
    await supabaseUpdatePassword({ password });
  },

  resetPassword: async (email) => {
    await supabaseResetPassword(email);
  },
}));
