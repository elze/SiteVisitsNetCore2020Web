import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
//import { MatPaginatorModule } from '@angular/material/paginator';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, selectVisits, selectVisitsError, selectPaginatedVisits, selectPaginatedVisitsError } from '../reducers';
import { loadFlatvisits } from '../actions/flatvisit.actions';
//import { Subscription } from 'rxjs';
import { VisitFlat } from '../viewmodels/VisitFlat';
import { loadPaginatedFlatVisits } from '../actions/paginatedflatvisit.actions';
import { PaginatedFlatVisitsResult } from '../viewmodels/PaginatedFlatVisitsResult';

@Component({
  selector: 'app-flat-visits',
  templateUrl: './flat-visits.component.html',
  styleUrls: ['./flat-visits.component.scss']
})
export class FlatVisitsComponent implements OnInit {

  //public dataSource: MatTableDataSource<VisitFlat>;
  public dataSource: VisitFlat[];
  public resultsLength: number;
  public noData: VisitFlat[] = [];
  public loading: boolean;
  public error$: Observable<string>;

  pageNum: number;
  pageSize: number;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  pageEvent: PageEvent;

  constructor(public visitsStore: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  public ngOnInit(): void {
    /**
    this.route.params.subscribe(
      params => {
        console.log(`this.route.params: = ${JSON.stringify(params)}`);
        this.visitsStore.dispatch(loadPaginatedFlatVisits({ pageNum: params.pageNum, pageSize: params.pageSize }));
        if (params.pageSize) {
          this.paginator.pageSize = params.pageSize;
        }
        if (params.pageIndex) {
          this.paginator.pageIndex = params.pageIndex;
        }
      })
        **/

    //this.loadVisits();
    //this.visitsStore.pipe(select(selectVisits)).subscribe(rows => {
    this.visitsStore.pipe(select(selectPaginatedVisits)).subscribe((visitsResult: PaginatedFlatVisitsResult) => {
      //this.dataSource = new MatTableDataSource(rows.length ? rows : this.noData);
      //this.dataSource.paginator = this.paginator;
      this.dataSource = visitsResult.visits;
      this.resultsLength = visitsResult.totalCount;
    });
    //this.error$ = this.visitsStore.select(selectVisitsError);
    this.error$ = this.visitsStore.select(selectPaginatedVisitsError);
  }

  ngAfterViewInit() {
    this.route.params.subscribe(
      params => {
        console.log(`this.route.params: = ${JSON.stringify(params)}`);
        if (params.pageSize) {
          this.paginator.pageSize = params.pageSize;
          this.pageSize = params.pageSize;
        }
        else {
          this.pageSize = 50;
        }
        if (params.pageNum) {
          this.paginator.pageIndex = params.pageNum;
          this.pageNum = params.pageNum;
        }
        else {
          this.pageNum = 0;
        }
        this.visitsStore.dispatch(loadPaginatedFlatVisits({ pageNum: params.pageNum, pageSize: params.pageSize }));
      })
  }
  public ngOnDestroy(): void { }

  public handlePage(e: PageEvent) {
    this.pageNum = e.pageIndex;
    this.pageSize = e.pageSize;
    //this.iterator();

    console.log(`e.pageIndex = ${e.pageIndex}`);
    console.log(`e.pageSize = ${e.pageSize}`);
    //this.router.navigate(['/flat-visits', { pageNum: this.currentPage, pageSize: this.pageSize }]);
    this.router.navigate([`/flat-visits/${this.pageNum}/size/${this.pageSize}`]);
  }

  /**
  public retry(): void {
    this.loadVisits();
  }

  private loadVisits(): void {
    this.visitsStore.dispatch(loadFlatvisits());
  }
   */
}
