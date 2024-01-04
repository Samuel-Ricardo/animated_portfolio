import { CONFIG_MODULE } from "./config.module";
import { CONFIG_REGISTRY } from "./config.registry";
import { CONFIG } from "./configs/config.global";

export const CONFIG_FACTORY = {
  ALL: () => CONFIG_MODULE.get<typeof CONFIG>(CONFIG_REGISTRY.ALL),
  ENV: () => CONFIG_MODULE.get<typeof CONFIG.ENV>(CONFIG_REGISTRY.ENV),
};
