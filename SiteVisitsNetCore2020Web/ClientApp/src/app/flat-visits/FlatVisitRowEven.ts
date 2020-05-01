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
    this.id = options.id;
    this.numberOfTimes = options.numberOfTimes;
    this.ipAddress = new IpAddress(options.ipAddress);
    this.pageUrl = new PageUrl(options.pageUrl);
    this.pageUrlVariation = new PageUrlVariation(options.pageUrlVariation);
    this.pageTitle = new PageTitle(options.pageTitle);
    this.pageTitleVariation = new PageTitleVariation(options.pageTitleVariation);
  }

}
