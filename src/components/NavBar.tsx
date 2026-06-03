"use client";

import { Logo } from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";
import { Button } from "@/shadcn/ui/button";
import { Languages, Menu } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function NavBar() {
  const { t, toggleLang } = useLanguage();

  const links = [
    { id: "hero", label: t.nav.home },
    { id: "about-us", label: t.nav.experience },
    { id: "credentials", label: t.nav.education },
    { id: "ContactUs", label: t.nav.contact },
  ];

  function scrollToElement(elementId: string) {
    const targetElement = document.getElementById(elementId);
    targetElement?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between w-full px-6 py-4 md:px-12 md:py-6 z-40 bg-gradient-to-b from-background to-transparent">
      <button
        type="button"
        onClick={() => scrollToElement("hero")}
        aria-label="Go to top"
      >
        <Logo />
      </button>

      <div className="hidden items-center gap-2 md:flex">
        {links.map((link) => (
          <Button
            key={link.id}
            variant="link"
            className="text-base lg:text-lg text-white"
            onClick={() => scrollToElement(link.id)}
          >
            {link.label}
          </Button>
        ))}
        <Button
          variant="outline"
          className="gap-2"
          onClick={toggleLang}
          aria-label="Switch language"
        >
          <Languages className="h-4 w-4" />
          {t.nav.switchLanguage}
        </Button>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleLang}
          aria-label="Switch language"
        >
          <Languages className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {links.map((link) => (
              <DropdownMenuItem
                key={link.id}
                onClick={() => scrollToElement(link.id)}
              >
                {link.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
