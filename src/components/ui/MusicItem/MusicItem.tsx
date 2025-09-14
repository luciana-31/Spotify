"use client";

import { useState } from "react";
import PlayIcon from "../../../assets/svg/PlayIcon/PlayIcon";

interface MusicItemProps {
  title?: string;
  description?: string;
  type?: string;
}

export default function MusicItem({
  title,
  description,
  type,
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
      <p className="hover:underline cursor-pointer">{description}</p>

      {isHovered && (
        <span className="absolute bottom-14 left-23 flex items-center bg-sp-green p-3  w-fit rounded-full">
          <PlayIcon className="h-3" />
        </span>
      )}
    </div>
  );
}
