interface LinkListProps {
  title?: string;
  links: string[];
  type?: string;
  className?: string;
}

export default function LinkList({ type, title, links }: LinkListProps) {
  return (
    <div className="flex flex-col gap-y-1 text-xs ">
      <span className="text-white font-semibold">{title}</span>
      <ul
        className={`flex flex-col gap-y-2 text-sp-light-gray-2 ${
          type === "aside"
            ? "flex-row items-center flex-wrap gap-x-3 text-xxs"
            : ""
        }`}
      >
        {links.map((link, index) => (
          <li
            key={index}
            className={` cursor-pointer ${
              type === "footer" ? "hover:underline hover:text-white" : ""
            }`}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
