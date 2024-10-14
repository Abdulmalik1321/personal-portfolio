import { Button } from "@/shadcn/ui/button";
import { easeInOut, motion } from "framer-motion";
import { a, i } from "framer-motion/client";

export function ServiceCard({
  title,
  img,
  jobTitle,
  description,
  items,
  link,
}: {
  title: string;
  img: string;
  jobTitle: string;
  description: string;
  items: string[];
  link: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.25 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.25,
        delay: 0.25,
        ease: easeInOut,
      }}
      className="w-[75vw] md:w-[40vw] h-[55vh] relative shadow-xl bg-background-op backdrop-blur-3xl border border-gray-800  px-4 md:px-8 py-8 overflow-hidden rounded-2xl flex flex-col justify-start items-start"
    >
      <img
        src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
        alt="circuit-board-pattern"
        className="absolute top-0 left-0 invert size-[175%] -z-10 object-cover opacity-[2%]"
      />
      <div className="w-full flex justify-center mb-1 md:mb-3">
        <img src={img} className="w-24 md:w-40 object-cover " />
      </div>
      <h1 className="font-bold text-xl md:text-2xl 3xl:text-4xl text-white mb-0 text-center w-full">
        {link ? (
          <a href={link} target="_blank" className="underline z-50">
            {title}
          </a>
        ) : (
          title
        )}
      </h1>

      <span className="font-normal text-xs md:text-lg 3xl:text-xl text-slate-400 text-center w-full">
        {jobTitle}
      </span>

      <p className="font-normal text-sm md:text-lg 3xl:text-xl 3xl:leading-10  mt-4 ">
        {description}
      </p>

      <ul className="text-sm md:text-base 3xl:text-xl 3xl:leading-10 list-disc list-inside">
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </motion.div>
  );
}
