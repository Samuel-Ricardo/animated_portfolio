import { MODULES } from "@/modules/app.factory";
import emailjs from "@emailjs/browser";

const EMAILJS = emailjs;

EMAILJS.init(MODULES.CONFIG.ENV().MAILER.KEY.PUBLIC);

export { EMAILJS };
