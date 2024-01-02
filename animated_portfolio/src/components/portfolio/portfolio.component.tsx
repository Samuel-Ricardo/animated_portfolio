import { PortfolioContainer } from "./container/container.component";
import { PortfolioItem } from "./item/item.component";

export const PortfolioOverview = () => {
  return (
    <PortfolioContainer>
      <PortfolioItem
        title="Hello"
        description="World"
        image="https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
      />
    </PortfolioContainer>
  );
};
