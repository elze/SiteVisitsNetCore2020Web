export class Country {
    //id: number;
  id: string;
  name: string;

  constructor(options: {
    //id: number,
    id: string,
    name: string
  }) {
    if (options) {
      this.id = options.id;
      this.name = options.name;
    }
  }

}
