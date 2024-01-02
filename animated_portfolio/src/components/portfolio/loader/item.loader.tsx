"use client";

import { usePortfolios } from "@/hooks/portfolio/select/all.hook";
import { PortfolioItem } from "../item/item.component";

export const PortfolioItemsLoader = () => {
  return usePortfolios().map((item) => (
    <PortfolioItem
      key={item.id}
      title={item.title}
      description={item.description}
      image={item.image}
    />
  ));
};
