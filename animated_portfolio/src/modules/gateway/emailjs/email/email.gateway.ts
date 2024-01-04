import { type Environment } from "@/@types/modules/config/env";
import { type EmailJS } from "@/@types/modules/mailer/emailjs";
import { Email } from "@/modules/@core/email/entity/email.entity";
import { EmailGateway } from "@/modules/@core/email/gateway/email.gateway";
import { MODULE } from "@/modules/app.registry";
import { inject, injectable } from "inversify";

@injectable()
export class EmailEmailJSGateway implements EmailGateway {
  constructor(
    @inject(MODULE.MAILER.EMAILJS)
    protected mailer: EmailJS,
    @inject(MODULE.CONFIG.ENV)
    protected ENV: Environment,
  ) {}

  async send(email: Email): Promise<any> {
    return await this.mailer.send(
      this.ENV.MAILER.SERVICE.ID,
      this.ENV.MAILER.TEMPLATE.ID,
      { ...email.toDTO() },
    );
  }
}
