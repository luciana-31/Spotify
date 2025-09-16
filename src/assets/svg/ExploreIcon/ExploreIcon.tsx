import { useState, type SVGProps } from "react";
import { motion } from "motion/react";
import Alt from "../../../components/ui/Alt/Alt";
import clsx from "clsx";

interface ExploreIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ExploreIcon({ className }: ExploreIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <span className="relative">
      <svg
        data-encore-id="icon"
        role="img"
        aria-hidden="true"
        className={clsx("fill-sp-light-gray-2 cursor-pointer", className)}
        viewBox="0 0 24 24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2"></path>
        <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4z"></path>
      </svg>
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.2 }}
        >
          <Alt title="Explorar" className="absolute -bottom-8 -right-3.5" />
        </motion.span>
      )}
    </span>
  );
}
