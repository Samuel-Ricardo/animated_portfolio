import { IPortfolioDTO } from "@/modules/@core/portfolio/DTO/portfolio.dto";
import { IPortfolioRepository } from "@/modules/@core/portfolio/repository/portfolio.repository";
import { injectable } from "inversify";

@injectable()
export class PortfolioRepository implements IPortfolioRepository {
  selectAll(): Promise<IPortfolioDTO[]> {
    throw new Error("Method not implemented.");
  }
}
