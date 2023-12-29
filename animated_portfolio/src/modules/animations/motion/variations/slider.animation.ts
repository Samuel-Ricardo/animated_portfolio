import { MotionProps } from "framer-motion";

export const slider: MotionProps = {
  initial: {
    x: "0",
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
