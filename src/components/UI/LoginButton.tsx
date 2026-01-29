import DefaultButton from "../atoms/DefaultButton";

const LoginButton = ({ isDisabled = false }: { isDisabled: boolean }) => {
  return (
    <DefaultButton
      variant="default"
      className={"w-full "}
      disabled={isDisabled}
    >
      <span>Login</span>
    </DefaultButton>
  );
};

export default LoginButton;
