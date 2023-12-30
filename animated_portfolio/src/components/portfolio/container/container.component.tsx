import "./container.style.scss";

import { PropsWithChildren, RefObject } from "react";
import { MotionDiv } from "@/components/motion/div.component";

export const PortfolioContainer = ({
  children,
  target,
}: PropsWithChildren<{ target: RefObject<HTMLDivElement> }>) => {
  return (
    <div id="portfolio" className="overview" ref={target}>
      <div className="progress">
        <h1>Featured Works</h1>
        <MotionDiv />
      </div>
      {children}
    </div>
  );
};
