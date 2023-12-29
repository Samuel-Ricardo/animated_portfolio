import "./container.style.scss";

import { PropsWithChildren } from "react";

export const HeroContainer = ({ children }: PropsWithChildren) => (
  <section id="hero">{children}</section>
);
