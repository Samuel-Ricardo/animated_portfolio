import { inject, injectable } from "inversify";
import { type EmailGateway } from "./email.gateway";
import { MODULE } from "@/modules/app.registry";

@injectable()
export abstract class EmailGatewayAccess {
  constructor(
    @inject(MODULE.GATEWAY.EMAILJS.EMAIL)
    protected gateway: EmailGateway,
  ) {}
}
