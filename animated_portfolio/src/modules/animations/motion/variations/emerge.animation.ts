import { TargetAndTransition } from "framer-motion";

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
