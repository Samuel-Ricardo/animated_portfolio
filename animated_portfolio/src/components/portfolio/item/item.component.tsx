"use client";

import { PortfolioItemConteiner } from "./container/container.component";
import { PortfolioItemPreview } from "./preview/preview.component";
import { PortfolioItemDetails } from "./details/details.component";
import { IPortfolioDTO } from "@/modules/@core/portfolio/DTO/portfolio.dto";
import { usePortfolioItemScroll } from "@/hooks/scroll/portfolio/item/scroll.hook";

export const PortfolioItem = ({ title, description, image }: IPortfolioDTO) => {
  const { target, scrollY } = usePortfolioItemScroll();
  return (
    <PortfolioItemConteiner>
      <PortfolioItemPreview src={image} target={target} />
      <PortfolioItemDetails
        title={title}
        description={description}
        position={scrollY}
      />
    </PortfolioItemConteiner>
  );
};
