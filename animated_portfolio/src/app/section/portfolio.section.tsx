import { Parallax } from "@/components/parallax/parallax.component";
import { PortfolioOverview } from "@/components/portfolio/portfolio.component";

export const Portfolio = () => {
  return (
    <>
      <section id="Portfolio">
        <Parallax title="What We Did" theme="secondary" />
      </section>
      <PortfolioOverview />
    </>
  );
};
