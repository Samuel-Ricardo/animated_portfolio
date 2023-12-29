import { MOTION_MODULE } from "./motion.module";
import { MOTION_REGISTRY } from "./motion.registry";

export const MOTION_FACTORY = {
  FADE: {
    IN: () => MOTION_MODULE.get(MOTION_REGISTRY.FADE.IN),
  },
};
