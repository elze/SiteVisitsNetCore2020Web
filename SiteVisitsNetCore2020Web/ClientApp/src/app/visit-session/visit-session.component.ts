import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
//import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { AppState, selectVisitSessionBlocks, selectVisitSessionBlocksError, selectVisitSessionBlocksLoading } from '../reducers';
import { VisitSessionBlock } from '../viewmodels/VisitSessionBlock';
import { loadSessionvisits } from '../actions/sessionvisit.actions';
import { VisitSession } from '../viewmodels/VisitSession';
//import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-visit-session',
  templateUrl: './visit-session.component.html',
  styleUrls: ['./visit-session.component.scss']
})
export class VisitSessionComponent implements OnInit {
  visitSessionBlocks: Array<VisitSessionBlock>;
  public error$: Observable<string>;
  public isp: string;
  constructor(public visitsStore: Store<AppState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(`this.route.params: = ${JSON.stringify(params)}`);
      this.visitsStore.dispatch(loadSessionvisits({ id: params.id }));
    })
    //this.visitsStore.pipe(select(selectVisitSessionBlocks)).subscribe((rows: Array<VisitSessionBlock>) => {
    this.visitsStore.pipe(select(selectVisitSessionBlocks)).subscribe((visitSession: VisitSession) => {
      this.isp = visitSession.isp;
      this.visitSessionBlocks = visitSession.visitSessionBlocks;
    });
    this.error$ = this.visitsStore.select(selectVisitSessionBlocksError);
    this.visitsStore.pipe(select(selectVisitSessionBlocksLoading)).subscribe((loading: boolean) => {
      if (loading) {
        this.visitSessionBlocks = [];
      }
    });

  }

}
