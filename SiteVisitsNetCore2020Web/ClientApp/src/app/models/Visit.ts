import { IpAddress } from './IpAddress';
import { PageUrl } from './PageUrl';
import { PageUrlVariation } from './PageUrlVariation';
import { PageTitle } from './PageTitle';
import { PageTitleVariation } from './PageTitleVariation';
import { Referrer } from './Referrer';
import { ExtractedTerm } from './ExtractedTerm';

export class Visit {
    id: string;
    visitDatetime: Date;
    numberOfTimes: number;
  seTerm: string;
  location: string;
    logFileName: string;
    visitType: string;
  ipAddress: IpAddress;
  extractedTerms: Array<ExtractedTerm>;
    pageUrl: PageUrl;
    pageUrlVariation: PageUrlVariation;
    pageTitle: PageTitle;
    pageTitleVariation: PageTitleVariation;
  cameFrom: Referrer;
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
    ipAddress: IpAddress,
    pageUrl: PageUrl,
    pageUrlVariation: PageUrlVariation,
    pageTitle: PageTitle,
    pageTitleVariation: PageTitleVariation,
    cameFrom: Referrer,
    extractedTerms: Array<ExtractedTerm>}) {
    this.id = options.id;
    //let vDateTime = new Date(options.visitDatetime);
    //this.visitDatetime = options.visitDatetime;
    this.visitDatetime = new Date(options.visitDatetime);
    this.id = options.id;
    this.numberOfTimes = options.numberOfTimes;
    this.seTerm = options.seTerm;
    this.extractedTerms = options.extractedTerms;
    this.logFileName = options.logFileName;
    this.visitType = options.visitType;
    this.ipAddress = new IpAddress(options.ipAddress);
    this.location = this.getCountryRegionCity(this.ipAddress);
    this.pageUrl = new PageUrl(options.pageUrl);
    this.pageUrlVariation = new PageUrlVariation(options.pageUrlVariation);
    this.pageTitle = new PageTitle(options.pageTitle);
    this.pageTitleVariation = new PageTitleVariation(options.pageTitleVariation);
    this.cameFrom = new Referrer(options.cameFrom);
    this.combinedTerms = this.getCombinedTerms();
  }

  public getCombinedTerms(): string {
    let combinedTerms = "";
    if (this.extractedTerms && this.extractedTerms.length > 0) {
      const extractedTermsValues = this.extractedTerms.map(x => x.term);
      combinedTerms = extractedTermsValues.join(", ");
      if (!extractedTermsValues.includes(this.seTerm)) {
        combinedTerms += ", " + this.seTerm;
      }
    }
    else
      combinedTerms = this.seTerm;
    return combinedTerms;
  }

  public getCountryRegionCity(ipAddress: IpAddress): string {
    if (ipAddress) {
      const locationElements = [
        ipAddress.country && ipAddress.country.name ? ipAddress.country.name : null,
        ipAddress.region && ipAddress.region.name ? ipAddress.region.name : null,
        ipAddress.city && ipAddress.city.name ? ipAddress.city.name : null];
      const location = locationElements.filter(el => el != null).join(" / ");

      return location;
    }
    return "";
  }

}

