import { Container } from "inversify";
import { CONFIG_REGISTRY } from "./config.registry";
import { CONFIG } from "./configs/config.global";
import getDecorators from "inversify-inject-decorators";

export const CONFIG_MODULES = new Container({ defaultScope: "Singleton" });

CONFIG_MODULES.bind(CONFIG_REGISTRY.ALL).toConstantValue(CONFIG);

export const { lazyInject: injectConfig } = getDecorators(CONFIG_MODULES);
