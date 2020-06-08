import { VisitSessionBlock } from "./VisitSessionBlock";

export class VisitSession {
  public isp: string;
  sampleIpAddress: string;
  sampleVisitDateTime: Date;

  public visitSessionBlocks: Array<VisitSessionBlock>;

  constructor(options: {
    isp: string,
    sampleIpAddress: string,
    sampleVisitDateTime: string,

    visitSessionBlocks: Array<{
      browser: string,
      device: string,
      visits: Array<any>
    }>
  }) {
    this.isp = options.isp;
    this.sampleIpAddress = options.sampleIpAddress;
    this.sampleVisitDateTime = new Date(options.sampleVisitDateTime);
    this.visitSessionBlocks = options.visitSessionBlocks.map(vsb => new VisitSessionBlock(vsb));
  }
}

