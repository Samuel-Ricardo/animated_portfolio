import { Container } from "inversify";
import { MOTION_REGISTRY } from "./motion.registry";
import { fadeIn } from "./variations/fadein.animation";
import getDecorators from "inversify-inject-decorators";

export const MOTION_MODULE = new Container({ defaultScope: "Singleton" });

MOTION_MODULE.bind(MOTION_REGISTRY.FADE.IN).toConstantValue(fadeIn);

export const { lazyInject: injectMotion } = getDecorators(MOTION_MODULE);
