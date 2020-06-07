import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { VisitSession } from '../viewmodels/VisitSession';
import { map } from 'rxjs/operators';

const options = {
  responseType: 'json' as const,
};


@Injectable({
  providedIn: 'root'
})
export class VisitSessionDataService {

  constructor(private http: HttpClient) { }

  public GetVisitSession(id: string): Observable<VisitSession> {
    return this.http.get(environment.baseHref + `api/Visits/sessionvisits/${id}`)
      .pipe(map((data: any) => new VisitSession(data)));
  }
}

