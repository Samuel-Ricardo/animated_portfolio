import { injectable } from "inversify";
import { EmailService } from "../service/email.service";
import { EmailDTO } from "../dto/email.dto";
import { Email } from "../entity/email.entity";

@injectable()
export class EmailController {
  constructor(protected service: EmailService) {}

  async sendEmail(email: EmailDTO) {
    return await this.service.send(Email.fromDTO(email));
  }
}
