import { VisitSessionBlock } from "./VisitSessionBlock";

export class VisitSession {
  public isp: string;
  public visitSessionBlocks: Array<VisitSessionBlock>;

  constructor(options: {
    isp: string,
    visitSessionBlocks: Array<{
      browser: string,
      device: string,
      visits: Array<any>
    }>
  }) {
    this.isp = options.isp;
    this.visitSessionBlocks = options.visitSessionBlocks.map(vsb => new VisitSessionBlock(vsb));
  }
}

