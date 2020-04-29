import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FlatVisitsEffects } from './flat-visits.effects';

describe('FlatVisitsEffects', () => {
  let actions$: Observable<any>;
  let effects: FlatVisitsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlatVisitsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<FlatVisitsEffects>(FlatVisitsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
