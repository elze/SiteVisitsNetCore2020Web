import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { AppState, selectVisits, selectVisitsError, selectVisitSessionBlocks } from '../reducers';
import { VisitSessionBlock } from '../viewmodels/VisitSessionBlock';
import { VisitViewModel } from '../viewmodels/VisitViewModel';


@Component({
  selector: 'app-visit-session-block',
  templateUrl: './visit-session-block.component.html',
  styleUrls: ['./visit-session-block.component.scss']
})
export class VisitSessionBlockComponent implements OnInit {
  public dataSource: MatTableDataSource<VisitViewModel>;
  @Input() browser: string;
  @Input() device: string;
  public noData: VisitViewModel[] = [];
  constructor(public visitsStore: Store<AppState>) { }

  ngOnInit() {
    console.log(`VisitSessionBlockComponent ngOnInit`);
    // The higher level component, VisitSessionComponent, will load the visits
    this.visitsStore.pipe(select(selectVisitSessionBlocks)).subscribe((rows: Array<VisitSessionBlock>) => {
      console.log(`VisitSessionBlockComponent ngOnInit: we are inside this.visitsStore.pipe(select(selectVisitSessionBlocks)).subscribe`);
      const visitSessionBlock = rows.find(vsb => vsb.browser === this.browser && vsb.device === this.device);
      this.dataSource = new MatTableDataSource(visitSessionBlock.visits.length ? visitSessionBlock.visits : this.noData);
    });

    // Errors will be handled at the higher level, the VisitSessionComponent level
    //this.error$ = this.visitsStore.select(selectVisitsError);

  }

}
