import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

interface IconWrapperProps {
  icon: ReactNode;
}

export default function IconWrapper({ icon }: IconWrapperProps) {
  return (
    <AnimatePresence>
      <motion.span
        className="flex items-center text-sp-light-gray hover:text-white justify-center p-2 bg-sp-gray rounded-full "
        whileHover={{ scale: 1.1, backgroundColor: "#2a2a2a" }}
        transition={{ duration: 0.2, ease: "easeIn" }}
      >
        {icon}
      </motion.span>
    </AnimatePresence>
  );
}
