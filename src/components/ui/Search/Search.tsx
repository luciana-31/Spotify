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
  //   const [isSelected, setSelected] = useState(false);
  return (
    <div
      className={clsx(
        "flex items-center justify-between py-2 px-3 bg-sp-gray rounded-full hover:bg-sp-light-gray-3 ",
        // isSelected && "border border-white",
        className?.container
      )}
    >
      <span className="flex flex-1 items-center w-full gap-x-2 text-xs text-sp-light-gray-2 sm:text-xxs ">
        <SearchIcon className="h-5 " />
        <input
          type="text"
          placeholder={placeholder}
          className={clsx(
            "w-full outline-0 placeholder:text-sp-light-gray-2 caret-sp-light-gray-2 ",
            className?.input
          )}
          //   onClick={() => setSelected(true)}
        />
      </span>
      <ExploreIcon className="h-4.5 pl-2.5 border-l border-sp-light-gray hover:fill-white " />
    </div>
  );
}
