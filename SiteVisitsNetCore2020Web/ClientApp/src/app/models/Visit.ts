import { IpAddress } from './IpAddress';
import { PageUrl } from './PageUrl';
import { PageUrlVariation } from './PageUrlVariation';
import { PageTitle } from './PageTitle';
import { PageTitleVariation } from './PageTitleVariation';
import { Referrer } from './Referrer';

export class Visit {
    id: string;
    visitDatetime: Date;
    numberOfTimes: number;
    seTerm: string;
    logFileName: string;
    visitType: string;
    ipAddress: IpAddress;
    pageUrl: PageUrl;
    pageUrlVariation: PageUrlVariation;
    pageTitle: PageTitle;
    pageTitleVariation: PageTitleVariation;
    cameFrom: Referrer;
    /****
        public virtual Browser Browser { get; set; }
        public virtual Device Device { get; set; }
        public virtual SearchEngine SearchEngine { get; set; }
        ***/

  constructor(options: {
    id: string, visitDatetime: Date, numberOfTimes: number,
    seTerm: string,
    logFileName: string,
    visitType: string,
    ipAddress: IpAddress,
    pageUrl: PageUrl,
    pageUrlVariation: PageUrlVariation,
    pageTitle: PageTitle,
    pageTitleVariation: PageTitleVariation,
    cameFrom: Referrer}) {
    this.id = options.id;
    this.visitDatetime = options.visitDatetime;
    this.id = options.id;
    this.numberOfTimes = options.numberOfTimes;
    this.seTerm = options.seTerm;
    this.logFileName = options.logFileName;
    this.visitType = options.visitType;
    this.ipAddress = new IpAddress(options.ipAddress);
    this.pageUrl = new PageUrl(options.pageUrl);
    this.pageUrlVariation = new PageUrlVariation(options.pageUrlVariation);
    this.pageTitle = new PageTitle(options.pageTitle);
    this.pageTitleVariation = new PageTitleVariation(options.pageTitleVariation);
    this.cameFrom = new Referrer(options.cameFrom);

  }
}

