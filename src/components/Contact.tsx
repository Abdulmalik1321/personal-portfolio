"use client";

import { ArrowUpRight, Download } from "lucide-react";

import { contactLinks } from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";

import { SectionHeader } from "./primitives";

export function Contact() {
  const { t } = useLanguage();
  const contact = t.contact;
  const rows = contact.rows;

  const items = [
    { label: rows.phone, value: contactLinks.phoneDisplay, href: contactLinks.phoneHref, ltr: true },
    { label: rows.whatsapp.label, value: rows.whatsapp.value, href: contactLinks.whatsapp, external: true },
    { label: rows.linkedin, value: contactLinks.linkedinDisplay, href: contactLinks.linkedin, external: true, ltr: true },
    { label: rows.github, value: contactLinks.githubDisplay, href: contactLinks.github, external: true, ltr: true },
    { label: rows.cv.label, value: rows.cv.value, href: contactLinks.cv, download: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ai py-16 text-ink lg:py-24">
      <div className="shell">
        <SectionHeader id="contact-title" number="07" title={contact.title} intro={contact.intro} tone="accent" />

        <p className="max-w-3xl text-[1.35rem] font-semibold leading-snug lg:text-[1.6rem]">{contact.lead}</p>

        <p className="mt-10 text-sm font-bold">{contact.emailLabel}</p>
        <a
          href={`mailto:${contactLinks.email}`}
          dir="ltr"
          className="contact-email mt-2 inline-block underline decoration-[3px] underline-offset-[0.14em] transition-colors hover:text-eng-deep"
        >
          {contactLinks.email}
        </a>

        <dl className="mt-14 grid border-t-[1.5px] border-ink sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.label} className="border-b border-ink/40 py-4 sm:pe-6">
              <dt className="text-sm font-bold">{item.label}</dt>
              <dd className="mt-1">
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(item.download ? { download: true } : {})}
                  className="inline-flex min-h-10 items-center gap-1.5 text-[1.15rem] font-semibold underline decoration-[1.5px] underline-offset-4 hover:decoration-[3px]"
                >
                  <span dir={item.ltr ? "ltr" : undefined}>{item.value}</span>
                  {item.download ? (
                    <Download className="size-4" aria-hidden="true" />
                  ) : item.external ? (
                    <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
                  ) : null}
                </a>
              </dd>
            </div>
          ))}
          <div className="border-b border-ink/40 py-4">
            <dt className="text-sm font-bold">{rows.location.label}</dt>
            <dd className="mt-1 flex min-h-10 items-center text-[1.15rem] font-semibold">{rows.location.value}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
