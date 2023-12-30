import { ServicesContainer } from "./container/container.component";
import { Footnote } from "./footnote/footnote.component";
import { ServicesHeader } from "./header/header.component";

export const ServicesOverview = () => (
  <ServicesContainer>
    <Footnote />
    <ServicesHeader />
  </ServicesContainer>
);
