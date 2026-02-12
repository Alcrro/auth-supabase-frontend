import DefaultButton from "../../components/atoms/DefaultButton";
import ResetPasswordForm from "../../components/organisms/ResetPasswordForm";
import MainLayout from "../../components/UI/MainLayout";
import { useAuthStore } from "../../features/auth/store/useAuthStore";

const Home = () => {
  const { session, logout } = useAuthStore((store) => store);

  return (
    <MainLayout>
      <div className={"font-semibold"}>Welcome: {session?.user.email}</div>
      {session && (
        <>
          <DefaultButton
            variant="link"
            as="a"
            href={"/dashboard"}
            className={"text-center hover:bg-black hover:text-black w-full"}
          >
            Dashboard
          </DefaultButton>
          <DefaultButton variant={"default"} onClick={logout}>
            Logout
          </DefaultButton>

          <ResetPasswordForm />
        </>
      )}
    </MainLayout>
  );
};

export default Home;
