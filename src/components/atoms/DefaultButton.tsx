import { h, type JSX } from "preact";
import { cn } from "../../shared/utils/cn";
import {
  variantButtonMapper,
  type ButtonVariant,
  type VariantTypes,
} from "../UI/buttons/styles/ButtonStyles";

type ElementType = keyof JSX.IntrinsicElements;

type BaseProps<T extends ElementType> = {
  as?: T;
  children: preact.ComponentChildren;
  className?: string;
  variant?: VariantTypes;
};
type PolymorphicProps<T extends ElementType> = BaseProps<T> &
  Omit<JSX.IntrinsicElements[T], keyof BaseProps<T>>;

const DefaultButton = <T extends ElementType = "button">(
  props: PolymorphicProps<T>,
) => {
  const { as, children, variant = "default", className, ...rest } = props;
  const tag = (as ?? "button") as ElementType;
  return h(
    tag,
    {
      ...rest,
      className: cn(
        `${variant}_button`,

        variantButtonMapper[variant as ButtonVariant],
        className,
      ),
    },
    children,
  );
};

export default DefaultButton;
