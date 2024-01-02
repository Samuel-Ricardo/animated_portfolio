import { IPortfolioRepository } from "@/modules/@core/portfolio/repository/portfolio.repository";
import { injectable } from "inversify";

import { items } from "../../../../database";
import { Portfolio } from "@/modules/@core/portfolio/entity/portfolio.entity";

@injectable()
export class PortfolioRepository implements IPortfolioRepository {
  selectAll(): Portfolio[] {
    return items;
  }
}
