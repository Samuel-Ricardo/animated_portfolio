import { inject, injectable } from "inversify";
import { SelectAllPortfoliosUseCase } from "../use_case/select/all.use_case";
import { MODULE } from "@/modules/app.registry";

@injectable()
export class PortfolioService {
  constructor(
    @inject(MODULE.PORTFOLIO.USE_CASE.SELECT.ALL)
    private select: SelectAllPortfoliosUseCase,
  ) {}

  public selectAll() {
    return this.select.execute();
  }
}
