import { EMAILJS_GATEWAY_MODULE } from "@/modules/gateway/emailjs/emailjs.module";
import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import { EMAIL_REGISTRY } from "./email.registry";
import { EmailController } from "./controller/email.controller";
import { EmailService } from "./service/email.service";
import { SendEmailUseCase } from "./use_case/send.use_case";

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});

export const EMAIL_MODULE = Container.merge(MODULE, EMAILJS_GATEWAY_MODULE);

EMAIL_MODULE.bind(EMAIL_REGISTRY.MAIN).to(EmailController);
EMAIL_MODULE.bind(EMAIL_REGISTRY.CONTROLLER).to(EmailController);
EMAIL_MODULE.bind(EMAIL_REGISTRY.SERVICE).to(EmailService);
EMAIL_MODULE.bind(EMAIL_REGISTRY.USE_CASE.SEND).to(SendEmailUseCase);

export const { lazyInject: injectEmail } = getDecorators(EMAIL_MODULE);
