import { Container } from "inversify";
import { PORTFOLIO_REGISTRY } from "./portfolio.registry";
import { PortfolioController } from "./controller/portfolio.controller";

export const PORTFOLIO_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});

PORTFOLIO_MODULE.bind(PORTFOLIO_REGISTRY.MAIN).to(PortfolioController);
PORTFOLIO_MODULE.bind(PORTFOLIO_REGISTRY.CONTROLLER).to(PortfolioController);
