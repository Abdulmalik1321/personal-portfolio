"use client";

import AnimatedCharacters from "@/aimations/text-animation";
import { BackgroundGradientAnimation } from "@/shadcn/ui/background-gradient-animation";
import { Button } from "@/shadcn/ui/button";
import { easeInOut, motion } from "framer-motion";
import {
  BarChart3,
  Braces,
  Calculator,
  Code2,
  Database,
  FileUserIcon,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const chartBars = ["35%", "55%", "45%", "70%", "60%", "85%", "100%"];

const floatingChips = [
  {
    icon: Code2,
    label: "React.js",
    className: "-top-4 -left-4 md:-left-10",
    delay: 4.6,
  },
  {
    icon: Database,
    label: "SAP S/4HANA",
    className: "top-1/3 -right-6 md:-right-12",
    delay: 4.8,
  },
  {
    icon: Braces,
    label: "Python",
    className: "-bottom-5 left-2 md:-left-8",
    delay: 5,
  },
  {
    icon: Calculator,
    label: "Accounting",
    className: "-bottom-4 -right-3 md:-right-10",
    delay: 5.2,
  },
];

export function Hero() {
  const { t, lang } = useLanguage();

  const placeholderText: { type: "span1" | "span2"; text: string }[] = [
    { type: "span1", text: t.hero.name },
    { type: "span2", text: t.hero.title },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 2,
      },
    },
  };

  function scrollToContact() {
    document.getElementById("ContactUs")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col md:flex-row md:items-center gap-10 md:gap-0 px-6 pt-28 pb-12 md:p-12 relative overflow-hidden"
    >
      <BackgroundGradientAnimation />

      <div className="relative z-10 w-full md:w-1/2">
        <motion.div
          className="w-full"
          initial="hidden"
          animate={"visible"}
          variants={container}
        >
          <h1 className="leading-tight md:!leading-tight">
            {placeholderText.map((item, index) => {
              return <AnimatedCharacters {...item} key={`${lang}-${index}`} />;
            })}
          </h1>
          <motion.p
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 3.5,
              ease: easeInOut,
            }}
            className="text-secondary-foreground text-sm md:text-lg md:w-[90%] mt-5"
          >
            {t.hero.intro}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 mt-6"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.5,
            delay: 3.75,
            ease: easeInOut,
          }}
        >
          <a href="/Abdulmalik_Almasud_CV.pdf" download>
            <Button className="gap-2">
              <FileUserIcon className="h-4 w-4" />
              {t.hero.downloadCV}
            </Button>
          </a>

          <Button
            variant="secondary"
            className="gap-2"
            onClick={scrollToContact}
          >
            <MessageCircle className="h-4 w-4" />
            {t.hero.contactMe}
          </Button>
        </motion.div>
      </div>

      <div
        dir="ltr"
        className="relative z-10 flex items-center justify-center w-full md:w-1/2 mt-4 md:mt-0"
      >
        <motion.div
          className="relative w-[78%] max-w-[400px]"
          initial={{ opacity: 0, translateY: 40, rotate: -3 }}
          animate={{ opacity: 1, translateY: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 4.25, ease: easeInOut }}
        >
          <div className="floating rounded-2xl border border-gray-800 bg-background-op backdrop-blur-xl p-5 shadow-2xl">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="size-3 rounded-full bg-red-400/80" />
              <span className="size-3 rounded-full bg-yellow-400/80" />
              <span className="size-3 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs text-slate-400">portfolio.tsx</span>
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <div className="flex gap-2 items-center">
                <span className="h-2.5 w-10 rounded bg-purple-400/70" />
                <span className="h-2.5 w-20 rounded bg-blue-400/60" />
                <span className="h-2.5 w-8 rounded bg-slate-500/50" />
              </div>
              <div className="flex gap-2 items-center pl-4">
                <span className="h-2.5 w-14 rounded bg-cyan-400/70" />
                <span className="h-2.5 w-24 rounded bg-slate-500/40" />
              </div>
              <div className="flex gap-2 items-center pl-4">
                <span className="h-2.5 w-16 rounded bg-emerald-400/60" />
                <span className="h-2.5 w-12 rounded bg-slate-500/40" />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-white/90">
                  Performance
                </span>
                <BarChart3 className="h-4 w-4 text-white/80" />
              </div>
              <div className="flex items-end justify-between gap-1.5 h-20">
                {chartBars.map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height }}
                    transition={{
                      duration: 0.6,
                      delay: 4.75 + index * 0.08,
                      ease: easeInOut,
                    }}
                    className="w-full rounded-t-md bg-white/90"
                  />
                ))}
              </div>
            </div>
          </div>

          {floatingChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: chip.delay, ease: easeInOut }}
                className={`absolute ${chip.className} floating flex items-center gap-2 rounded-xl border border-gray-700 bg-[#191825]/90 backdrop-blur px-3 py-2 shadow-lg`}
              >
                <Icon className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-medium text-white whitespace-nowrap">
                  {chip.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
