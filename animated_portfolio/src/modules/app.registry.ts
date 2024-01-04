import { ANIMATION_REGISTRY as ANIMATION } from "./animations/animation.registry";
import { PORTFOLIO_REGISTRY as PORTFOLIO } from "./@core/portfolio/portfolio.registry";
import { REPOSITORY_REGISTRY as REPOSITORY } from "./repository/repository.registry";
import { VALIDATION_ZOD_REGISTRY as VALIDATION } from "./validation/zod/zod.registry";
import { CONFIG_REGISTRY as CONFIG } from "./@config/config.registry";
import { MAILER_REGISTRY as MAILER } from "./mailer/mailer.registry";
import { GATEWAY_REGISTRY as GATEWAY } from "./gateway/gateway.registry";
import { EMAIL_REGISTRY as EMAIL } from "./@core/email/email.registry";

export const MODULE = {
  ANIMATION,
  PORTFOLIO,
  REPOSITORY,
  VALIDATION,
  CONFIG,
  MAILER,
  GATEWAY,
  EMAIL,
};
