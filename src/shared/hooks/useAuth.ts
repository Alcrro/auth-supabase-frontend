import { useAuthStore } from "../../features/auth/store/useAuthStore";

const useAuth = () => {
  const { session } = useAuthStore();

  const isAuthenticated = !!session;
  const isVerified = session?.user.email_confirmed_at;

  return { isAuthenticated, isVerified };
};

export default useAuth;
