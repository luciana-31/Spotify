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
  return (
    <div
      className={
        "flex flex-col gap-y-1 text-sp-light-gray-2 text-xs hover:bg-gradient-to-b hover:from-transparent hover:to-sp-gray  rounded-sm p-2.5"
      }
    >
      <div
        className={`bg-amber-300 h-[120px] w-[120px]  ${
          type === "artist" ? "rounded-full" : "rounded-sm"
        }`}
      />
      <h3 className="text-white hover:underline cursor-pointer">{title}</h3>
      <p className="hover:underline cursor-pointer">{description}</p>
    </div>
  );
}
