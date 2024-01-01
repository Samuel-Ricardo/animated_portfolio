import { Container } from "inversify";
import { PORTFOLIO_REGISTRY } from "./portfolio.registry";
import { PortfolioController } from "./controller/portfolio.controller";
import { PortfolioService } from "./service/portfolio.service";
import { SelectAllPortfoliosUseCase } from "./use_case/select/all.use_case";

export const PORTFOLIO_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});

PORTFOLIO_MODULE.bind(PORTFOLIO_REGISTRY.MAIN).to(PortfolioController);
PORTFOLIO_MODULE.bind(PORTFOLIO_REGISTRY.CONTROLLER).to(PortfolioController);
PORTFOLIO_MODULE.bind(PORTFOLIO_REGISTRY.SERVICE).to(PortfolioService);

PORTFOLIO_MODULE.bind(PORTFOLIO_REGISTRY.USE_CASE.SELECT.ALL).to(
  SelectAllPortfoliosUseCase,
);
