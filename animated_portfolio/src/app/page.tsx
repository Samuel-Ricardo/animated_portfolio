import { Cursor } from "@/components/cursor/cursor.component";
import { Hero } from "./section/hero.section";
import { Services } from "./section/services.section";

export default function Home() {
  return (
    <main>
      <Cursor />
      <section id="Homepage">
        <Hero />
      </section>
      <Services />
      <section id="Portfolio">Portfolio</section>
      <section id="Contact">Contact</section>
    </main>
  );
}
