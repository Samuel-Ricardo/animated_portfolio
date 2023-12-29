import { Cursor } from "@/components/cursor/cursor.component";
import { Hero } from "./section/hero.section";

export default function Home() {
  return (
    <main>
      <Cursor />
      <section id="Homepage">
        <Hero />
      </section>
      <section id="Services">Services</section>
      <section id="Portfolio">Portfolio</section>
      <section id="Contact">Contact</section>
    </main>
  );
}
