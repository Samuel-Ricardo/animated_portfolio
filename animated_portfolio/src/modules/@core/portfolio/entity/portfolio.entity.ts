import { injectable } from "inversify";
import { IPortfolioDTO } from "../DTO/portfolio.dto";

@injectable()
export class Portfolio {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public image: string,
    public link?: string,
  ) {}

  public static fromDTO(dto: IPortfolioDTO) {
    return new Portfolio(
      dto.id || "",
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
