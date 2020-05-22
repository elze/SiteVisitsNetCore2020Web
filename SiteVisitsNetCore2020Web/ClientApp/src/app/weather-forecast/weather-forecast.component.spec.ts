import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { WeatherForecast } from '../fetch-data/fetch-data.component';
import { WeatherForecastComponent } from './weather-forecast.component';
import { WeatherForecastDataService } from './weather-forecast-data.service';
import { of } from 'rxjs';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //declarations: [WeatherForecastComponent],
      //imports: [ActivatedRoute, HttpClientModule]
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    const weatherForecast = { date: '2020-05-19', temperatureC: 38, temperatureF: 100, summary: "Scorching" };
    spyOn(component.weatherForecastDataService, 'GetForecast').and.returnValue(of(weatherForecast));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
