import { Email } from "@/modules/@core/email/entity/email.entity";
import { EmailGateway } from "@/modules/@core/email/gateway/email.gateway";
import { injectable } from "inversify";

@injectable()
export class EmailEmailJSGateway implements EmailGateway {
  send(email: Email): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
