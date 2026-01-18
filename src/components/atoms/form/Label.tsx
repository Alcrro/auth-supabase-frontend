import type { LabelHTMLAttributes } from "preact";
import type { FC } from "preact/compat";

interface LabelProps extends LabelHTMLAttributes {
  description: string;
}
const Label: FC<LabelProps> = ({ description, id, ...props }) => {
  return (
    <label id={id} {...props}>
      {description}
    </label>
  );
};

export default Label;
