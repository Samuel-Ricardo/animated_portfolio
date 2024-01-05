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
      message: this.message_html,
    };
  }

  static fromDTO(dto: EmailDTO): Email {
    return new Email(dto.to_name, dto.from_name, dto.message);
  }
}
