import ResetPasswordForm from "../../components/organisms/ResetPasswordForm";
import { useAuthStore } from "../../features/auth/store/useAuthStore";

const Home = () => {
  const { session, logout } = useAuthStore((store) => store);

  return (
    <>
      <div>Welcome</div>
      {session && <button onClick={logout}>Logout</button>}

      <ResetPasswordForm />
    </>
  );
};

export default Home;
