import { Container } from "inversify";
import { MOTION_MODULE } from "./motion/motion.module";

const MODULE = new Container({ autoBindInjectable: true });

export const ANIMATION_MODULE = Container.merge(MODULE, MOTION_MODULE);
