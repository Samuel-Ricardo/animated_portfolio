import { MOTION_MODULE } from "./motion.module";
import { MOTION_REGISTRY } from "./motion.registry";
import { fadeIn } from "./variations/fadein.animation";

export const MOTION_FACTORY = {
  FADE: {
    IN: () => MOTION_MODULE.get<typeof fadeIn>(MOTION_REGISTRY.FADE.IN),
  },
};
