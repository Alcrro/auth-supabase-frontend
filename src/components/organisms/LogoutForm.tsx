import { type ReactNode } from "react";
import { useLogoutForm } from "../../shared/hooks/forms/useLogoutForm";

const LogoutForm = ({ children }: { children: ReactNode }) => {
  const { handleSubmit } = useLogoutForm();

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default LogoutForm;
