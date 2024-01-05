import { inject, injectable } from "inversify";
import { SendEmailUseCase } from "../use_case/send.use_case";
import { Email } from "../entity/email.entity";
import { MODULE } from "@/modules/app.registry";

@injectable()
export class EmailService {
  constructor(
    @inject(MODULE.EMAIL.USE_CASE.SEND)
    protected sendEmail: SendEmailUseCase,
  ) {}

  async send(email: Email) {
    return await this.sendEmail.execute(email);
  }
}
