import { Visit } from "../models/Visit";

export class VisitViewModel {
  visit: Visit;
  ipAddress: string;
  combinedTerms: string;
  location: string;
  pageUrl: string;
  pageTitle: string;
  cameFrom: string;

  constructor(options: {
    visit: any,
    ipAddress: string,
    combinedTerms: string,
    location: string,
    pageUrl: string,
    pageTitle: string,
    cameFrom: string
  }) {
    this.cameFrom = options.cameFrom;
    this.combinedTerms = options.combinedTerms;
    this.ipAddress = options.ipAddress;
    this.location = options.location;
    this.pageTitle = options.pageTitle;
    this.pageUrl = options.pageUrl;
    this.visit = new Visit(options.visit);
  }

}
