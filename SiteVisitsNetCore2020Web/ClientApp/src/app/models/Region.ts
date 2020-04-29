import { Country } from './Country';

export class Region {
    id: number;
    name: string;
  country: Country;
  constructor(options: {
    id: number,
    name: string,
    country: Country
  }) {
    if (options) {
      this.id = options.id;
      this.name = options.name;
      this.country = new Country(options.country);
    }
  }
}
