import { injectable } from "inversify";
import { IPortfolioDTO } from "../DTO/portfolio.dto";

@injectable()
export class Portfolio {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public image: string,
    public link?: string,
  ) {}

  public static fromDTO(dto: IPortfolioDTO) {
    return new Portfolio(
      dto.id || 0,
      dto.title,
      dto.description,
      dto.image,
      dto.link,
    );
  }

  public toDTO(): IPortfolioDTO {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      image: this.image,
      link: this.link,
    };
  }
}
