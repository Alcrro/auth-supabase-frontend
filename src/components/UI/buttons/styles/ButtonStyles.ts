import { cn } from "../../../../shared/utils/cn";

const baseButton =
  "inline-flex items-center justify-center gap-2 flex-wrap w-full rounded-xl px-5 py-2 text-base font-medium font-inherit cursor-pointer transition-colors duration-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2";

const defaultButton = `${baseButton} border border-transparent bg-[#1a1a1a] text-white hover:border-[#646cff]`;

const secondaryButton = `${baseButton} border border-transparent bg-gray-700 text-white hover:bg-gray-600`;

const outlineButton = `${baseButton} border border-gray-400 bg-transparent text-gray-200 hover:bg-gray-800 hover:border-[#646cff]`;

const linkButton =
  "bg-transparent p-0 text-blue-400 hover:underline focus-visible:outline-none pointer";

export type ButtonVariant = "default" | "secondary" | "outline" | "link";

type ToggleVariant = "toggle";

export type VariantTypes = ButtonVariant | ToggleVariant;

export const toggleButton = (active: boolean) =>
  cn(
    baseButton,
    "border",
    active
      ? "bg-[#646cff] text-white border-[#646cff]"
      : "bg-transparent text-gray-300 border-gray-500 hover:border-[#646cff]",
  );

export const variantButtonMapper: Record<ButtonVariant, string> = {
  default: defaultButton,
  secondary: secondaryButton,
  outline: outlineButton,
  link: linkButton,
};
