import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
//import { MatPaginatorModule } from '@angular/material/paginator';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { AppState, selectVisits, selectVisitsError } from '../reducers';
import { loadFlatvisits } from '../actions/flatvisit.actions';
//import { Subscription } from 'rxjs';
import { VisitFlat } from '../viewmodels/VisitFlat';

@Component({
  selector: 'app-flat-visits',
  templateUrl: './flat-visits.component.html',
  styleUrls: ['./flat-visits.component.scss']
})
export class FlatVisitsComponent implements OnInit {

  public dataSource: MatTableDataSource<VisitFlat>;
  public noData: VisitFlat[] = [];
  public loading: boolean;
  public error$: Observable<string>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(public visitsStore: Store<AppState>) {  }

  public ngOnInit(): void {
    this.loadVisits();
    this.visitsStore.pipe(select(selectVisits)).subscribe(rows => {
      this.dataSource = new MatTableDataSource(rows.length ? rows : this.noData);
      this.dataSource.paginator = this.paginator;
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
