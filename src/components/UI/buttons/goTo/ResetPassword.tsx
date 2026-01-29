import DefaultButton from "../../../atoms/DefaultButton";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <DefaultButton
      variant={"link"}
      onClick={() => navigate("/auth/reset-password")}
      className={"default_button"}
    >
      Reset password
    </DefaultButton>
  );
};

export default ResetPassword;
