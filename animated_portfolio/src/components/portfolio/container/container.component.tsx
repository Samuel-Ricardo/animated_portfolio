import "./container.style.scss";

import { PropsWithChildren, RefObject } from "react";
import { ProgressBar } from "@/components/progressbar/progressbar.component";
import { IPortfolioContainerProps } from "@/@types/props/portfolio/container";

export const PortfolioContainer = ({
  children,
  target,
  progress,
}: IPortfolioContainerProps) => {
  return (
    <div id="_portfolio" className="overview" ref={target}>
      <ProgressBar progress={progress} />
      {children}
    </div>
  );
};
