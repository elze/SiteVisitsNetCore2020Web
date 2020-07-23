export class ExtractedTerm {
  //public id: number;
  public id: string;
  public visitId: string;
  public term: string;

  constructor(options: {
    //id: number,
    id: string,
    term: string
  }) {
    if (options) {
      this.id = options.id;
      this.term = options.term;
    }
  }

}
