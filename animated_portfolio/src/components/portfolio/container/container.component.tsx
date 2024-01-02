"use client";

import "./container.style.scss";

import { ProgressBar } from "@/components/progressbar/progressbar.component";
import { IPortfolioContainerProps } from "@/@types/props/portfolio/container";
import { usePortfolioScroll } from "@/hooks/scroll/portfolio/scroll.hook";

export const PortfolioContainer = ({ children }: IPortfolioContainerProps) => {
  const { target, scrollY } = usePortfolioScroll();
  return (
    <div id="_portfolio" className="overview" ref={target}>
      <ProgressBar progress={scrollY} />
      {children}
    </div>
  );
};
