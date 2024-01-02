import { Container } from "inversify";
import { LOCAL_REPOSITORY_REGISTRY } from "./local.registry";
import { PortfolioLocalRepository } from "./portfolio/portfolio.repository";

export const LOCAL_REPOSITORY_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});

LOCAL_REPOSITORY_MODULE.bind(LOCAL_REPOSITORY_REGISTRY.PORTFOLIO).to(
  PortfolioLocalRepository,
);
