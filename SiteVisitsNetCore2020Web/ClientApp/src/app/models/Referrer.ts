export class Referrer {
  //id: number;
  id: string;
    cameFrom: string;
  shortCameFrom: string;
  constructor(options: {
    //id: number,
    id: string,
    cameFrom: string,
    shortCameFrom: string
  }) {
    if (options) {
      this.id = options.id;
      this.cameFrom = options.cameFrom;
      this.shortCameFrom = options.shortCameFrom;
    }
  }
}
