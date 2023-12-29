import { Container } from "inversify";
import { MOTION_REGISTRY } from "./motion.registry";
import { fadeIn } from "./variations/fadein.animation";
import getDecorators from "inversify-inject-decorators";
import { defaultTextVariants } from "./variations/text.animation";
import { slider } from "./variations/slider.animation";

export const MOTION_MODULE = new Container({ defaultScope: "Singleton" });

MOTION_MODULE.bind(MOTION_REGISTRY.FADE.IN).toConstantValue(fadeIn);
MOTION_MODULE.bind(MOTION_REGISTRY.TEXT.DEFAULT).toConstantValue(
  defaultTextVariants,
);
MOTION_MODULE.bind(MOTION_REGISTRY.SLIDER).toConstantValue(slider);

export const { lazyInject: injectMotion } = getDecorators(MOTION_MODULE);
