import { injectable } from "inversify";
import { EmailGatewayAccess } from "../gateway/gateway.acess";
import { Email } from "../entity/email.entity";

@injectable()
export class SendEmailUseCase extends EmailGatewayAccess {
  async execute(email: Email) {
    return await this.gateway.send(email);
  }
}
