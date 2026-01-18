import type { HTMLInputTypeAttribute, InputHTMLAttributes } from "preact";
import { type FC } from "react";

interface InputProps extends InputHTMLAttributes {
  placeholder: string;
  type: HTMLInputTypeAttribute;
}
const Input: FC<InputProps> = ({ placeholder, type, ...props }) => {
  return <input type={type} placeholder={placeholder} {...props} />;
};

export default Input;
