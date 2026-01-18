import { useAuthStore } from "../../features/auth/store/useAuthStore";

const ResetPasswordForm = () => {
  const { session, resetPassword } = useAuthStore((store) => store);
  const email = useAuthStore((store) => store.user?.email) as string;

  if (!session) return;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          resetPassword(email);
        }}
      >
        <button>Reset password</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
