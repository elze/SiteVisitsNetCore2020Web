import { HalfRow } from './HalfRow';
import { IpAddress } from '../models/IpAddress';
import { Referrer } from '../models/Referrer';
import { ExtractedTerm } from '../models/ExtractedTerm';

export class FlatVisitRowOdd implements HalfRow {
  id: string;
  ipAddress: IpAddress;
  cameFrom: Referrer;
  seTerm: string;
  visitType: string;
  extractedTerms: Array<ExtractedTerm>;
  combinedTerms: string;

  constructor(options: {
    id: string, 
    seTerm: string,
    visitType: string,
    ipAddress: IpAddress,
    cameFrom: Referrer,
    extractedTerms: Array<ExtractedTerm>
  }) {
    this.id = options.id;
    this.seTerm = options.seTerm;
    this.extractedTerms = options.extractedTerms;
    this.visitType = options.visitType;
    this.ipAddress = new IpAddress(options.ipAddress);
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


}
