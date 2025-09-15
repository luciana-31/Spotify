"use client";

import { useState } from "react";
import type { ItemType } from "../../../interface/ItemType";
import ArrowLeftIcon from "../../../assets/svg/ArrowLeftIcon/ArrowLeftIcon";
import ArrowRightIco from "../../../assets/svg/ArrowRightIcon/ArrowRightIco";
import MusicItem from "../MusicItem/MusicItem";
import { motion } from "framer-motion";

interface MusicCarouselProps {
  data: ItemType[];
  type?: string;
  title: string;
}

export default function MusicCarousel({
  data,
  type,
  title,
}: MusicCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slidesToShow = 6;
  const slidesToScroll = 3;

  const itemWidth = 160;
  const gap = 16;
  const translateX = -(currentIndex * (itemWidth + gap));

  const next = () => {
    if (currentIndex + slidesToShow < data.length) {
      setCurrentIndex(
        Math.min(currentIndex + slidesToScroll, data.length - slidesToShow)
      );
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(currentIndex - slidesToScroll, 0));
    }
  };

  return (
    <div
      className="relative overflow-hidden px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-white font-bold mb-2 text-xl pl-3">{title}</h2>

      <motion.span
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-sp-dark-gray p-1 rounded-full z-10 cursor-pointer"
        animate={{
          x: isHovered ? 0 : -20,
          opacity: currentIndex > 0 && isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: currentIndex > 0 ? "auto" : "none" }}
      >
        <ArrowLeftIcon className="h-3 fill-white" />
      </motion.span>

      <motion.span
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-sp-dark-gray p-1 rounded-full z-10 cursor-pointer"
        animate={{
          x: isHovered ? 0 : 20,
          opacity:
            currentIndex + slidesToShow < data.length && isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{
          pointerEvents:
            currentIndex + slidesToShow < data.length ? "auto" : "none",
        }}
      >
        <ArrowRightIco className="h-3 fill-white" />
      </motion.span>

      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 sm:w-32 xs:w-56 mr-4"
          >
            <MusicItem
              title={item.title}
              description={item.description}
              explicit={item.explicit}
              src={item.src}
              type={type}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
