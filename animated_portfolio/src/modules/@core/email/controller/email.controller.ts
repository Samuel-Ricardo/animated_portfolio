import { inject, injectable } from "inversify";
import { EmailService } from "../service/email.service";
import { EmailDTO } from "../dto/email.dto";
import { Email } from "../entity/email.entity";
import { MODULE } from "@/modules/app.registry";

@injectable()
export class EmailController {
  constructor(
    @inject(MODULE.EMAIL.SERVICE)
    protected service: EmailService,
  ) {}

  async sendEmail(email: EmailDTO) {
    return await this.service.send(Email.fromDTO(email));
  }
}
