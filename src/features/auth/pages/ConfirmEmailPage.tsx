import { useAuthStore } from "../../../features/auth/store/useAuthStore";
import useHandleMagicLink from "../../../shared/hooks/useHandleMagicLink";

const ConfirmEmailPage = () => {
  const setSession = useAuthStore((state) => state.setSession);

  useHandleMagicLink(setSession);

  return (
    <div>You're logged in. You may close this tab and return to the app.</div>
  );
};

export default ConfirmEmailPage;
