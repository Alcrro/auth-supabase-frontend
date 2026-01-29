import type { ButtonHTMLAttributes } from "preact";
import type { FC, ReactNode } from "preact/compat";
import { cn } from "../../shared/utils/cn";
import {
  variantButtonMapper,
  type ButtonVariant,
  type VariantTypes,
} from "../UI/buttons/styles/ButtonStyles";

interface IButtonPropsAtr extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

interface IButtonProps extends IButtonPropsAtr {
  variant?: VariantTypes;
}

const DefaultButton: FC<IButtonProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        `${variant}_button`,

        variantButtonMapper[variant as ButtonVariant],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
