import { Parallax } from "@/components/parallax/parallax.component";
import { ServicesOverview } from "@/components/services/services.component";

export const Services = () => {
  return (
    <>
      <section id="Services">
        <Parallax title="What We Do?" theme="primary" />
      </section>
      <ServicesOverview />
    </>
  );
};
