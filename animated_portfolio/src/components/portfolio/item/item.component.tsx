//import "./item.style.scss";

import { PortfolioItemConteiner } from "./container/container.component";
import { PortfolioItemPreview } from "./preview/preview.component";
import { PortfolioItemDetails } from "./details/details.component";
import { IPortfolioDTO } from "@/modules/@core/portfolio/DTO/portfolio.dto";

export const PortfolioItem = ({ title, description, image }: IPortfolioDTO) => {
  return (
    <PortfolioItemConteiner>
      <PortfolioItemPreview src={image} />
      <PortfolioItemDetails title={title} description={description} />
    </PortfolioItemConteiner>
  );
};
