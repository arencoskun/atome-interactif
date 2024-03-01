import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  extraclassname?: string;
}

export default function Button({ children, ...props }: ButtonProps) {
  const { onClick, ...rest } = props;
  return (
    <button
      className={
        "text-white font-bold py-2 px-4 rounded " + props.extraclassname
      }
      onClick={onClick}
      disabled={props.disabled}
      {...rest}
    >
      <p className="text-xl">{children}</p>
    </button>
  );
}
