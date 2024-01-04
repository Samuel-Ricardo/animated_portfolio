import { EmailDTO } from "../dto/email.dto";

export class Email {
  constructor(
    public to_name: string,
    public from_name: string,
    public message_html: string,
  ) {}

  toDTO(): EmailDTO {
    return {
      to_name: this.to_name,
      from_name: this.from_name,
      message_html: this.message_html,
    };
  }
}
