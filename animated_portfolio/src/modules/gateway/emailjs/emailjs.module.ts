import { Container } from "inversify";
import { EMAILJS_GATEWAY_REGISTRY } from "./emailjs.registry";
import { MAILER_MODULE } from "@/modules/mailer/mailer.module";
import { CONFIG_MODULE } from "@/modules/@config/config.module";
import { EmailEmailJSGateway } from "./email/email.gateway";
import getDecorators from "inversify-inject-decorators";

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});

export const EMAILJS_GATEWAY_MODULE = Container.merge(
  MODULE,
  MAILER_MODULE,
  CONFIG_MODULE,
);

EMAILJS_GATEWAY_MODULE.bind(EMAILJS_GATEWAY_REGISTRY.EMAIL)
  .to(EmailEmailJSGateway)
  .inSingletonScope();

export const { lazyInject: injectEmailJSGateway } = getDecorators(
  EMAILJS_GATEWAY_MODULE,
);
