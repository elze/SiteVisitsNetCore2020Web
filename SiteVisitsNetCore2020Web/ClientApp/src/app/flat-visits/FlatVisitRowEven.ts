import { HalfRow } from './HalfRow';
import { IpAddress } from '../models/IpAddress';
import { PageUrl } from '../models/PageUrl';
import { PageUrlVariation } from '../models/PageUrlVariation';
import { PageTitle } from '../models/PageTitle';
import { PageTitleVariation } from '../models/PageTitleVariation';

export class FlatVisitRowEven implements HalfRow {
  id: string;
  visitDatetime: Date;
  numberOfTimes: number;
  ipAddress: IpAddress;
  location: string;
  pageUrl: PageUrl;
  pageUrlVariation: PageUrlVariation;
  pageTitle: PageTitle;
  pageTitleVariation: PageTitleVariation;

  constructor(options: {
    id: string, visitDatetime: Date, numberOfTimes: number,
    ipAddress: IpAddress,
    pageUrl: PageUrl,
    pageUrlVariation: PageUrlVariation,
    pageTitle: PageTitle,
    pageTitleVariation: PageTitleVariation
  }) {
    this.id = options.id;
    this.visitDatetime = options.visitDatetime;
    this.numberOfTimes = options.numberOfTimes;
    this.ipAddress = new IpAddress(options.ipAddress);
    this.location = this.getCountryRegionCity(this.ipAddress);
    this.pageUrl = new PageUrl(options.pageUrl);
    this.pageUrlVariation = new PageUrlVariation(options.pageUrlVariation);
    this.pageTitle = new PageTitle(options.pageTitle);
    this.pageTitleVariation = new PageTitleVariation(options.pageTitleVariation);
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
