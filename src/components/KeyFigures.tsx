"use client";

import type { CSSProperties } from "react";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useReveal } from "@/lib/useReveal";

import { NoteMarker } from "./notes/NoteMarker";
import { SectionHeader } from "./primitives";

export function KeyFigures() {
  const { t } = useLanguage();
  const figures = t.figures;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="figures" aria-labelledby="figures-title" className="bg-finance py-16 text-white lg:py-24">
      <div className="shell" ref={ref}>
        <SectionHeader id="figures-title" number="02" title={figures.title} intro={figures.intro} tone="inverse" />

        <div className="post grid gap-6 lg:grid-cols-12 lg:items-end">
          <p className="figure-lead tabular lg:col-span-8">
            {figures.lead.prefix ? <span className="figure-unit me-[0.12em]">{figures.lead.prefix}</span> : null}
            <span dir="ltr" className="inline-block">
              {figures.lead.value}
            </span>
            {figures.lead.suffix ? <span className="figure-unit ms-[0.12em]">{figures.lead.suffix}</span> : null}
          </p>
          <div className="max-w-md lg:col-span-4 lg:pb-3">
            <p className="text-[1.3rem] font-semibold leading-snug">
              {figures.lead.label}
              <NoteMarker id="sar50k" tone="inverse" />
            </p>
            <p className="mt-2 text-finance-mist">{figures.lead.context}</p>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 border-t-[1.5px] border-white sm:grid-cols-3 lg:mt-20 lg:grid-cols-5">
          {figures.items.map((item, index) => (
            <li
              key={item.note}
              className="post border-b border-white/40 py-6 pe-5 lg:border-b-0 lg:border-e lg:px-5 lg:first:ps-0 lg:last:border-e-0"
              style={{ "--i": index + 1 } as CSSProperties}
            >
              <p className="wide tabular text-[2.6rem] font-bold leading-none tracking-[-0.03em] lg:text-[3.1rem]">
                <span dir="ltr" className="inline-block">
                  {item.value}
                </span>
                <NoteMarker id={item.note} tone="inverse" />
              </p>
              <p className="mt-3 text-[0.95rem] leading-snug text-finance-mist">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
