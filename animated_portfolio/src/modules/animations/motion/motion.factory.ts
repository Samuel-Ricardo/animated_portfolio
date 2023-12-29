import { MOTION_MODULE } from "./motion.module";
import { MOTION_REGISTRY } from "./motion.registry";
import { fadeIn } from "./variations/fadein.animation";
import { slider } from "./variations/slider.animation";
import { defaultTextVariants } from "./variations/text.animation";

export const MOTION_FACTORY = {
  FADE: {
    IN: () => MOTION_MODULE.get<typeof fadeIn>(MOTION_REGISTRY.FADE.IN),
  },
  TEXT: {
    DEFAULT: () =>
      MOTION_MODULE.get<typeof defaultTextVariants>(
        MOTION_REGISTRY.TEXT.DEFAULT,
      ),
  },
  SLIDER: () => MOTION_MODULE.get<typeof slider>(MOTION_REGISTRY.SLIDER),
};
