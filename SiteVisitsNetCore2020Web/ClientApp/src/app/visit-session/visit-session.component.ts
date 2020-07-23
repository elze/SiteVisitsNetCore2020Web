import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { AppState, selectVisitSessionBlocks, selectVisitSessionBlocksError, selectVisitSessionBlocksLoading } from '../reducers';
import { VisitSessionBlock } from '../viewmodels/VisitSessionBlock';
import { loadSessionvisits } from '../actions/sessionvisit.actions';
import { VisitSession } from '../viewmodels/VisitSession';

@Component({
  selector: 'app-visit-session',
  templateUrl: './visit-session.component.html',
  styleUrls: ['./visit-session.component.scss']
})
export class VisitSessionComponent implements OnInit {
  visitSessionBlocks: Array<VisitSessionBlock>;
  public error$: Observable<string>;
  public organization: string;
  //public sampleIpAddress: string;
  public sampleVisitDateTime: Date;

  public title = 'Visit session';
  constructor(public visitsStore: Store<AppState>,
    private route: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(`this.route.params: = ${JSON.stringify(params)}`);
        this.sampleVisitDateTime = params.visitDateTime;
      this.visitsStore.dispatch(loadSessionvisits({ id: params.id }));
    })
    this.visitsStore.pipe(select(selectVisitSessionBlocks)).subscribe((visitSession: VisitSession) => {
      this.organization = visitSession.organization;
      //this.sampleIpAddress = visitSession.sampleIpAddress;
      this.setDocTitle();
      this.visitSessionBlocks = visitSession.visitSessionBlocks;
    });
    this.error$ = this.visitsStore.select(selectVisitSessionBlocksError);
    this.visitsStore.pipe(select(selectVisitSessionBlocksLoading)).subscribe((loading: boolean) => {
      if (loading) {
        this.visitSessionBlocks = [];
      }
    });
  }

  setDocTitle() {
    const routeTitle = `Visit session for visitor from ${this.organization}, ${this.sampleVisitDateTime}`;
    this.titleService.setTitle(routeTitle);
  }
}
