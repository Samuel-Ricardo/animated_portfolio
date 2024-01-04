import { EmailController } from "./controller/email.controller";
import { EMAIL_MODULE } from "./email.module";
import { EMAIL_REGISTRY } from "./email.registry";
import { EmailService } from "./service/email.service";
import { SendEmailUseCase } from "./use_case/send.use_case";

export const EMAIL_FACTORY = {
  MAIN: () => EMAIL_MODULE.get<EmailController>(EMAIL_REGISTRY.MAIN),
  CONTROLLER: () =>
    EMAIL_MODULE.get<EmailController>(EMAIL_REGISTRY.CONTROLLER),
  SERVICE: () => EMAIL_MODULE.get<EmailService>(EMAIL_REGISTRY.SERVICE),
  USE_CASE: {
    SEND: () =>
      EMAIL_MODULE.get<SendEmailUseCase>(EMAIL_REGISTRY.USE_CASE.SEND),
  },
};
