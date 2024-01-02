import "./container.style.scss";

import { ProgressBar } from "@/components/progressbar/progressbar.component";
import { IPortfolioContainerProps } from "@/@types/props/portfolio/container";

export const PortfolioContainer = ({
  children,
  target,
  progress = 0.5,
}: IPortfolioContainerProps) => {
  return (
    <div id="_portfolio" className="overview" ref={target}>
      <ProgressBar progress={progress} />
      {children}
    </div>
  );
};
