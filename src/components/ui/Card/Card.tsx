import Button from "../Button/Button";

interface CardProps {
  title?: string;
  description?: string;
  button?: string;
}

export default function Card({ title, description, button }: CardProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-1 text-white rounded-sm bg-sp-gray p-4 m-2 text-sm">
      <h3>{title}</h3>
      <p className="text-xs font-semibold">{description}</p>
      <Button className="px-3 py-1.5 text-xs mt-2 bg-white w-fit">
        {button}
      </Button>
    </div>
  );
}
