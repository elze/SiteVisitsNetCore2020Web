import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Visit } from '../models/Visit';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { AppState, selectVisits } from '../reducers';
import { loadFlatvisits } from '../actions/flatvisit.actions';
import { Subscription } from 'rxjs';
import { of } from 'rxjs';
import { HalfRow } from './HalfRow';
import { IpAddress } from '../models/IpAddress';

@Component({
  selector: 'app-flat-visits',
  templateUrl: './flat-visits.component.html',
  styleUrls: ['./flat-visits.component.scss']
})
export class FlatVisitsComponent implements OnInit {

  private meow: string;
  //public dataSource: MatTableDataSource<Visit>;
  public dataSource: MatTableDataSource<HalfRow>;
  //public noData: Visit[] = [<Visit>{}];
  public noData: HalfRow[] = [];
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

    this.visitsStore.pipe(select(selectVisits)).subscribe(rows => {
      this.dataSource = new MatTableDataSource(rows.length ? rows : this.noData);
    });

  }

  private initializeData(visits: Visit[]): void {
    this.dataSource = new MatTableDataSource(visits.length ? visits : this.noData);
  }

  public ngOnDestroy(): void { }

  public retry(): void {
    this.loadVisits();
  }

  private loadVisits(): void {
    this.visitsStore.dispatch(loadFlatvisits());
  }

  public getCountryRegionCity(ipAddress: IpAddress): string {
    if (ipAddress) {
      const country = ipAddress.country ? ipAddress.country.name : "";
      const region = ipAddress.region ? ipAddress.region.name : "";
      const city = ipAddress.city ? ipAddress.city.name : "";
      return country + " / " + region + " / " + city;
    }
    return "";
  }

}
