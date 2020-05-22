export class Browser {
  id: number;
  name: string;
  version: string;
  constructor(options: {
    id: number,
    name: string,
    version: string
  }) {
    if (options) {
      this.id = options.id;
      this.name = options.name;
      this.version = options.version;
    }
  }

}
