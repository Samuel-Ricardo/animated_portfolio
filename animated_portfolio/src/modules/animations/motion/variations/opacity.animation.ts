import { IFadeInProps } from "@/@types/motion/variants/fadein";
import { MotionProps } from "framer-motion";

export const OPACITY_ANIMATION = ({
  delay = 4,
  duration = 1,
}: IFadeInProps): MotionProps => ({
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
  transition: {
    duration,
    delay,
  },
});
