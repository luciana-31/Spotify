"use client";
import MusicItem from "../MusicItem/MusicItem";
import ArrowLeftIcon from "../../../assets/svg/ArrowLeftIcon/ArrowLeftIcon";
import ArrowRightIco from "../../../assets/svg/ArrowRightIcon/ArrowRightIco";
import type { ItemType } from "../../../interface/ItemType";

interface MusicDisplayProps {
  data: ItemType[];
  type?: string;
}

export default function MusicDisplay({ data, type }: MusicDisplayProps) {
  return (
    <div className="flex flex-col gap-y-3 py-4.5">
      <span className="flex items-center justify-between text-white font-bold px-6">
        <h2>Canciones del Momento</h2>
        <p className="hover:underline cursor-pointer text-sp-light-gray-2 text-xxs">
          Mostrar Todo
        </p>
      </span>
      <div className="flex items-start gap-x-3 overflow-hidden pl-6 relative">
        {data.map((data) => (
          <MusicItem
            key={data.id}
            title={data.title}
            description={data.description}
            type={type}
          />
        ))}
        <span className="absolute top-20 flex items-center justify-center bg-sp-dark-gray p-1 h-fit rounded-full">
          <ArrowLeftIcon className="h-3" />
        </span>
        <span className="absolute top-20 right-4 flex items-center justify-center bg-sp-dark-gray p-1 h-fit rounded-full">
          <ArrowRightIco className="h-3" />
        </span>
      </div>
    </div>
  );
}
