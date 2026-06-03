"use client";

import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Languages as LanguagesIcon,
  Wrench,
} from "lucide-react";
import { Badge } from "@/shadcn/ui/badge";
import { useLanguage } from "@/i18n/LanguageProvider";

const cardClass =
  "relative shadow-xl bg-background-op backdrop-blur-3xl border border-gray-800 rounded-2xl p-6 md:p-8 overflow-hidden";

export function Credentials() {
  const { t } = useLanguage();
  const c = t.credentials;

  const languages = [
    { name: c.arabic, level: c.arabicLevel, value: 100 },
    { name: c.english, level: c.englishLevel, value: 75 },
  ];

  return (
    <section id="credentials" className="w-full px-6 py-20 md:p-12 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-3xl md:text-5xl font-bold text-center w-full mb-12"
      >
        {c.heading}
      </motion.h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cardClass}
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-6 w-6 text-cyan-400 shrink-0" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {c.educationTitle}
            </h3>
          </div>
          <p className="text-lg font-semibold">{c.degree}</p>
          <p className="text-secondary-foreground">{c.university}</p>
          <p className="text-sm text-slate-500 mt-1">{c.eduDate}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
          className={cardClass}
        >
          <div className="flex items-center gap-3 mb-4">
            <LanguagesIcon className="h-6 w-6 text-cyan-400 shrink-0" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {c.languagesTitle}
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {languages.map((language) => (
              <div key={language.name}>
                <div className="flex justify-between text-sm md:text-base mb-1">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-secondary-foreground">
                    {language.level}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width: `${language.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`${cardClass} md:col-span-2`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="h-6 w-6 text-cyan-400 shrink-0" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {c.skillsTitle}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {c.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs md:text-sm font-normal"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`${cardClass} md:col-span-2`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-6 w-6 text-cyan-400 shrink-0" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {c.certificatesTitle}
            </h3>
          </div>
          <ul className="flex flex-col gap-2">
            {c.certificates.map((cert) => (
              <li key={cert} className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                <span className="text-sm md:text-base">{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
