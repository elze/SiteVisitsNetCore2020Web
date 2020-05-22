import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { VisitFlat } from '../models/VisitFlat';

@Injectable({
  providedIn: 'root'
})
export class FlatVisitDataService {

  constructor(private http: HttpClient) { }

  public GetFlatVisits(): Observable<Array<VisitFlat>> {
    return this.http.get<Array<VisitFlat>>(environment.baseHref + `api/visits`);
  }

}
