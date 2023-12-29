import { HeroBackground } from "@/components/hero/background/text.component";
import { HeroContainer } from "@/components/hero/container/container.component";
import { HeroImage } from "@/components/hero/image/image.component";
import { HeroIntro } from "@/components/hero/intro/intro.component";

export const Hero = () => (
  <HeroContainer>
    <HeroIntro />
    <HeroBackground />
    <HeroImage />
  </HeroContainer>
);
