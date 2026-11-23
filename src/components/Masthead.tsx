"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { contactLinks, sectionOrder, type SectionId } from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

import { BrandMark } from "./primitives";

export function Masthead() {
  const { t, lang, toggleLang } = useLanguage();
  const [active, setActive] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["cover", ...sectionOrder.map((section) => section.id)];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          setActive(id === "cover" ? null : (id as SectionId));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-white transition-colors duration-200",
        scrolled || open ? "border-ink" : "border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        {t.nav.skip}
      </a>
      <div className="shell flex h-16 items-center gap-4">
        <a href="#cover" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark className="size-6 shrink-0" />
          <span className="wide truncate text-[1.02rem] font-bold tracking-[-0.01em]">{t.cover.name}</span>
          <span lang={lang === "en" ? "ar" : "en"} className="hidden text-sm text-ink-2 3xl:inline">
            {t.cover.otherName}
          </span>
        </a>

        <nav aria-label={t.nav.contents} className="ms-auto hidden xl:block">
          <ol className="flex items-center">
            {sectionOrder.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className="relative flex items-baseline gap-1.5 px-2.5 py-2 text-[0.9rem] font-medium transition-colors hover:text-eng"
                  >
                    <span className="tabular text-[0.72rem] font-semibold text-ink-3">{section.number}</span>
                    {t.nav.sections[section.id]}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-2.5 -bottom-[13px] h-[3px] bg-ink transition-transform duration-300 ltr:origin-left rtl:origin-right",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="ms-auto flex shrink-0 items-center gap-2 xl:ms-2">
          <button
            type="button"
            onClick={toggleLang}
            lang={lang === "en" ? "ar" : "en"}
            aria-label={t.nav.switchLanguageLabel}
            className="h-10 px-3 text-[0.95rem] font-semibold transition-colors hover:bg-stock"
          >
            {t.nav.switchLanguage}
          </button>
          <a href={contactLinks.cv} download className="btn btn-line hidden h-10 px-4 sm:inline-flex">
            <Download className="size-4" aria-hidden="true" />
            {t.nav.cv}
          </a>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 border-[1.5px] border-ink px-3 text-[0.95rem] font-semibold xl:hidden"
            aria-expanded={open}
            aria-controls="contents-panel"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            {t.nav.contents}
          </button>
        </div>
      </div>

      {open ? (
        <div id="contents-panel" className="border-t border-rule bg-white xl:hidden">
          <nav aria-label={t.nav.contents} className="shell pb-6 pt-2">
            <ol className="grid sm:grid-cols-2 sm:gap-x-10">
              {sectionOrder.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-rule py-3.5 text-[1.15rem] font-semibold"
                  >
                    <span className="tabular w-6 text-sm text-ink-3">{section.number}</span>
                    {t.nav.sections[section.id]}
                  </a>
                </li>
              ))}
            </ol>
            <a href={contactLinks.cv} download className="btn btn-solid mt-6 w-full sm:hidden">
              <Download className="size-4" aria-hidden="true" />
              {t.cover.ctaPrimary}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
