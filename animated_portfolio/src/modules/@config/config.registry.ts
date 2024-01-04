import { CONFIG } from "./configs/config.global";

export const CONFIG_REGISTRY = {
  ...CONFIG,
  ALL: Symbol.for("MODULES::CONFIG:ALL"),
};
