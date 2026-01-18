import { useEffect } from "preact/hooks";
import { useAuthStore } from "../../../features/auth/store/useAuthStore";
import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

const ConfirmEmailPage = () => {
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    async function handleMagicLink() {
      try {
        const code = new URLSearchParams(location.search).get("code") || "";

        const { data, error } =
          await supabase.auth.exchangeCodeForSession(code);

        if (error) throw error;

        setSession(data.session);
      } catch (error) {
        console.log(error);
      }
    }
    handleMagicLink();
  }, [setSession]);

  return (
    <div>You're logged in. You may close this tab and return to the app.</div>
  );
};

export default ConfirmEmailPage;
