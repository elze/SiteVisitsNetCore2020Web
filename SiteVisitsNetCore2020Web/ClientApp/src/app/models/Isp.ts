export class Isp {
  id: number;
  name: string;

  constructor(options: {
    id: number,
    name: string
  }) {
    if (options) {
      this.id = options.id;
      this.name = options.name;
    }
  }
}
