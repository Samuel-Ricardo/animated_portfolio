import { injectable } from "inversify";
import { SendEmailUseCase } from "../use_case/send.use_case";
import { EmailDTO } from "../dto/email.dto";
import { Email } from "../entity/email.entity";

@injectable()
export class EmailService {
  constructor(protected sendEmail: SendEmailUseCase) {}

  async send(email: EmailDTO) {
    return await this.sendEmail.execute(Email.fromDTO(email));
  }
}
