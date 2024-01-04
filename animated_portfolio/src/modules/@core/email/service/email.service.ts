import { injectable } from "inversify";
import { SendEmailUseCase } from "../use_case/send.use_case";
import { Email } from "../entity/email.entity";

@injectable()
export class EmailService {
  constructor(protected sendEmail: SendEmailUseCase) {}

  async send(email: Email) {
    return await this.sendEmail.execute(email);
  }
}
