import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { VisitFlat } from '../viewmodels/VisitFlat';
import { PaginatedFlatVisitsResult } from '../viewmodels/PaginatedFlatVisitsResult';
import { PaginatedFlatVisitsResultRaw } from '../viewmodels/PaginatedFlatVisitsResultRaw';

@Injectable({
  providedIn: 'root'
})
export class FlatVisitDataService {

  constructor(private http: HttpClient) { }

  public GetFlatVisits(): Observable<Array<VisitFlat>> {
    return this.http.get<Array<VisitFlat>>(environment.baseHref + `api/visits`);
  }

  public GetPaginatedFlatVisits(pageNum: number, pageSize: number): Observable<PaginatedFlatVisitsResultRaw> {
  //public GetPaginatedFlatVisits(pageNum: number, pageSize: number): Observable<any> {
    if (!pageNum || !pageSize) {
      pageNum = 0;
      pageSize = 10;
    }
    return this.http.get<PaginatedFlatVisitsResultRaw>(environment.baseHref + `api/visits/visitspage/${pageNum}/${pageSize}`);
    /**
    const fvObjects = this.http.get(environment.baseHref + `api/visits/visitspage/${pageNum}/${pageSize}`);
    const flatVisits = fvObjects.forEach((o: any) => new VisitFlat(o));
    return flatVisits;
     */
  }

}
