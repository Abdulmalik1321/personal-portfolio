"use client";

import { ArrowUpRight, Check } from "lucide-react";
import type { CSSProperties } from "react";

import {
  earlierBuild,
  productMeta,
  productOrder,
  type ProductId,
  type StatusKind,
  type SystemLayer,
} from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/useReveal";

import { SectionHeader, Swatch } from "./primitives";

const layers: SystemLayer[] = ["users", "app", "services", "external"];

const stamp: Record<StatusKind, string> = {
  live: "bg-finance",
  pilot: "bg-eng",
  prelaunch: "bg-ai",
};

export function Products() {
  const { t } = useLanguage();
  const products = t.products;

  return (
    <section id="products" aria-labelledby="products-title" tabIndex={-1} className="py-16 lg:py-28">
      <div className="shell">
        <SectionHeader id="products-title" number="04" title={products.title} intro={products.intro} />

        <div className="space-y-20 lg:space-y-28">
          {productOrder.map((id) => (
            <ProductNote key={id} id={id} />
          ))}
        </div>

        <EarlierBuild />
      </div>
    </section>
  );
}

function ProductNote({ id }: { id: ProductId }) {
  const { t, lang } = useLanguage();
  const labels = t.products.labels;
  const meta = productMeta[id];
  const product = t.products.items[id];
  const ref = useReveal<HTMLElement>();

  return (
    <article ref={ref} aria-labelledby={`product-${id}`} className="border-t-[1.5px] border-ink pt-5">
      <div className="post grid gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="tabular text-sm font-semibold text-ink-2">{meta.number}</p>
          <h3 id={`product-${id}`} className="product-title mt-3" lang="en">
            {meta.name}
          </h3>
          <p className="mt-4 text-[1.3rem] font-semibold leading-snug">
            {product.tagline}
            {meta.altName && lang === "en" ? (
              <span lang="ar" className="ms-3 text-ink-2">
                {meta.altName}
              </span>
            ) : null}
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end lg:pt-8">
          <p className="inline-flex items-center gap-3 self-start border-[1.5px] border-ink px-3.5 py-2 lg:self-end">
            <span aria-hidden="true" className={cn("size-3", stamp[meta.status])} />
            <span className="text-sm text-ink-2">{labels.status}</span>
            <span className="text-[0.95rem] font-bold">{product.status}</span>
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-ink-2 lg:justify-end">
            {meta.segments.map((segment) => (
              <li key={segment} className="flex items-center gap-2">
                <Swatch segment={segment} />
                {t.segmentNames[segment]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 grid gap-x-10 gap-y-12 lg:grid-cols-12">
        <div className="post space-y-8 lg:col-span-5" style={{ "--i": 1 } as CSSProperties}>
          <p className="text-[1.12rem] leading-relaxed">{product.summary}</p>
          <div>
            <h4 className="border-b border-ink pb-2 text-sm font-bold">{labels.role}</h4>
            <ul>
              {product.role.map((item) => (
                <li key={item} className="border-b border-rule py-2.5 text-[0.98rem] leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="post lg:col-span-7" style={{ "--i": 2 } as CSSProperties}>
          <Topology id={id} />
        </div>
      </div>

      <Schedule built={product.built} notBuilt={product.notBuilt} />
    </article>
  );
}

function Topology({ id }: { id: ProductId }) {
  const { t } = useLanguage();
  const labels = t.products.labels;
  const system = t.products.items[id].system;
  const hasAi = layers.some((layer) => system[layer].some((node) => node.ai));

  return (
    <figure aria-labelledby={`system-${id}`} className="border-[1.5px] border-ink bg-stock">
      <figcaption className="flex items-center justify-between gap-4 border-b-[1.5px] border-ink bg-white px-4 py-2.5">
        <span id={`system-${id}`} className="text-sm font-bold">
          {labels.system}
        </span>
        {hasAi ? (
          <span className="flex items-center gap-2 text-[0.8rem] font-medium text-ink-2">
            <span aria-hidden="true" className="block size-3 border-[1.5px] border-ai bg-ai-tint" />
            {labels.aiLegend}
          </span>
        ) : null}
      </figcaption>
      <ol className="px-4 py-4">
        {layers.map((layer, index) => (
          <li key={layer} className="relative grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
            <p className="pt-2 text-[0.78rem] font-bold text-ink-2">{labels.layers[layer]}</p>
            <div className="relative">
              <ul className="relative z-10 flex flex-wrap gap-2">
                {system[layer].map((node) => (
                  <li
                    key={node.name}
                    className={cn(
                      "min-w-[9.5rem] flex-1 border-[1.5px] px-3 py-2",
                      node.ai ? "border-ai bg-ai-tint" : "border-ink bg-white",
                    )}
                  >
                    <p className="text-[0.92rem] font-bold leading-snug" dir="auto">
                      {node.name}
                      {node.ai ? <span className="sr-only"> ({labels.aiLegend})</span> : null}
                    </p>
                    <p className="mt-0.5 text-[0.8rem] leading-snug text-ink-2">{node.detail}</p>
                  </li>
                ))}
              </ul>
              {index < layers.length - 1 ? (
                <span aria-hidden="true" className="mx-auto block h-5 w-[1.5px] bg-ink" />
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Schedule({ built, notBuilt }: { built: string[]; notBuilt: string[] }) {
  const { t } = useLanguage();
  const labels = t.products.labels;

  return (
    <div className="post mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2" style={{ "--i": 3 } as CSSProperties}>
      <div>
        <h4 className="flex items-baseline justify-between border-b-[1.5px] border-ink pb-2 text-sm font-bold">
          {labels.built}
          <span className="tabular text-ink-2">{built.length}</span>
        </h4>
        <ul>
          {built.map((item) => (
            <li key={item} className="flex items-start gap-3 border-b border-rule py-2.5 text-[0.98rem] leading-snug">
              <Check className="mt-0.5 size-4 shrink-0 text-finance" strokeWidth={2.5} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="flex items-baseline justify-between border-b-[1.5px] border-dashed border-ink-3 pb-2 text-sm font-bold text-ink-2">
          {labels.notBuilt}
          <span className="tabular">{notBuilt.length}</span>
        </h4>
        <ul className="mt-2 space-y-2">
          {notBuilt.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-[1.5px] border-dashed border-rule px-3 py-2 text-[0.98rem] leading-snug text-ink-2"
            >
              <span aria-hidden="true" className="mt-[0.3em] block size-3 shrink-0 border-[1.5px] border-dashed border-ink-3" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EarlierBuild() {
  const { t } = useLanguage();
  const earlier = t.products.earlier;

  return (
    <article
      aria-labelledby="earlier-build"
      className="mt-20 grid gap-x-10 gap-y-3 border-y border-ink py-6 lg:mt-28 lg:grid-cols-12 lg:items-baseline"
    >
      <p className="flex items-baseline gap-4 text-sm font-semibold text-ink-2 lg:col-span-2">
        <span className="tabular">{earlierBuild.number}</span>
        {earlier.kicker}
      </p>
      <h3 id="earlier-build" className="wide text-[1.6rem] font-bold leading-none lg:col-span-3">
        <span lang="en">{earlierBuild.name}</span>
        <span className="tabular ms-3 text-base font-semibold text-ink-3">{earlierBuild.year}</span>
      </h3>
      <p className="text-[0.98rem] text-ink-2 lg:col-span-5">{earlier.description}</p>
      <a
        href={earlierBuild.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-10 items-center gap-1.5 justify-self-start text-[0.95rem] font-semibold underline decoration-[1.5px] underline-offset-4 hover:text-eng lg:col-span-2 lg:justify-self-end"
      >
        {earlier.linkLabel}
        <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
      </a>
    </article>
  );
}
