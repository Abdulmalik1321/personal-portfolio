"use client";

import {
  easeInOut,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MousePointerClick, MoveRight, Sparkles } from "lucide-react";
import AnimatedCharactersServices from "@/aimations/text-animation-services";
import { ServiceCard } from "./ServiceCard";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/i18n/LanguageProvider";

export function ServicesAboutUs() {
  const { t, lang } = useLanguage();
  const targetRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const services = useRef(null);
  const services2 = useRef(null);
  const isInView = useInView(services);
  const isInView2 = useInView(services2);
  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Measure the actual width of the scrolling row so every card is reachable
  // on any screen size (instead of a hardcoded percentage).
  useEffect(() => {
    function measure() {
      if (rowRef.current) {
        const distance = rowRef.current.scrollWidth - window.innerWidth;
        setScrollRange(distance > 0 ? distance : 0);
      }
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [lang]);

  const x = useTransform(
    useSpring(scrollYProgress, { stiffness: 1000, damping: 100 }),
    [0, 1],
    [0, -scrollRange],
  );

  const placeholderText = [{ type: "span" as const, text: t.sections.blend }];
  const placeholderText2 = [
    { type: "span" as const, text: t.sections.objectiveText },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 2,
      },
    },
  };

  return (
    <section id="about-us" ref={targetRef} className="relative h-[500vh]">
      <div
        dir="ltr"
        className="sticky top-0 h-screen w-full flex flex-col items-start justify-start p-6 pt-24 md:p-12 md:pt-32 overflow-hidden"
      >
        <motion.p
          key={isInView ? "inView" : "notInView"}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.01,
            ease: easeInOut,
          }}
          className="text-3xl md:text-5xl font-bold text-center w-full mb-10"
        >
          {isInView2
            ? t.sections.objective
            : isInView
              ? t.sections.experience
              : "\xa0"}
        </motion.p>
        <motion.div
          dir="ltr"
          ref={rowRef}
          style={{ x }}
          className="flex items-center h-[75%] will-change-transform"
        >
          <div className="w-[100vw] md:w-[100vw] flex justify-center items-center shrink-0 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="flex flex-col items-center gap-5 text-cyan-400"
            >
              <div className="floating2 flex size-24 md:size-32 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10">
                <Sparkles className="size-12 md:size-16" />
              </div>
              <div className="flex items-center gap-3 text-white">
                <MousePointerClick className="size-6 md:size-8 text-cyan-400" />
                <MoveRight className="size-10 md:size-14 floating2 text-cyan-400" />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate={"visible"}
            variants={container}
            ref={services2}
            className="mr-[40vw] shrink-0"
          >
            <p
              dir={lang === "ar" ? "rtl" : "ltr"}
              className="text-2xl md:text-4xl 3xl:text-5xl 3xl:leading-normal text-center w-[85vw] md:w-[50vw]"
            >
              {placeholderText2.map((item, index) => {
                return (
                  <AnimatedCharactersServices
                    {...item}
                    key={`${lang}-${index}`}
                  />
                );
              })}
            </p>
          </motion.div>
          <div
            ref={services}
            className="flex items-center gap-12 md:gap-24 mr-20"
          >
            <motion.div
              initial="hidden"
              animate={"visible"}
              variants={container}
              className="shrink-0 md:w-screen"
            >
              <p
                dir={lang === "ar" ? "rtl" : "ltr"}
                className="text-2xl md:text-4xl 3xl:text-5xl 3xl:leading-normal w-[80vw] md:w-auto md:whitespace-nowrap"
              >
                {placeholderText.map((item, index) => {
                  return (
                    <AnimatedCharactersServices
                      {...item}
                      key={`${lang}-${index}`}
                    />
                  );
                })}
              </p>
            </motion.div>

            {experiences.map((data, index) => {
              const content = data[lang];
              return (
                <ServiceCard
                  key={index}
                  title={content.title}
                  img={data.img}
                  jobTitle={content.jobTitle}
                  date={content.date}
                  description={content.description}
                  items={content.items}
                  link={data.link}
                  dir={lang === "ar" ? "rtl" : "ltr"}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
