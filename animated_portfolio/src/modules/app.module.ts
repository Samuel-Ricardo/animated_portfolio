import { Container } from "inversify";
import { ANIMATION_MODULE } from "./animations/animation.module";

const MODULE = new Container({ autoBindInjectable: true });

export const APP_MODULE = Container.merge(MODULE, ANIMATION_MODULE);
