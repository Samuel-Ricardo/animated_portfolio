import { Container } from "inversify";
import { MOTION_REGISTRY } from "./motion.registry";
import { fadeIn } from "./variations/fadein.animation";
import getDecorators from "inversify-inject-decorators";
import { defaultTextVariants } from "./variations/text.animation";

export const MOTION_MODULE = new Container({ defaultScope: "Singleton" });

MOTION_MODULE.bind(MOTION_REGISTRY.FADE.IN).toConstantValue(fadeIn);
MOTION_MODULE.bind(MOTION_REGISTRY.TEXT.DEFAULT).toConstantValue(
  defaultTextVariants,
);

export const { lazyInject: injectMotion } = getDecorators(MOTION_MODULE);
