import { IDrawnProps } from "@/@types/motion/variants/svg/drawn";
import { MotionProps } from "framer-motion";

export const DRAWN_ANIMATION = ({
  duration = 3,
  delay = 0,
}: IDrawnProps): MotionProps => ({
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { duration, delay },
});
