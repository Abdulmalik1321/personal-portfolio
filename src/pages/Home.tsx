import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Services } from "@/components/Services";

export function Home() {
  return (
    <main className="  h-screen flex-grow z-0 ">
      <NavBar />

      <Hero />

      <Services />
      <Hero />
    </main>
  );
}
