export class Visitor {
  id: number;
  label: string;
  note: string;

  constructor(options: {
    id: number,
    label: string,
    note: string
  }) {
    this.id = options.id;
    this.label = options.label;
    this.note = options.note;
  }
}
