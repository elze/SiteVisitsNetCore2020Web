import { Region } from './Region';

export class City {
    id: number;
    name: string;
  region: Region;
  constructor(options: {
    id: number,
    name: string,
    region: Region
  }) {
    if (options) {
      this.id = options.id;
      this.name = options.name;
      this.region = new Region(options.region);
    }
  }
}
