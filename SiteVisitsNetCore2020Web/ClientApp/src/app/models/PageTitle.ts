export class PageTitle {
    title: string;
  titleCompact: string;
  constructor(options: {
    title: string,
    titleCompact: string
  }) {
    if (options) {
      this.title = options.title;
      this.titleCompact = options.titleCompact;
    }
  }
}
