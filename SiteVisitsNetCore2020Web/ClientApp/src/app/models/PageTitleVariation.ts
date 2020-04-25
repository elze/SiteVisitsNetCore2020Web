import { PageTitle } from './PageTitle';

export class PageTitleVariation {
    titleVariation: string;
    titleVariationCompact: string;
  pageTitle: PageTitle;
  constructor(options: {
    titleVariation: string,
    titleVariationCompact: string,
    pageTitle: PageTitle
  }) {
    this.titleVariation = options.titleVariation;
    this.titleVariationCompact = options.titleVariationCompact;
    this.pageTitle = new PageTitle(options.pageTitle);
  }

}
