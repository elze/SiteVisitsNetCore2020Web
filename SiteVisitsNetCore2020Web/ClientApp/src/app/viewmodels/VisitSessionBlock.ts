//import { VisitInner } from "./VisitInner";

import { Visit } from "../models/Visit";
import { VisitViewModel } from "./VisitViewModel";

export class VisitSessionBlock {
  browser: string;
  device: string;
  visits: Array<VisitViewModel>;

  constructor(options: {
    browser: string, 
    device: string,
    visits: Array<any>
  }) {
    this.browser = options.browser;
    this.device = options.device;
    this.visits = new Array<VisitViewModel>();
    options.visits.forEach(element => this.visits.push(new VisitViewModel(element)));
  }

}
