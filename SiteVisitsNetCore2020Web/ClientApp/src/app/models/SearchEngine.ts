export class SearchEngine {
  //id: number;
  id: string;
  name: string;
  host: string;

  constructor(options: {
    //id: number,
    id: string,
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
