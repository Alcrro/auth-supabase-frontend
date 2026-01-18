import { useLoginGoogleForm } from "../../shared/hooks/forms/useLoginGoogleForm";
import ButtonGoogle from "../UI/buttons/ButtonGoogle";

const LoginGoogleForm = () => {
  const { submitHandler } = useLoginGoogleForm();
  return (
    <form onSubmit={submitHandler}>
      <ButtonGoogle />
    </form>
  );
};

export default LoginGoogleForm;
