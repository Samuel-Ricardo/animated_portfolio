import { MotionProps, TargetAndTransition } from "framer-motion";

export const EMERGE_ANIMATION = {
  PARENT: {
    open: {
      transition: { staggerChildren: 0.1 },
    } as TargetAndTransition,
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    } as TargetAndTransition,
  },
  CHILD: {
    open: { y: 0, opacity: 1 } as TargetAndTransition,
    closed: { y: 50, opacity: 0 } as TargetAndTransition,
  },
};

export const SIMPLE_EMERGE_ANIMATION: MotionProps = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
