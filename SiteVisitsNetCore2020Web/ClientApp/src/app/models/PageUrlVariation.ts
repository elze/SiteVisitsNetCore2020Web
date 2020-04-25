import { PageUrl } from './PageUrl';

export class PageUrlVariation {
    urlVariation: string;
    urlVariationCompact: string;
    pageUrl: PageUrl;
  constructor(options: {
    urlVariation: string,
    urlVariationCompact: string,
    pageUrl: PageUrl
  }) {
    this.urlVariation = options.urlVariation;
    this.urlVariationCompact = options.urlVariationCompact;
    this.pageUrl = new PageUrl(options.pageUrl);
  }

    }
