export class Referrer {
    id: number;
    cameFrom: string;
  shortCameFrom: string;
  constructor(options: {
    id: number,
    cameFrom: string,
    shortCameFrom: string
  }) {
    this.id = options.id;
    this.cameFrom = options.cameFrom;
    this.shortCameFrom = options.shortCameFrom;
  }
}
