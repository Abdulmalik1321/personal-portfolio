import { ContactUs } from "@/components/ContactUs";
import { Credentials } from "@/components/Credentials";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { ServicesAboutUs } from "@/components/ServicesAboutUs";

export default function Home() {
  return (
    <main className="relative flex-grow z-0">
      <NavBar />
      <Hero />
      <ServicesAboutUs />
      <Credentials />
      <ContactUs />
    </main>
  );
}
