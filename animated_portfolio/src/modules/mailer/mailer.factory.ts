import { EMAILJS } from "./emailjs/emailjs.mailer";
import { MAILER_MODULE } from "./mailer.module";
import { MAILER_REGISTRY } from "./mailer.registry";

export const MAILER_FACTORY = {
  EMAILJS: () => MAILER_MODULE.get<typeof EMAILJS>(MAILER_REGISTRY.EMAILJS),
};
