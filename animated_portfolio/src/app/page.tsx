import { Cursor } from "@/components/cursor/cursor.component";
import { Hero } from "./section/hero.section";
import { Services } from "./section/services.section";
import { Portfolio } from "./section/portfolio.section";
import { Contact } from "./section/contact.section";

export default function Home() {
  return (
    <main>
      <Cursor />
      <section id="Homepage">
        <Hero />
      </section>
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
