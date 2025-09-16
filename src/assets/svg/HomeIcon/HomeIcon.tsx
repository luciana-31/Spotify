import { useState, type SVGProps } from "react";
import clsx from "clsx";
import Alt from "../../../components/ui/Alt/Alt";
import { motion } from "motion/react";

interface HomeIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function HomeIcon({ className }: HomeIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <span className="relative">
      <svg
        data-encore-id="icon"
        role="img"
        aria-hidden="true"
        className={clsx("fill-current", className)}
        viewBox="0 0 24 24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z"></path>
      </svg>

      {isHovered && (
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.2 }}
        >
          <Alt title="Inicio" className="absolute -bottom-9 -right-2.5" />
        </motion.span>
      )}
    </span>
  );
}
