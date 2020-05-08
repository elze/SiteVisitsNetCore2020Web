export class ExtractedTerm {
  public id: number;
  public visitId: string;
  public term: string;

  constructor(options: {
    id: number,
    term: string
  }) {
    if (options) {
      this.id = options.id;
      this.term = options.term;
    }
  }

}
