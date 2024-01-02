import { LOCAL_REPOSITORY_MODULE } from "./local.module";
import { LOCAL_REPOSITORY_REGISTRY } from "./local.registry";
import { PortfolioLocalRepository } from "./portfolio/portfolio.repository";

export const LOCAL_REPOSITORY_FACTORY = {
  PORTFOLIO: () =>
    LOCAL_REPOSITORY_MODULE.get<PortfolioLocalRepository>(
      LOCAL_REPOSITORY_REGISTRY.PORTFOLIO,
    ),
};
