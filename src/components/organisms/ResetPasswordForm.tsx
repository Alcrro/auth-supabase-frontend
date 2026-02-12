import { useAuthStore } from "../../features/auth/store/useAuthStore";
import DefaultButton from "../atoms/DefaultButton";

const ResetPasswordForm = () => {
  const { session, resetPassword } = useAuthStore((store) => store);
  const email = useAuthStore((store) => store.user?.email) as string;

  if (!session) return;

  return (
    <DefaultButton variant="default">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          resetPassword(email);
        }}
      >
        <button>Reset password</button>
      </form>
    </DefaultButton>
  );
};

export default ResetPasswordForm;
