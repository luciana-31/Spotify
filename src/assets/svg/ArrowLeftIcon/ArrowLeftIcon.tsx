import clsx from "clsx";
import type { SVGProps } from "react";

interface ArrowLeftIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
export default function ArrowLeftIcon({ className }: ArrowLeftIconProps) {
  return (
    <svg
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      className={clsx("fill-sp-light-gray-2", className)}
      viewBox="0 0 16 16"
    >
      <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0"></path>
    </svg>
  );
}
