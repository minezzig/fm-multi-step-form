import { ButtonProps } from "../types/types";

export const Button = ({ text, action, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={action}
      type="submit"
      className={`cursor-pointer rounded-md bg-primary1 px-3 py-2 text-primary4 active:opacity-80 ${className}`}
    >
      {text}
    </button>
  );
};
