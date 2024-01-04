export class Email {
  constructor(
    public to_name: string,
    public from_name: string,
    public message_html: string,
  ) {}
}
