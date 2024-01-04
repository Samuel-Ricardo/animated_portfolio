import { EMAILJS_GATEWAY_MODULE } from "@/modules/gateway/emailjs/emailjs.module";
import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});

export const EMAIL_MODULE = Container.merge(MODULE, EMAILJS_GATEWAY_MODULE);

export const { lazyInject: injectEmail } = getDecorators(EMAIL_MODULE);
