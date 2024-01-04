import { Container } from "inversify";
import { MAILER_REGISTRY } from "./mailer.registry";
import { EMAILJS } from "./emailjs/emailjs.mailer";
import getDecorators from "inversify-inject-decorators";

export const MAILER_MODULE = new Container({ defaultScope: "Singleton" });

MAILER_MODULE.bind(MAILER_REGISTRY.EMAILJS).toConstantValue(EMAILJS);

export const { lazyInject: injectMailer } = getDecorators(MAILER_MODULE);
