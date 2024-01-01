import { injectable } from "inversify";
import { type IPortfolioRepository } from "../../repository/portfolio.repository";

@injectable()
export class SelectAllPortfoliosUseCase {
  constructor(private repository: IPortfolioRepository) {}

  public execute() {
    return this.repository.selectAll();
  }
}
