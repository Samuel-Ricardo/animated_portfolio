import { IPortfolioItemDetailsProps } from "@/@types/props/portfolio/item/details";
import { MotionDiv } from "@/components/motion/div.component";

export const PortfolioItemDetails = ({
  title,
  description,
}: IPortfolioItemDetailsProps) => (
  <MotionDiv>
    <h2>{title}</h2>
    <p>{description}</p>
    <button>See Demo</button>
  </MotionDiv>
);
