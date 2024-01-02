import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export const usePortfolioScroll = () => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target,
    offset: ["end end", "start start"],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return { target, scrollY };
};
