import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { ServicesAboutUs } from "@/components/ServicesAboutUs";

export function Home() {
  return (
    <main className="  h-screen flex-grow z-0 ">
      <NavBar />

      <Hero />

      <ServicesAboutUs />
    </main>
  );
}
