export class PageTitle {
    title: string;
  titleCompact: string;
  constructor(options: {
    title: string,
    titleCompact: string
  }) {
    this.title = options.title;
    this.titleCompact = options.titleCompact;
  }
}
