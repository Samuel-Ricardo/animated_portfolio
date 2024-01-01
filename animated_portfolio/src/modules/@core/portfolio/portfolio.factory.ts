import { PortfolioController } from "./controller/portfolio.controller";
import { PORTFOLIO_MODULE } from "./portfolio.module";
import { PORTFOLIO_REGISTRY } from "./portfolio.registry";
import { PortfolioService } from "./service/portfolio.service";
import { SelectAllPortfoliosUseCase } from "./use_case/select/all.use_case";

export const PORTFOLIO_FACTORY = {
  MAIN: () =>
    PORTFOLIO_MODULE.get<PortfolioController>(PORTFOLIO_REGISTRY.MAIN),
  CONTROLLER: () =>
    PORTFOLIO_MODULE.get<PortfolioController>(PORTFOLIO_REGISTRY.CONTROLLER),
  SERVICE: () =>
    PORTFOLIO_MODULE.get<PortfolioService>(PORTFOLIO_REGISTRY.SERVICE),
  USE_CASE: {
    SELECT: {
      ALL: () =>
        PORTFOLIO_MODULE.get<SelectAllPortfoliosUseCase>(
          PORTFOLIO_REGISTRY.USE_CASE.SELECT.ALL,
        ),
    },
  },
};
