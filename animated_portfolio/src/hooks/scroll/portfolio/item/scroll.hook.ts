import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const usePortfolioItemScroll = () => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({ target });

  const scrollY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return { target, scrollY };
};
