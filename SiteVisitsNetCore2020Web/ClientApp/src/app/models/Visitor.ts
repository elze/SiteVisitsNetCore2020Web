export class Visitor {
  //id: number;
  id: string;
  label: string;
  note: string;

  constructor(options: {
    //id: number,
    id: string,
    label: string,
    note: string
  }) {
    if (options) {
      this.id = options.id;
      this.label = options.label;
      this.note = options.note;
    }
  }
}
