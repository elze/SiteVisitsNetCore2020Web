import { PageTitle } from './PageTitle';

export class PageUrl {
    url: string;
  urlCompact: string;
  pageTitle: PageTitle;
  constructor(options: {
    url: string,
    urlCompact: string,
    pageTitle: PageTitle
  }) {
    if (options) {
      this.url = options.url;
      this.urlCompact = options.urlCompact;
      this.pageTitle = options.pageTitle;
    }
  }
}
