export class SearchEngine {
  id: number;
  name: string;
  host: string;

  constructor(options: {
    id: number,
    name: string,
    host: string
  }) {
    if (options) {
      this.id = options.id;
      this.name = options.name;
      this.host = options.host;
    }
  }
    
}
