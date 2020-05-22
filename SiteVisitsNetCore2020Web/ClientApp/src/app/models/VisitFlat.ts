export class VisitFlat {
  id: string;
  visitDatetime: Date;
  numberOfTimes: number;
  city: string;
  region: string;
  country: string;
  postalCode: string;
  location: string;
  logFileName: string;
  visitType: string;
  ipAddress: string;
  isp: string;
  //extractedTerms: Array<string>;
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
    isp: string,
    city: string,
    region: string,
    country: string,
    postalCode: string,
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
    this.isp = options.isp;
    this.city = options.city;
    this.region = options.region;
    this.country = options.country;
    this.postalCode = options.postalCode;
    this.location = options.location;
    //this.extractedTerms = options.extractedTerms;
    this.pageUrl = options.pageUrl;
    this.pageTitle = options.pageTitle;
    this.cameFrom = options.cameFrom;
    this.combinedTerms = options.combinedTerms;
  }
}
