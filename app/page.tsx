import { Contact } from "@/components/Contact";
import { Cover } from "@/components/Cover";
import { Credentials } from "@/components/Credentials";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { KeyFigures } from "@/components/KeyFigures";
import { Masthead } from "@/components/Masthead";
import { NotesProvider } from "@/components/notes/NotesProvider";
import { Products } from "@/components/Products";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <NotesProvider>
        <Masthead />
        <main id="main" tabIndex={-1}>
          <Cover />
          <KeyFigures />
          <Expertise />
          <Products />
          <Experience />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </NotesProvider>
    </LanguageProvider>
  );
}
