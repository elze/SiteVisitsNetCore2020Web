import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Visit } from '../models/Visit';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { AppState, selectVisits } from '../reducers';
import { loadFlatvisits } from '../actions/flatvisit.actions';
import { Subscription } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-flat-visits',
  templateUrl: './flat-visits.component.html',
  styleUrls: ['./flat-visits.component.scss']
})
export class FlatVisitsComponent implements OnInit {

  private meow: string;
  public dataSource: MatTableDataSource<Visit>;
  //public dataSource$: Observable<MatTableDataSource<Visit>>;
  public noData: Visit[] = [<Visit>{}];
  public loading: boolean;
  public error$: Observable<boolean>;
  private subscription: Subscription = new Subscription();

  isSecondRow = (index, item) => item.cameFrom;

  constructor(public visitsStore: Store<AppState>) {
    /**
    this.subscription.add(this.visitsStore.pipe(
      select('loading'))
      .subscribe(loading => {
        if (loading) {
          this.dataSource = new MatTableDataSource(this.noData);
        }
        this.loading = loading;
      }));
    this.error$ = this.store.pipe(select(selectCustomerError));
    ***/
  }

  public ngOnInit(): void {
    this.loadVisits();
    //this.visitsStore.pipe(select('visits')).subscribe((flatVisitState) => this.initializeData(flatVisitState.flatVisitsDataSourceData));
    this.visitsStore.pipe(select(selectVisits)).subscribe(visits => {
      this.dataSource = new MatTableDataSource(visits.length ? visits : this.noData);
    });

  }

  private initializeData(visits: Visit[]): void {
    this.dataSource = new MatTableDataSource(visits.length ? visits : this.noData);
    //this.dataSource$ = of(new MatTableDataSource(visits.length ? visits : this.noData));
  }

  public ngOnDestroy(): void { }

  public retry(): void {
    this.loadVisits();
  }

  private loadVisits(): void {
    this.visitsStore.dispatch(loadFlatvisits());
  }
}
