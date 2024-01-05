import { Email } from "../entity/email.entity";

export interface EmailGateway {
  send(email: Email): Promise<any>;
}
