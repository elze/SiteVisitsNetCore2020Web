import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { VisitSession } from '../viewmodels/VisitSession';

@Injectable({
  providedIn: 'root'
})
export class VisitSessionDataService {

  constructor(private http: HttpClient) { }

  public GetVisitSession(id: string): Observable<VisitSession> {
    return this.http.get<VisitSession>(environment.baseHref + `api/Visits/sessionvisits/${id}`);
  }

}
