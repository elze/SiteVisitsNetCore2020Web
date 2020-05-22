import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { VisitSessionDataService } from './visit-session-data.service';

describe('VisitSessionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [AppModule] }));

  it('should be created', () => {
    const service: VisitSessionDataService = TestBed.get(VisitSessionDataService);
    expect(service).toBeTruthy();
  });
});
