import Button from "../Button/Button";

interface CardProps {
  title?: string;
  description?: string;
  button?: string;
}

export default function Card({ title, description, button }: CardProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-1 text-white rounded-sm bg-sp-gray p-3 m-2 text-xs ">
      <h3>{title}</h3>
      <p className=" font-semibold md:text-xxs ">{description}</p>
      <Button className="px-3 py-1 text-xs md:text-xxs mt-4 bg-white w-fit hover:bg-sp-white">
        {button}
      </Button>
    </div>
  );
}
