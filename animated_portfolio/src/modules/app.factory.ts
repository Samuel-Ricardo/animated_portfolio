import { CONFIG_FACTORY as CONFIG } from "./@config/config.factory";
import { PORTFOLIO_FACTORY as PORTFOLIO } from "./@core/portfolio/portfolio.factory";
import { ANIMATION_FACTORY as ANIMATION } from "./animations/animation.factory";
import { MAILER_FACTORY as MAILER } from "./mailer/mailer.factory";
import { REPOSITORY_FACTORY as REPOSITORY } from "./repository/repository.factory";
import { VALIDATION_FACTORY as VALIDATION } from "./validation/validation.factory";
import { GATEWAY_FACTORY as GATEWAY } from "./gateway/gateway.factory";
import { EMAIL_FACTORY as EMAIL } from "./@core/email/email.factory";

export const MODULES = {
  ANIMATION,
  PORTFOLIO,
  REPOSITORY,
  VALIDATION,
  CONFIG,
  MAILER,
  GATEWAY,
  EMAIL,
};
