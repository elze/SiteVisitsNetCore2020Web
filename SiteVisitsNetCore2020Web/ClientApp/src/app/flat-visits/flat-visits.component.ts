import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { AppState, selectVisits, selectVisitsError } from '../reducers';
import { loadFlatvisits } from '../actions/flatvisit.actions';
import { Subscription } from 'rxjs';
import { VisitFlat } from '../models/VisitFlat';

@Component({
  selector: 'app-flat-visits',
  templateUrl: './flat-visits.component.html',
  styleUrls: ['./flat-visits.component.scss']
})
export class FlatVisitsComponent implements OnInit {

  private meow: string;
  public dataSource: MatTableDataSource<VisitFlat>;
  public noData: VisitFlat[] = [];
  public loading: boolean;
  public error$: Observable<string>;

  constructor(public visitsStore: Store<AppState>) {  }

  public ngOnInit(): void {
    this.loadVisits();
    this.visitsStore.pipe(select(selectVisits)).subscribe(rows => {
      this.dataSource = new MatTableDataSource(rows.length ? rows : this.noData);
    });
    this.error$ = this.visitsStore.select(selectVisitsError);
  }

  public ngOnDestroy(): void { }

  public retry(): void {
    this.loadVisits();
  }

  private loadVisits(): void {
    this.visitsStore.dispatch(loadFlatvisits());
  }

}
