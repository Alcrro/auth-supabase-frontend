import React from "react";
import DefaultButton from "../../../atoms/DefaultButton";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <DefaultButton
      onClick={() => navigate("/auth/reset-password")}
      className={""}
    >
      Reset password
    </DefaultButton>
  );
};

export default ResetPassword;
