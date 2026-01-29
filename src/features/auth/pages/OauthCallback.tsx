// features/auth/pages/OAuthCallback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // oferă timp pentru INITIAL_SESSION
    const id = setTimeout(() => {
      navigate("/dashboard", { replace: true });
    }, 0);

    return () => clearTimeout(id);
  }, [navigate]);

  return <p>Signing you in…</p>;
}
