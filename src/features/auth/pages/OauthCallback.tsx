// features/auth/pages/OAuthCallback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import { recordLoginAudit } from "../usecases/recordLoginAudit";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const run = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        navigate("/auth/login");
        return;
      }

      await recordLoginAudit();

      navigate("/dashboard");
    };

    // oferă timp pentru INITIAL_SESSION

    // const id = setTimeout(() => {
    //   navigate("/dashboard", { replace: true });
    // }, 0);

    // return () => clearTimeout(id);
    run();
  }, [navigate]);

  return (
    <LoadingSpinner className="h-screen flex justify-center items-center size-14" />
  );
}
