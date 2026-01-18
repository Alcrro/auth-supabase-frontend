import ButtonGithub from "../UI/buttons/ButtonGithub";
import { useLoginGithubForm } from "../../shared/hooks/forms/useLoginGithubForm";

const LoginGithubForm = () => {
  const { submitHandler } = useLoginGithubForm();
  return (
    <form onSubmit={submitHandler} className={"w-full"}>
      <ButtonGithub />
    </form>
  );
};

export default LoginGithubForm;
