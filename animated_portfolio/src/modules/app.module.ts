import { Container } from "inversify";
import { ANIMATION_MODULE } from "./animations/animation.module";
import { PORTFOLIO_MODULE } from "./@core/portfolio/portfolio.module";

const MODULE = new Container({ autoBindInjectable: true });

export const APP_MODULE = Container.merge(
  MODULE,
  ANIMATION_MODULE,
  PORTFOLIO_MODULE,
);
