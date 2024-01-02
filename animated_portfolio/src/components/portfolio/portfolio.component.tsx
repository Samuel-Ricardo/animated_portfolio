import { PortfolioContainer } from "./container/container.component";
import { PortfolioItemsLoader } from "./loader/item.loader";

export const PortfolioOverview = () => {
  return (
    <PortfolioContainer>
      <PortfolioItemsLoader />
    </PortfolioContainer>
  );
};
