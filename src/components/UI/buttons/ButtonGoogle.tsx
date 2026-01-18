import DefaultButton from "../../atoms/DefaultButton";
import { FaGoogle } from "react-icons/fa";

const ButtonGoogle = () => {
  return (
    <DefaultButton
      className={"flex gap-2 items-center justify-center flex-wrap w-full"}
    >
      <FaGoogle className={"text-2xl"} />
      <span>Login with Google</span>
    </DefaultButton>
  );
};

export default ButtonGoogle;
