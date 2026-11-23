"use client";

import { ArrowDown, Download } from "lucide-react";

import { contactLinks } from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";

import { CareerChart } from "./CareerChart";
import { Swatch } from "./primitives";

export function Cover() {
  const { t, lang } = useLanguage();
  const [first, ...rest] = t.cover.name.split(" ");

  return (
    <section id="cover" aria-labelledby="cover-name" className="pb-16 pt-6 lg:pb-24 lg:pt-8">
      <div className="shell">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b-2 border-ink pb-3 text-sm font-medium">
          <p className="flex items-baseline gap-4">
            <span className="tabular font-semibold text-ink-2">01</span>
            {t.cover.kicker}
          </p>
          <p className="text-ink-2">{t.cover.location}</p>
        </div>

        <div className="mt-8 grid gap-x-10 gap-y-8 lg:mt-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 id="cover-name" className="cover-name">
              <span className="block">{first}</span>
              <span className="block">{rest.join(" ")}</span>
            </h1>
            <p lang={lang === "en" ? "ar" : "en"} className="mt-4 text-lg font-medium text-ink-2">
              {t.cover.otherName}
            </p>
          </div>

          <div className="flex flex-col lg:col-span-5 lg:pt-2">
            <p className="cover-headline">{t.cover.headline}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] font-semibold">
              {t.cover.disciplines.map((discipline) => (
                <li key={discipline.label} className="flex items-center gap-2">
                  <Swatch segment={discipline.segment} />
                  <span dir="auto">{discipline.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-xl text-ink-2">{t.cover.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={contactLinks.cv} download className="btn btn-solid">
                <Download className="size-4" aria-hidden="true" />
                {t.cover.ctaPrimary}
              </a>
              <a href="#contact" className="btn btn-line">
                {t.cover.ctaSecondary}
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <CareerChart />
      </div>
    </section>
  );
}
