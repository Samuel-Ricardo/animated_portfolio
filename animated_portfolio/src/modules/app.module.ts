import "reflect-metadata";

import { Container } from "inversify";
import { ANIMATION_MODULE } from "./animations/animation.module";
import { PORTFOLIO_MODULE } from "./@core/portfolio/portfolio.module";
import { REPOSITORY_MODULE } from "./repository/repository.module";
import { VALIDATION_MODULE } from "./validation/validation.module";
import { CONFIG_MODULE } from "./@config/config.module";
import { MAILER_MODULE } from "./mailer/mailer.module";
import { GATEWAY_MODULE } from "./gateway/gateway.module";
import { EMAIL_MODULE } from "./@core/email/email.module";

const MODULE = new Container({ autoBindInjectable: true });

export const APP_MODULE = Container.merge(
  MODULE,
  ANIMATION_MODULE,
  PORTFOLIO_MODULE,
  REPOSITORY_MODULE,
  VALIDATION_MODULE,
  CONFIG_MODULE,
  MAILER_MODULE,
  GATEWAY_MODULE,
  EMAIL_MODULE,
);
