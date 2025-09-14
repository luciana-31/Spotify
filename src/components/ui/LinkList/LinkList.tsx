interface LinkListProps {
  title?: string;
  links: string[];
}

export default function LinkList({ title, links }: LinkListProps) {
  return (
    <div className="flex flex-col gap-y-1 text-xs px-6">
      <span className="text-white font-semibold">{title}</span>

      <ul className="flex flex-col gap-y-2">
        {links.map((link, index) => (
          <li key={index} className="text-sp-light-gray-2">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
