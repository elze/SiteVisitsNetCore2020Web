import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatPaginator, PageEvent } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, selectPaginatedVisits, selectPaginatedVisitsError } from '../reducers';
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
  public dataSource: VisitFlat[];
  public resultsLength: number;
  public noData: VisitFlat[] = [];
  public loading: boolean;
  public error$: Observable<string>;

  pageNum: number;
  pageSize: number;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  pageEvent: PageEvent;
  title = 'Flat visits: chronologically displayed, basic info about page visits';


  constructor(public visitsStore: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {

  }

  public ngOnInit(): void {
    this.visitsStore.pipe(select(selectPaginatedVisits)).subscribe((visitsResult: PaginatedFlatVisitsResult) => {
      this.dataSource = visitsResult.visits;
      this.resultsLength = visitsResult.totalCount;
    });
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

    //console.log(`e.pageIndex = ${e.pageIndex}`);
    //console.log(`e.pageSize = ${e.pageSize}`);
    //const routeTitle = `Page ${this.pageNum}, size ${this.pageSize} of flat visits`;
    //this.titleService.setTitle(routeTitle);
    this.setDocTitle(this.pageNum, this.pageSize);
    this.router.navigate([`/flat-visits/${this.pageNum}/size/${this.pageSize}`]);
  }

  setDocTitle(pageNum: number, pageSize: number) {
    const routeTitle = `Page ${pageNum}, size ${pageSize} of flat visits`;
    this.titleService.setTitle(routeTitle);
  }
}
