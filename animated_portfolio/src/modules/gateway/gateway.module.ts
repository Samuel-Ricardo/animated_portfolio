import { Container } from "inversify";
import { EMAILJS_GATEWAY_MODULE } from "./emailjs/emailjs.module";
import getDecorators from "inversify-inject-decorators";

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});

export const GATEWAY_MODULE = Container.merge(MODULE, EMAILJS_GATEWAY_MODULE);

export const { lazyInject: injectGateway } = getDecorators(GATEWAY_MODULE);
