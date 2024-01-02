import { Portfolio } from "../entity/portfolio.entity";

export interface IPortfolioRepository {
  selectAll(): Portfolio[];
}
