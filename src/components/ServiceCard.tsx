"use client";

import { easeInOut, motion } from "framer-motion";

export function ServiceCard({
  title,
  img,
  jobTitle,
  date,
  description,
  items,
  link,
  dir = "ltr",
}: {
  title: string;
  img: string;
  jobTitle: string;
  date?: string;
  description: string;
  items: string[];
  link: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <motion.div
      dir={dir}
      initial={{ opacity: 0, scale: 1.25 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.25,
        delay: 0.25,
        ease: easeInOut,
      }}
      className="shrink-0 w-[80vw] sm:w-[60vw] md:w-[42vw] max-w-[560px] max-h-[80vh] overflow-y-auto no-scrollbar relative shadow-xl bg-background-op backdrop-blur-3xl border border-gray-800 px-4 md:px-8 py-6 md:py-7 rounded-2xl flex flex-col justify-start items-start h-[50dvh]"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 invert size-[175%] -z-10 object-cover opacity-[2%] pointer-events-none"
        />
      </div>
      <div className="w-full flex justify-center mb-2 md:mb-3">
        <img
          src={img}
          alt={`${title} logo`}
          className="w-20 md:w-32 h-20 md:h-32 object-contain"
        />
      </div>
      <h3 className="font-bold text-xl md:text-2xl 3xl:text-4xl text-white mb-0 text-center w-full">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>

      <span className="font-normal text-xs md:text-lg 3xl:text-xl text-slate-400 text-center w-full">
        {jobTitle}
      </span>

      {date ? (
        <span className="font-medium text-xs md:text-sm text-slate-500 text-center w-full mt-1">
          {date}
        </span>
      ) : null}

      {description ? (
        <p className="font-normal text-sm md:text-lg 3xl:text-xl 3xl:leading-10 mt-4">
          {description}
        </p>
      ) : null}

      {items.length > 0 ? (
        <ul className="text-sm md:text-base 3xl:text-xl 3xl:leading-10 list-disc list-inside mt-4 space-y-1">
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      ) : null}
    </motion.div>
  );
}
