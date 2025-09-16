import clsx from "clsx";

interface AltProps {
  title: string;
  className?: string;
}
export default function Alt({ title, className }: AltProps) {
  return (
    <div
      className={clsx(
        "bg-sp-gray rounded-xs text-xxs w-fit font-semibold text-white py-1 px-1.5",
        className
      )}
    >
      {title}
    </div>
  );
}
