"use client";

import type { CSSProperties } from "react";

import { AS_OF, AXIS, laneOrder, timeline, type LaneId, type TimelineShape } from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const SPAN = AXIS.end - AXIS.start;
const years = Array.from({ length: SPAN + 1 }, (_, index) => AXIS.start + index);

const pct = (year: number) => `${((year - AXIS.start) / SPAN) * 100}%`;
const endOf = (item: TimelineShape) => (item.end === "now" ? AS_OF : (item.end ?? item.start));
const delay = (item: TimelineShape) => `${Math.round((item.start - AXIS.start) * 110)}ms`;

const fill: Record<LaneId, string> = {
  finance: "bg-finance",
  engineering: "bg-eng",
  ai: "bg-ai",
};

const study: Record<LaneId, string> = {
  finance: "border-finance bg-finance-mist",
  engineering: "border-eng bg-eng-tint",
  ai: "border-ai bg-ai-tint",
};

const laneText: Record<LaneId, string> = {
  finance: "text-finance",
  engineering: "text-eng",
  ai: "text-ai-deep",
};

function Mark({ item, className }: { item: TimelineShape; className?: string }) {
  if (item.kind === "milestone") {
    return (
      <span
        aria-hidden="true"
        className={cn("block size-3 rotate-45 border-[1.5px] border-white outline outline-1 outline-ink", fill[item.lane], className)}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block h-2.5",
        item.kind === "work" ? fill[item.lane] : cn("border-[1.5px]", study[item.lane]),
        className,
      )}
    />
  );
}

export function CareerChart() {
  const { t } = useLanguage();
  const chart = t.chart;

  return (
    <figure className="mt-14 lg:mt-16" aria-labelledby="chart-title">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t-[1.5px] border-ink pt-3">
        <h2 id="chart-title" className="text-[1.05rem] font-bold">
          {chart.title}
        </h2>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.82rem] text-ink-2">
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="block h-2.5 w-6 bg-ink" />
            {chart.legend.work}
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="block h-2.5 w-6 border-[1.5px] border-ink bg-white" />
            {chart.legend.study}
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="block size-2.5 rotate-45 bg-ink" />
            {chart.legend.milestone}
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="block h-3.5 w-0 border-s-[1.5px] border-dashed border-ink" />
            {chart.legend.now}
          </li>
          <li className="font-semibold text-ink">{chart.asAt}</li>
        </ul>
      </figcaption>

      <div className="mt-4 hidden lg:block">
        <div className="flex">
          <div className="w-[8.5rem] shrink-0 xl:w-44" />
          <div className="relative h-6 flex-1 text-[0.75rem] font-semibold text-ink-3">
            {years.slice(0, -1).map((year) => (
              <span key={year} className="tabular absolute top-0 ps-1.5" style={{ insetInlineStart: pct(year) }}>
                {year}
              </span>
            ))}
            <span
              className="chart-mark absolute top-0 -translate-x-1/2 bg-white px-1 font-bold text-ink rtl:translate-x-1/2"
              style={{ insetInlineStart: pct(AS_OF), "--d": "1000ms" } as CSSProperties}
            >
              {chart.now}
            </span>
          </div>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 end-0 start-[8.5rem] xl:start-44">
            {years.map((year) => (
              <span
                key={year}
                className="absolute inset-y-0 border-s border-rule"
                style={{ insetInlineStart: pct(year) }}
              />
            ))}
            <span
              className="absolute inset-y-0 z-10 border-s-[1.5px] border-dashed border-ink"
              style={{ insetInlineStart: pct(AS_OF) }}
            />
          </div>

          {laneOrder.map((lane) => {
            const items = timeline.filter((item) => item.lane === lane);
            const rows = Math.max(...items.map((item) => item.row)) + 1;
            return (
              <div key={lane} className="relative flex border-t border-ink">
                <h3 className={cn("w-[8.5rem] shrink-0 pe-4 pt-2.5 text-[0.85rem] font-bold xl:w-44", laneText[lane])}>
                  {chart.lanes[lane]}
                </h3>
                <ul className="relative flex-1" style={{ height: `${rows * 2.5 + 0.75}rem` }}>
                  {items.map((item) => {
                    const start = item.start;
                    const end = endOf(item);
                    const label = chart.items[item.id];
                    const top = `${item.row * 2.5 + 0.5}rem`;
                    const style = { top, "--d": delay(item) } as CSSProperties;
                    if (item.kind === "milestone") {
                      return (
                        <li
                          key={item.id}
                          className="absolute"
                          style={{
                            ...style,
                            insetInlineStart: item.align === "end" ? undefined : pct(start),
                            insetInlineEnd: item.align === "end" ? `calc(100% - ${pct(start)})` : undefined,
                          }}
                        >
                          <span
                            className={cn(
                              "chart-label block whitespace-nowrap text-[0.8rem] font-semibold leading-5",
                              item.align === "end" ? "-me-1.5 text-end" : "-ms-1.5",
                            )}
                          >
                            {label.label}
                            <span className="sr-only">, {label.period}</span>
                          </span>
                          <span className={cn("chart-mark mt-1 flex", item.align === "end" ? "justify-end -me-1.5" : "-ms-1.5")}>
                            <Mark item={item} />
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li
                        key={item.id}
                        className="absolute"
                        style={{ ...style, insetInlineStart: pct(start), width: `calc(${pct(end)} - ${pct(start)})` }}
                      >
                        <span
                          className={cn(
                            "chart-label absolute top-0 block whitespace-nowrap text-[0.8rem] font-semibold leading-5",
                            item.align === "end" ? "end-0" : "start-0",
                          )}
                        >
                          <span dir="auto">{label.label}</span>
                          <span className="sr-only">, {label.period}</span>
                        </span>
                        <Mark item={item} className="chart-bar mt-6" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="border-t border-ink" />
        </div>
      </div>

      <div className="mt-5 lg:hidden">
        {laneOrder.map((lane) => {
          const items = timeline
            .filter((item) => item.lane === lane)
            .sort((a, b) => a.start - b.start);
          return (
            <div key={lane} className="border-t border-ink pb-2 pt-3">
              <h3 className={cn("text-[0.9rem] font-bold", laneText[lane])}>{chart.lanes[lane]}</h3>
              <ul className="mt-1">
                {items.map((item) => {
                  const end = endOf(item);
                  const label = chart.items[item.id];
                  return (
                    <li key={item.id} className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-rule py-2.5 last:border-b-0">
                      <span className="text-[0.95rem] font-semibold" dir="auto">
                        {label.label}
                      </span>
                      <span className="tabular text-[0.85rem] text-ink-2">{label.period}</span>
                      <span aria-hidden="true" className="relative col-span-2 mt-2 block h-2.5 bg-stock">
                        {item.kind === "milestone" ? (
                          <span className="absolute top-1/2 -translate-y-1/2" style={{ insetInlineStart: `calc(${pct(item.start)} - 5px)` }}>
                            <span className={cn("block size-2.5 rotate-45", fill[item.lane])} />
                          </span>
                        ) : (
                          <span
                            className="absolute inset-y-0"
                            style={{ insetInlineStart: pct(item.start), width: `max(4px, calc(${pct(end)} - ${pct(item.start)}))` }}
                          >
                            <Mark item={item} className="h-full" />
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <p className="tabular flex justify-between border-t border-ink pt-1.5 text-[0.75rem] font-semibold text-ink-3">
          <span>{AXIS.start}</span>
          <span>{AXIS.end}</span>
        </p>
      </div>
    </figure>
  );
}
