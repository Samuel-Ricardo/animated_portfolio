import { IPortfolioDTO } from "../DTO/portfolio.dto";

export interface IPortfolioRepository {
  selectAll(): Promise<IPortfolioDTO[]>;
}
