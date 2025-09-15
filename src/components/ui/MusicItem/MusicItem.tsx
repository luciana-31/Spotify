"use client";

import { useState } from "react";
import PlayIcon from "../../../assets/svg/PlayIcon/PlayIcon";
import { AnimatePresence, motion } from "motion/react";

interface MusicItemProps {
  title?: string;
  description?: string;
  type?: string;
  explicit?: boolean;
}

export default function MusicItem({
  title,
  description,
  type,
  explicit,
}: MusicItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={
        "relative flex flex-col gap-y-1 text-sp-light-gray-2 text-xs hover:bg-gradient-to-b hover:from-transparent hover:to-sp-gray  rounded-sm p-2.5"
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={` bg-amber-300 h-[120px] w-[120px]  ${
          type === "artist" ? "rounded-full" : "rounded-sm"
        }`}
      />
      <h3 className="text-white hover:underline cursor-pointer">{title}</h3>
      <p className="flex items-center gap-x-2">
        {explicit && (
          <span className="bg-sp-light-gray-2 px-1 rounded-xs text-xxs text-sp-dark-gray">
            E
          </span>
        )}
        <p className="hover:underline cursor-pointer">{description}</p>
      </p>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute top-22 left-23 flex items-center bg-sp-green p-3  w-fit rounded-full"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <PlayIcon className="h-3" />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
