import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <AnimatePresence>
      <motion.button
        className={clsx(
          "flex items-center cursor-pointer text-black  text-nowrap   rounded-full font-bold md:text-xs text-xxs",
          className
        )}
        whileHover={{ scale: 1.03 }}
      >
        {children}
      </motion.button>
    </AnimatePresence>
  );
}
