import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../fetch-data/fetch-data.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WeatherForecastDataService } from './weather-forecast-data.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  weatherForecast: WeatherForecast;
  constructor(
    private route: ActivatedRoute,
    public weatherForecastDataService: WeatherForecastDataService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.weatherForecastDataService.GetForecast(params.id).subscribe(result => {
          console.log(`WeatherForecastComponent ngOnInit(): inside subscribe: result = ${result} `)
          this.weatherForecast = result;
        }, error => console.error(error));

      });
  }
}
