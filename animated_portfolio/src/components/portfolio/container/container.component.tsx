import "./container.style.scss";

import { PropsWithChildren, RefObject } from "react";
import { MotionDiv } from "@/components/motion/div.component";

export const PortfolioContainer = ({
  children,
  target,
  progress,
}: PropsWithChildren<{
  target: RefObject<HTMLDivElement>;
  progress: number;
}>) => {
  return (
    <div id="_portfolio" className="overview" ref={target}>
      <div className="progress">
        <h1>Featured Works</h1>
        <MotionDiv style={{ scaleX: progress }} className="bar" />
      </div>
      {children}
    </div>
  );
};
