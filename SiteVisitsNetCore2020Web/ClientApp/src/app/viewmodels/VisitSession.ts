import { VisitSessionBlock } from "./VisitSessionBlock";

export class VisitSession {
  public organization: string;
  sampleIpAddress: string;
  sampleVisitDateTime: Date;

  public visitSessionBlocks: Array<VisitSessionBlock>;

  constructor(options: {
    organization: string,
    sampleIpAddress: string,
    sampleVisitDateTime: string,

    visitSessionBlocks: Array<{
      browser: string,
      device: string,
      visits: Array<any>
    }>
  }) {
    this.organization = options.organization;
    this.sampleIpAddress = options.sampleIpAddress;
    this.sampleVisitDateTime = new Date(options.sampleVisitDateTime);
    this.visitSessionBlocks = options.visitSessionBlocks.map(vsb => new VisitSessionBlock(vsb));
  }
}

