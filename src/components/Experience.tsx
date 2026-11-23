"use client";

import { entryMeta, entryOrder, type EntryId } from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useReveal } from "@/lib/useReveal";

import { LineText } from "./LineText";
import { SectionHeader, Swatch } from "./primitives";

export function Experience() {
  const { t } = useLanguage();
  const experience = t.experience;

  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-stock py-16 lg:py-28">
      <div className="shell">
        <SectionHeader id="experience-title" number="05" title={experience.title} intro={experience.intro} />

        <div
          aria-hidden="true"
          className="hidden border-b-[1.5px] border-ink pb-2 text-sm font-bold text-ink-2 lg:grid lg:grid-cols-12 lg:gap-x-10"
        >
          <span className="lg:col-span-2">{experience.columns.period}</span>
          <span className="lg:col-span-4">{experience.columns.organisation}</span>
          <span className="lg:col-span-6">{experience.columns.contributions}</span>
        </div>

        <ol>
          {entryOrder.map((id) => (
            <Entry key={id} id={id} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Entry({ id }: { id: EntryId }) {
  const { t } = useLanguage();
  const entry = t.experience.entries[id];
  const ref = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      id={`exp-${id}`}
      tabIndex={-1}
      aria-labelledby={`exp-${id}-org`}
      className="border-b border-ink py-8 lg:py-10"
    >
      <div className="post grid gap-x-10 gap-y-4 lg:grid-cols-12">
        <p className="tabular text-[0.95rem] font-semibold lg:col-span-2">{entry.period}</p>
        <div className="lg:col-span-4">
          <h3 id={`exp-${id}-org`} className="wide text-[1.4rem] font-bold leading-tight">
            {entry.org}
          </h3>
          <p className="mt-1.5 text-[1.05rem] font-semibold text-ink-2">{entry.role}</p>
          <p className="mt-3 text-sm text-ink-2">{entry.context}</p>
          <ul aria-label={t.experience.segmentsLabel} className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[0.82rem] font-medium">
            {entryMeta[id].segments.map((segment) => (
              <li key={segment} className="flex items-center gap-2">
                <Swatch segment={segment} />
                {t.segmentNames[segment]}
              </li>
            ))}
          </ul>
        </div>
        <ul className="lg:col-span-6">
          {entry.items.map((item) => (
            <li key={item.text} className="border-b border-rule py-3 text-[1rem] leading-relaxed first:pt-0 last:border-b-0 lg:first:pt-0.5">
              <LineText line={item} />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
