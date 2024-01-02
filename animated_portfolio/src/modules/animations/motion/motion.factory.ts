import { MOTION_MODULE } from "./motion.module";
import { MOTION_REGISTRY } from "./motion.registry";
import { EMERGE_ANIMATION } from "./variations/emerge.animation";
import { fadeIn } from "./variations/fadein.animation";
import { OPEN_FILL_ANIMATION } from "./variations/open/fill.animation";
import { slideIn } from "./variations/slideIn.animation";
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
  SLIDE: {
    IN: () => MOTION_MODULE.get<typeof slideIn>(MOTION_REGISTRY.SLIDE.IN),
  },
  OPEN: {
    FILL: () =>
      MOTION_MODULE.get<typeof OPEN_FILL_ANIMATION>(MOTION_REGISTRY.OPEN.FILL),
  },
  EMERGE: () =>
    MOTION_MODULE.get<typeof EMERGE_ANIMATION>(MOTION_REGISTRY.EMERGE),
};
