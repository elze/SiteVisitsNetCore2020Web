import { PageTitle } from './PageTitle';

export class PageUrl {
    url: string;
    urlCompact: string;
  constructor(options: {
    url: string,
    urlCompact: string
  }) {
    if (options) {
      this.url = options.url;
      this.urlCompact = options.urlCompact;
    }
  }
}
