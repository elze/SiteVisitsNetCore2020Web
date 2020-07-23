import { PageUrl } from "./PageUrl";

export class PageTitle {
    title: string;
  titleCompact: string;
  //pageUrl: PageUrl;
  constructor(options: {
    title: string,
    titleCompact: string,
    //pageUrl: PageUrl
  }) {
    if (options) {
      this.title = options.title;
      this.titleCompact = options.titleCompact;
      //this.pageUrl = options.pageUrl;
    }
  }
}
