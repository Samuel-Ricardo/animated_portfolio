import { CONFIG_FACTORY } from "@/modules/@config/config.factory";
import emailjs from "@emailjs/browser";

const EMAILJS = emailjs;

EMAILJS.init(CONFIG_FACTORY.ENV().MAILER.KEY.PUBLIC);

export { EMAILJS };
