import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Visit } from '../models/Visit';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { AppState, selectVisits, selectVisitsError } from '../reducers';
import { loadFlatvisits } from '../actions/flatvisit.actions';
import { Subscription } from 'rxjs';
import { of } from 'rxjs';
import { HalfRow } from './HalfRow';
import { IpAddress } from '../models/IpAddress';
import { FlatVisitRowOdd } from './FlatVisitRowOdd';
import { VisitFlat } from '../models/VisitFlat';

@Component({
  selector: 'app-flat-visits',
  templateUrl: './flat-visits.component.html',
  styleUrls: ['./flat-visits.component.scss']
})
export class FlatVisitsComponent implements OnInit {

  private meow: string;
  //public dataSource: MatTableDataSource<Visit>;
  //public dataSource: MatTableDataSource<HalfRow>;
  public dataSource: MatTableDataSource<VisitFlat>;
  //public noData: Visit[] = [<Visit>{}];
  public noData: VisitFlat[] = [];
  //public noData: HalfRow[] = [];
  public loading: boolean;
  public error$: Observable<string>;
  private subscription: Subscription = new Subscription();

  isSecondRow = (index, item) => item[1].cameFrom;

  constructor(public visitsStore: Store<AppState>) {  }

  public ngOnInit(): void {
    this.loadVisits();
    this.visitsStore.pipe(select(selectVisits)).subscribe(rows => {
      this.dataSource = new MatTableDataSource(rows.length ? rows : this.noData);
    });
    this.error$ = this.visitsStore.select(selectVisitsError);
  }

  /**
  private initializeData(visits: Visit[]): void {
    this.dataSource = new MatTableDataSource(visits.length ? visits : this.noData);
  }
  ***/

  public ngOnDestroy(): void { }

  public retry(): void {
    this.loadVisits();
  }

  private loadVisits(): void {
    this.visitsStore.dispatch(loadFlatvisits());
  }

}
