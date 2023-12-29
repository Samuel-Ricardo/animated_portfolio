import { IFadeInProps } from "@/@types/motion/variants/fadein";
import { MotionProps } from "framer-motion";

export const fadeIn = ({
  duration = 0.5,
  delay = 0,
}: IFadeInProps): MotionProps => ({
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration, delay },
});
