import { EmailEmailJSGateway } from "./email/email.gateway";
import { EMAILJS_GATEWAY_MODULE } from "./emailjs.module";
import { EMAILJS_GATEWAY_REGISTRY } from "./emailjs.registry";

export const EMAILJS_GATEWAY_FACTORY = {
  EMAIL: () =>
    EMAILJS_GATEWAY_MODULE.get<EmailEmailJSGateway>(
      EMAILJS_GATEWAY_REGISTRY.EMAIL,
    ),
};
