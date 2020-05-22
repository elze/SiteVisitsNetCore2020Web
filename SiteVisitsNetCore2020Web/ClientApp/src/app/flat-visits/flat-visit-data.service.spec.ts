import { TestBed } from '@angular/core/testing';

import { FlatVisitDataService } from './flat-visit-data.service';
import { AppModule } from '../app.module';

describe('FlatVisitDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [AppModule] }));

  it('should be created', () => {
    const service: FlatVisitDataService = TestBed.get(FlatVisitDataService);
    expect(service).toBeTruthy();
  });
});
