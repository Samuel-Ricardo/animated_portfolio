import { inject, injectable } from "inversify";
import { PortfolioService } from "../service/portfolio.service";
import { MODULE } from "@/modules/app.registry";

@injectable()
export class PortfolioController {
  constructor(
    @inject(MODULE.PORTFOLIO.SERVICE)
    private service: PortfolioService,
  ) {}

  public selectAll() {
    return this.service.selectAll();
  }
}
