import { injectable } from "inversify";

@injectable()
export class Portfolio {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private image: string,
    private link?: string,
  ) {}
}
