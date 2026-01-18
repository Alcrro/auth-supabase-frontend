import type { ButtonHTMLAttributes } from "preact";
import type { FC, ReactNode } from "preact/compat";

interface IButtonProps extends ButtonHTMLAttributes {
  children: ReactNode;
  onClick?: () => void;
}

const DefaultButton: FC<IButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default DefaultButton;
