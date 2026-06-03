"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function ContactUs() {
  const { t } = useLanguage();
  const c = t.contact;

  const socials = [
    {
      label: c.whatsapp,
      href: "https://wa.me/966538495575",
      icon: MessageCircle,
    },
    {
      label: c.email,
      href: "mailto:MLK1321.AA@GMAIL.COM",
      icon: Mail,
    },
    {
      label: c.linkedin,
      href: "https://www.linkedin.com/in/abdulmalik-almasud/",
      icon: Linkedin,
    },
    {
      label: c.github,
      href: "https://github.com/Abdulmalik1321",
      icon: Github,
    },
  ];

  return (
    <section
      id="ContactUs"
      className="w-full flex flex-col md:flex-row md:items-center gap-10 md:gap-16 justify-center p-6 pt-28 pb-20 md:p-12 relative"
    >
      <div className="w-full md:w-[40vw] flex flex-col gap-5">
        <h2 className="text-2xl md:text-4xl font-bold">
          {c.titleLine1}
          <br />
          {c.titleLine2}
        </h2>
        <p className="text-secondary-foreground md:text-lg">{c.paragraph}</p>

        <div>
          <p className="font-bold mb-2">{c.whatIBring}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
            {c.benefits.map((benefit) => (
              <p key={benefit} className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                {benefit}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-[33vw] relative shadow-xl bg-background-op backdrop-blur-3xl border border-gray-800 px-5 md:px-8 py-8 overflow-hidden rounded-2xl">
        <img
          src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 z-0 invert size-[175%] object-cover opacity-[2%] pointer-events-none"
        />
        <div className="relative z-10 flex flex-col gap-4">
          <p className="font-bold text-xl md:text-2xl text-white">
            {c.getInTouch}
          </p>
          <p className="text-secondary-foreground text-sm md:text-base">
            {c.getInTouchDesc}
          </p>

          <div className="flex flex-col gap-3 mt-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-gray-800 bg-white/5 px-4 py-3 text-base md:text-lg text-white transition-colors hover:bg-white/10"
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
