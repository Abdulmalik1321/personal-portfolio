"use client";

import type { CSSProperties } from "react";

import { segmentOrder, type SegmentId } from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/useReveal";

import { LineText } from "./LineText";
import { SectionHeader } from "./primitives";

const head: Record<SegmentId, string> = {
  finance: "bg-finance text-white",
  engineering: "bg-eng text-white",
  ai: "bg-ai text-ink",
  delivery: "bg-ink text-white",
};

const bullet: Record<SegmentId, string> = {
  finance: "bg-finance",
  engineering: "bg-eng",
  ai: "bg-ai",
  delivery: "bg-ink",
};

export function Expertise() {
  const { t } = useLanguage();
  const expertise = t.expertise;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="py-16 lg:py-28">
      <div className="shell" ref={ref}>
        <SectionHeader id="expertise-title" number="03" title={expertise.title} intro={expertise.intro} />

        <div className="grid gap-px border-[1.5px] border-ink bg-ink sm:grid-cols-2 xl:grid-cols-4 xl:grid-rows-[auto_1fr_auto]">
          {segmentOrder.map((segment, index) => {
            const block = expertise.segments[segment];
            return (
              <article
                key={segment}
                className="post flex flex-col bg-white xl:row-span-3 xl:grid xl:grid-rows-subgrid xl:gap-0"
                style={{ "--i": index } as CSSProperties}
                aria-labelledby={`segment-${segment}`}
              >
                <header className={cn("px-5 pb-6 pt-4", head[segment])}>
                  <p className="tabular text-sm font-semibold">3.{index + 1}</p>
                  <h3 id={`segment-${segment}`} className="wide mt-8 text-[1.5rem] font-bold leading-tight">
                    {t.segmentNames[segment]}
                  </h3>
                  <p className="mt-2 text-[1rem] font-medium leading-snug">{block.statement}</p>
                </header>
                <ul className="flex-1 px-5 py-5">
                  {block.items.map((item) => (
                    <li key={item.text} className="flex gap-3 border-b border-rule py-2.5 text-[0.98rem] leading-snug last:border-b-0">
                      <span aria-hidden="true" className={cn("mt-[0.45em] size-1.5 shrink-0", bullet[segment])} />
                      <span>
                        <LineText line={item} />
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-rule px-5 py-4 text-sm text-ink-2">
                  <span className="block font-semibold text-ink">{expertise.toolsLabel}</span>
                  <span className="mt-1 block">{block.tools}</span>
                </p>
              </article>
            );
          })}
        </div>

        <aside
          aria-labelledby="method-title"
          className="post mt-10 grid gap-3 border-s-4 border-ai ps-5 lg:mt-14 lg:grid-cols-12 lg:gap-6 lg:ps-0 lg:border-s-0"
        >
          <h3 id="method-title" className="wide text-[1.25rem] font-bold leading-tight lg:col-span-4 lg:border-s-4 lg:border-ai lg:ps-5">
            {expertise.methodTitle}
          </h3>
          <p className="max-w-3xl text-[1.08rem] text-ink-2 lg:col-span-8">{expertise.method}</p>
        </aside>
      </div>
    </section>
  );
}
