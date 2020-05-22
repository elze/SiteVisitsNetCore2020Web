import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { WeatherForecastDataService } from './weather-forecast-data.service';

describe('WeatherForecastDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [AppModule]}));

  it('should be created', () => {
    const service: WeatherForecastDataService = TestBed.get(WeatherForecastDataService);
    expect(service).toBeTruthy();
  });
});
