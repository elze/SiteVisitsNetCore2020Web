import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

export class WeatherForecast {
  id: number;
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;

  constructor(options: {
    id: number,
    date: string,
    temperatureC: number,
    temperatureF: number,
    summary: string
  }) {
    this.id = options.id;
    this.date = new Date(options.date);
    this.temperatureC = options.temperatureC;
    this.temperatureF = options.temperatureF;
    this.summary = options.summary;
  }
}


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public title = 'Fetch Data';

  constructor(http: HttpClient,
    private titleService: Title) {
    this.titleService.setTitle("fetch-data");
    //@Inject('BASE_URL') baseUrl: string) {
    //http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
    http.get(environment.baseHref + 'weatherforecast')
      .pipe(map((data: []) => data.map(wf => new WeatherForecast(wf))))
      .subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}
