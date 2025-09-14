import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center cursor-pointer text-black text-xs bg-white rounded-full font-bold",
        className
      )}
    >
      {children}
    </button>
  );
}
