import { Container } from "inversify";
import { VALIDATION_ZOD_MODULE } from "./zod/zod.module";

const MODULE = new Container();

export const VALIDATION_MODULE = Container.merge(MODULE, VALIDATION_ZOD_MODULE);
