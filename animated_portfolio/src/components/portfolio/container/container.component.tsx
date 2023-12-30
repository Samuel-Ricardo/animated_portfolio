import "./container.style.scss";

import { PropsWithChildren, RefObject } from "react";
import { ProgressBar } from "@/components/progressbar/progressbar.component";

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
      <ProgressBar progress={progress} />
      {children}
    </div>
  );
};
