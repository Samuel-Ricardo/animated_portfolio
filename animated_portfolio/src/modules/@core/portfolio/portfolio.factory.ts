import { PortfolioController } from "./controller/portfolio.controller";
import { PORTFOLIO_MODULE } from "./portfolio.module";
import { PORTFOLIO_REGISTRY } from "./portfolio.registry";

export const PORTFOLIO_FACTORY = {
  MAIN: () =>
    PORTFOLIO_MODULE.get<PortfolioController>(PORTFOLIO_REGISTRY.MAIN),
  CONTROLLER: () =>
    PORTFOLIO_MODULE.get<PortfolioController>(PORTFOLIO_REGISTRY.CONTROLLER),
};
