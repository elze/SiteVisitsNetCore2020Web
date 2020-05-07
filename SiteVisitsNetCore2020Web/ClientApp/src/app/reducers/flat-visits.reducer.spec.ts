import * as fromFlatVisits from './flat-visits.reducer';
import * as fromActions from '../actions/flatvisit.actions';
import { HalfRow } from '../flat-visits/HalfRow';
import { FlatVisitRowEven } from '../flat-visits/FlatVisitRowEven';
import { FlatVisitRowOdd } from '../flat-visits/FlatVisitRowOdd';
import { Visit } from '../models/Visit';

import { TestBed } from '@angular/core/testing';


describe('FlatVisitsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialVisitState } = fromFlatVisits;
      const action = {};
      const state = fromFlatVisits.vReducer(undefined, action);

      expect(state).toBe(initialVisitState);
    });
  });

  describe('loadFlatvisits action', () => {
    it('should set loading to true', () => {
      const { initialVisitState } = fromFlatVisits;
      const action = fromActions.loadFlatvisits();
      const state = fromFlatVisits.vReducer(initialVisitState, action);
      expect(state.loading).toEqual(true);
      expect(state.flatVisitsDataSourceData).toEqual([]);
    });
  });


})
