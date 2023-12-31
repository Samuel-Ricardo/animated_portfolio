import { Container } from "inversify";
import { MOTION_REGISTRY } from "./motion.registry";
import { fadeIn } from "./variations/fadein.animation";
import getDecorators from "inversify-inject-decorators";
import { defaultTextVariants } from "./variations/text.animation";
import { slider } from "./variations/slider.animation";
import { slideIn } from "./variations/slideIn.animation";
import { OPEN_FILL_ANIMATION } from "./variations/open/fill.animation";
import {
  EMERGE_ANIMATION,
  SIMPLE_EMERGE_ANIMATION,
} from "./variations/emerge.animation";
import { DRAWN_ANIMATION } from "./variations/svg/drawn.animation";
import { OPACITY_ANIMATION } from "./variations/opacity.animation";

export const MOTION_MODULE = new Container({ defaultScope: "Singleton" });

MOTION_MODULE.bind(MOTION_REGISTRY.FADE.IN).toConstantValue(fadeIn);
MOTION_MODULE.bind(MOTION_REGISTRY.TEXT.DEFAULT).toConstantValue(
  defaultTextVariants,
);
MOTION_MODULE.bind(MOTION_REGISTRY.SLIDER).toConstantValue(slider);
MOTION_MODULE.bind(MOTION_REGISTRY.SLIDE.IN).toConstantValue(slideIn);
MOTION_MODULE.bind(MOTION_REGISTRY.OPEN.FILL).toConstantValue(
  OPEN_FILL_ANIMATION,
);
MOTION_MODULE.bind(MOTION_REGISTRY.EMERGE).toConstantValue(EMERGE_ANIMATION);
MOTION_MODULE.bind(MOTION_REGISTRY.SIMPLE.EMERGE).toConstantValue(
  SIMPLE_EMERGE_ANIMATION,
);
MOTION_MODULE.bind(MOTION_REGISTRY.SVG.DRAWN).toConstantValue(DRAWN_ANIMATION);
MOTION_MODULE.bind(MOTION_REGISTRY.OPACITY).toConstantValue(OPACITY_ANIMATION);

export const { lazyInject: injectMotion } = getDecorators(MOTION_MODULE);
