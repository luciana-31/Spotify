"use client";
import MusicItem from "../MusicItem/MusicItem";
import ArrowLeftIcon from "../../../assets/svg/ArrowLeftIcon/ArrowLeftIcon";
import ArrowRightIco from "../../../assets/svg/ArrowRightIcon/ArrowRightIco";
import type { ItemType } from "../../../interface/ItemType";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface MusicDisplayProps {
  data: ItemType[];
  type?: string;
}

export default function MusicDisplay({ data, type }: MusicDisplayProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col gap-y-3 py-4.5">
      <span className="flex items-center justify-between text-white font-bold px-6">
        <h2 className="hover:underline cursor-pointer">
          Canciones del Momento
        </h2>
        <p className="hover:underline cursor-pointer text-sp-light-gray-2 text-xxs">
          Mostrar Todo
        </p>
      </span>
      <div
        className="flex items-start gap-x-3 overflow-hidden pl-6 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {data.map((data) => (
          <MusicItem
            key={data.id}
            title={data.title}
            description={data.description}
            explicit={data.explicit}
            type={type}
          />
        ))}
        <AnimatePresence>
          {isHovered && (
            <>
              <motion.span
                className="absolute top-20 flex items-center justify-center bg-sp-dark-gray p-1 h-fit rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeftIcon className="h-3" />
              </motion.span>
              <motion.span
                className="absolute top-20 right-4 flex items-center justify-center bg-sp-dark-gray p-1 h-fit rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ArrowRightIco className="h-3" />
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
