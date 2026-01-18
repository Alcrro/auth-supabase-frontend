import { FaGithub } from "react-icons/fa";
import DefaultButton from "../../atoms/DefaultButton";

const ButtonGithub = ({ clickHandler }: { clickHandler?: () => void }) => {
  return (
    <DefaultButton
      onClick={clickHandler}
      className={"flex gap-2 items-center justify-center flex-wrap w-full"}
    >
      <FaGithub className={"text-2xl"} />
      <span>Login with Github</span>
    </DefaultButton>
  );
};

export default ButtonGithub;
