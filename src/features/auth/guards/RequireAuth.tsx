import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import useAuth from "../../../shared/hooks/useAuth";
export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const ready = useAuthStore((s) => s.ready);
  const { isAuthenticated } = useAuth();
  console.log({ isAuthenticated });
  console.log(ready);

  if (!ready) return;
  if (!isAuthenticated) {
    navigate("/auth/login", { replace: true });
  }

  return <>{children}</>;
};
