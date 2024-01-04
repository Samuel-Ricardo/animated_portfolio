import { injectable } from "inversify";
import { EmailGatewayAccess } from "../gateway/gateway.acess";
import { Email } from "../entity/email.entity";

@injectable()
export class SendEmailUseCase extends EmailGatewayAccess {
  execute(email: Email) {
    return this.gateway.send(email);
  }
}
