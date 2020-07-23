import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { AppState, selectVisitSessionBlocks } from '../reducers';
import { VisitViewModel } from '../viewmodels/VisitViewModel';
import { VisitSession } from '../viewmodels/VisitSession';


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
  public error$: Observable<string>;
  constructor(public visitsStore: Store<AppState>) { }

  ngOnInit() {
    console.log(`VisitSessionBlockComponent ngOnInit`);
    // The higher level component, VisitSessionComponent, will load the visits
    this.visitsStore.pipe(select(selectVisitSessionBlocks)).subscribe((visitSession: VisitSession) => {
      console.log(`VisitSessionBlockComponent ngOnInit: we are inside this.visitsStore.pipe(select(selectVisitSessionBlocks)).subscribe`);
      const visitSessionBlock = visitSession.visitSessionBlocks.find(vsb => vsb.browser === this.browser && vsb.device === this.device);
      this.dataSource = new MatTableDataSource(visitSessionBlock.visits && visitSessionBlock.visits.length ? visitSessionBlock.visits : this.noData);
    });
  }

}
