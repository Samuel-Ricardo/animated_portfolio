import "./details.style.scss";

import { IPortfolioItemDetailsProps } from "@/@types/props/portfolio/item/details";
import { MotionDiv } from "@/components/motion/div.component";

export const PortfolioItemDetails = ({
  title,
  description,
  position,
}: IPortfolioItemDetailsProps) => (
  <MotionDiv className="details" style={{ y: position }}>
    <h2>{title}</h2>
    <p>{description}</p>
    <button>See Demo</button>
  </MotionDiv>
);
