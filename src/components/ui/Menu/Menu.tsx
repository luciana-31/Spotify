import { AnimatePresence, motion } from "motion/react";

interface MenuProps {
  data: string[];
}

export default function Menu({ data }: MenuProps) {
  return (
    <ul className=" flex items-center gap-x-2.5 text-sp-light-gray-2 text-xs font-bold">
      {data.map((item, index) => (
        <AnimatePresence>
          <motion.li
            key={index}
            className="text-sp-light-gray-2 cursor-pointer"
            whileHover={{ scale: 1.03, color: "#FFFFFF" }}
          >
            {item}
          </motion.li>
        </AnimatePresence>
      ))}
    </ul>
  );
}
