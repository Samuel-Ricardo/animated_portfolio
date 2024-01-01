import { injectable } from "inversify";
import { SelectAllPortfoliosUseCase } from "../use_case/select/all.use_case";

@injectable()
export class PortfolioService {
  constructor(private select: SelectAllPortfoliosUseCase) {}

  public selectAll() {
    return this.select.execute();
  }
}
