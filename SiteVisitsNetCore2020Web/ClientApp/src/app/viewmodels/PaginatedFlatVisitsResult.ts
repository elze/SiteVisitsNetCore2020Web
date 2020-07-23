import { VisitFlat } from "./VisitFlat";

export class PaginatedFlatVisitsResult {
  visits: VisitFlat[];
  totalCount: number;

  constructor(options: {
    totalCount: number,
    visits: Array<{
      id: string, visitDatetime: string,
      numberOfTimes: number,
      logFileName: string,
      visitType: string,
      ipAddress: string,
      organization: string,
      city: string,
      region: string,
      country: string,
      postalCode: string,
      location: string,
      pageUrl: string,
      pageTitle: string,
      cameFrom: string,
      combinedTerms: string
    }>
  }) {
    this.totalCount = options.totalCount;
    this.visits = options.visits.map(v => new VisitFlat(v));
  } 
}
