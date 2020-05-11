export class VisitFlat {
  id: string;
  visitDatetime: Date;
  numberOfTimes: number;
  location: string;
  logFileName: string;
  visitType: string;
  ipAddress: string;
  extractedTerms: Array<string>;
  pageUrl: string;
  //pageUrlVariation: string;
  pageTitle: string;
  //pageTitleVariation: PageTitleVariation;
  cameFrom: string;
  combinedTerms: string;
  /****
      public virtual Browser Browser { get; set; }
      public virtual Device Device { get; set; }
      public virtual SearchEngine SearchEngine { get; set; }
      ***/

  constructor(options: {
    id: string, visitDatetime: string,
    numberOfTimes: number,
    seTerm: string,
    logFileName: string,
    visitType: string,
    ipAddress: string,
    location: string,
    pageUrl: string,
    pageTitle: string,
    cameFrom: string,
    //extractedTerms: Array<string>
    combinedTerms: string
  }) {
    this.id = options.id;
    this.visitDatetime = new Date(options.visitDatetime);
    this.numberOfTimes = options.numberOfTimes;
    this.logFileName = options.logFileName;
    this.visitType = options.visitType;
    this.ipAddress = options.ipAddress;
    this.location = options.location;
    this.pageUrl = options.pageUrl;
    this.pageTitle = options.pageTitle;
    this.cameFrom = options.cameFrom;
    this.combinedTerms = options.combinedTerms;
  }
}
