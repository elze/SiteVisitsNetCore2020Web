import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { WeatherForecast } from '../fetch-data/fetch-data.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastDataService {

  constructor(private http: HttpClient) { }

  public GetForecast(id: number): Observable<WeatherForecast> {
    return this.http.get(environment.baseHref + `weatherforecast/${id}`)
    .pipe(map((data: any) => new WeatherForecast(data)));
  }
}
