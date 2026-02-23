// features/auth/pages/OAuthCallback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import { getGeolocation } from "../services/getGeolocation";
import { recordLoginAudit } from "../usecases/recordLoginAudit";

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const run = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        navigate("/auth/login");
        return;
      }
      await getGeolocation();
      await recordLoginAudit();
      navigate("/dashboard");
    };

    run();
  }, [navigate]);

  return (
    <div className={"h-screen flex justify-center items-center"}>
      <LoadingSpinner className="size-14" />
    </div>
  );
}
