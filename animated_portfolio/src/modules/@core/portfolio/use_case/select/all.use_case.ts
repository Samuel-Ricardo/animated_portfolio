import { inject, injectable } from "inversify";
import { type IPortfolioRepository } from "../../repository/portfolio.repository";
import { MODULE } from "@/modules/app.registry";

@injectable()
export class SelectAllPortfoliosUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.LOCAL.PORTFOLIO)
    private repository: IPortfolioRepository,
  ) {}

  public execute() {
    return this.repository.selectAll();
  }
}
