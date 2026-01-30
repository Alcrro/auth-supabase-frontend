import { useEffect } from "react";
import { supabase } from "../libs/supabase/supabaseinsta";
import type { Session } from "@supabase/supabase-js";
import { useLocation } from "react-router-dom";

const useHandleMagicLink = (setSession: (session: Session | null) => void) => {
  const { search } = useLocation();

  useEffect(() => {
    const code = new URLSearchParams(search).get("code") || "";
    if (!code) return;

    async function handleMagicLink() {
      try {
        const { data, error } =
          await supabase.auth.exchangeCodeForSession(code);

        if (error) throw error;

        setSession(data.session);
      } catch (error) {
        console.log(error);
      }
    }
    handleMagicLink();
  }, [search, setSession]);
};

export default useHandleMagicLink;
