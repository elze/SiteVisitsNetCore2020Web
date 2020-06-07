import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PaginatedFlatVisitsResult } from '../viewmodels/PaginatedFlatVisitsResult';
import { VisitFlat } from '../viewmodels/VisitFlat';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlatVisitDataService {

  constructor(private http: HttpClient) { }

  public GetFlatVisits(): Observable<Array<VisitFlat>> {
    return this.http.get(environment.baseHref + `api/visits`)
      .pipe(map((data: Array<any>) => data.map(x => new VisitFlat(x))));
  }

  public GetPaginatedFlatVisits(pageNum: number, pageSize: number): Observable<PaginatedFlatVisitsResult> {
    if (!pageNum || !pageSize) {
      pageNum = 0;
      pageSize = 50;
    }
    return this.http.get(environment.baseHref + `api/visits/visitspage/${pageNum}/${pageSize}`)
      .pipe(map((data: any) => new PaginatedFlatVisitsResult(data)));
  }

}
