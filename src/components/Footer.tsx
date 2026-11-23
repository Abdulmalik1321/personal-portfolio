"use client";

import { ArrowUp } from "lucide-react";

import { AS_OF, contactLinks } from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";

import { BrandMark } from "./primitives";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white py-8">
      <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-sm">
        <p className="flex items-center gap-3 font-semibold">
          <BrandMark className="size-5" />
          <span>
            © {Math.floor(AS_OF)} {t.footer.rights}
          </span>
        </p>
        <a href={contactLinks.site} className="text-ink-2 hover:text-ink" dir="ltr">
          abdulmalik.al-masud.com
        </a>
        <a href="#cover" className="inline-flex min-h-10 items-center gap-1.5 font-semibold hover:text-eng">
          {t.footer.backToTop}
          <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
