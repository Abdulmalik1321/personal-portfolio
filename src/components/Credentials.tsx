"use client";

import type { CSSProperties } from "react";

import type { Credential } from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/useReveal";

import { NoteMarker } from "./notes/NoteMarker";
import { SectionHeader } from "./primitives";

export function Credentials() {
  const { t } = useLanguage();
  const credentials = t.credentials;
  const { education, languages, development, certifications } = credentials.groups;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="credentials" aria-labelledby="credentials-title" tabIndex={-1} className="py-16 lg:py-28">
      <div className="shell" ref={ref}>
        <SectionHeader id="credentials-title" number="06" title={credentials.title} intro={credentials.intro} />

        <div className="grid gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-5">
            <Group title={education.title} items={education.items} index={0} />
            <Group title={languages.title} items={languages.items} index={1} compact />
          </div>
          <div className="space-y-14 lg:col-span-7">
            <Group title={development.title} items={development.items} index={2} />
            <Group title={certifications.title} items={certifications.items} index={3} compact />
          </div>
        </div>
      </div>
    </section>
  );
}

function Group({
  title,
  items,
  index,
  compact = false,
}: {
  title: string;
  items: Credential[];
  index: number;
  compact?: boolean;
}) {
  return (
    <div className="post" style={{ "--i": index } as CSSProperties}>
      <h3 className="flex items-baseline gap-4 border-b-[1.5px] border-ink pb-2 text-[1.05rem] font-bold">
        <span className="tabular text-sm text-ink-3">6.{index + 1}</span>
        {title}
      </h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.name}
            className={cn(
              "border-b border-rule",
              compact ? "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3" : "py-4",
            )}
          >
            <p className={cn("font-semibold leading-snug", compact ? "text-[1rem]" : "text-[1.15rem]")}>
              {item.name}
              {item.note ? <NoteMarker id={item.note} /> : null}
            </p>
            {item.org ? <p className="mt-1 text-[0.98rem] text-ink-2">{item.org}</p> : null}
            {item.detail ? (
              <p className={cn("tabular text-[0.92rem] font-semibold", compact ? "text-ink-2" : "mt-1")}>{item.detail}</p>
            ) : null}
            {item.description ? <p className="mt-2 max-w-2xl text-[0.98rem] text-ink-2">{item.description}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
