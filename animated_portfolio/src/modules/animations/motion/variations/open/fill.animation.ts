import { TargetAndTransition } from "framer-motion";

export const OPEN_FILL_ANIMATION = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: { type: "spring", stiffness: 20 },
  } as TargetAndTransition,
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: { type: "spring", delay: 0.5, stiffness: 400, damping: 40 },
  } as TargetAndTransition,
};
