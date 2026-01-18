import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://aefljbalmmfnbyhtzjxf.supabase.co",
  "sb_publishable_jWaHdvv5USFUWwKsON-SlQ_wtmnFaoB",
  {
    auth: {
      flowType: "pkce",
      detectSessionInUrl: true,
      persistSession: true,
    },
  },
);
