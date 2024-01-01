import { injectable } from "inversify";
import { PortfolioService } from "../service/portfolio.service";

@injectable()
export class PortfolioController {
  constructor(private service: PortfolioService) {}

  public selectAll() {
    return this.service.selectAll();
  }
}
