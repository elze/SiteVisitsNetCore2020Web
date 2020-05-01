import { HalfRow } from './HalfRow';
import { IpAddress } from '../models/IpAddress';
import { Referrer } from '../models/Referrer';

export class FlatVisitRowOdd implements HalfRow {
  id: string;
  ipAddress: IpAddress;
  cameFrom: Referrer;
  seTerm: string;
  visitType: string;

  constructor(options: {
    id: string, 
    seTerm: string,
    visitType: string,
    ipAddress: IpAddress,
    cameFrom: Referrer
  }) {
    this.id = options.id;
    this.seTerm = options.seTerm;
    this.visitType = options.visitType;
    this.ipAddress = new IpAddress(options.ipAddress);
    this.cameFrom = new Referrer(options.cameFrom);
  }

}
