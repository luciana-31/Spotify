import SearchIcon from "../../../assets/svg/SearchIcon/SearchIcon";
import ExploreIcon from "../../../assets/svg/ExploreIcon/ExploreIcon";
import clsx from "clsx";
// import { useState } from "react";

interface SearchProps {
  placeholder: string;
  className?: {
    container?: string;
    input?: string;
  };
}

export default function Search({ placeholder, className }: SearchProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between py-2 px-3 bg-sp-gray rounded-full hover:bg-sp-light-gray-3",
        className?.container
      )}
    >
      <span className="flex items-center gap-x-2 text-xs text-sp-light-gray-2  ">
        <SearchIcon className="h-5 " />
        <input
          type="text"
          placeholder={placeholder}
          className={clsx(
            "w-full outline-0 placeholder:text-sp-light-gray-2 ",
            className?.input
          )}
        />
      </span>
      <ExploreIcon className="h-4.5 pl-2.5 border-l border-sp-light-gray " />
    </div>
  );
}
