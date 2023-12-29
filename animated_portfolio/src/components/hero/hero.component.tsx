import { HeroBackground } from "./background/text.component";
import { HeroContainer } from "./container/container.component";
import { HeroImage } from "./image/image.component";
import { HeroIntro } from "./intro/intro.component";

export const Hero = () => (
  <HeroContainer>
    <HeroIntro />
    <HeroBackground />
    <HeroImage />
  </HeroContainer>
);
