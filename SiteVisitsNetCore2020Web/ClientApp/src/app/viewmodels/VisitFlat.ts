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
  pageUrl: string;
  pageTitle: string;
  cameFrom: string;
  combinedTerms: string;

  constructor(options: {
    id: string, visitDatetime: string,
    numberOfTimes: number,
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
    this.pageUrl = options.pageUrl;
    this.pageTitle = options.pageTitle;
    this.cameFrom = options.cameFrom;
    this.combinedTerms = options.combinedTerms;
  }
}
