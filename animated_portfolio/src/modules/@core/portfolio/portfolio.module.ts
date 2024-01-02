import "reflect-metadata";

import { Container } from "inversify";
import { PORTFOLIO_REGISTRY } from "./portfolio.registry";
import { PortfolioController } from "./controller/portfolio.controller";
import { PortfolioService } from "./service/portfolio.service";
import { SelectAllPortfoliosUseCase } from "./use_case/select/all.use_case";
import getDecorators from "inversify-inject-decorators";
import { REPOSITORY_MODULE } from "@/modules/repository/repository.module";

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});

export const PORTFOLIO_MODULE = Container.merge(MODULE, REPOSITORY_MODULE);

PORTFOLIO_MODULE.bind(PORTFOLIO_REGISTRY.MAIN).to(PortfolioController);
PORTFOLIO_MODULE.bind(PORTFOLIO_REGISTRY.CONTROLLER).to(PortfolioController);
PORTFOLIO_MODULE.bind(PORTFOLIO_REGISTRY.SERVICE).to(PortfolioService);

PORTFOLIO_MODULE.bind(PORTFOLIO_REGISTRY.USE_CASE.SELECT.ALL).to(
  SelectAllPortfoliosUseCase,
);

export const { lazyInject: injectPortfolio } = getDecorators(PORTFOLIO_MODULE);
